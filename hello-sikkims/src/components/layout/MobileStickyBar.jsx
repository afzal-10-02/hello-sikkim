import { Phone, MessageCircle } from "lucide-react";
import { CONTACT } from "../../data/siteData";
import { phoneHref, whatsappHref } from "../../utils/formatters";

export default function MobileStickyBar() {
  return <div className="fixed bottom-0 left-0 right-0 z-50 flex gap-3 border-t border-slate-700 bg-slate-950/95 p-3 backdrop-blur-lg md:hidden"><a href={phoneHref(CONTACT.phone)} className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-slate-700 bg-slate-900 py-3 text-xs font-extrabold text-white"><Phone size={16} className="text-emerald-400" />Call now</a><a href={whatsappHref(CONTACT.whatsapp)} className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-emerald-600 py-3 text-xs font-extrabold text-white"><MessageCircle size={16} />WhatsApp booking</a></div>;
}