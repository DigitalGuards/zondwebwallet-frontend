import { Checkbox } from "@/components/UI/CheckBox";
import { Button } from "../../../../UI/Button";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "../../../../UI/Card";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormMessage,
} from "../../../../UI/Form";
import { Input } from "../../../../UI/Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader } from "lucide-react";
import { observer } from "mobx-react-lite";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useEffect } from "react";
import { useStore } from "@/stores/store";
import { toast } from "@/hooks/use-toast";
import { ethers } from "ethers";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "@/router/router";

const FormSchema = z
    .object({
        tokenName: z.string().min(1, { message: "Token name is required" }),
        tokenSymbol: z.string().min(1, { message: "Token symbol is required" }),
        initialSupply: z.string(),
        decimals: z.number().min(1, { message: "Decimals is required" }),
        mintable: z.boolean(),
        maxSupply: z.string().optional(),
        changeInitialRecipient: z.boolean(),
        recipientAddress: z.string().optional(),
        changeTokenOwner: z.boolean(),
        ownerAddress: z.string().optional(),
        setMaxWalletAmount: z.boolean(),
        maxWalletAmount: z.string().optional(),
        setMaxTransactionLimit: z.boolean(),
        maxTransactionLimit: z.string().optional(),
        mnemonicPhrases: z.string().min(1, { message: "Mnemonic Phrases is required" })
    })
//   .refine((fields) => fields.password === fields.reEnteredPassword, {
//     message: "Passwords don't match",
//     path: ["reEnteredPassword"],
//   });

type TokenCreationFormProps = {
    onTokenCreated: (tokenName: string, tokenSymbol: string, initialSupply: string, decimals: number, maxSupply: undefined | string, initialRecipient: undefined | string, tokenOwner: undefined | string, maxWalletAmount: undefined | string, maxTransactionLimit: undefined | string, mnemonicPhrases: string) => Promise<void>;
};

