
import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Car,
  Check,
  ChevronDown,
  ChevronUp,
  Clock,
  MapPin,
  Mountain,
  Users,
  BriefcaseBusiness,
  ShieldCheck,
  Phone,
  MessageCircle,
  Fuel,
  Luggage,
  CalendarDays,
  Route,
  Info,
} from "lucide-react";

// --------------------------------------------------
// CAB DATA
// --------------------------------------------------

const vehicles = [
  {
    id: "hatchback",
    category: "Hatchback",
    title: "Compact & Comfortable",
    description:
      "An economical choice for couples and small families travelling between major destinations in Sikkim.",
    image:
      "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=1000",
    models: ["Maruti Suzuki WagonR", "Similar Hatchback"],
    passengers: 4,
    luggage: "2 small bags",
    terrain: "Suitable for regular routes",
    ideal: "Couples and small families",
    features: [
      "Budget-friendly travel",
      "Comfortable city transfers",
      "Experienced local driver",
      "Air-conditioned vehicle",
    ],
    price: "Get a Quote",
  },
  {
    id: "sedan",
    category: "Sedan",
    title: "Smooth Mountain Journeys",
    description:
      "A comfortable vehicle for airport transfers, Gangtok trips and selected sightseeing routes.",
    image:
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1000",
    models: ["Maruti Suzuki Dzire", "Toyota Etios", "Similar Sedan"],
    passengers: 4,
    luggage: "2–3 medium bags",
    terrain: "Suitable for regular routes",
    ideal: "Couples and families",
    features: [
      "Comfortable seating",
      "Air-conditioned vehicle",
      "Suitable for airport transfers",
      "Professional driver",
    ],
    price: "Get a Quote",
  },
  {
    id: "suv",
    category: "SUV / 4x4",
    title: "Built for Mountain Roads",
    description:
      "A spacious option for mountain travel, selected high-altitude routes and family sightseeing.",
    image:
      "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=1000",
    models: ["Mahindra Scorpio", "Toyota Innova", "Mahindra Xylo"],
    passengers: 6,
    luggage: "3–4 medium bags",
    terrain: "Selected mountain routes",
    ideal: "Families and adventure travellers",
    features: [
      "Spacious seating",
      "Comfortable mountain travel",
      "Suitable for selected difficult routes",
      "Experienced mountain drivers",
    ],
    price: "Get a Quote",
    popular: true,
  },
  {
    id: "tempo",
    category: "Tempo Traveller",
    title: "Travel Together",
    description:
      "A practical group travel option for families, friends and larger groups exploring Sikkim together.",
    image:
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=1000",
    models: ["13 Seater Traveller", "17 Seater Traveller"],
    passengers: 13,
    luggage: "Based on seating configuration",
    terrain: "Selected routes, subject to vehicle availability",
    ideal: "Groups and large families",
    features: [
      "Group-friendly seating",
      "Spacious cabin",
      "Suitable for group transfers",
      "Experienced drivers",
    ],
    price: "Get a Quote",
  },
];

const popularRoutes = [
  {
    from: "Bagdogra Airport",
    to: "Gangtok",
    distance: "Approx. 125 km",
    duration: "4–5 hours",
    description: "A scenic drive from the airport to the capital of Sikkim.",
  },
  {
    from: "NJP Railway Station",
    to: "Gangtok",
    distance: "Approx. 120 km",
    duration: "4–5 hours",
    description: "Comfortable pickup and transfer to your Gangtok hotel.",
  },
  {
    from: "Gangtok",
    to: "Lachung",
    distance: "Route dependent",
    duration: "Full-day mountain drive",
    description: "Travel through the beautiful landscapes of North Sikkim.",
  },
  {
    from: "Gangtok",
    to: "Pelling",
    distance: "Route dependent",
    duration: "Approx. 5–6 hours",
    description: "Explore the western side of Sikkim with a private transfer.",
  },
  {
    from: "Gangtok",
    to: "Zuluk",
    distance: "Route dependent",
    duration: "Full-day mountain drive",
    description: "Discover the scenic Old Silk Route region.",
  },
  {
    from: "Gangtok",
    to: "Ravangla",
    distance: "Route dependent",
    duration: "Approx. 3–4 hours",
    description: "A scenic journey towards South Sikkim.",
  },
];

const pickupLocations = [
  "Bagdogra Airport",
  "NJP Railway Station",
  "Gangtok",
  "Siliguri",
  "Pelling",
  "Ravangla",
  "Other",
];

