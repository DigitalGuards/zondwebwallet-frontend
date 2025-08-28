# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Workspace Structure Overview

The QRL Zond Web Wallet workspace contains multiple interconnected projects:

### 1. Frontend (zondwebwallet-frontend) - Current Directory
- **Purpose**: Modern React + TypeScript web wallet application
- **Key Technologies**: Vite, React 18, TypeScript, MobX, TailwindCSS, Shadcn/ui
- **Development**: Connects to production backend at https://qrlwallet.com/api/zond-rpc/dev
- **Features**: Account management, PIN authentication, ERC20 token creation, multi-network support

### 2. Backend (zondwebwallet-backend)
- **Location**: `/home/clandestine/theqrl/zondwebwallet-backend`
- **Purpose**: Express.js API server for RPC proxy and CORS handling
- **Note**: Not needed for local development - use production API instead

### 3. Token Factory (zond-erc20-factory)
- **Location**: `/home/clandestine/theqrl/zond-erc20-factory`
- **Purpose**: Smart contract deployment scripts for ERC20 token factory

### 4. Browser Extension (zond-wallet)
- **Location**: `/home/clandestine/theqrl/zond-wallet`
- **Purpose**: Separate browser extension wallet project

## Important Changes Made
1. **Token Factory Contract**: Deployed at `Z0b895c819d249e4016bb603bdcbf6a38b4251c1a` on the new network via rpc routed to https://qrlwallet.com/api/zond-rpc/dev
2. **PIN Authentication**: Token creation now uses PIN authentication instead of direct mnemonic input
3. **Default Token Updated**: Changed from "Zond Token" to "DigitalGuards" (DG) at `Ze751329662b34456f14c5e5be04b06f40fbee96a`

### Production Backend Configuration
The production backend at https://qrlwallet.com/api/zond-rpc/testnet is configured to use the new node endpoint. For local development, use the production API to avoid CORS issues.

## Development Commands

```bash
# Install dependencies
npm install

# Development server
npm run dev         # Localhost only (127.0.0.1:5173)
npm run dev:lan     # LAN access (0.0.0.0:5173)
npm run dev:custom  # Custom IP (edit in package.json)

# Build
npm run build       # TypeScript check + production build
npm run preview     # Preview production build

# Code quality
npm run lint        # ESLint with zero warnings policy
```

## Environment Configuration

Create `.env` from `.env.example`:
- `VITE_RPC_URL_*`: Zond blockchain RPC endpoints
- `VITE_SERVER_URL_*`: Backend API endpoints  
- `VITE_CUSTOMERC20FACTORY_ADDRESS`: Token factory contract address
- `VITE_DEPLOYER`: Account that deployed the factory
- `VITE_SEED`: Deployer seed (development only - never commit real seeds)

## Architecture Overview

### State Management (MobX)
- **zondStore**: Core blockchain state, wallet functionality, transaction handling
- **settingsStore**: User preferences and application settings
- Uses singleton pattern with HMR persistence in `stores/store.ts`
- PIN-based authentication for seed accounts, extension wallet support

### Key Features
1. **Account Management**: Import via mnemonic or connect extension wallets
2. **Token Support**: ERC20 token creation and management via factory contract
3. **PIN Security**: Encrypted seed storage with PIN authentication
4. **Multi-Network**: Testnet, Mainnet, and custom RPC support

### Web3 Integration
- Uses `@theqrl/web3` for blockchain interaction
- Node.js polyfills configured for browser environment
- Transaction signing handled client-side
- Factory contract for token deployment

### Component Structure
- `components/UI/`: Shadcn/ui based reusable components
- `components/ZondWallet/Body/`: Feature-specific components
- Route-based code splitting with React.lazy()

## Common Development Tasks

### Deploy Token Factory
```bash
cd zond-erc20-factory
npm install
cp .env.example .env
# Edit .env with RPC_URL and MNEMONIC
node 1-deploy.js
# Update frontend .env with new factory address
```

### Update Token List
Default tokens are defined in `src/lib/constants.ts` in the `KNOWN_TOKEN_LIST` array.

### Handle CORS for Local Development
Backend CORS must include: `http://localhost:5173,http://localhost:5174,http://127.0.0.1:5173,http://127.0.0.1:5174`

## Security Considerations
- Never store private keys or seeds in code
- PIN authentication required for all transactions from imported accounts
- Extension wallets handle their own signing
- All sensitive data encrypted in localStorage with expiration

## Testing Accounts (Development Network)
Three prefunded accounts are available for testing token creation and transactions.