import { useParams } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Check,
  ChevronDown,
  ChevronUp,
  Clock,
  MapPin,
  Mountain,
  Users,
  Hotel,
  Car,
  Utensils,
  FileCheck,
  ShieldCheck,
  Phone,
  MessageCircle,
  Camera,
  Info,
  X,
} from "lucide-react";

// --------------------------------------------------
// PACKAGE DATA
// --------------------------------------------------

const packages = {
  "north-sikkim": {
    id: "north-sikkim",
    name: "Enchanting North Sikkim",
    subtitle: "Discover the untouched beauty of the Himalayas",
    duration: "6 Days / 5 Nights",
    location: "Gangtok, Lachen, Lachung",
    category: "Adventure & Nature",
    groupSize: "2–12 Travellers",
    bestFor: "Nature lovers and adventure seekers",
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1400",
    price: "Request a Quote",
    highlights: [
      "Visit the spectacular Gurudongmar Lake",
      "Explore the beautiful Yumthang Valley",
      "Experience mountain villages in Lachen and Lachung",
      "Enjoy scenic Himalayan landscapes",
    ],
    destinations: [
      "Gangtok",
      "Lachen",
      "Gurudongmar Lake",
      "Lachung",
      "Yumthang Valley",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Gangtok",
        location: "Bagdogra / NJP to Gangtok",
        description:
          "Arrive at Bagdogra Airport or NJP Railway Station. Meet your assigned driver and enjoy a scenic drive towards Gangtok.",
        activities: [
          "Pickup from Bagdogra or NJP",
          "Scenic mountain drive to Gangtok",
          "Hotel check-in and relaxation",
          "Explore MG Marg in the evening",
        ],
        meals: "Dinner",
        stay: "Gangtok",
        travel: "Approximately 4–5 hours",
        note: "Travel time depends on traffic and road conditions.",
      },
      {
        day: 2,
        title: "Gangtok to Lachen",
        location: "Gangtok – Mangan – Lachen",
        description:
          "Begin your journey towards North Sikkim. Travel through beautiful mountain landscapes, rivers and traditional villages before reaching Lachen.",
        activities: [
          "Breakfast at the hotel",
          "Drive towards North Sikkim",
          "Enjoy scenic stops along the route",
          "Visit viewpoints and waterfalls subject to road access",
          "Reach Lachen and check into your hotel",
        ],
        meals: "Breakfast and Dinner",
        stay: "Lachen",
        travel: "Approximately 5–6 hours",
        note: "Road conditions may affect the journey duration.",
      },
      {
        day: 3,
        title: "Gurudongmar Lake Excursion",
        location: "Lachen – Gurudongmar – Lachung",
        description:
          "An early morning journey takes you towards one of the highest accessible lakes in the region. Enjoy the magnificent Himalayan surroundings before continuing towards Lachung.",
        activities: [
          "Early morning departure from Lachen",
          "Visit Gurudongmar Lake, subject to permit approval",
          "Enjoy the high-altitude mountain scenery",
          "Return towards the connecting route",
          "Continue to Lachung and check in",
        ],
        meals: "Breakfast and Dinner",
        stay: "Lachung",
        travel: "Full-day mountain excursion",
        note:
          "Gurudongmar is at high altitude. Access depends on permits, weather and local administration. Travellers should follow medical and local safety advice.",
      },
      {
        day: 4,
        title: "Yumthang Valley Excursion",
        location: "Lachung – Yumthang – Lachung",
        description:
          "Explore the beautiful Yumthang Valley, known for its mountain scenery, rivers and seasonal flowers. Return to Lachung after sightseeing.",
        activities: [
          "Breakfast at the hotel",
          "Drive to Yumthang Valley",
          "Explore the valley and surrounding landscapes",
          "Optional Zero Point visit at additional cost, subject to access",
          "Return to Lachung",
        ],
        meals: "Breakfast and Dinner",
        stay: "Lachung",
        travel: "Half-day to full-day excursion",
        note:
          "Zero Point is an optional excursion and may require additional charges and permissions.",
      },
      {
        day: 5,
        title: "Lachung to Gangtok",
        location: "Lachung – Gangtok",
        description:
          "After breakfast, begin the return journey to Gangtok. Enjoy the mountain scenery along the way.",
        activities: [
          "Breakfast and hotel checkout",
          "Drive towards Gangtok",
          "Enjoy scenic photo stops where permitted",
          "Arrive in Gangtok",
          "Hotel check-in and free evening",
        ],
        meals: "Breakfast",
        stay: "Gangtok",
        travel: "Approximately 5–6 hours",
      },
      {
        day: 6,
        title: "Departure from Gangtok",
        location: "Gangtok – Bagdogra / NJP",
        description:
          "Enjoy breakfast and check out. Your driver will transfer you to Bagdogra Airport or NJP Railway Station.",
        activities: [
          "Breakfast at the hotel",
          "Hotel checkout",
          "Transfer to Bagdogra or NJP",
          "End of your Sikkim journey",
        ],
        meals: "Breakfast",
        stay: "Departure",
        travel: "Approximately 4–5 hours",
      },
    ],
    inclusions: [
      "Hotel accommodation as per package plan",
      "Private vehicle for listed transfers and sightseeing",
      "Breakfast and dinner as specified",
      "Driver allowance, fuel and parking",
      "Assistance with applicable permit paperwork",
    ],
    exclusions: [
      "Airfare and train tickets",
      "Lunch and personal expenses",
      "Optional Zero Point excursion",
      "Additional sightseeing not mentioned",
      "Travel insurance and medical expenses",
      "Costs due to weather or unexpected road closures",
    ],
  },

  "gangtok-alpine": {
    id: "gangtok-alpine",
    name: "Gangtok & Alpine Lakes",
    subtitle: "Experience the beauty of Sikkim's alpine lakes",
    duration: "4 Days / 3 Nights",
    location: "Gangtok, Tsomgo Lake, Nathula",
    category: "Popular Getaway",
    groupSize: "2–12 Travellers",
    bestFor: "Couples, families and first-time visitors",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1400",
    price: "Request a Quote",
    highlights: [
      "Explore the beautiful Tsomgo Lake",
      "Visit Baba Mandir",
      "Optional Nathula Pass excursion",
      "Discover Gangtok and MG Marg",
    ],
    destinations: ["Gangtok", "Tsomgo Lake", "Baba Mandir", "Nathula Pass"],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Gangtok",
        location: "Bagdogra / NJP to Gangtok",
        description:
          "Arrive in Sikkim and enjoy a scenic transfer to Gangtok. Check into your hotel and relax.",
        activities: [
          "Pickup from Bagdogra or NJP",
          "Transfer to Gangtok",
          "Hotel check-in",
          "Evening walk at MG Marg",
        ],
        meals: "Dinner",
        stay: "Gangtok",
        travel: "Approximately 4–5 hours",
      },
      {
        day: 2,
        title: "Tsomgo Lake, Baba Mandir and Nathula",
        location: "Gangtok – Tsomgo – Baba Mandir",
        description:
          "Enjoy an exciting excursion to Tsomgo Lake and Baba Mandir. Nathula Pass can be included as an optional visit, subject to permit approval and operational conditions.",
        activities: [
          "Early breakfast",
          "Visit Tsomgo Lake",
          "Visit Baba Harbhajan Singh Mandir",
          "Optional Nathula Pass visit",
          "Return to Gangtok",
        ],
        meals: "Breakfast and Dinner",
        stay: "Gangtok",
        travel: "Full-day excursion",
        note:
          "Nathula access is subject to permits, weather and local administrative restrictions.",
      },
      {
        day: 3,
        title: "Gangtok Local Sightseeing",
        location: "Gangtok",
        description:
          "Discover Gangtok's popular attractions and enjoy a relaxed day exploring the capital city.",
        activities: [
          "Visit Tashi View Point",
          "Explore Ganesh Tok",
          "Visit Banjhakri Falls",
          "Explore local markets",
          "Free time at MG Marg",
        ],
        meals: "Breakfast and Dinner",
        stay: "Gangtok",
        travel: "Local sightseeing",
      },
      {
        day: 4,
        title: "Departure",
        location: "Gangtok – Bagdogra / NJP",
        description:
          "Check out from the hotel and proceed towards your departure point.",
        activities: [
          "Breakfast",
          "Hotel checkout",
          "Transfer to Bagdogra or NJP",
        ],
        meals: "Breakfast",
        stay: "Departure",
        travel: "Approximately 4–5 hours",
      },
    ],
    inclusions: [
      "3 nights hotel accommodation",
      "Private transfers and listed sightseeing",
      "Breakfast and dinner as specified",
      "Driver allowance, fuel and parking",
      "Permit paperwork assistance",
    ],
    exclusions: [
      "Airfare and train tickets",
      "Lunch and personal expenses",
      "Optional Nathula Pass charges, if applicable",
      "Travel insurance",
      "Unlisted sightseeing and activities",
    ],
  },

  "grand-sikkim": {
    id: "grand-sikkim",
    name: "Grand Sikkim Circuit",
    subtitle: "A complete journey through Sikkim's diverse landscapes",
    duration: "7 Days / 6 Nights",
    location: "Gangtok, Ravangla, Namchi, Pelling",
    category: "Complete Sikkim Experience",
    groupSize: "2–12 Travellers",
    bestFor: "Families and extended holidays",
    image:
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=1400",
    price: "Request a Quote",
    highlights: [
      "Explore Gangtok and its surroundings",
      "Visit Ravangla Buddha Park",
      "Discover Namchi Char Dham",
      "Experience Pelling and the Glass Skywalk",
    ],
    destinations: ["Gangtok", "Ravangla", "Namchi", "Pelling"],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Gangtok",
        location: "Bagdogra / NJP – Gangtok",
        description: "Transfer to Gangtok and settle into your hotel.",
        activities: [
          "Airport or railway station pickup",
          "Drive to Gangtok",
          "Hotel check-in",
          "Explore MG Marg",
        ],
        meals: "Dinner",
        stay: "Gangtok",
        travel: "Approximately 4–5 hours",
      },
      {
        day: 2,
        title: "Gangtok Sightseeing",
        location: "Gangtok",
        description:
          "Explore Gangtok's popular viewpoints and cultural attractions.",
        activities: [
          "Visit Tashi View Point",
          "Explore Ganesh Tok",
          "Visit Banjhakri Falls",
          "Explore local attractions",
          "Evening at MG Marg",
        ],
        meals: "Breakfast and Dinner",
        stay: "Gangtok",
        travel: "Local sightseeing",
      },
      {
        day: 3,
        title: "Gangtok to Ravangla",
        location: "Gangtok – Ravangla",
        description:
          "Travel towards South Sikkim and explore the peaceful surroundings of Ravangla.",
        activities: [
          "Breakfast and checkout",
          "Drive to Ravangla",
          "Visit Buddha Park",
          "Explore the surrounding area",
          "Hotel check-in",
        ],
        meals: "Breakfast and Dinner",
        stay: "Ravangla",
        travel: "Approximately 3–4 hours",
      },
      {
        day: 4,
        title: "Ravangla to Namchi and Pelling",
        location: "Ravangla – Namchi – Pelling",
        description:
          "Explore Namchi's famous Char Dham complex before continuing towards Pelling.",
        activities: [
          "Breakfast",
          "Visit Namchi Char Dham",
          "Explore the surrounding viewpoints",
          "Continue towards Pelling",
          "Hotel check-in",
        ],
        meals: "Breakfast and Dinner",
        stay: "Pelling",
        travel: "Full-day journey with sightseeing",
      },
      {
        day: 5,
        title: "Pelling Sightseeing",
        location: "Pelling",
        description:
          "Discover Pelling's natural beauty, heritage and popular attractions.",
        activities: [
          "Visit Pelling Skywalk",
          "Explore Chenrezig Statue",
          "Visit Pemayangtse Monastery",
          "Explore local viewpoints",
          "Return to hotel",
        ],
        meals: "Breakfast and Dinner",
        stay: "Pelling",
        travel: "Local sightseeing",
        note:
          "Attractions are subject to local operating hours and access conditions.",
      },
      {
        day: 6,
        title: "Pelling to Gangtok",
        location: "Pelling – Gangtok",
        description:
          "Enjoy the return journey to Gangtok through beautiful mountain roads.",
        activities: [
          "Breakfast and checkout",
          "Drive towards Gangtok",
          "Scenic stops along the route",
          "Hotel check-in",
          "Free evening",
        ],
        meals: "Breakfast and Dinner",
        stay: "Gangtok",
        travel: "Approximately 5–6 hours",
      },
      {
        day: 7,
        title: "Departure",
        location: "Gangtok – Bagdogra / NJP",
        description:
          "Transfer to your departure point after breakfast.",
        activities: [
          "Breakfast",
          "Hotel checkout",
          "Transfer to Bagdogra or NJP",
        ],
        meals: "Breakfast",
        stay: "Departure",
        travel: "Approximately 4–5 hours",
      },
    ],
    inclusions: [
      "6 nights hotel accommodation",
      "Private vehicle for listed transfers",
      "Sightseeing as mentioned in the itinerary",
      "Breakfast and dinner as specified",
      "Driver allowance, fuel and parking",
    ],
    exclusions: [
      "Airfare and train tickets",
      "Lunch and personal expenses",
      "Entry tickets and optional activities",
      "Travel insurance",
      "Unlisted sightseeing",
    ],
  },

  "silk-route": {
    id: "silk-route",
    name: "Offbeat Silk Route Trail",
    subtitle: "Explore the hidden mountain villages of East Sikkim",
    duration: "5 Days / 4 Nights",
    location: "Gangtok, Zuluk, Gnathang Valley",
    category: "Offbeat Adventure",
    groupSize: "2–10 Travellers",
    bestFor: "Photography and mountain enthusiasts",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1400",
    price: "Request a Quote",
    highlights: [
      "Experience the famous Zuluk zigzag roads",
      "Explore Gnathang Valley",
      "Enjoy mountain viewpoints",
      "Discover traditional Himalayan villages",
    ],
    destinations: [
      "Gangtok",
      "Zuluk",
      "Gnathang Valley",
      "Old Silk Route",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Gangtok",
        location: "Bagdogra / NJP – Gangtok",
        description:
          "Arrive in Sikkim and transfer to Gangtok for an overnight stay.",
        activities: [
          "Pickup from Bagdogra or NJP",
          "Transfer to Gangtok",
          "Hotel check-in",
          "Explore MG Marg",
        ],
        meals: "Dinner",
        stay: "Gangtok",
        travel: "Approximately 4–5 hours",
      },
      {
        day: 2,
        title: "Gangtok to Zuluk",
        location: "Gangtok – Zuluk",
        description:
          "Begin your Silk Route adventure and travel through the scenic mountain roads towards Zuluk.",
        activities: [
          "Breakfast and checkout",
          "Drive towards the Old Silk Route",
          "Enjoy scenic viewpoints",
          "Experience the Zuluk zigzag roads",
          "Check into a local homestay",
        ],
        meals: "Breakfast and Dinner",
        stay: "Zuluk",
        travel: "Full-day mountain drive",
      },
      {
        day: 3,
        title: "Zuluk and Gnathang Valley",
        location: "Zuluk – Gnathang Valley",
        description:
          "Discover the breathtaking high-altitude landscapes of East Sikkim.",
        activities: [
          "Early morning viewpoint visit, if accessible",
          "Explore Zuluk",
          "Visit Gnathang Valley",
          "Enjoy mountain photography stops",
          "Return to accommodation",
        ],
        meals: "Breakfast and Dinner",
        stay: "Zuluk / Gnathang area",
        travel: "Full-day sightseeing",
        note:
          "Sightseeing sequence depends on weather, road conditions and local permissions.",
      },
      {
        day: 4,
        title: "Return towards Gangtok",
        location: "Zuluk – Gangtok",
        description:
          "Enjoy the return drive through the beautiful Silk Route region.",
        activities: [
          "Breakfast",
          "Checkout from homestay",
          "Scenic stops along the route",
          "Drive to Gangtok",
          "Hotel check-in",
        ],
        meals: "Breakfast and Dinner",
        stay: "Gangtok",
        travel: "Full-day mountain drive",
      },
      {
        day: 5,
        title: "Departure",
        location: "Gangtok – Bagdogra / NJP",
        description:
          "Transfer to your departure point after breakfast.",
        activities: [
          "Breakfast",
          "Hotel checkout",
          "Transfer to Bagdogra or NJP",
        ],
        meals: "Breakfast",
        stay: "Departure",
        travel: "Approximately 4–5 hours",
      },
    ],
    inclusions: [
      "4 nights accommodation",
      "Private vehicle for listed transfers and sightseeing",
      "Meals as specified",
      "Driver allowance, fuel and parking",
      "Applicable permit paperwork assistance",
    ],
    exclusions: [
      "Airfare and train tickets",
      "Personal expenses",
      "Lunch unless specified",
      "Travel insurance",
      "Unlisted sightseeing and activities",
    ],
  },
};