const dropLocations = [
  "Gangtok",
  "Lachung",
  "Lachen",
  "Pelling",
  "Ravangla",
  "Namchi",
  "Zuluk",
  "Bagdogra Airport",
  "NJP Railway Station",
  "Other",
];

const faqs = [
  {
    question: "Which cab is best for travelling in Sikkim?",
    answer:
      "The right vehicle depends on your route, group size and luggage. A sedan or hatchback may suit regular transfers, while an SUV is often preferred for selected mountain routes. Confirm route-specific vehicle requirements before booking.",
  },
  {
    question: "Can I book a cab from Bagdogra Airport?",
    answer:
      "Yes. You can request a pickup from Bagdogra Airport or NJP Railway Station for transfers to Gangtok and other destinations in Sikkim.",
  },
  {
    question: "Are SUVs available for North Sikkim?",
    answer:
      "SUV availability depends on the destination, local transport rules, road conditions and current vehicle availability. Share your itinerary so our team can confirm a suitable vehicle.",
  },
  {
    question: "Can I book a cab for multiple days?",
    answer:
      "Yes. You can request a multi-day vehicle booking for a complete Sikkim itinerary, including transfers and sightseeing.",
  },
  {
    question: "Are fuel and driver charges included?",
    answer:
      "Your quotation should clearly mention the included services, such as fuel, driver allowance, parking, tolls and any additional charges. Confirm the final inclusions before booking.",
  },
  {
    question: "Can I book a cab for Nathula Pass?",
    answer:
      "Nathula visits require applicable permits and are subject to local authority approval, weather and operating conditions. Vehicle arrangements must comply with current local rules.",
  },
];

// --------------------------------------------------
// SMALL COMPONENTS
// --------------------------------------------------

