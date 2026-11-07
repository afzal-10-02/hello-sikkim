
import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Mountain,
  Wind,
  Bike,
  Waves,
  CableCar,
  Bird,
  Compass,
  ShieldCheck,
  Clock,
  MapPin,
  Phone,
  MessageCircle,
  ChevronDown,
  ChevronUp,
  Trees,
  Pickaxe,
} from "lucide-react";

const WHATSAPP_NUMBER = "919064256851";
const PHONE_NUMBER = "+918001055069";

const activities = [
  {
    id: "trekking",
    title: "Trekking",
    category: "Mountain Adventure",
    description:
      "Explore Sikkim's Himalayan trails, scenic valleys, mountain meadows, waterfalls and beautiful landscapes. Experience the quiet beauty of the mountains at your own pace.",
    image:
      "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=1000&q=85",
    icon: Mountain,
    tag: "Explore the Himalayas",
  },
  {
    id: "paragliding",
    title: "Paragliding",
    category: "Aerial Adventure",
    description:
      "Experience the thrill of flying above Sikkim's beautiful landscapes. Hello Sikkims highlights Chakung and Bulbuley Dara as paragliding destinations.",
    image:
      "https://images.unsplash.com/photo-1473973266408-ed4e27abdd47?auto=format&fit=crop&w=1000&q=85",
    icon: Wind,
    tag: "Fly above the valleys",
  },
  {
    id: "rafting",
    title: "River Rafting",
    category: "Water Adventure",
    description:
      "Discover the excitement of white water rafting on the Teesta River, one of Sikkim's most important rivers, with rapids along its course.",
    image:
      "https://images.unsplash.com/photo-1530866495561-507c9faab2ed?auto=format&fit=crop&w=1000&q=85",
    icon: Waves,
    tag: "Ride the rapids",
  },
  {
    id: "mountain-biking",
    title: "Mountain Biking",
    category: "Cycling Adventure",
    description:
      "Explore Sikkim's mountain roads, green slopes, streams and scenic landscapes on a cycling adventure through the hills.",
    image:
      "https://images.unsplash.com/photo-1544191696-15693072b4e8?auto=format&fit=crop&w=1000&q=85",
    icon: Bike,
    tag: "Ride through the mountains",
  },
  {
    id: "ropeway",
    title: "Gangtok Ropeway",
    category: "Scenic Experience",
    description:
      "Enjoy a cable car ride from Deorali and take in sweeping views of Gangtok township, surrounding valleys and the Himalayan peaks.",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1000&q=85",
    icon: CableCar,
    tag: "See Gangtok from above",
  },
  {
    id: "rock-climbing",
    title: "Rock Climbing",
    category: "Outdoor Adventure",
    description:
      "Challenge yourself with a climbing experience across natural rock formations or suitable climbing walls.",
    image:
      "https://images.unsplash.com/photo-1522163182402-834f871fd851?auto=format&fit=crop&w=1000&q=85",
    icon: Pickaxe,
    tag: "Challenge your limits",
  },
  {
    id: "bird-watching",
    title: "Bird Watching",
    category: "Nature Experience",
    description:
      "Slow down and enjoy wildlife observation in Sikkim's natural surroundings. Discover the region through its birdlife and peaceful landscapes.",
    image:
      "https://images.unsplash.com/photo-1444464666168-49d633b86797?auto=format&fit=crop&w=1000&q=85",
    icon: Bird,
    tag: "Discover nature",
  },
];

const highlights = [
  {
    icon: Mountain,
    title: "Himalayan Landscapes",
    text: "Explore mountain trails, valleys and scenic viewpoints.",
  },
  {
    icon: Compass,
    title: "Different Experiences",
    text: "Choose from outdoor, aerial, water and nature activities.",
  },
  {
    icon: ShieldCheck,
    title: "Plan with Care",
    text: "Get help enquiring about activity providers and arrangements.",
  },
];

