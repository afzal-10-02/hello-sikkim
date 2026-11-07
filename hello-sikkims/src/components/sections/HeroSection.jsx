import { useEffect, useState } from "react";
import { ArrowRight, Car, Mountain, ShieldCheck, FileCheck2, Headphones, MapPin } from "lucide-react";
import SectionHeading from "../common/SectionHeading";

function Counter({ value, onChange, label }) {
  return <div className="flex h-[46px] items-center justify-between rounded-lg border border-slate-700 bg-slate-900 px-3"><span className="text-sm font-semibold text-white">{value} {label}</span><span className="flex gap-3"><button type="button" aria-label={`Decrease ${label}`} onClick={() => onChange(Math.max(label === "adults" ? 1 : 0, value - 1))} className="text-slate-400">−</button><button type="button" aria-label={`Increase ${label}`} onClick={() => onChange(Math.min(17, value + 1))} className="font-bold text-emerald-400">+</button></span></div>;
}
function Field({ label, children }) { return <label className="block min-w-0"><span className="field-label">{label}</span>{children}</label>; }

export default function HeroSection({ onSubmitBooking }) {
  const [tab, setTab] = useState("cab");
  const [cab, setCab] = useState({ pickup: "Bagdogra Airport (IXB)", drop: "Gangtok", vehicle: "suv", date: "", adults: 2 });
  const [tour, setTour] = useState({ region: "North Sikkim", duration: "6 Days", adults: 2, children: 0, budget: "Comfort" });
  const setC = (key, value) => setCab((old) => ({ ...old, [key]: value }));
  const setT = (key, value) => setTour((old) => ({ ...old, [key]: value }));
  useEffect(() => {
    const cabHandler = (event) => { setTab("cab"); setC("vehicle", event.detail.vehicle); };
    const tourHandler = (event) => { setTab("tour"); setT("region", event.detail.region); };
    window.addEventListener("hello-sikkims-select-cab", cabHandler);
    window.addEventListener("hello-sikkims-select-tour", tourHandler);
    return () => {
      window.removeEventListener("hello-sikkims-select-cab", cabHandler);
      window.removeEventListener("hello-sikkims-select-tour", tourHandler);
    };
  }, []);
  const selectClass = "field-control";
  return <section id="home" className="container-shell pb-16 pt-14 sm:pb-20 sm:pt-20 lg:pt-24">
    <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_.95fr]">
      <div><div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-3 py-1.5 text-xs font-extrabold text-emerald-300"><span className="h-2 w-2 rounded-full bg-emerald-400" />LOCAL SIKKIM TRAVEL EXPERTS</div>
        <h1 className="max-w-3xl bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-4xl font-bold leading-[1.12] tracking-tight text-transparent sm:text-5xl lg:text-6xl">Explore Sikkim with Trusted Local Drivers and Curated Tour Packages</h1>
        <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">Direct Bagdogra and NJP transfers, local sightseeing, and high altitude permit assistance with clear pricing and local support.</p>
        <div className="mt-8 flex flex-wrap gap-3 text-xs font-bold text-slate-300 sm:text-sm"><span className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/70 px-3 py-2"><ShieldCheck size={15} className="text-emerald-400" />Local mountain drivers</span><span className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/70 px-3 py-2"><FileCheck2 size={15} className="text-amber-400" />Permit assistance</span><span className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/70 px-3 py-2"><Headphones size={15} className="text-emerald-400" />24/7 support</span></div>
        <div className="mt-9 flex flex-wrap gap-3"><a href="#tours" className="btn-primary">Explore Sikkim tours <ArrowRight size={16} /></a><a href="#cabs" className="btn-secondary">View cab fleet</a></div>
      </div>
      <div className="relative"><div className="rounded-2xl border border-slate-700 bg-[radial-gradient(ellipse_at_50%_20%,rgba(16,185,129,.25),transparent_55%),linear-gradient(145deg,#263c50,#111827_65%)] p-6 shadow-2xl sm:p-8"><div className="flex justify-between"><span className="rounded-full border border-white/15 bg-black/20 px-3 py-1.5 text-xs font-bold text-emerald-200">THE HIMALAYAN EXPERIENCE</span><Mountain className="text-emerald-300" size={27} /></div><div className="my-12 flex h-44 items-end justify-center gap-1 sm:h-56"><div className="h-28 w-24 bg-gradient-to-t from-slate-950 to-slate-500/80 [clip-path:polygon(50%_0,100%_100%,0_100%)] sm:h-40 sm:w-32" /><div className="h-44 w-36 bg-gradient-to-t from-slate-950 via-slate-600 to-slate-100 [clip-path:polygon(50%_0,100%_100%,0_100%)] sm:h-56 sm:w-44" /><div className="h-32 w-28 bg-gradient-to-t from-slate-950 to-slate-500 [clip-path:polygon(50%_0,100%_100%,0_100%)] sm:h-44 sm:w-36" /></div><p className="text-center text-2xl font-extrabold text-white sm:text-3xl">Find your way to the mountains</p><p className="mt-2 text-center text-sm text-slate-300">Thoughtful journeys across Sikkim</p><div className="mt-7 flex justify-between border-t border-white/10 pt-4 text-xs text-slate-300"><span className="flex items-center gap-2"><MapPin size={14} className="text-emerald-300" />Gangtok, Sikkim</span><span>Local knowledge. Warm hospitality.</span></div></div></div>
    </div>
    <div id="booking" className="mt-16 scroll-mt-28 rounded-2xl border border-slate-700/80 bg-[#1E293B]/95 p-4 shadow-2xl sm:p-6 lg:mt-20">
      <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center"><div><p className="eyebrow">Start planning</p><h2 className="mt-1 text-xl font-extrabold text-white sm:text-2xl">Where would you like to go?</h2></div><div className="grid grid-cols-2 rounded-xl bg-slate-950/70 p-1"><button onClick={() => setTab("cab")} className={`flex items-center justify-center gap-2 rounded-lg px-4 py-3 text-sm font-extrabold ${tab === "cab" ? "bg-emerald-600 text-white" : "text-slate-400"}`}><Car size={16} />Book a cab</button><button onClick={() => setTab("tour")} className={`flex items-center justify-center gap-2 rounded-lg px-4 py-3 text-sm font-extrabold ${tab === "tour" ? "bg-emerald-600 text-white" : "text-slate-400"}`}><Mountain size={16} />Book a tour</button></div></div>
      {tab === "cab" ? <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        <Field label="Pickup location"><select className={selectClass} value={cab.pickup} onChange={e => setC("pickup", e.target.value)}>{["Bagdogra Airport (IXB)", "NJP Railway Station", "Gangtok City Center", "Pelling / Ravangla / Namchi", "Custom Hotel Pickup"].map(x => <option key={x}>{x}</option>)}</select></Field>
        <Field label="Drop location"><select className={selectClass} value={cab.drop} onChange={e => setC("drop", e.target.value)}>{["Gangtok", "North Sikkim (Lachen / Lachung)", "East Sikkim (Silk Route / Zuluk)", "West Sikkim (Pelling)", "Bagdogra / NJP"].map(x => <option key={x}>{x}</option>)}</select></Field>
        <Field label="Cab category"><select className={selectClass} value={cab.vehicle} onChange={e => setC("vehicle", e.target.value)}>{["hatchback","sedan","suv","tempo"].map(x => <option key={x} value={x}>{({hatchback:"Hatchback",sedan:"Sedan",suv:"SUV 4x4",tempo:"Tempo Traveler"})[x]}</option>)}</select></Field>
        <Field label="Travel date"><input className={selectClass} type="date" min={new Date().toISOString().slice(0,10)} value={cab.date} onChange={e => setC("date", e.target.value)} /></Field>
        <Field label="Travelers"><Counter value={cab.adults} onChange={v => setC("adults",v)} label="adults" /></Field>
      </div> : <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        <Field label="Tour region"><select className={selectClass} value={tour.region} onChange={e => setT("region",e.target.value)}>{["North Sikkim","Complete Sikkim Circuit","East Silk Route","West and South Sikkim"].map(x => <option key={x}>{x}</option>)}</select></Field>
        <Field label="Duration"><select className={selectClass} value={tour.duration} onChange={e => setT("duration",e.target.value)}>{["3 Days","5 Days","7 Days","Custom duration"].map(x => <option key={x}>{x}</option>)}</select></Field>
        <Field label="Adults"><select className={selectClass} value={tour.adults} onChange={e => setT("adults",Number(e.target.value))}>{[1,2,3,4,5,6,7,8,9,10].map(x => <option key={x} value={x}>{x} adults</option>)}</select></Field>
        <Field label="Children"><select className={selectClass} value={tour.children} onChange={e => setT("children",Number(e.target.value))}>{[0,1,2,3,4,5].map(x => <option key={x} value={x}>{x} children</option>)}</select></Field>
        <Field label="Budget category"><select className={selectClass} value={tour.budget} onChange={e => setT("budget",e.target.value)}>{["Economy","Comfort","Premium"].map(x => <option key={x}>{x}</option>)}</select></Field>
      </div>}
      <div className="mt-5 flex flex-col gap-3 border-t border-slate-700/70 pt-5 sm:flex-row sm:items-center sm:justify-between"><p className="text-xs leading-5 text-slate-400"><ShieldCheck size={15} className="mr-2 inline text-emerald-400" />No payment required to request a quote. Final fare confirmed by our team.</p><button onClick={() => onSubmitBooking(tab === "cab" ? { type: "cab", ...cab } : { type: "tour", ...tour })} className="btn-primary">{tab === "cab" ? "Calculate fare and check availability" : "Get custom tour itinerary"} <ArrowRight size={16} /></button></div>
    </div>
  </section>;
}