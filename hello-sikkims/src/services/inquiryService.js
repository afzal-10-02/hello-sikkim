import { CONTACT } from "../data/siteData";
import { whatsappHref } from "../utils/formatters";

/**
 * Frontend inquiry adapter.
 * Replace this with fetch(`${import.meta.env.VITE_API_BASE_URL}/api/inquiries/...`)
 * when the backend endpoints are ready.
 */
export function sendInquiryWhatsApp(message) {
  const url = whatsappHref(CONTACT.whatsapp, message);
  window.open(url, "_blank", "noopener,noreferrer");
}