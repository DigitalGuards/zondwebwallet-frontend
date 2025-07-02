# QRL Merchant Payment System Implementation

## Overview
This document tracks the implementation progress of the QRL merchant payment system. The system allows vendors to accept native QRL payments through generated payment links with QR codes, payment details, and expiration timers.

**Note**: Token payment support will be added in a future phase to keep the initial implementation simple and focused.

## Progress Tracking

### Phase 1: Basic Payment Creation ⏳

#### Frontend Tasks
- [ ] Create merchant route structure in router
- [ ] Create MerchantDashboard component
- [ ] Create CreatePayment component and form
- [ ] Implement payment link generation
- [ ] Create basic PaymentPage component
- [ ] Add QR code generation for payment page
- [ ] Add copy functionality for address/amount
- [ ] Style components with existing UI library

#### Backend Tasks
- [ ] Create merchant API routes structure
- [ ] Implement POST /api/merchant/create-payment
- [ ] Implement GET /api/payment/:id
- [ ] Set up payment storage (memory/database)
- [ ] Add payment expiration logic
- [ ] Configure CORS for public payment pages

### Phase 2: Payment Processing 🔄

#### Frontend Tasks
- [ ] Add payment status component
- [ ] Implement countdown timer
- [ ] Add real-time status updates (WebSocket)
- [ ] Handle payment confirmation UI
- [ ] Add loading states and animations
- [ ] Implement auto-redirect on success

#### Backend Tasks
- [ ] Create blockchain monitoring service
- [ ] Implement payment detection logic
- [ ] Add WebSocket server for real-time updates
- [ ] Implement GET /api/payment/:id/check
- [ ] Add transaction confirmation tracking
- [ ] Create webhook notification system

### Phase 3: Advanced Features 🚀

#### Frontend Tasks
- [ ] Add merchant payment history view
- [ ] Implement payment filtering/search
- [ ] Add export functionality (CSV/PDF)
- [ ] Create merchant analytics dashboard
- [ ] Implement partial payment handling

#### Backend Tasks
- [ ] Add database persistence (MongoDB/PostgreSQL)
- [ ] Implement merchant authentication
- [ ] Add rate limiting for payment creation
- [ ] Create payment analytics endpoints
- [ ] Implement refund functionality
- [ ] Add batch payment processing

### Phase 4: Integration Tools 🛠️

- [ ] Create embeddable JavaScript widget
- [ ] Write API documentation
- [ ] Create merchant onboarding guide
- [ ] Add mobile app deep linking
- [ ] Create example integrations
- [ ] Add payment button generator

### Future Enhancements (Post-MVP) 🔮

- [ ] Add multi-token support (ERC20 tokens)
- [ ] Implement token selection in payment forms
- [ ] Add token price conversion features
- [ ] Support for stablecoin payments

## Implementation Details

### Frontend Structure
```
src/components/ZondWallet/Body/Merchant/
├── MerchantDashboard.tsx       # Main merchant dashboard
├── CreatePayment/
│   ├── CreatePayment.tsx       # Payment creation form
│   └── PaymentForm.tsx         # Form with amount (QRL only), description, expiry
├── PaymentHistory/
│   └── PaymentHistory.tsx      # List of created payments
└── PaymentPage/
    ├── PaymentPage.tsx         # Public payment page
    ├── PaymentQR.tsx          # QR code component
    ├── PaymentTimer.tsx       # Countdown timer
    └── PaymentStatus.tsx      # Real-time status updates
```

### Backend API Endpoints
- `POST /api/merchant/create-payment` - Create new payment request
- `GET /api/merchant/payments` - List merchant's payments
- `GET /api/payment/:id` - Get payment details (public)
- `POST /api/payment/:id/status` - Update payment status
- `GET /api/payment/:id/check` - Check blockchain for payment

### Database Schema
```typescript
interface PaymentRequest {
  id: string;                    // UUID
  merchantAddress: string;       // Merchant's QRL address
  amount: string;               // Amount in QRL (native currency only)
  description: string;          // Payment description
  status: PaymentStatus;        // pending | partial | confirmed | expired
  createdAt: Date;             // Creation timestamp
  expiresAt: Date;             // Expiration timestamp
  callbackUrl?: string;        // Optional webhook URL
  metadata?: object;           // Custom merchant data
  transactions: Transaction[]; // Related transactions
}

interface Transaction {
  txHash: string;
  amount: string;
  confirmations: number;
  timestamp: Date;
}

enum PaymentStatus {
  PENDING = 'pending',
  PARTIAL = 'partial',
  CONFIRMED = 'confirmed',
  EXPIRED = 'expired'
}
```

## Notes & Decisions

### Technical Decisions
- **Real-time Updates**: Using WebSockets for live payment status
- **QR Code Format**: Using QRL URI scheme: `qrl:address?amount=X&label=Y`
- **Payment Expiration**: Default 15 minutes, configurable up to 24 hours
- **Confirmation Requirements**: 6 confirmations for payment completion

### Security Considerations
- Payment IDs use UUIDs to prevent enumeration
- Rate limiting on payment creation (10/hour per IP)
- Optional merchant API keys for authenticated requests
- CORS configured for public payment pages only

### UI/UX Decisions
- Mobile-first payment page design
- Large, scannable QR codes
- Clear countdown timer
- One-click copy for addresses
- Success animations and clear feedback

## Current Status

**Branch**: `feature/merchant-payments`  
**Started**: [Date will be added on first commit]  
**Last Updated**: [Date will be added on updates]

### Recent Updates
- Created implementation plan and tracking document
- Set up feature branch for development
- Simplified plan to focus on native QRL payments only (token support deferred)

### Next Steps
1. Set up basic merchant routes in frontend
2. Create initial merchant dashboard UI
3. Implement payment creation form
4. Set up backend API structure

## Resources

### Reference Implementations
- [BTCPay Server](https://btcpayserver.org/) - Open source payment processor
- [CoinPayments](https://www.coinpayments.net/) - Multi-currency payment gateway
- [BitPay](https://bitpay.com/) - Bitcoin payment service
- [Coinbase Commerce](https://commerce.coinbase.com/) - Crypto payment solution

### QRL Resources
- [QRL Web3 Documentation](https://docs.theqrl.org/)
- [Zond Web Wallet Wiki](https://github.com/DigitalGuards/zondwebwallet/wiki)
- [QRL Payment Protocol Spec](TBD)