const faqs = [
  {
    question: "What adventure activities can I experience in Sikkim?",
    answer:
      "You can enquire about trekking, paragliding, river rafting, mountain biking, rock climbing, bird watching and the Gangtok ropeway.",
  },
  {
    question: "Where can I experience paragliding in Sikkim?",
    answer:
      "Hello Sikkims highlights Chakung and Bulbuley Dara as paragliding destinations. Actual take-off locations and operations depend on the activity provider and conditions.",
  },
  {
    question: "Can I include adventure activities in my Sikkim tour?",
    answer:
      "Yes. You can contact Hello Sikkims with your travel dates and preferred activities to enquire about combining experiences with your Sikkim trip.",
  },
  {
    question: "Is river rafting available in Sikkim?",
    answer:
      "The Teesta River is highlighted for rafting opportunities. Availability, permitted stretches and operating conditions should be confirmed with the local rafting operator.",
  },
  {
    question: "Do I need to book adventure activities in advance?",
    answer:
      "Advance enquiry is recommended, especially when you have fixed travel dates. Activity availability can depend on weather, local operating conditions and provider schedules.",
  },
];

function SectionHeading({ eyebrow, title, description, center = false }) {
  return (
    <div className={`mb-12 ${center ? "text-center" : ""}`}>
      <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-[#F0B45A]">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-bold leading-tight text-[#F8FAFC] sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p className={`mt-4 max-w-2xl text-base leading-7 text-[#BCCCDC] ${center ? "mx-auto" : ""}`}>
          {description}
        </p>
      )}
    </div>
  );
}

