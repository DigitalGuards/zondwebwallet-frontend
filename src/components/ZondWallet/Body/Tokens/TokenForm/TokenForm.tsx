import { TokenInterface } from "@/lib/constants";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "../../../../UI/Card";
import { observer } from "mobx-react-lite";
import { columns } from "./columns"
import { DataTable } from "./data-table"
import { useEffect, useState } from "react";
import { fetchBalance } from "@/utilities/web3utils/customERC20";
import { useStore } from "@/stores/store";
import { Button } from "@/components/UI/Button";
import { Loader2, Plus } from "lucide-react";
import { AddTokenModal } from "../AddTokenModal/AddTokenModal";
import { formatUnits } from "ethers";

const TokenForm = observer(() => {
    const { zondStore } = useStore();
    const {
        activeAccount: { accountAddress: activeAccountAddress },
        tokenList: tokenListFromStore,
    } = zondStore;

    const [tokenList, setTokenList] = useState<TokenInterface[]>(tokenListFromStore);
    const [isAddTokenModalOpen, setIsAddTokenModalOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const init = async () => {
            setIsLoading(true);
            let updatedTokenList = [...tokenListFromStore];

            for (let i = 0; i < tokenListFromStore.length; i++) {
                const balance = await fetchBalance(tokenListFromStore[i].address, activeAccountAddress);
                const formattedBalance = formatUnits(balance, tokenListFromStore[i].decimals);
                const decimalIndex = formattedBalance.indexOf('.');
                updatedTokenList[i].amount = decimalIndex === -1
                    ? formattedBalance
                    : formattedBalance.slice(0, decimalIndex + 5);
            }
            setTokenList(updatedTokenList);
            setIsLoading(false);
        };

        init();
    }, [activeAccountAddress, tokenListFromStore]);

    return (
        <Card>
            <CardHeader>
                <div className="flex justify-between items-center">
                    <CardTitle>
                        Tokens
                    </CardTitle>
                    <Button className="bg-primary text-primary-foreground p-2 hover:bg-primary/80" onClick={() => setIsAddTokenModalOpen(true)}>
                        <Plus />
                    </Button>
                </div>
            </CardHeader>
            {isLoading ? (
                <div className="flex justify-center items-center h-full">
                    <Loader2 className="animate-spin" />
                </div>
            ) : (
                <CardContent className="space-y-8">
                    <DataTable columns={columns} data={tokenList} />
                </CardContent>
            )}
            <CardFooter>
            </CardFooter>
            <AddTokenModal isOpen={isAddTokenModalOpen} onClose={() => setIsAddTokenModalOpen(false)} />
        </Card>
    );
});

export default TokenForm;