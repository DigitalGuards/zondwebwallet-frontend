import { Button } from "@/components/UI/Button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/UI/Dialog"
import { Input } from "@/components/UI/Input"
import { Label } from "@/components/UI/Label"
import { useEffect, useState } from "react";
import { useStore } from "@/stores/store";
import { TokenInterface } from "@/lib/constants";
import { toast } from "@/hooks/use-toast";
import { fetchBalance, fetchTokenInfo } from "@/utilities/web3utils/customERC20";
import { Loader2 } from "lucide-react";
import { getAddressFromMnemonic } from "@/functions/getHexSeedFromMnemonic";
import StorageUtil from "@/utilities/storageUtil";
import { ZOND_PROVIDER } from "@/configuration/zondConfig";
import { formatUnits, parseUnits } from "ethers";
import { Slider } from "@/components/UI/Slider";
import { PinInput } from "@/components/UI/PinInput/PinInput";
import { WalletEncryptionUtil } from "@/utilities/walletEncryptionUtil";

export function SendTokenModal({ isOpen, onClose, token }: { isOpen: boolean, onClose: () => void, token: TokenInterface }) {
    const { zondStore } = useStore();
    const {
        activeAccount: { accountAddress: activeAccountAddress },
        tokenList,
        activeAccountSource,
        sendToken: sendTokenToStore
    } = zondStore;
    const [amount, setAmount] = useState("");
    const [maxAmount, setMaxAmount] = useState("0");
    const [pin, setPin] = useState("");
    const [pinError, setPinError] = useState("");
    const [toAddress, setToAddress] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [sliderValue, setSliderValue] = useState(0);

    const sendToken = async () => {
        setIsLoading(true);
        setPinError("");
        
        // When using extension accounts PIN should not be required
        const isUsingExtension = activeAccountSource === 'extension';

        if (toAddress && amount && (isUsingExtension || pin)) {
            try {
                // Get the encrypted seed from storage
                const selectedBlockChain = await StorageUtil.getBlockChain();
                const encryptedSeed = await StorageUtil.getEncryptedSeed(selectedBlockChain, activeAccountAddress);
                
                if (!encryptedSeed) {
                    setPinError("No stored seed found for this account. Please import your account again to set up a PIN.");
                    setIsLoading(false);
                    return;
                }
                
                // Decrypt the seed using the PIN
                let mnemonic;
                try {
                    const decryptedSeed = WalletEncryptionUtil.decryptSeedWithPin(encryptedSeed, pin);
                    mnemonic = decryptedSeed.mnemonic;
                } catch (error) {
                    setPinError("Invalid PIN. Please try again.");
                    setIsLoading(false);
                    return;
                }
                
                // Verify the mnemonic corresponds to the active account
                const senderAddress = getAddressFromMnemonic(mnemonic);
                if (senderAddress.toLowerCase() !== activeAccountAddress.toLowerCase()) {
                    setPinError("PIN decrypted an invalid seed. Please import your account again.");
                    setIsLoading(false);
                    return;
                }

                let tokenInfo = tokenList.find(t => t.address === token?.address);

                if (!tokenInfo) {
                    try {
                        const { name, symbol, decimals } = await fetchTokenInfo(token?.address, ZOND_PROVIDER[selectedBlockChain].url);
                        const balance = await fetchBalance(token?.address, activeAccountAddress, ZOND_PROVIDER[selectedBlockChain].url);
                        tokenInfo = { name, symbol, decimals: parseInt(decimals.toString()), address: token?.address, amount: balance.toString() };
                    } catch (error) {
                        toast({
                            title: "Error fetching token info",
                            description: "Please try again",
                            variant: "destructive",
                        });
                        setIsLoading(false);
                        return;
                    }
                }

                if (tokenInfo) {
                    try {
                        // Convert the human-readable amount to the raw amount with correct decimals
                        const rawAmount = parseUnits(amount, tokenInfo.decimals).toString();
                        
                        const data = await sendTokenToStore(tokenInfo, rawAmount, mnemonic, toAddress);
                        if (data) {
                            setAmount("");
                            setPin("");
                            setToAddress("");
                            setSliderValue(0);
                            setPinError("");
                            
                            toast({
                                title: "Token sent successfully",
                                description: "Please check your wallet",
                            });
                            
                            // Close the modal AFTER setting state
                            onClose();
                            // Wait a short time to ensure modal is fully closed before refreshing balances
                            setTimeout(() => {
                                zondStore.refreshTokenBalances();
                            }, 300);
                        } else {
                            toast({
                                title: "Error sending token",
                                description: "Please try again",
                                variant: "destructive",
                            });
                        }
                    } catch (error) {
                        console.error("Error parsing amount:", error);
                        toast({
                            title: "Invalid amount",
                            description: "Please enter a valid number",
                            variant: "destructive",
                        });
                    }
                }
            } catch (error) {
                console.error("Error sending token:", error);
                toast({
                    title: "Error sending token",
                    description: "Please try again",
                    variant: "destructive",
                });
            }
        } else {
            toast({
                title: "Please fill in all fields",
                variant: "destructive",
            });
        }
        setIsLoading(false);
    }

    const handleMaxAmount = async () => {
        const selectedBlockChain = await StorageUtil.getBlockChain();
        const balance = await fetchBalance(token?.address, activeAccountAddress, ZOND_PROVIDER[selectedBlockChain].url);
        console.log(token, balance)
        setMaxAmount(formatUnits(balance, token?.decimals || 18));
    }
    
    const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAmount(e.target.value);
        // Reset slider when manually typing
        if (parseFloat(e.target.value) !== parseFloat(maxAmount) * (sliderValue / 100)) {
            setSliderValue(0);
        }
    };
    
    const handleSliderChange = (value: number[]) => {
        const percentage = value[0];
        setSliderValue(percentage);
        
        // Calculate amount based on percentage of max
        if (maxAmount !== "0") {
            const calculatedAmount = (parseFloat(maxAmount) * (percentage / 100)).toString();
            // Format to a reasonable number of decimal places
            const formattedAmount = parseFloat(calculatedAmount).toFixed(6);
            // Remove trailing zeros
            setAmount(formattedAmount.replace(/\.?0+$/, ""));
        }
    };
    
    const getPresetPercentage = (percent: number) => {
        return () => {
            setSliderValue(percent);
            if (maxAmount !== "0") {
                const calculatedAmount = (parseFloat(maxAmount) * (percent / 100)).toString();
                // Format to a reasonable number of decimal places
                const formattedAmount = parseFloat(calculatedAmount).toFixed(6);
                // Remove trailing zeros
                setAmount(formattedAmount.replace(/\.?0+$/, ""));
            }
        };
    };

    useEffect(() => {
        if (isOpen && token?.address) {
            handleMaxAmount();
        } else {
            setAmount("");
            setMaxAmount("");
            setSliderValue(0);
            setPin("");
            setPinError("");
        }
    }, [isOpen, token?.address, activeAccountAddress]);

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-[600px]">
                <DialogHeader>
                    <DialogTitle>Send Token - {token?.name}</DialogTitle>
                    <DialogDescription>
                        Send a token to another address
                    </DialogDescription>
                </DialogHeader>
                <form autoComplete="on" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid gap-4 py-4">
                    <div className="flex flex-col">
                        <Label htmlFor="amount" className="mb-2">
                            To
                        </Label>
                        <Input disabled={isLoading} value={toAddress} onChange={(e) => setToAddress(e.target.value)} />
                    </div>
                    <div className="flex flex-col">
                        <Label htmlFor="amount" className="mb-2">
                            Amount
                        </Label>
                        <a className="text-xs cursor-pointer border-b border-b-1 mb-2 w-fit border-foreground" onClick={() => setAmount(maxAmount)}>
                            Max: {maxAmount}
                        </a>
                        <Input 
                            disabled={isLoading} 
                            value={amount} 
                            onChange={handleAmountChange}
                        />
                        
                        <div className="mt-4 space-y-4">
                            <div className="flex justify-between">
                                <Label>Percentage of balance</Label>
                                <span className="text-sm text-muted-foreground">{sliderValue}%</span>
                            </div>
                            
                            <Slider
                                disabled={isLoading}
                                value={[sliderValue]}
                                min={0}
                                max={100}
                                step={1}
                                onValueChange={handleSliderChange}
                                className="w-full"
                            />
                            
                            <div className="flex justify-between gap-2">
                                <Button 
                                    type="button" 
                                    variant="outline" 
                                    size="sm" 
                                    onClick={getPresetPercentage(25)}
                                    disabled={isLoading}
                                    className="flex-1"
                                >
                                    25%
                                </Button>
                                <Button 
                                    type="button" 
                                    variant="outline" 
                                    size="sm" 
                                    onClick={getPresetPercentage(50)}
                                    disabled={isLoading}
                                    className="flex-1"
                                >
                                    50%
                                </Button>
                                <Button 
                                    type="button" 
                                    variant="outline" 
                                    size="sm" 
                                    onClick={getPresetPercentage(75)}
                                    disabled={isLoading}
                                    className="flex-1"
                                >
                                    75%
                                </Button>
                                <Button 
                                    type="button" 
                                    variant="outline" 
                                    size="sm" 
                                    onClick={getPresetPercentage(100)}
                                    disabled={isLoading}
                                    className="flex-1"
                                >
                                    Max
                                </Button>
                            </div>
                        </div>
                    </div>
                    {activeAccountSource === 'seed' && (
                      <div className="flex flex-col">
                          <Label htmlFor="pin" className="mb-2">
                              Transaction PIN
                          </Label>
                          <PinInput
                              length={6}
                              placeholder="Enter your PIN"
                              value={pin}
                              onChange={setPin}
                              disabled={isLoading}
                              description="Enter your PIN to authorize this transaction"
                              error={pinError}
                              autoFocus
                          />
                      </div>
                    )}
                  </div>
                </form>
                <DialogFooter>
                    {isLoading ?
                        <Button type="button" disabled={true}><Loader2 className="w-4 h-4 mr-2 animate-spin" />Sending...</Button> :
                        <Button type="button" disabled={toAddress.length === 0 || amount.length === 0 || (activeAccountSource === 'seed' && pin.length === 0)} onClick={sendToken}>Send Token</Button>
                    }
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