export const TokenCreationForm = observer(
    ({ onTokenCreated }: TokenCreationFormProps) => {
        const navigate = useNavigate();
        const { zondStore } = useStore();
        const { createdToken, addToken } = zondStore;
        const { name, symbol, decimals, address } = createdToken;

        const form = useForm<z.infer<typeof FormSchema>>({
            resolver: zodResolver(FormSchema),
            mode: "onChange",
            reValidateMode: "onSubmit",
            defaultValues: {
                tokenName: "",
                tokenSymbol: "",
                initialSupply: "0",
                decimals: 18,
                mintable: false,
                changeInitialRecipient: false,
                changeTokenOwner: false,
                setMaxWalletAmount: false,
                setMaxTransactionLimit: false,
            },
        });
        const {
            handleSubmit,
            control,
            formState: { isSubmitting, isValid },
        } = form;

        const formatRealValue = (supply: string, decimals: number) => {
            try {
                return ethers.formatUnits(supply, decimals);
            } catch (error) {
                return "Invalid value";
            }
        };

        async function onSubmit(formData: z.infer<typeof FormSchema>) {
            try {
                const tokenName = formData.tokenName;
                const tokenSymbol = formData.tokenSymbol;
                const initialSupply = ethers.parseUnits(formData.initialSupply, formData.decimals).toString();
                const decimals = formData.decimals;
                const maxSupply = formData.maxSupply ? ethers.parseUnits(formData.maxSupply, decimals).toString() : undefined;
                const recipientAddress = formData.recipientAddress;
                const ownerAddress = formData.ownerAddress;
                const maxWalletAmount = formData.maxWalletAmount ? ethers.parseUnits(formData.maxWalletAmount, decimals).toString() : undefined;
                const maxTransactionLimit = formData.maxTransactionLimit;
                const mnemonicPhrase = formData.mnemonicPhrases;
                // Validate password strength
                // if (!WalletEncryptionUtil.validatePassword(userPassword)) {
                //   control.setError("password", {
                //     message: "Password must be at least 8 characters and contain uppercase, lowercase, numbers, and special characters",
                //   });
                //   return;
                // }

                // const newToken = await zondInstance?.accounts.create();
                // if (!newToken) {
                //   throw new Error("Failed to create account");
                // }
                onTokenCreated(tokenName, tokenSymbol, initialSupply, decimals, maxSupply, recipientAddress, ownerAddress, maxWalletAmount, maxTransactionLimit, mnemonicPhrase);
                navigate(ROUTES.TOKEN_STATUS);
            } catch (error) {
                // control.setError("reEnteredPassword", {
                //   message: `${error} There was an error while creating the account`,
                // });
            }
        }

        useEffect(() => {
            const init = async () => {
                form.reset({
                    tokenName: "",
                    tokenSymbol: "",
                    initialSupply: "0",
                    decimals: 18,
                    mintable: false,
                    changeInitialRecipient: false,
                    changeTokenOwner: false,
                    setMaxWalletAmount: false,
                    setMaxTransactionLimit: false,
                    mnemonicPhrases: "",
                });
                if (address) {
                    const token = await addToken({
                        name: name,
                        symbol: symbol,
                        decimals: decimals,
                        address: address,
                        amount: "0",
                    });
                    if (token) {
                        toast({
                            title: `${name} token created successfully`,
                            description: `Address: ${address}\n Name: ${name}\n Symbol: ${symbol}\n Decimals: ${decimals}`,
                            variant: "default",
                        });
                    }
                }

            }
            init();
        }, [address]);

        return (
            <Form {...form}>
                <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
                    <Card>
                        <CardHeader>
                            <CardTitle>Create New Token</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-8">
                            <FormField
                                control={control}
                                name="tokenName"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Input
                                                disabled={isSubmitting}
                                                placeholder="Example: DigitalGuards"
                                                type="text"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormDescription>Token Name</FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={control}
                                name="tokenSymbol"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Input
                                                {...field}
                                                disabled={isSubmitting}
                                                placeholder="Example: DG"
                                                type="text"
                                            />
                                        </FormControl>
                                        <FormDescription>Token Symbol</FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={control}
                                name="initialSupply"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Input
                                                {...field}
                                                disabled={isSubmitting}
                                                placeholder="Example: 1000000000"
                                                type="number"
                                            />
                                        </FormControl>
                                        <FormDescription>
                                            {/* Initial Supply (Real Value: {formatRealValue(field.value || "0", form.watch("decimals"))}) */}
                                            Initial Supply
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={control}
                                name="decimals"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Input
                                                {...field}
                                                disabled={isSubmitting}
                                                placeholder="Example: 18"
                                                type="number"
                                                onChange={(e) => field.onChange(Number(e.target.value))}
                                            />
                                        </FormControl>
                                        <FormDescription>Decimals</FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={control}
                                name="mintable"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <div className="flex items-center space-x-2">
                                                <Checkbox
                                                    checked={field.value}
                                                    onCheckedChange={field.onChange}
                                                    disabled={isSubmitting}
                                                    id="mintable"
                                                />
                                                <label
                                                    htmlFor="mintable"
                                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                >
                                                    Mintable
                                                </label>
                                            </div>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            {form.watch("mintable") && (
                                <FormField
                                    control={control}
                                    name="maxSupply"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormControl>
                                                <Input
                                                    {...field}
                                                    disabled={isSubmitting}
                                                    placeholder="Example: 999,999,999,999,999,999"
                                                    type="string"
                                                />
                                            </FormControl>
                                            <FormDescription>
                                                Max Supply (Real Value: {formatRealValue(field.value || "0", form.watch("decimals"))})
                                            </FormDescription>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            )}
                            <FormField
                                control={control}
                                name="changeInitialRecipient"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <div className="flex items-center space-x-2">
                                                <Checkbox
                                                    checked={field.value}
                                                    onCheckedChange={field.onChange}
                                                    disabled={isSubmitting}
                                                    id="changeInitialRecipient"
                                                />
                                                <label
                                                    htmlFor="changeInitialRecipient"
                                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                >
                                                    Change Initial recipient
                                                </label>
                                            </div>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            {form.watch("changeInitialRecipient") && (
                                <FormField
                                    control={control}
                                    name="recipientAddress"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormControl>
                                                <Input
                                                    {...field}
                                                    disabled={isSubmitting}
                                                    placeholder="Example: Z20b4fb2929cfBe8b002b8A0c572551F755e54aEF"
                                                    type="string"
                                                />
                                            </FormControl>
                                            <FormDescription>Recipient Address</FormDescription>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            )}
                            <FormField
                                control={control}
                                name="changeTokenOwner"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <div className="flex items-center space-x-2">
                                                <Checkbox
                                                    checked={field.value}
                                                    onCheckedChange={field.onChange}
                                                    disabled={isSubmitting}
                                                    id="changeTokenOwner"
                                                />
                                                <label
                                                    htmlFor="changeTokenOwner"
                                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                >
                                                    Change Token Owner
                                                </label>
                                            </div>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            {form.watch("changeTokenOwner") && (
                                <FormField
                                    control={control}
                                    name="ownerAddress"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormControl>
                                                <Input
                                                    {...field}
                                                    disabled={isSubmitting}
                                                    placeholder="Example: Z20b4fb2929cfBe8b002b8A0c572551F755e54aEF"
                                                    type="string"
                                                />
                                            </FormControl>
                                            <FormDescription>Owner Address</FormDescription>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            )}
                            <FormField
                                control={control}
                                name="setMaxWalletAmount"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <div className="flex items-center space-x-2">
                                                <Checkbox
                                                    checked={field.value}
                                                    onCheckedChange={field.onChange}
                                                    disabled={isSubmitting}
                                                    id="setMaxWalletAmount"
                                                />
                                                <label
                                                    htmlFor="setMaxWalletAmount"
                                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                >
                                                    Max Wallet Amount
                                                </label>
                                            </div>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            {form.watch("setMaxWalletAmount") && (
                                <FormField
                                    control={control}
                                    name="maxWalletAmount"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormControl>
                                                <Input
                                                    {...field}
                                                    disabled={isSubmitting}
                                                    placeholder="Example: 999,999,999,999,999,999"
                                                    type="number"
                                                />
                                            </FormControl>
                                            <FormDescription>Max Wallet Amount</FormDescription>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            )}
                            <FormField
                                control={control}
                                name="setMaxTransactionLimit"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <div className="flex items-center space-x-2">
                                                <Checkbox
                                                    checked={field.value}
                                                    onCheckedChange={field.onChange}
                                                    disabled={isSubmitting}
                                                    id="setMaxTransactionLimit"
                                                />
                                                <label
                                                    htmlFor="setMaxTransactionLimit"
                                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                >
                                                    Max Transaction Limit
                                                </label>
                                            </div>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            {form.watch("setMaxTransactionLimit") && (
                                <FormField
                                    control={control}
                                    name="maxTransactionLimit"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormControl>
                                                <Input
                                                    {...field}
                                                    disabled={isSubmitting}
                                                    placeholder="Example: 999,999,999,999,999,999"
                                                    type="number"
                                                />
                                            </FormControl>
                                            <FormDescription>Max Transaction Limit</FormDescription>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            )}

                            <FormField
                                control={control}
                                name="mnemonicPhrases"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Input
                                                disabled={isSubmitting}
                                                placeholder="Mnemonic Phrases"
                                                type="text"
                                                {...field}
                                            />
                                        </FormControl>
                                        {/* <FormDescription>Mnemonic Phrases</FormDescription> */}
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                        </CardContent>
                        <CardFooter>
                            <Button
                                disabled={!isValid || isSubmitting}
                                className="w-full"
                                type="submit"
                            >
                                {isSubmitting ? (
                                    <Loader className="mr-2 h-4 w-4 animate-spin" />
                                ) : (
                                    <></>
                                )}
                                Create Token
                            </Button>
                        </CardFooter>
                    </Card>
                </form>
            </Form>
        );
    }
);