export default function Adventure() {
  const [activeFaq, setActiveFaq] = useState(0);
  const [selectedActivity, setSelectedActivity] = useState("Trekking");
  const [travelDate, setTravelDate] = useState("");
  const [people, setPeople] = useState("2");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const sendEnquiry = (e) => {
    e.preventDefault();

    const message = `Hello Hello Sikkims!

I want to enquire about an adventure activity in Sikkim.

Activity: ${selectedActivity}
Travel Date: ${travelDate || "Not decided"}
Number of Travellers: ${people}
Name: ${name}
Phone: ${phone}

Please share the details and availability.`;

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  const enquireActivity = (activity) => {
    const message = `Hello Hello Sikkims! I am interested in ${activity} in Sikkim. Please share the details, availability and booking process.`;

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#102A43] text-[#F8FAFC]">
      {/* HERO */}
      <section className="relative flex min-h-[650px] items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=2000&q=90')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#102A43] via-[#102A43]/85 to-[#102A43]/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#102A43] via-transparent to-[#102A43]/20" />

        <div className="relative mx-auto w-full max-w-7xl px-5 pb-24 pt-36 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#F0B45A]/40 bg-[#102A43]/60 px-4 py-2 text-sm font-semibold text-[#F0B45A] backdrop-blur-md">
              <Mountain size={16} />
              ADVENTURE IN SIKKIM
            </div>

            <h1 className="text-5xl font-bold leading-[1.08] sm:text-6xl lg:text-7xl">
              Find Your
              <span className="block text-[#F0B45A]">Next Adventure.</span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-[#E2E8F0] sm:text-lg">
              From Himalayan trails to thrilling river experiences, discover
              another side of Sikkim. Choose your adventure and let us help
              you plan the experience.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#activities"
                className="inline-flex items-center gap-2 rounded-lg bg-[#F0B45A] px-7 py-4 font-bold text-[#102A43] transition hover:bg-[#D99A3E]"
              >
                Explore Activities <ArrowRight size={18} />
              </a>
              <a
                href="#enquiry"
                className="rounded-lg border border-white/40 px-7 py-4 font-semibold text-white transition hover:bg-white/10"
              >
                Plan Your Adventure
              </a>
            </div>

            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-4 text-sm text-[#E2E8F0]">
              <span className="flex items-center gap-2">
                <Mountain size={17} className="text-[#F0B45A]" />
                Himalayan Experiences
              </span>
              <span className="flex items-center gap-2">
                <Compass size={17} className="text-[#F0B45A]" />
                Outdoor Exploration
              </span>
              <span className="flex items-center gap-2">
                <MapPin size={17} className="text-[#F0B45A]" />
                Across Sikkim
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* INTRO */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Go Explore"
              title="Beyond the Ordinary Holiday"
              description="Sikkim offers more than beautiful mountain views. Discover outdoor activities, scenic experiences and opportunities to connect with the natural surroundings of the Himalayas."
            />
            <p className="leading-8 text-[#BCCCDC]">
              Whether you enjoy walking through mountain trails, cycling
              across hilly landscapes, flying above valleys or exploring
              rivers, there is an adventure experience to enquire about.
              Choose what excites you and start planning your journey.
            </p>
            <a
              href="#activities"
              className="mt-8 inline-flex items-center gap-2 font-bold text-[#F0B45A] hover:text-[#D99A3E]"
            >
              Discover all activities <ArrowRight size={18} />
            </a>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=1100&q=85"
              alt="Mountain landscape in the Himalayas"
              className="h-[420px] w-full rounded-2xl object-cover"
            />
            <div className="absolute -bottom-5 -left-3 rounded-xl border border-[#486581] bg-[#243B53] p-5 shadow-xl sm:-left-6">
              <p className="text-sm text-[#BCCCDC]">Discover</p>
              <p className="mt-1 text-2xl font-bold text-[#F0B45A]">
                Sikkim
              </p>
              <p className="mt-1 text-sm text-[#F8FAFC]">
                Your next mountain escape
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="border-y border-[#486581]/50 bg-[#1B344B] py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:grid-cols-3 sm:px-8 lg:px-12">
          {highlights.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#F0B45A]/10 text-[#F0B45A]">
                  <Icon size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#BCCCDC]">
                    {item.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ACTIVITIES */}
      <section id="activities" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-12">
        <SectionHeading
          eyebrow="Choose Your Experience"
          title="Adventure Activities in Sikkim"
          description="Find an experience that matches your sense of adventure. Enquire with us for activity details, local arrangements and availability."
          center
        />

        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {activities.map((activity, index) => {
            const Icon = activity.icon;

            return (
              <motion.article
                key={activity.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                className="group overflow-hidden rounded-2xl border border-[#486581]/60 bg-[#1B344B] transition duration-300 hover:-translate-y-2 hover:border-[#F0B45A]/60 hover:shadow-2xl hover:shadow-black/20"
              >
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={activity.image}
                    alt={activity.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#102A43]/90 via-transparent to-transparent" />

                  <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-[#102A43]/75 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur">
                    {activity.category}
                  </span>

                  <div className="absolute bottom-4 left-4 flex items-center gap-2 text-sm font-semibold text-[#F0B45A]">
                    <Icon size={17} />
                    {activity.tag}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white">
                    {activity.title}
                  </h3>

                  <p className="mt-3 min-h-[100px] text-sm leading-7 text-[#BCCCDC]">
                    {activity.description}
                  </p>

                  <button
                    onClick={() => enquireActivity(activity.title)}
                    className="mt-6 flex w-full items-center justify-between rounded-lg border border-[#486581] px-4 py-3 font-semibold text-[#F0B45A] transition hover:border-[#F0B45A] hover:bg-[#F0B45A] hover:text-[#102A43]"
                  >
                    Enquire Now <ArrowRight size={18} />
                  </button>
                </div>
              </motion.article>
            );
          })}
        </div>
      </section>

      {/* FEATURED PARAGLIDING */}
      <section className="bg-[#243B53]">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:px-12">
          <div className="order-2 lg:order-1">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-[#F0B45A]">
              Aerial Adventure
            </p>
            <h2 className="text-4xl font-bold leading-tight sm:text-5xl">
              See Sikkim From a Different Perspective
            </h2>
            <p className="mt-6 leading-8 text-[#BCCCDC]">
              Paragliding is one of the adventure experiences featured by
              Hello Sikkims. The existing website highlights Chakung and
              Bulbuley Dara, with Chakung offering views of the Rangit River,
              Jorethang and surrounding landscapes.
            </p>
            <p className="mt-4 leading-8 text-[#BCCCDC]">
              Flight duration, take-off points and landing arrangements
              depend on the operator and conditions on the day.
            </p>
            <button
              onClick={() => enquireActivity("Paragliding")}
              className="mt-8 inline-flex items-center gap-3 rounded-lg bg-[#F0B45A] px-6 py-4 font-bold text-[#102A43] transition hover:bg-[#D99A3E]"
            >
              Enquire About Paragliding <ArrowRight size={18} />
            </button>
          </div>

          <div className="order-1 lg:order-2">
            <img
              src="https://images.unsplash.com/photo-1473973266408-ed4e27abdd47?auto=format&fit=crop&w=1200&q=90"
              alt="Paragliding adventure"
              className="h-[430px] w-full rounded-2xl object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* TREKKING FEATURE */}
      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-12">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=700&q=85"
              alt="Hiking trail"
              className="h-64 w-full rounded-2xl object-cover"
              loading="lazy"
            />
            <img
              src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=700&q=85"
              alt="Snow covered Himalayan mountains"
              className="mt-12 h-64 w-full rounded-2xl object-cover"
              loading="lazy"
            />
          </div>

          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-[#F0B45A]">
              Explore the Himalayas
            </p>
            <h2 className="text-4xl font-bold leading-tight sm:text-5xl">
              Find Your Trail. Feel the Mountains.
            </h2>
            <p className="mt-6 leading-8 text-[#BCCCDC]">
              Trekking in Sikkim takes you through scenic valleys, meadows,
              mountain landscapes and peaceful trails. The Hello Sikkims
              trekking page describes the experience as an opportunity to
              discover quieter parts of the region and enjoy the surrounding
              natural beauty.
            </p>
            <div className="mt-6 space-y-3 text-sm text-[#E2E8F0]">
              {[
                "Scenic mountain trails and valleys",
                "Views of snow-capped Himalayan peaks",
                "Waterfalls and natural landscapes",
                "Experiences for nature lovers and adventure seekers",
              ].map((point) => (
                <div key={point} className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-[#F0B45A]" />
                  {point}
                </div>
              ))}
            </div>
            <button
              onClick={() => enquireActivity("Trekking")}
              className="mt-8 inline-flex items-center gap-3 rounded-lg bg-[#F0B45A] px-6 py-4 font-bold text-[#102A43] transition hover:bg-[#D99A3E]"
            >
              Enquire About Treks <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* BOOKING ENQUIRY */}
      <section id="enquiry" className="bg-[#1B344B] py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:px-12">
          <div className="flex flex-col justify-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-[#F0B45A]">
              Start Planning
            </p>
            <h2 className="text-4xl font-bold leading-tight sm:text-5xl">
              Your Next Adventure Starts Here.
            </h2>
            <p className="mt-6 max-w-lg leading-8 text-[#BCCCDC]">
              Tell us what you would like to experience in Sikkim. Our team
              can help you enquire about activity arrangements and plan the
              rest of your trip.
            </p>

            <div className="mt-10 space-y-6">
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="flex items-center gap-4"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#F0B45A]/10 text-[#F0B45A]">
                  <Phone size={22} />
                </div>
                <div>
                  <p className="text-sm text-[#BCCCDC]">Call us</p>
                  <p className="mt-1 font-bold text-white">{PHONE_NUMBER}</p>
                </div>
              </a>

              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#F0B45A]/10 text-[#F0B45A]">
                  <MessageCircle size={22} />
                </div>
                <div>
                  <p className="text-sm text-[#BCCCDC]">WhatsApp</p>
                  <p className="mt-1 font-bold text-white">
                    +91 90642 56851
                  </p>
                </div>
              </a>
            </div>
          </div>

          <form
            onSubmit={sendEnquiry}
            className="rounded-2xl border border-[#486581] bg-[#243B53] p-6 shadow-2xl sm:p-8"
          >
            <h3 className="text-2xl font-bold">Adventure Enquiry</h3>
            <p className="mt-2 text-sm text-[#BCCCDC]">
              Share your details and continue your enquiry on WhatsApp.
            </p>

            <div className="mt-7 space-y-5">
              <div>
                <label className="mb-2 block text-sm font-semibold text-[#E2E8F0]">
                  Select Activity
                </label>
                <select
                  value={selectedActivity}
                  onChange={(e) => setSelectedActivity(e.target.value)}
                  className="w-full rounded-lg border border-[#486581] bg-[#102A43] px-4 py-3 text-white outline-none focus:border-[#F0B45A]"
                >
                  {activities.map((activity) => (
                    <option key={activity.id} value={activity.title}>
                      {activity.title}
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-semibold text-[#E2E8F0]">
                    Travel Date
                  </label>
                  <input
                    type="date"
                    min={new Date().toISOString().split("T")[0]}
                    value={travelDate}
                    onChange={(e) => setTravelDate(e.target.value)}
                    className="w-full rounded-lg border border-[#486581] bg-[#102A43] px-4 py-3 text-white outline-none focus:border-[#F0B45A]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-[#E2E8F0]">
                    Travellers
                  </label>
                  <select
                    value={people}
                    onChange={(e) => setPeople(e.target.value)}
                    className="w-full rounded-lg border border-[#486581] bg-[#102A43] px-4 py-3 text-white outline-none focus:border-[#F0B45A]"
                  >
                    {Array.from({ length: 15 }, (_, i) => i + 1).map((n) => (
                      <option key={n} value={n}>
                        {n} {n === 1 ? "Person" : "People"}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-[#E2E8F0]">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  className="w-full rounded-lg border border-[#486581] bg-[#102A43] px-4 py-3 text-white outline-none placeholder:text-[#829AB1] focus:border-[#F0B45A]"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-[#E2E8F0]">
                  Phone Number
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Enter your phone number"
                  className="w-full rounded-lg border border-[#486581] bg-[#102A43] px-4 py-3 text-white outline-none placeholder:text-[#829AB1] focus:border-[#F0B45A]"
                />
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-3 rounded-lg bg-[#F0B45A] px-6 py-4 font-bold text-[#102A43] transition hover:bg-[#D99A3E]"
              >
                Send Enquiry on WhatsApp
                <ArrowRight size={18} />
              </button>

              <p className="text-center text-xs leading-5 text-[#829AB1]">
                This form opens WhatsApp with your enquiry details. No
                booking or payment is made through this form.
              </p>
            </div>
          </form>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-4xl px-5 py-24 sm:px-8">
        <SectionHeading
          eyebrow="Need to Know"
          title="Frequently Asked Questions"
          description="A few things to know before planning your adventure in Sikkim."
          center
        />

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = activeFaq === index;

            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-xl border border-[#486581] bg-[#1B344B]"
              >
                <button
                  onClick={() => setActiveFaq(isOpen ? -1 : index)}
                  className="flex w-full items-center justify-between gap-5 p-5 text-left font-semibold text-white"
                >
                  {faq.question}
                  {isOpen ? (
                    <ChevronUp className="shrink-0 text-[#F0B45A]" />
                  ) : (
                    <ChevronDown className="shrink-0 text-[#F0B45A]" />
                  )}
                </button>

                {isOpen && (
                  <div className="border-t border-[#486581] px-5 py-5 text-sm leading-7 text-[#BCCCDC]">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-5 pb-24 sm:px-8">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-2xl bg-[#F0B45A] px-6 py-16 text-center sm:px-12">
          <div className="absolute -right-16 -top-24 h-64 w-64 rounded-full border-[35px] border-[#102A43]/10" />
          <div className="absolute -bottom-32 -left-16 h-64 w-64 rounded-full border-[35px] border-[#102A43]/10" />

          <div className="relative">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#243B53]">
              Hello Sikkims
            </p>
            <h2 className="mt-4 text-3xl font-bold text-[#102A43] sm:text-5xl">
              Ready for an Adventure?
            </h2>
            <p className="mx-auto mt-5 max-w-xl leading-7 text-[#243B53]">
              Tell us what kind of experience you are looking for and start
              planning your Sikkim adventure.
            </p>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hello Hello Sikkims! I would like to plan an adventure trip in Sikkim.")}`}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-3 rounded-lg bg-[#102A43] px-7 py-4 font-bold text-white transition hover:bg-[#243B53]"
            >
              <MessageCircle size={19} />
              Talk to Our Team
            </a>
          </div>
        </div>
      </section>

      {/* MOBILE CONTACT BAR */}
      <div className="fixed bottom-0 left-0 right-0 z-50 flex gap-3 border-t border-[#486581] bg-[#102A43]/95 p-3 backdrop-blur-lg md:hidden">
        <a
          href={`tel:${PHONE_NUMBER}`}
          className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-[#486581] py-3 font-semibold text-white"
        >
          <Phone size={17} /> Call
        </a>
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}`}
          target="_blank"
          rel="noreferrer"
          className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-[#F0B45A] py-3 font-bold text-[#102A43]"
        >
          <MessageCircle size={17} /> WhatsApp
        </a>
      </div>
    </main>
  );
}