function SectionHeading({ eyebrow, title, description, center = false }) {
  return (
    <div className={`mb-9 ${center ? "text-center" : ""}`}>
      <p className="text-xs font-bold uppercase tracking-[.2em] text-[#F0B45A]">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-sm leading-7 text-[#BCCCDC] sm:text-base ${
          center ? "mx-auto max-w-2xl" : "max-w-2xl"
        }`}>
          {description}
        </p>
      )}
    </div>
  );
}

function VehicleCard({ vehicle, onBook }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="group overflow-hidden rounded-2xl border border-[#486581]/70 bg-[#1B344B] transition hover:-translate-y-1 hover:border-[#F0B45A]/50"
    >
      <div className="relative h-56 overflow-hidden">
        <img
          src={vehicle.image}
          alt={vehicle.category}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#102A43]/90 via-transparent to-transparent" />

        {vehicle.popular && (
          <span className="absolute left-4 top-4 rounded-full bg-[#F0B45A] px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-[#102A43]">
            Popular Choice
          </span>
        )}

        <span className="absolute bottom-4 left-4 rounded-lg border border-white/20 bg-[#102A43]/80 px-3 py-2 text-xs font-bold text-white backdrop-blur">
          {vehicle.category}
        </span>
      </div>

      <div className="p-5 sm:p-6">
        <h3 className="text-xl font-bold text-white">{vehicle.title}</h3>

        <p className="mt-3 min-h-[72px] text-sm leading-7 text-[#BCCCDC]">
          {vehicle.description}
        </p>

        <div className="mt-5 grid grid-cols-2 gap-3 border-y border-[#486581]/60 py-5">
          <div className="flex items-center gap-2">
            <Users size={17} className="text-[#F0B45A]" />
            <span className="text-xs text-[#D9E2EC]">
              {vehicle.passengers} passengers
            </span>
          </div>

          <div className="flex items-center gap-2">
            <Luggage size={17} className="text-[#F0B45A]" />
            <span className="text-xs text-[#D9E2EC]">
              {vehicle.luggage}
            </span>
          </div>

          <div className="col-span-2 flex items-start gap-2">
            <Mountain size={17} className="mt-0.5 shrink-0 text-[#70C1D3]" />
            <span className="text-xs leading-5 text-[#D9E2EC]">
              {vehicle.terrain}
            </span>
          </div>
        </div>

        <div className="mt-5">
          <p className="text-xs text-[#BCCCDC]">Available models</p>
          <p className="mt-2 text-sm font-semibold leading-6 text-white">
            {vehicle.models.join(" • ")}
          </p>
        </div>

        <button
          onClick={() => onBook(vehicle)}
          className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg bg-[#F0B45A] px-5 py-3.5 text-sm font-bold text-[#102A43] transition hover:bg-[#D99A3E]"
        >
          Enquire About This Cab
          <ArrowRight size={17} />
        </button>
      </div>
    </motion.article>
  );
}

function FAQItem({ faq, index, active, onClick }) {
  const isOpen = active === index;

  return (
    <div className="overflow-hidden rounded-xl border border-[#486581] bg-[#1B344B]">
      <button
        onClick={onClick}
        className="flex w-full items-center justify-between gap-4 p-5 text-left"
      >
        <span className="text-sm font-semibold text-white sm:text-base">
          {faq.question}
        </span>

        {isOpen ? (
          <ChevronUp size={19} className="shrink-0 text-[#F0B45A]" />
        ) : (
          <ChevronDown size={19} className="shrink-0 text-[#F0B45A]" />
        )}
      </button>

      {isOpen && (
        <div className="border-t border-[#486581] px-5 py-4">
          <p className="text-sm leading-7 text-[#BCCCDC]">{faq.answer}</p>
        </div>
      )}
    </div>
  );
}

// --------------------------------------------------
// MAIN PAGE
// --------------------------------------------------

export default function Cabs() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [activeFaq, setActiveFaq] = useState(0);

  const [form, setForm] = useState({
    pickup: "Bagdogra Airport",
    drop: "Gangtok",
    vehicle: "SUV / 4x4",
    date: "",
    passengers: "2",
    tripType: "One Way",
    name: "",
  });

  const whatsappNumber = "919064256851";

  const categories = [
    { label: "All Vehicles", value: "all" },
    { label: "Hatchback", value: "hatchback" },
    { label: "Sedan", value: "sedan" },
    { label: "SUV / 4x4", value: "suv" },
    { label: "Tempo Traveller", value: "tempo" },
  ];

  const filteredVehicles =
    selectedCategory === "all"
      ? vehicles
      : vehicles.filter((vehicle) => vehicle.id === selectedCategory);

  const updateForm = (field, value) => {
    setForm((previous) => ({ ...previous, [field]: value }));
  };

  const openWhatsApp = (vehicleName = form.vehicle) => {
    const message = `Hello Hello Sikkims!

I would like to enquire about a cab booking.

Name: ${form.name || "Not provided"}
Pickup: ${form.pickup}
Drop: ${form.drop}
Vehicle: ${vehicleName}
Travel Date: ${form.date || "Not decided"}
Passengers: ${form.passengers}
Trip Type: ${form.tripType}

Please share the availability and quotation.`;

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const handleVehicleBooking = (vehicle) => {
    updateForm("vehicle", vehicle.category);
    document.getElementById("cab-booking")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <main className="min-h-screen bg-[#102A43] text-white">

      {/* NAVBAR */}
      <header className="sticky top-0 z-40 border-b border-[#486581]/50 bg-[#102A43]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a href="/" className="text-xl font-bold tracking-tight">
            Hello <span className="text-[#F0B45A]">Sikkims.</span>
          </a>

          <nav className="hidden items-center gap-7 text-sm text-[#BCCCDC] md:flex">
            <a href="/cabs" className="text-[#F0B45A]">Cabs</a>
            <a href="/#tours" className="transition hover:text-white">Tours</a>
            <a href="/#permits" className="transition hover:text-white">Permits</a>
            <a href="/#faqs" className="transition hover:text-white">FAQs</a>
          </nav>

          <a
            href="tel:+918001055069"
            className="flex items-center gap-2 rounded-lg bg-[#F0B45A] px-4 py-2.5 text-xs font-bold text-[#102A43] transition hover:bg-[#D99A3E] sm:text-sm"
          >
            <Phone size={16} />
            Call Us
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1800)",
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#102A43] via-[#102A43]/85 to-[#102A43]/40" />

        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#F0B45A]/40 bg-[#F0B45A]/10 px-4 py-2 text-xs font-bold text-[#F0B45A]">
              <Mountain size={15} />
              Sikkim Cab Rental Services
            </span>

            <h1 className="mt-7 text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Your Journey Through
              <span className="block text-[#F0B45A]">
                The Mountains.
              </span>
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-8 text-[#D9E2EC] sm:text-lg">
              Explore Sikkim with comfortable vehicles, experienced local
              drivers and flexible cab services for airport transfers,
              sightseeing and mountain journeys.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#fleet" className="btn-primary">
                Explore Our Fleet
                <ArrowRight size={17} />
              </a>

              <a
                href="#cab-booking"
                className="inline-flex items-center gap-2 rounded-lg border border-white/30 bg-white/10 px-5 py-3 text-sm font-bold text-white backdrop-blur transition hover:bg-white/20"
              >
                Book a Cab
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-7 gap-y-4 text-xs font-semibold text-[#D9E2EC]">
              <span className="flex items-center gap-2">
                <Check size={16} className="text-[#F0B45A]" />
                Local drivers
              </span>
              <span className="flex items-center gap-2">
                <Check size={16} className="text-[#F0B45A]" />
                Multiple vehicle options
              </span>
              <span className="flex items-center gap-2">
                <Check size={16} className="text-[#F0B45A]" />
                Custom travel plans
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK BOOKING */}
      <section className="relative z-10 mx-auto -mt-8 max-w-7xl px-4 sm:px-6 lg:px-8" id="cab-booking">
        <div className="rounded-2xl border border-[#486581] bg-[#1B344B] p-5 shadow-2xl sm:p-7">
          <div className="mb-6">
            <p className="text-xs font-bold uppercase tracking-[.2em] text-[#F0B45A]">
              Start your journey
            </p>
            <h2 className="mt-2 text-2xl font-bold text-white">
              Find the right cab for your trip
            </h2>
            <p className="mt-2 text-sm text-[#BCCCDC]">
              Share your travel details and receive a customised quotation.
            </p>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              openWhatsApp();
            }}
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
          >
            <div>
              <label className="field-label">Pickup Location</label>
              <select
                className="field-control"
                value={form.pickup}
                onChange={(e) => updateForm("pickup", e.target.value)}
              >
                {pickupLocations.map((place) => (
                  <option key={place}>{place}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="field-label">Drop Location</label>
              <select
                className="field-control"
                value={form.drop}
                onChange={(e) => updateForm("drop", e.target.value)}
              >
                {dropLocations.map((place) => (
                  <option key={place}>{place}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="field-label">Vehicle Type</label>
              <select
                className="field-control"
                value={form.vehicle}
                onChange={(e) => updateForm("vehicle", e.target.value)}
              >
                {vehicles.map((vehicle) => (
                  <option key={vehicle.id}>{vehicle.category}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="field-label">Travel Date</label>
              <input
                type="date"
                required
                min={new Date().toISOString().split("T")[0]}
                className="field-control"
                value={form.date}
                onChange={(e) => updateForm("date", e.target.value)}
              />
            </div>

            <div>
              <label className="field-label">Trip Type</label>
              <select
                className="field-control"
                value={form.tripType}
                onChange={(e) => updateForm("tripType", e.target.value)}
              >
                <option>One Way</option>
                <option>Round Trip</option>
                <option>Multi Day</option>
              </select>
            </div>

            <div>
              <label className="field-label">Passengers</label>
              <select
                className="field-control"
                value={form.passengers}
                onChange={(e) => updateForm("passengers", e.target.value)}
              >
                {Array.from({ length: 20 }, (_, i) => i + 1).map((number) => (
                  <option key={number} value={number}>
                    {number} {number === 1 ? "Passenger" : "Passengers"}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="field-label">Your Name (Optional)</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="field-control"
                value={form.name}
                onChange={(e) => updateForm("name", e.target.value)}
              />
            </div>

            <div className="flex items-end">
              <button
                type="submit"
                className="btn-primary w-full"
              >
                Check Availability
                <ArrowRight size={17} />
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="border-b border-[#486581]/50 py-14">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-7 px-4 sm:px-6 md:grid-cols-4 lg:px-8">
          {[
            {
              icon: ShieldCheck,
              title: "Local Expertise",
              copy: "Drivers familiar with Sikkim routes",
            },
            {
              icon: Car,
              title: "Vehicle Options",
              copy: "Cars for different group sizes",
            },
            {
              icon: Route,
              title: "Flexible Routes",
              copy: "One-way and multi-day travel",
            },
            {
              icon: Clock,
              title: "Travel Assistance",
              copy: "Support during your journey",
            },
          ].map((item) => (
            <div key={item.title} className="flex items-start gap-3">
              <div className="rounded-xl bg-[#F0B45A]/10 p-3 text-[#F0B45A]">
                <item.icon size={21} />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white">{item.title}</h3>
                <p className="mt-2 text-xs leading-5 text-[#BCCCDC]">
                  {item.copy}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FLEET */}
      <section id="fleet" className="scroll-mt-24 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Choose your ride"
            title="Find the perfect cab for your journey"
            description="From compact cars for airport transfers to spacious SUVs for mountain journeys, choose a vehicle that suits your travel plan."
          />

          <div className="mb-8 flex gap-2 overflow-x-auto pb-2">
            {categories.map((category) => (
              <button
                key={category.value}
                onClick={() => setSelectedCategory(category.value)}
                className={`shrink-0 rounded-lg px-4 py-3 text-xs font-bold transition ${
                  selectedCategory === category.value
                    ? "bg-[#F0B45A] text-[#102A43]"
                    : "border border-[#486581] bg-[#1B344B] text-[#BCCCDC] hover:text-white"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {filteredVehicles.map((vehicle) => (
              <VehicleCard
                key={vehicle.id}
                vehicle={vehicle}
                onBook={handleVehicleBooking}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ROUTES */}
      <section id="routes" className="bg-[#1B344B] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Explore Sikkim"
            title="Popular cab routes"
            description="Book comfortable transfers between major pickup points and popular destinations across Sikkim."
          />

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {popularRoutes.map((route, index) => (
              <article
                key={index}
                className="rounded-2xl border border-[#486581]/70 bg-[#243B53] p-5 transition hover:border-[#F0B45A]/50"
              >
                <div className="flex items-center justify-between">
                  <span className="rounded-lg bg-[#F0B45A]/10 p-3 text-[#F0B45A]">
                    <Route size={20} />
                  </span>
                  <span className="text-xs text-[#BCCCDC]">
                    {route.duration}
                  </span>
                </div>

                <div className="mt-6 flex items-center gap-2">
                  <div>
                    <p className="text-xs text-[#BCCCDC]">From</p>
                    <h3 className="mt-1 text-sm font-bold text-white">
                      {route.from}
                    </h3>
                  </div>

                  <ArrowRight size={17} className="mx-2 shrink-0 text-[#F0B45A]" />

                  <div>
                    <p className="text-xs text-[#BCCCDC]">To</p>
                    <h3 className="mt-1 text-sm font-bold text-white">
                      {route.to}
                    </h3>
                  </div>
                </div>

                <p className="mt-4 text-xs leading-6 text-[#BCCCDC]">
                  {route.description}
                </p>

                <div className="mt-5 flex items-center justify-between border-t border-[#486581] pt-4">
                  <span className="text-xs text-[#BCCCDC]">
                    {route.distance}
                  </span>

                  <button
                    onClick={() => {
                      updateForm("pickup", route.from);
                      updateForm("drop", route.to);
                      document.getElementById("cab-booking")?.scrollIntoView({
                        behavior: "smooth",
                      });
                    }}
                    className="flex items-center gap-2 text-xs font-bold text-[#F0B45A] hover:text-white"
                  >
                    Book Route <ArrowUpRight size={15} />
                  </button>
                </div>
              </article>
            ))}
          </div>

          <p className="mt-6 text-xs leading-6 text-[#BCCCDC]">
            Distances and travel durations are approximate. Actual routes and
            travel times depend on road conditions, traffic, weather and local
            restrictions.
          </p>
        </div>
      </section>

      {/* SERVICE TYPES */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Cab rental services"
            title="Travel the way you want"
            description="Choose the type of cab service that fits your Sikkim travel itinerary."
          />

          <div className="grid gap-5 md:grid-cols-3">
            {[
              {
                icon: MapPin,
                title: "Airport Transfers",
                description:
                  "Arrange pickups and drop-offs from Bagdogra Airport and NJP Railway Station.",
                tag: "Convenient Transfers",
              },
              {
                icon: Mountain,
                title: "Mountain Sightseeing",
                description:
                  "Explore Gangtok, Tsomgo Lake, Nathula and other destinations with a planned cab service.",
                tag: "Local Sightseeing",
              },
              {
                icon: CalendarDays,
                title: "Multi-Day Rentals",
                description:
                  "Keep a vehicle for your complete Sikkim trip with a customised route and schedule.",
                tag: "Flexible Travel",
              },
            ].map((service) => (
              <article
                key={service.title}
                className="rounded-2xl border border-[#486581]/70 bg-[#1B344B] p-6"
              >
                <div className="inline-flex rounded-xl bg-[#F0B45A]/10 p-3 text-[#F0B45A]">
                  <service.icon size={24} />
                </div>

                <span className="mt-5 block text-[10px] font-bold uppercase tracking-wider text-[#70C1D3]">
                  {service.tag}
                </span>

                <h3 className="mt-2 text-xl font-bold text-white">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#BCCCDC]">
                  {service.description}
                </p>

                <button
                  onClick={() => {
                    updateForm("tripType", "Multi Day");
                    document.getElementById("cab-booking")?.scrollIntoView({
                      behavior: "smooth",
                    });
                  }}
                  className="mt-6 flex items-center gap-2 text-sm font-bold text-[#F0B45A] hover:text-white"
                >
                  Make an Enquiry <ArrowRight size={16} />
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* INCLUSIONS */}
      <section className="bg-[#1B344B] py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <SectionHeading
              eyebrow="Travel with confidence"
              title="What to expect from your cab booking"
              description="We want you to know exactly what is included before confirming your vehicle."
            />

            <div className="space-y-4">
              {[
                "Vehicle as confirmed in your quotation",
                "Driver allowance and fuel, where specified",
                "Pickup and drop locations as agreed",
                "Parking and toll charges as specified",
                "Route and sightseeing details confirmed before travel",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <Check size={18} className="mt-0.5 shrink-0 text-[#70C1D3]" />
                  <p className="text-sm leading-6 text-[#D9E2EC]">{item}</p>
                </div>
              ))}
            </div>

            <div className="mt-7 flex items-start gap-3 rounded-xl border border-[#F0B45A]/20 bg-[#F0B45A]/5 p-4">
              <Info size={19} className="mt-0.5 shrink-0 text-[#F0B45A]" />
              <p className="text-xs leading-6 text-[#D9E2EC]">
                Every quotation should clearly specify the vehicle, route,
                inclusions, exclusions, waiting charges and any additional
                sightseeing costs.
              </p>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl">
            <img
              src="https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1000"
              alt="Himalayan mountain landscape"
              className="h-[430px] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#102A43]/80 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-xs font-bold uppercase tracking-widest text-[#F0B45A]">
                Explore Sikkim
              </p>
              <h3 className="mt-2 text-2xl font-bold text-white">
                Every road leads to a new experience.
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faqs" className="py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Cab rental help"
            title="Frequently asked questions"
            description="Everything you need to know before booking your cab in Sikkim."
            center
          />

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                faq={faq}
                index={index}
                active={activeFaq}
                onClick={() => setActiveFaq(activeFaq === index ? -1 : index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#1B344B]">
        <div className="mx-auto max-w-7xl px-4 py-20 text-center sm:px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[.2em] text-[#F0B45A]">
            Ready to explore?
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold text-white sm:text-4xl">
            Your Sikkim journey starts with the right ride.
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[#BCCCDC]">
            Tell us where you want to go. We will help you choose a suitable
            vehicle and plan your journey.
          </p>

          <button
            onClick={() => {
              document.getElementById("cab-booking")?.scrollIntoView({
                behavior: "smooth",
              });
            }}
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[#F0B45A] px-6 py-4 text-sm font-bold text-[#102A43] transition hover:bg-[#D99A3E]"
          >
            Find My Cab <ArrowRight size={18} />
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[#486581] bg-[#102A43]">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 px-4 py-8 text-xs text-[#BCCCDC] sm:flex-row sm:px-6 lg:px-8">
          <a href="/" className="text-base font-bold text-white">
            Hello <span className="text-[#F0B45A]">Sikkims.</span>
          </a>
          <p>© {new Date().getFullYear()} Hello Sikkims. All rights reserved.</p>
          <a href="tel:+918001055069" className="hover:text-[#F0B45A]">
            +91 80010 55069
          </a>
        </div>
      </footer>

      {/* MOBILE STICKY BOOKING BAR */}
      <div className="fixed bottom-0 left-0 right-0 z-50 flex items-center gap-3 border-t border-[#486581] bg-[#102A43]/95 p-3 backdrop-blur-lg lg:hidden">
        <a
          href="tel:+918001055069"
          className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-[#486581] py-3 text-sm font-bold text-white"
        >
          <Phone size={17} />
          Call
        </a>

        <a
          href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
            "Hello Hello Sikkims! I would like to enquire about cab rental services."
          )}`}
          target="_blank"
          rel="noreferrer"
          className="flex flex-[1.5] items-center justify-center gap-2 rounded-lg bg-[#F0B45A] py-3 text-sm font-bold text-[#102A43]"
        >
          <MessageCircle size={17} />
          WhatsApp
        </a>
      </div>

      <div className="h-16 lg:hidden" />
    </main>
  );
}