// --------------------------------------------------
// SMALL COMPONENTS
// --------------------------------------------------

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="mb-8">
      <p className="text-xs font-bold uppercase tracking-[.2em] text-[#F0B45A]">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
        {title}
      </h2>
      {description && (
        <p className="mt-3 max-w-2xl text-sm leading-7 text-[#BCCCDC]">
          {description}
        </p>
      )}
    </div>
  );
}

function ItineraryDay({ day, isLast }) {
  const [expanded, setExpanded] = useState(day.day === 1);

  return (
    <div className="relative flex gap-4 sm:gap-6">
      {/* Timeline */}
      <div className="flex flex-col items-center">
        <div className="z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#F0B45A]/40 bg-[#F0B45A]/10 text-sm font-bold text-[#F0B45A]">
          {String(day.day).padStart(2, "0")}
        </div>

        {!isLast && (
          <div className="my-2 w-px flex-1 bg-[#486581]" />
        )}
      </div>

      {/* Day card */}
      <div className="mb-6 min-w-0 flex-1 rounded-2xl border border-[#486581]/60 bg-[#243B53] p-4 sm:p-6">
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex w-full items-start justify-between gap-4 text-left"
        >
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-[#F0B45A]">
              Day {day.day}
            </p>

            <h3 className="mt-2 text-lg font-bold text-white sm:text-xl">
              {day.title}
            </h3>

            <p className="mt-2 flex items-center gap-2 text-xs text-[#BCCCDC]">
              <MapPin size={14} className="shrink-0 text-[#70C1D3]" />
              {day.location}
            </p>
          </div>

          <div className="rounded-lg bg-[#102A43] p-2 text-[#F0B45A]">
            {expanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </div>
        </button>

        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="overflow-hidden"
            >
              <p className="mt-5 text-sm leading-7 text-[#BCCCDC]">
                {day.description}
              </p>

              <div className="mt-5">
                <h4 className="mb-3 text-sm font-bold text-white">
                  Day plan
                </h4>

                <div className="space-y-3">
                  {day.activities.map((activity, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Check
                        size={16}
                        className="mt-0.5 shrink-0 text-[#70C1D3]"
                      />
                      <span className="text-sm leading-6 text-[#BCCCDC]">
                        {activity}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 grid gap-3 border-t border-[#486581] pt-5 sm:grid-cols-2">
                <div className="flex items-start gap-3">
                  <Hotel size={17} className="text-[#F0B45A]" />
                  <div>
                    <p className="text-xs text-[#BCCCDC]">Overnight stay</p>
                    <p className="mt-1 text-sm font-semibold text-white">
                      {day.stay}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Utensils size={17} className="text-[#F0B45A]" />
                  <div>
                    <p className="text-xs text-[#BCCCDC]">Meals</p>
                    <p className="mt-1 text-sm font-semibold text-white">
                      {day.meals || "As per package"}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock size={17} className="text-[#F0B45A]" />
                  <div>
                    <p className="text-xs text-[#BCCCDC]">Travel time</p>
                    <p className="mt-1 text-sm font-semibold text-white">
                      {day.travel}
                    </p>
                  </div>
                </div>
              </div>

              {day.note && (
                <div className="mt-5 flex gap-3 rounded-xl border border-[#F0B45A]/20 bg-[#F0B45A]/10 p-3">
                  <Info
                    size={17}
                    className="mt-0.5 shrink-0 text-[#F0B45A]"
                  />
                  <p className="text-xs leading-6 text-[#E8D6B8]">
                    {day.note}
                  </p>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

// --------------------------------------------------
// MAIN PAGE
// --------------------------------------------------

export default function PackageDetails({ packageId = "north-sikkim" }) {
  const [selectedPackage, setSelectedPackage] = useState(packageId);
  const [travellers, setTravellers] = useState(2);
  const [travelDate, setTravelDate] = useState("");
  const [activeFaq, setActiveFaq] = useState(0);

  const pkg = packages[selectedPackage] || packages["north-sikkim"];

  const whatsappNumber = "919064256851";

  const bookingMessage = encodeURIComponent(
    `Hello Hello Sikkims! I am interested in the ${pkg.name} package.

Duration: ${pkg.duration}
Travellers: ${travellers}
Travel date: ${travelDate || "Not decided yet"}

Please share the package price and availability.`
  );

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${bookingMessage}`;

  const faqs = [
    {
      question: "Can I customise this tour package?",
      answer:
        "Yes. You can request changes to the hotel category, vehicle type, sightseeing plan and duration. The final quote will depend on your requirements.",
    },
    {
      question: "Are permits included in the package?",
      answer:
        "We can assist with applicable permit paperwork. Permit approval is decided by the relevant authorities and is subject to current regulations and availability.",
    },
    {
      question: "What happens if the weather is bad?",
      answer:
        "Mountain roads and sightseeing points can close due to weather or local restrictions. Your itinerary may need to be adjusted for safety.",
    },
    {
      question: "Can I book this package for a family?",
      answer:
        "Yes. Share the number of adults and children with our team so we can recommend suitable rooms and vehicles.",
    },
    {
      question: "How do I confirm my booking?",
      answer:
        "Send us your travel dates and group details through WhatsApp. Our team will share availability, the final quotation and booking terms.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#102A43] text-white">
      {/* NAVBAR */}
      <header className="sticky top-0 z-40 border-b border-[#486581]/50 bg-[#102A43]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a href="/" className="text-xl font-bold tracking-tight">
            Hello <span className="text-[#F0B45A]">Sikkims.</span>
          </a>

          <nav className="hidden items-center gap-7 text-sm text-[#BCCCDC] md:flex">
            <a href="/#cabs" className="hover:text-white">Cabs</a>
            <a href="/#tours" className="hover:text-white">Tours</a>
            <a href="/#permits" className="hover:text-white">Permits</a>
            <a href="/#faqs" className="hover:text-white">FAQs</a>
          </nav>

          <a
            href="tel:+918001055069"
            className="flex items-center gap-2 rounded-lg bg-[#F0B45A] px-4 py-2.5 text-xs font-bold text-[#102A43] transition hover:bg-[#D99A3E] sm:text-sm"
          >
            <Phone size={16} />
            <span>Call Us</span>
          </a>
        </div>
      </header>

      {/* PACKAGE SELECTOR */}
      <div className="border-b border-[#486581]/40 bg-[#1B344B]">
        <div className="mx-auto flex max-w-7xl items-center gap-3 overflow-x-auto px-4 py-3 sm:px-6 lg:px-8">
          {Object.values(packages).map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setSelectedPackage(item.id);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className={`shrink-0 rounded-lg px-4 py-2 text-xs font-semibold transition ${
                selectedPackage === item.id
                  ? "bg-[#F0B45A] text-[#102A43]"
                  : "bg-[#243B53] text-[#BCCCDC] hover:text-white"
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${pkg.image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#102A43] via-[#102A43]/85 to-[#102A43]/40" />

        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
          <a
            href="/#tours"
            className="mb-10 inline-flex items-center gap-2 text-sm font-semibold text-[#BCCCDC] hover:text-white"
          >
            <ArrowLeft size={16} />
            All Tour Packages
          </a>

          <div className="max-w-3xl">
            <span className="rounded-full border border-[#F0B45A]/40 bg-[#F0B45A]/10 px-4 py-2 text-xs font-bold text-[#F0B45A]">
              {pkg.category}
            </span>

            <h1 className="mt-7 text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              {pkg.name}
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-8 text-[#D9E2EC] sm:text-lg">
              {pkg.subtitle}
            </p>

            <div className="mt-8 flex flex-wrap gap-5 text-sm text-[#D9E2EC]">
              <span className="flex items-center gap-2">
                <CalendarDays size={17} className="text-[#F0B45A]" />
                {pkg.duration}
              </span>

              <span className="flex items-center gap-2">
                <MapPin size={17} className="text-[#F0B45A]" />
                {pkg.location}
              </span>

              <span className="flex items-center gap-2">
                <Users size={17} className="text-[#F0B45A]" />
                {pkg.groupSize}
              </span>
            </div>

            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#booking" className="btn-primary">
                Enquire About This Tour
                <ArrowRight size={17} />
              </a>

              <a
                href="#itinerary"
                className="inline-flex items-center gap-2 rounded-lg border border-white/30 bg-white/10 px-5 py-3 text-sm font-bold text-white backdrop-blur hover:bg-white/20"
              >
                Explore Itinerary
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK OVERVIEW */}
      <section className="border-b border-[#486581]/50 bg-[#1B344B]">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-5 px-4 py-7 sm:grid-cols-4 sm:px-6 lg:px-8">
          {[
            { icon: CalendarDays, label: "Duration", value: pkg.duration },
            { icon: Users, label: "Group size", value: pkg.groupSize },
            { icon: Car, label: "Transport", value: "Private vehicle" },
            { icon: Hotel, label: "Accommodation", value: "Hotel / Homestay" },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-3">
              <div className="rounded-xl bg-[#F0B45A]/10 p-3 text-[#F0B45A]">
                <item.icon size={20} />
              </div>
              <div>
                <p className="text-xs text-[#BCCCDC]">{item.label}</p>
                <p className="mt-1 text-xs font-bold text-white sm:text-sm">
                  {item.value}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MAIN CONTENT */}
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_350px] lg:px-8">

        {/* LEFT COLUMN */}
        <div className="min-w-0">
          {/* HIGHLIGHTS */}
          <section>
            <SectionHeading
              eyebrow="The experience"
              title="Your Sikkim journey at a glance"
              description="A carefully planned mountain holiday with comfortable travel, beautiful destinations and memorable experiences."
            />

            <div className="grid gap-3 sm:grid-cols-2">
              {pkg.highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 rounded-xl border border-[#486581]/60 bg-[#1B344B] p-4"
                >
                  <Check size={18} className="mt-0.5 shrink-0 text-[#F0B45A]" />
                  <p className="text-sm leading-6 text-[#D9E2EC]">
                    {highlight}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* DESTINATIONS */}
          <section className="mt-16">
            <SectionHeading
              eyebrow="Places you will explore"
              title="Destinations covered"
              description="Discover the beautiful destinations included in this travel experience."
            />

            <div className="flex flex-wrap gap-3">
              {pkg.destinations.map((place) => (
                <span
                  key={place}
                  className="flex items-center gap-2 rounded-full border border-[#486581] bg-[#243B53] px-4 py-2.5 text-sm text-[#D9E2EC]"
                >
                  <MapPin size={14} className="text-[#70C1D3]" />
                  {place}
                </span>
              ))}
            </div>
          </section>

          {/* ITINERARY */}
          <section id="itinerary" className="mt-16 scroll-mt-28">
            <SectionHeading
              eyebrow="Your day-by-day journey"
              title="Complete tour itinerary"
              description="Explore the complete travel plan, including daily activities, overnight stays, meals and approximate travel times."
            />

            <div>
              {pkg.itinerary.map((day, index) => (
                <ItineraryDay
                  key={`${pkg.id}-${day.day}`}
                  day={day}
                  isLast={index === pkg.itinerary.length - 1}
                />
              ))}
            </div>

            <p className="mt-2 text-xs leading-6 text-[#BCCCDC]">
              Itinerary timings and sightseeing sequences are indicative.
              Actual schedules may change due to road conditions, weather,
              permits and local administration.
            </p>
          </section>

          {/* INCLUSIONS */}
          <section className="mt-16">
            <SectionHeading
              eyebrow="Package details"
              title="What's included and excluded"
              description="Understand what is covered in your tour package before confirming your booking."
            />

            <div className="grid gap-5 md:grid-cols-2">
              <div className="rounded-2xl border border-[#70C1D3]/30 bg-[#70C1D3]/5 p-5">
                <h3 className="mb-5 flex items-center gap-2 text-base font-bold text-white">
                  <Check size={19} className="text-[#70C1D3]" />
                  Package Includes
                </h3>

                <div className="space-y-4">
                  {pkg.inclusions.map((item, index) => (
                    <div key={index} className="flex gap-3">
                      <Check size={16} className="mt-0.5 shrink-0 text-[#70C1D3]" />
                      <p className="text-sm leading-6 text-[#D9E2EC]">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-[#F0B45A]/30 bg-[#F0B45A]/5 p-5">
                <h3 className="mb-5 flex items-center gap-2 text-base font-bold text-white">
                  <X size={19} className="text-[#F0B45A]" />
                  Package Excludes
                </h3>

                <div className="space-y-4">
                  {pkg.exclusions.map((item, index) => (
                    <div key={index} className="flex gap-3">
                      <X size={16} className="mt-0.5 shrink-0 text-[#F0B45A]" />
                      <p className="text-sm leading-6 text-[#D9E2EC]">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* SAFETY */}
          <section className="mt-16">
            <div className="rounded-2xl border border-[#486581] bg-[#1B344B] p-5 sm:p-7">
              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-[#F0B45A]/10 p-3 text-[#F0B45A]">
                  <ShieldCheck size={25} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">
                    Mountain travel and safety information
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-[#BCCCDC]">
                    Sikkim includes high-altitude destinations and mountain
                    roads. Weather, road access and permit requirements can
                    change. Follow local authority instructions and consult a
                    medical professional if you have concerns about high-altitude
                    travel.
                  </p>
                </div>
              </div>

              <div className="mt-6 grid gap-4 border-t border-[#486581] pt-5 sm:grid-cols-2">
                <div className="flex gap-3">
                  <Mountain size={18} className="shrink-0 text-[#70C1D3]" />
                  <p className="text-xs leading-6 text-[#BCCCDC]">
                    Carry warm clothing, personal medication and valid identity
                    documents.
                  </p>
                </div>
                <div className="flex gap-3">
                  <FileCheck size={18} className="shrink-0 text-[#70C1D3]" />
                  <p className="text-xs leading-6 text-[#BCCCDC]">
                    Restricted-area sightseeing requires applicable permits and
                    approval from the authorities.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="mt-16" id="package-faq">
            <SectionHeading
              eyebrow="Need more information?"
              title="Frequently asked questions"
              description="Some common questions about planning your Sikkim trip."
            />

            <div className="space-y-3">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="overflow-hidden rounded-xl border border-[#486581] bg-[#1B344B]"
                >
                  <button
                    onClick={() =>
                      setActiveFaq(activeFaq === index ? -1 : index)
                    }
                    className="flex w-full items-center justify-between gap-4 p-4 text-left"
                  >
                    <span className="text-sm font-semibold text-white">
                      {faq.question}
                    </span>
                    {activeFaq === index ? (
                      <ChevronUp size={18} className="shrink-0 text-[#F0B45A]" />
                    ) : (
                      <ChevronDown size={18} className="shrink-0 text-[#F0B45A]" />
                    )}
                  </button>

                  <AnimatePresence>
                    {activeFaq === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                      >
                        <p className="border-t border-[#486581] px-4 py-4 text-sm leading-7 text-[#BCCCDC]">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* RIGHT BOOKING SIDEBAR */}
        <aside className="lg:sticky lg:top-28 lg:self-start" id="booking">
          <div className="rounded-2xl border border-[#486581] bg-[#1B344B] p-5 shadow-2xl">
            <p className="text-xs font-bold uppercase tracking-wider text-[#F0B45A]">
              Plan your trip
            </p>

            <h3 className="mt-3 text-2xl font-bold text-white">
              {pkg.name}
            </h3>

            <p className="mt-2 text-sm text-[#BCCCDC]">{pkg.duration}</p>

            <div className="my-5 border-t border-[#486581]" />

            <p className="text-xs text-[#BCCCDC]">Package price</p>
            <p className="mt-1 text-2xl font-bold text-[#F0B45A]">
              {pkg.price}
            </p>
            <p className="mt-1 text-xs text-[#BCCCDC]">
              Final price depends on dates, group size and hotel category.
            </p>

            <div className="mt-6 space-y-5">
              <div>
                <label className="field-label">Travel date</label>
                <input
                  type="date"
                  value={travelDate}
                  onChange={(e) => setTravelDate(e.target.value)}
                  min={new Date().toISOString().split("T")[0]}
                  className="field-control"
                />
              </div>

              <div>
                <label className="field-label">Number of travellers</label>
                <div className="flex items-center justify-between rounded-lg border border-[#486581] bg-[#102A43] p-2">
                  <span className="pl-2 text-sm text-[#D9E2EC]">
                    Travellers
                  </span>

                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => setTravellers(Math.max(1, travellers - 1))}
                      className="rounded-lg bg-[#243B53] p-2 text-white hover:bg-[#344F69]"
                      aria-label="Remove traveller"
                    >
                      <X size={15} />
                    </button>

                    <span className="min-w-4 text-center text-sm font-bold">
                      {travellers}
                    </span>

                    <button
                      onClick={() => setTravellers(Math.min(20, travellers + 1))}
                      className="rounded-lg bg-[#243B53] p-2 text-white hover:bg-[#344F69]"
                      aria-label="Add traveller"
                    >
                      <Users size={15} />
                    </button>
                  </div>
                </div>
              </div>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#F0B45A] px-5 py-4 text-sm font-bold text-[#102A43] transition hover:bg-[#D99A3E]"
              >
                <MessageCircle size={18} />
                Get Package Quote
              </a>

              <a
                href="tel:+918001055069"
                className="flex w-full items-center justify-center gap-2 rounded-lg border border-[#486581] px-5 py-3 text-sm font-bold text-white transition hover:border-[#F0B45A] hover:text-[#F0B45A]"
              >
                <Phone size={17} />
                +91 80010 55069
              </a>
            </div>

            <div className="mt-6 flex items-start gap-3 rounded-xl bg-[#102A43] p-3">
              <ShieldCheck size={18} className="mt-0.5 shrink-0 text-[#70C1D3]" />
              <p className="text-xs leading-6 text-[#BCCCDC]">
                Speak with our local travel team to customise your itinerary
                and check current availability.
              </p>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-[#486581] bg-[#243B53] p-5">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-[#F0B45A]/10 p-3 text-[#F0B45A]">
                <Camera size={21} />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">
                  Need a custom trip?
                </h4>
                <p className="mt-1 text-xs text-[#BCCCDC]">
                  Tell us your travel preferences.
                </p>
              </div>
            </div>

            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                "Hello Hello Sikkims! I would like to customise a Sikkim tour package."
              )}`}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#F0B45A] hover:text-white"
            >
              Customise My Tour <ArrowRight size={16} />
            </a>
          </div>
        </aside>
      </div>

      {/* FINAL CTA */}
      <section className="bg-[#1B344B]">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[.2em] text-[#F0B45A]">
            Your mountains are calling
          </p>

          <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-bold text-white sm:text-4xl">
            Let's plan your next Sikkim adventure.
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[#BCCCDC]">
            Get in touch with our local team for personalised assistance,
            package availability and a detailed quotation.
          </p>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[#F0B45A] px-6 py-4 text-sm font-bold text-[#102A43] hover:bg-[#D99A3E]"
          >
            <MessageCircle size={18} />
            Enquire on WhatsApp
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[#486581] bg-[#102A43]">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 px-4 py-8 text-xs text-[#BCCCDC] sm:flex-row sm:px-6 lg:px-8">
          <p>
            © {new Date().getFullYear()} Hello Sikkims. All rights reserved.
          </p>
          <p>Explore Sikkim with local mountain expertise.</p>
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
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="flex flex-[1.5] items-center justify-center gap-2 rounded-lg bg-[#F0B45A] py-3 text-sm font-bold text-[#102A43]"
        >
          <MessageCircle size={17} />
          Enquire Now
        </a>
      </div>

      <div className="h-16 lg:hidden" />
    </main>
  );
}
