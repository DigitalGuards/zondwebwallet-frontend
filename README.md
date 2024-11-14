# Zond Web3 Wallet

A modern, secure web wallet for interacting with the Zond blockchain. Built with React, TypeScript, and Tailwind CSS.

## Features

- 🔐 Secure account creation and management
- 💼 Import existing accounts
- 🌐 Connect to multiple networks (Local, Testnet, Mainnet)
- 🔑 Mnemonic phrase generation and backup
- 🎨 Modern UI with dark mode
- 📱 Responsive design
- ⚡ Fast and lightweight

## Tech Stack

- React 18 with TypeScript
- Vite for blazing fast development and builds
- TailwindCSS for styling
- MobX for state management
- React Router v6 for routing
- @theqrl/web3 for blockchain interactions
- @theqrl/wallet.js for wallet functionality

## Prerequisites

- Node.js 16.x or later
- npm 7.x or later

## Development Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/zond-web3-wallet.git
   cd zond-web3-wallet
   ```

2. Install dependencies:
   ```bash
   cd webapp
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open http://localhost:5173 in your browser

## Project Structure

```
webapp/
├── src/
│   ├── components/         # React components
│   │   ├── UI/            # Reusable UI components
│   │   └── ZondWallet/    # Wallet-specific components
│   ├── stores/            # MobX stores
│   ├── functions/         # Utility functions
│   ├── configuration/     # Config files
│   └── utilities/         # Helper utilities
├── public/               # Static assets
└── package.json         # Project dependencies
```

## Building for Production

1. Create a production build:
   ```bash
   npm run build
   ```

2. The build output will be in the `dist` directory

## Production Deployment

### Option 1: Static Hosting (Recommended)

The wallet can be deployed to any static hosting service (Netlify, Vercel, AWS S3, etc.):

1. Build the project:
   ```bash
   npm run build
   ```

2. Deploy the `dist` directory to your hosting service

3. Configure your hosting service:
   - Set up HTTPS (required for security)
   - Configure CORS if needed
   - Set up proper cache headers:
     ```
     Cache-Control: public, max-age=31536000, immutable # For /assets/*
     Cache-Control: no-cache, no-store, must-revalidate # For index.html
     ```

### Option 2: Traditional Web Server

1. Install a web server (nginx recommended):
   ```bash
   sudo apt install nginx
   ```

2. Configure nginx:
   ```nginx
   server {
       listen 80;
       server_name your-domain.com;
       root /path/to/dist;
       
       location / {
           try_files $uri $uri/ /index.html;
       }
       
       location /assets {
           expires 1y;
           add_header Cache-Control "public, no-transform";
       }
   }
   ```

3. Enable HTTPS using Let's Encrypt:
   ```bash
   sudo certbot --nginx -d your-domain.com
   ```

## Security Considerations

1. Always serve over HTTPS
2. Implement proper CSP headers
3. Keep dependencies updated
4. Regular security audits
5. Proper error handling and logging

## Network Configuration

The wallet supports three networks:
- Local Node (http://localhost:8545)
- Testnet (http://209.250.255.226:8545)
- Mainnet (https://mainnet.zond.com)

To modify network endpoints, edit `src/configuration/zondConfig.ts`.

## Recent Updates

- Added Buffer polyfill for browser compatibility
- Improved error handling
- Enhanced network switching
- Added account creation and import functionality
- Implemented mnemonic phrase generation and backup

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request