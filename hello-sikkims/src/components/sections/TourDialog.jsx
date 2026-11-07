import { CheckCircle2, ArrowRight } from "lucide-react";
import Modal from "../common/Modal";
export default function TourDialog({tour,onClose,onCustomize}) {
  return <Modal open={!!tour} onClose={onClose} eyebrow="Tour details" title={tour?.title||""}>
    <p className="mt-4 text-sm leading-7 text-slate-400">{tour?.route}</p>
    <div className="mt-6"><h4 className="text-sm font-extrabold text-white">Trip highlights</h4><ul className="mt-3 space-y-2">{tour?.highlights.map(item=><li key={item} className="flex gap-2 text-sm text-slate-300"><CheckCircle2 size={16} className="mt-0.5 shrink-0 text-emerald-400"/>{item}</li>)}</ul></div>
    <div className="mt-6"><h4 className="text-sm font-extrabold text-white">Package inclusions</h4><div className="mt-3 grid grid-cols-2 gap-2">{tour?.includes.map(item=><span key={item} className="rounded-lg bg-slate-900 px-3 py-2.5 text-xs text-slate-300">{item}</span>)}</div></div>
    <p className="mt-5 rounded-xl bg-slate-900 p-4 text-xs leading-6 text-slate-400"><span className="font-extrabold text-amber-300">Best for: </span>{tour?.best}. Final itinerary and inclusions are confirmed after checking your dates and preferences.</p>
    <button onClick={()=>onCustomize(tour)} className="btn-primary mt-5 w-full">Customize this tour <ArrowRight size={15}/></button>
  </Modal>;
}