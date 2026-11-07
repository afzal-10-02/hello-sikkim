# Backend API Reference

This frontend currently runs without a backend. The inquiry service opens a WhatsApp message. When your backend is ready, connect it through `src/services/inquiryService.js`.

## Suggested endpoints

| Method | Endpoint | Purpose |
|---|---|---|
| POST | `/api/inquiries/cab` | Submit a cab inquiry |
| POST | `/api/inquiries/tour` | Submit a tour inquiry |
| POST | `/api/inquiries/contact` | Submit a general contact inquiry |
| GET | `/api/vehicles` | Retrieve active vehicle categories and tariffs |
| GET | `/api/tours` | Retrieve active tour packages |
| GET | `/api/destinations` | Retrieve destination information |
| GET | `/api/faqs` | Retrieve published FAQs |

## Example cab inquiry

```json
{
  "pickup": "Bagdogra Airport (IXB)",
  "drop": "Gangtok",
  "vehicle": "suv",
  "travelDate": "2026-12-20",
  "adults": 2,
  "children": 0
}
```

## Example tour inquiry

```json
{
  "region": "North Sikkim",
  "duration": "6 Days",
  "adults": 2,
  "children": 0,
  "budget": "Comfort"
}
```

## Example response

```json
{
  "success": true,
  "message": "Inquiry received",
  "inquiryId": "HS-10001"
}
```

## Implementation notes

- Validate all incoming fields on the server.
- Do not trust a fare calculated in the browser. Calculate the final quote on the server.
- Keep WhatsApp credentials, mail credentials and API secrets on the server.
- Add rate limiting and spam protection to public inquiry endpoints.
- Store consent and timestamps where required by your privacy policy.
- Permit status must never be represented as guaranteed. It depends on government approval and current conditions.
- Return clear validation errors with appropriate HTTP status codes.
