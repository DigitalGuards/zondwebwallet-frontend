const RPC_API_BASE = import.meta.env.VITE_NODE_ENV === 'production'
  ? import.meta.env.VITE_RPC_URL_PRODUCTION
  : import.meta.env.VITE_RPC_URL_DEVELOPMENT;  // Using Vite's default port

export const SERVER_URL = import.meta.env.VITE_NODE_ENV === 'production'
  ? import.meta.env.VITE_SERVER_URL_PRODUCTION
  : import.meta.env.VITE_SERVER_URL_DEVELOPMENT;

const ZONDSCAN_BASE = import.meta.env.VITE_NODE_ENV === 'production'
  ? import.meta.env.VITE_ZOND_SCAN_URL_PRODUCTION
  : import.meta.env.VITE_ZOND_SCAN_URL_DEVELOPMENT;

export const ZOND_PROVIDER = {
  TEST_NET: {
    id: "TEST_NET",
    url: `${RPC_API_BASE}/testnet`,
    name: "Zond Testnet",
    explorer: ZONDSCAN_BASE
  },
  MAIN_NET: {
    id: "MAIN_NET",
    url: `${RPC_API_BASE}/mainnet`,
    name: "Zond Mainnet",
    explorer: ZONDSCAN_BASE
  },
  CUSTOM_RPC: {
    id: "CUSTOM_RPC",
    url: `${RPC_API_BASE}/custom`,
    name: "Custom RPC",
    explorer: ZONDSCAN_BASE
  }
};

export const getExplorerAddressUrl = (address: string, blockchain: string) => {
  const provider = ZOND_PROVIDER[blockchain as keyof typeof ZOND_PROVIDER];
  return `${provider.explorer}/address/${address}`;
};

// New function to get explorer URL for a transaction hash
export const getExplorerTxUrl = (txHash: string, blockchain: string) => {
  const provider = ZOND_PROVIDER[blockchain as keyof typeof ZOND_PROVIDER];
  // Assuming the explorer path for transactions is /tx/
  return `${provider.explorer}/tx/${txHash}`;
};

// New function to get the API endpoint for pending transactions
export const getPendingTxApiUrl = (blockchain: string) => {
  const provider = ZOND_PROVIDER[blockchain as keyof typeof ZOND_PROVIDER];
  // Append the known API path to the explorer base URL
  return `${provider.explorer}/api/pending-transactions`; 
};
