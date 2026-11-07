export const formatINR = (amount) =>
  new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(amount);

export const phoneHref = (phone) => `tel:${phone.replaceAll(" ", "")}`;

export const whatsappHref = (phone, message = "") =>
  `https://wa.me/${phone.replace("+", "")}${message ? `?text=${encodeURIComponent(message)}` : ""}`;