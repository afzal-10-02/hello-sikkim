# Hello Sikkims

Responsive React 18 + Vite + Tailwind CSS website for Sikkim tours and cab rentals.

## Requirements

- Node.js 18+
- npm

## Setup

```bash
npm install
npm run dev
```

Open the local URL printed by Vite.

## Production build

```bash
npm run build
npm run preview
```

## Project structure

```text
hello-sikkims/
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── common/
│   │   ├── layout/
│   │   └── sections/
│   ├── data/
│   ├── hooks/
│   ├── pages/
│   ├── services/
│   ├── styles/
│   ├── utils/
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── vite.config.js
```

## Features

- Responsive navigation with mobile slide over drawer
- Cab and tour inquiry tabs
- Indicative cab starting rates and inquiry summary
- Tour package cards with itinerary detail dialog
- Cab category filters
- Sikkim destination regions and permit guide
- Expandable FAQ list
- WhatsApp inquiry form and mobile sticky contact bar
- Reduced motion support and accessible labels on interactive controls

## Business content and verification

The business content is based on the supplied Hello Sikkims specification. Verify all phone numbers, email addresses, office details, vehicle tariffs, affiliations, reviews, permit requirements and claims before publishing. Permit approval is controlled by the relevant authorities; the site does not guarantee approvals.

## Backend integration

The current form sends an inquiry to WhatsApp. Replace `src/services/inquiryService.js` with your backend API integration when your API is ready. See `BACKEND_API_REFERENCE.md`.

## Images

The hero and vehicle panels currently use CSS artwork and icons so the project works without external image dependencies. Replace them with licensed Sikkim photography in `src/assets/` when available.
