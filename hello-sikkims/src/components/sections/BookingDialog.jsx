import { Info, MessageCircle, ArrowRight } from "lucide-react";
import Modal from "../common/Modal";
import { vehicles } from "../../data/siteData";
import { formatINR } from "../../utils/formatters";
import { sendInquiryWhatsApp } from "../../services/inquiryService";

export default function BookingDialog({booking,onClose}) {
  const isCab=booking?.type==="cab";
  const selectedVehicle=isCab?vehicles.find(v=>v.id===booking.vehicle):null;
  const rows=isCab?[["Pickup",booking.pickup],["Drop",booking.drop],["Vehicle",selectedVehicle?.name||booking.vehicle],["Travel date",booking.date||"To be confirmed"],["Travelers",`${booking.adults} adults`],["Indicative starting rate",`${formatINR(selectedVehicle?.price||0)} per day`]]:[["Region",booking?.region],["Duration",booking?.duration],["Travelers",`${booking?.adults} adults, ${booking?.children} children`],["Budget",booking?.budget]];
  return <Modal open={!!booking} onClose={onClose} eyebrow="Booking inquiry" title={isCab?"Your cab inquiry":"Your tour inquiry"}>
    <div className="mt-6 divide-y divide-slate-700 rounded-xl border border-slate-700 bg-slate-900/50 px-4">{rows.map(([key,value])=><div key={key} className="flex items-start justify-between gap-5 py-3 text-sm"><span className="text-slate-500">{key}</span><span className="text-right font-bold text-white">{value}</span></div>)}</div>
    <div className="mt-4 rounded-xl border border-amber-400/20 bg-amber-400/5 p-4"><p className="flex items-center gap-2 text-xs font-extrabold text-amber-300"><Info size={15}/>Estimate information</p><p className="mt-2 text-xs leading-6 text-slate-400">{isCab?"This is an indicative starting rate, not a final fare. Route, season, vehicle availability, permits and trip duration affect the final quote.":"Tour pricing depends on travel dates, hotel category, route conditions, permits and group size. Our team can prepare a custom itinerary and quote."}</p></div>
    <button onClick={()=>sendInquiryWhatsApp(`Hello Hello Sikkims, I would like to check this booking request:\n${rows.map(([k,v])=>`${k}: ${v}`).join("\n")}\nPlease share the final quote and availability.`)} className="btn-primary mt-5 w-full"><MessageCircle size={17}/>Send inquiry on WhatsApp</button>
  </Modal>;
}