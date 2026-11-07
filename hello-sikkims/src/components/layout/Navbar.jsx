import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Phone, Mountain, ArrowRight } from "lucide-react";
import { CONTACT } from "../../data/siteData";
import { phoneHref } from "../../utils/formatters";

const links = [["Cab Rentals", "#cabs"], ["Tour Packages", "#tours"], ["Permit Guide", "#permits"], ["Destinations", "#destinations"], ["FAQs", "#faqs"], ["Contact", "#contact"]];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-[#0F172A]/90 backdrop-blur-xl">
      <div className="container-shell flex items-center justify-between py-3">
        <a href="#home" className="flex items-center gap-2.5">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-400"><Mountain size={23} /></span>
          <span><span className="block text-lg font-extrabold text-white">Hello Sikkims</span><span className="block text-[10px] font-bold uppercase tracking-[.2em] text-slate-500">Tours and Cab Rentals</span></span>
        </a>
        <nav className="hidden items-center gap-5 xl:flex">{links.map(([label, href]) => <a key={label} href={href} className="text-xs font-bold text-slate-300 transition hover:text-emerald-400">{label}</a>)}</nav>
        <div className="hidden items-center gap-3 md:flex"><a href={phoneHref(CONTACT.phone)} className="flex items-center gap-2 text-sm font-bold text-slate-200"><Phone size={15} className="text-emerald-400" />{CONTACT.phone}</a><a href="#booking" className="btn-primary px-4 py-2.5">Check fares <ArrowRight size={15} /></a></div>
        <div className="flex items-center gap-2 md:hidden"><a href={phoneHref(CONTACT.phone)} aria-label="Call Hello Sikkims" className="rounded-lg border border-slate-700 p-2.5 text-emerald-400"><Phone size={18} /></a><button onClick={() => setOpen(true)} aria-label="Open menu" className="rounded-lg border border-slate-700 p-2.5"><Menu size={19} /></button></div>
      </div>
      <AnimatePresence>{open && <motion.div className="fixed inset-0 z-[70] bg-black/70 lg:hidden" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setOpen(false)}><motion.div initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={{ type: "spring", damping: 28 }} onClick={(e) => e.stopPropagation()} className="ml-auto flex h-full w-[min(88%,380px)] flex-col border-l border-slate-700 bg-[#111C30] p-6"><div className="mb-8 flex items-center justify-between"><span className="text-xl font-extrabold">Hello Sikkims</span><button onClick={() => setOpen(false)} className="rounded-lg border border-slate-700 p-2"><X /></button></div><nav>{[["Home", "#home"], ...links].map(([label, href]) => <a key={label} href={href} onClick={() => setOpen(false)} className="block border-b border-slate-800 py-4 font-bold text-slate-200">{label}</a>)}</nav><div className="mt-auto"><a href={phoneHref(CONTACT.phone)} className="btn-secondary w-full"><Phone size={16} />Call {CONTACT.phone}</a></div></motion.div></motion.div>}</AnimatePresence>
    </header>
  );
}