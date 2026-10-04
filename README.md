# Furniture Fix — furniturefix.tech

Mobile-first customer website for Furniture Fix, a furniture assembly and installation service across Mumbai Metropolitan Region.

## Current Phase
Phase 1 public customer website. Booking currently sends a prefilled request to the verified Furniture Fix WhatsApp number. This is intentional until the backend/database is securely connected and tested.

## Business rules
- Service business, not a furniture store.
- No advance payment for normal bookings.
- Pay after job completion.
- No unverified service warranty.
- No fake reviews, statistics or partnerships.
- No public unapproved price list.

## Local development
```bash
npm install
npm run dev
```

## Production build
```bash
npm install
npm run build
```

## Backend (future)
Copy `.env.example` to `.env` and add only public frontend credentials where appropriate. Never commit real secrets.

Planned secure routes: /customer, /technician, /admin, /b2b/dashboard.

## Deployment
Do not point furniturefix.tech to this project until the production build, booking flow, security and responsive tests are verified.
