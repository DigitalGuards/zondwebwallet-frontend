import { useState } from "react";
import { useStore } from "../../../../../../stores/store";
import { observer } from "mobx-react-lite";
import { Copy, Check, RefreshCw } from "lucide-react";
import { formatBalance } from "@/utilities/helper";

export const ActiveAccountDisplay = observer(() => {
  const { zondStore } = useStore();
  const { activeAccount, fetchAccounts, activeAccountBalance } = zondStore;
  const { accountAddress } = activeAccount;
  const [copiedItem, setCopiedItem] = useState<'balance' | 'address' | null>(null);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [refreshSuccess, setRefreshSuccess] = useState(false);

  const prefix = accountAddress.substring(0, 1);
  const addressSplit: string[] = [];
  for (let i = 1; i < accountAddress.length; i += 4) {
    addressSplit.push(accountAddress.substring(i, i + 4));
  }

  const copyToClipboard = (text: string, type: 'balance' | 'address') => {
    navigator.clipboard.writeText(text);
    setCopiedItem(type);
    setTimeout(() => {
      setCopiedItem(null);
    }, 1500);
  };

  const refreshBalance = async () => {
    setIsRefreshing(true);
    await fetchAccounts();
    setIsRefreshing(false);
    setRefreshSuccess(true);
    setTimeout(() => {
      setRefreshSuccess(false);
    }, 1500);
  };

  return (
    <div className="flex flex-col gap-4">
      <div
        className="flex justify-center items-center text-xl font-bold text-secondary group"
      >
        <div className="cursor-pointer flex items-center" onClick={() => copyToClipboard(activeAccountBalance, 'balance')}>
          <span>{formatBalance(activeAccountBalance)} QRL</span>
          {copiedItem === 'balance' ? (
            <Check className="w-4 h-4 ml-2 text-green-500" />
          ) : (
            <Copy className="w-4 h-4 ml-2" />
          )}
        </div>
        <button 
          className="ml-2 p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 flex items-center justify-center"
          onClick={refreshBalance}
          disabled={isRefreshing || refreshSuccess}
        >
          {refreshSuccess ? (
            <Check className="w-4 h-4 text-green-500" />
          ) : isRefreshing ? (
            <RefreshCw className="w-4 h-4 animate-spin" />
          ) : (
            <RefreshCw className="w-4 h-4" />
          )}
        </button>
      </div>
      <div
        className="text-center text-sm flex justify-center items-center group cursor-pointer"
        onClick={() => copyToClipboard(accountAddress, 'address')}
      >
        <span>{`${prefix} ${addressSplit.join(" ")}`}</span>
        {copiedItem === 'address' ? (
          <Check className="w-4 h-4 ml-2 text-green-500" />
        ) : (
          <Copy className="w-4 h-4 ml-2" />
        )}
      </div>
    </div>
  );
});
