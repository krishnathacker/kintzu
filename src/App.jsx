import { useEffect } from "react";
import { motion } from "framer-motion";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, BarChart, Bar, Legend } from "recharts";
import { ArrowRight, Landmark, Scale, Users, Compass, Handshake, Heart, ChartLine, Rocket, Shield, Mail, Globe, CheckCircle2 } from "lucide-react";

const revenueData = [
  { year: "Year 1", revenue: 0.5 },
  { year: "Year 2", revenue: 3.0 },
  { year: "Year 3", revenue: 7.5 },
];

const usersData = [
  { year: "Year 1", users: 1500 },
  { year: "Year 2", users: 10000 },
  { year: "Year 3", users: 35000 },
];

const marketPie = [
  { name: "Therapy", value: 7000 },
  { name: "Legal & Mediation", value: 2000 },
  { name: "Financial Adjacent", value: 3000 },
];

const fundsData = [
  { name: "Product & Tech", value: 35 },
  { name: "Expert Network QA", value: 25 },
  { name: "Marketing & Trust", value: 25 },
  { name: "Ops & Compliance", value: 15 },
];

const revenueBlend = [
  { channel: "Mix", Memberships: 45, Marketplace: 35, Corporate: 15, Affiliate: 5 },
];

const ltvCac = [
  { year: "Year 1", ratio: 5.0 },
  { year: "Year 2", ratio: 10.4 },
  { year: "Year 3", ratio: 16.7 },
];

const COLORS = ["#D4AF37", "#8FB7B3", "#3E4E6C", "#B8A58B"];

const Section = ({ id, title, kicker, children }) => (
  <section id={id} className="scroll-mt-24 py-20">
    <div className="max-w-6xl mx-auto px-4">
      {kicker && <p className="uppercase tracking-widest text-[12px] text-slate-500 mb-2">{kicker}</p>}
      <h2 className="text-3xl md:text-4xl font-semibold text-slate-800 mb-6">{title}</h2>
      <div className="prose prose-lg max-w-none text-slate-700">{children}</div>
    </div>
  </section>
);

const Pill = ({ children }) => (
  <span className="inline-flex items-center gap-2 rounded-2xl border border-amber-300/50 bg-amber-50 px-3 py-1 text-sm text-amber-800">{children}</span>
);

export default function InvestorMicrosite() {
  useEffect(() => {
    const handleClick = (e) => {
      const target = e.target.closest("a[href^='#']");
      if (!target) return;
      e.preventDefault();
      document.querySelector(target.getAttribute("href"))?.scrollIntoView({ behavior: "smooth", block: "start" });
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#FDFBF8_0%,#F8E6D3_100%)] text-slate-800">
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/60 border-b border-amber-200/40">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 rounded-full bg-amber-300 relative overflow-hidden">
              <div className="absolute left-1/2 -translate-x-1/2 rotate-12 w-[2px] h-8 bg-amber-500"></div>
            </div>
            <span className="font-serif text-2xl tracking-wide">Kintzu</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#problem" className="hover:text-slate-600">Problem</a>
            <a href="#market" className="hover:text-slate-600">Market</a>
            <a href="#solution" className="hover:text-slate-600">Solution</a>
            <a href="#product" className="hover:text-slate-600">Product</a>
            <a href="#model" className="hover:text-slate-600">Model</a>
            <a href="#financials" className="hover:text-slate-600">Financials</a>
            <a href="#roadmap" className="hover:text-slate-600">Roadmap</a>
            <a href="#team" className="hover:text-slate-600">Team</a>
            <a href="#ask" className="hover:text-slate-600">Ask</a>
            <a href="#summary" className="hover:text-slate-600">Summary</a>
            <a href="#contact" className="hover:text-slate-600">Contact</a>
          </nav>
          <a href="#contact" className="hidden md:inline-flex items-center gap-2 rounded-2xl bg-amber-400 hover:bg-amber-500 text-white px-4 py-2 text-sm transition"><Mail size={16}/> Get in touch</a>
        </div>
      </header>

      <section id="hero" className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 py-24 md:py-28">
          <motion.h1 initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{duration:0.6}} className="text-4xl md:text-6xl font-serif leading-tight text-slate-900">
            KINTZU: <span className="text-amber-600">Life Transition Infrastructure</span>
          </motion.h1>
          <motion.p initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{delay:0.1,duration:0.6}} className="mt-5 text-lg md:text-xl max-w-4xl">
            Kintzu helps people navigate relationship transitions with dignity and structure — combining therapy, legal guidance, and financial clarity in one trusted experience.
          </motion.p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Pill><Shield size={16}/> Privacy-first</Pill>
            <Pill><Heart size={16}/> Human in the loop</Pill>
            <Pill><Compass size={16}/> Guided decisions</Pill>
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href="#solution" className="inline-flex items-center gap-2 rounded-2xl bg-amber-400 hover:bg-amber-500 text-white px-5 py-3 text-sm md:text-base transition">Explore the solution <ArrowRight size={16}/></a>
            <a href="#financials" className="inline-flex items-center gap-2 rounded-2xl border border-slate-300 bg-white hover:bg-slate-50 px-5 py-3 text-sm md:text-base transition">See projections <ChartLine size={16}/></a>
          </div>
        </div>
        <svg className="absolute -bottom-12 right-0 w-[520px] h-[220px] opacity-70" viewBox="0 0 600 260" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 200 C120 120, 240 280, 360 160 S 520 40, 600 120" stroke="#D4AF37" strokeWidth="6" strokeLinecap="round"/>
        </svg>
      </section>

      <Section id="problem" title="The Crisis: Emotional Chaos, Structural Void" kicker="Context">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <p>Every year, India’s family courts handle <strong>8.2 lakh cases</strong>. Fewer than <strong>10%</strong> access support before litigation.</p>
            <div className="mt-4 rounded-xl border bg-white/70 p-4">
              <p className="font-medium mb-2">CRISIS — three simultaneous pillars:</p>
              <ul className="space-y-2">
                <li>1) Emotional Confusion</li>
                <li>2) Legal Opacity</li>
                <li>3) Financial Disarray</li>
              </ul>
            </div>
            <p className="mt-4">People must navigate life-changing choices alone — without maps or meaningful support.</p>
          </div>
          <div className="bg-white/70 rounded-2xl border border-amber-200/60 p-6 shadow-sm">
            <ul className="space-y-3 text-slate-700">
              <li className="flex items-start gap-3"><Landmark className="mt-1 text-slate-500" size={18}/> Distressed couples vs. chaotic legal/financial files</li>
              <li className="flex items-start gap-3"><Users className="mt-1 text-slate-500" size={18}/> Tone: Empathetic & Urgent</li>
              <li className="flex items-start gap-3"><Scale className="mt-1 text-slate-500" size={18}/> Visual: Split screen composition</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section id="market" title="The Market Void: A ₹12,000 Cr Category Awaiting a Brand" kicker="TAM • SAM • Beachhead">
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div>
            <p>The relationship-lifecycle economy in India exceeds <strong>₹12,000 crore ($1B+)</strong>, but is fragmented and unbranded.</p>
            <div className="mt-4 rounded-xl border bg-white p-4 inline-flex items-center gap-3">
              <span className="text-amber-700 font-semibold text-xl">₹12,000 Cr</span>
              <span className="text-slate-500">Total Addressable Market</span>
            </div>
          </div>
          <div className="rounded-2xl border bg-white p-4">
            <p className="mb-2 font-medium">Market Composition (Donut)</p>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={marketPie} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={70} outerRadius={110} paddingAngle={2}>
                    {marketPie.map((entry, index) => (
                      <Cell key={`cellm-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </Section>

      <Section id="solution" title="Our Solution: A Guided, Human-First Companion" kicker="Reflection • Resolution • Reorganization">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="rounded-2xl border bg-white p-6">
            <div className="flex items-center gap-2 mb-2 text-amber-700 font-semibold"><Compass size={18}/> Reflection</div>
            <p><strong>Need:</strong> Clarity & Courage → <strong>Compass™</strong>: Guided self-assessment.</p>
          </div>
          <div className="rounded-2xl border bg-white p-6">
            <div className="flex items-center gap-2 mb-2 text-amber-700 font-semibold"><Handshake size={18}/> Resolution</div>
            <p><strong>Need:</strong> Action & Trust → <strong>Counsel</strong>: Verified experts.</p>
          </div>
          <div className="rounded-2xl border bg-white p-6">
            <div className="flex items-center gap-2 mb-2 text-amber-700 font-semibold"><Users size={18}/> Reorganization</div>
            <p><strong>Need:</strong> Stability & Renewal → <strong>Circle + Dashboard</strong>.</p>
          </div>
        </div>
        <p className="mt-6 font-medium">Kintzu’s differentiated value lies in <em>Continuity</em>.</p>
      </Section>

      <Section id="product" title="Product Experience: Built for Fragility" kicker="Designed for fragility">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <p>Anonymous onboarding, calm visuals, human-in-the-loop, and privacy by design.</p>
          </div>
          <div className="rounded-2xl border bg-white p-6">
            <p className="font-semibold mb-3">Trust signals</p>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div className="rounded-xl border p-3">Zero ads • Zero resale</div>
              <div className="rounded-xl border p-3">Clinical escalation SOPs</div>
              <div className="rounded-xl border p-3">Bar Council-verified lawyers</div>
              <div className="rounded-xl border p-3">RCI-certified therapists</div>
            </div>
          </div>
        </div>
      </Section>

      <Section id="model" title="Business Model: High Margin Hybrid" kicker="Multi-revenue stack">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <p>Subscriptions + marketplace fees + corporate partnerships.</p>
          </div>
          <div className="rounded-2xl border bg-white p-6">
            <p className="mb-3 font-medium">Revenue Stack Blend (Year 3)</p>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={revenueBlend} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                  <XAxis dataKey="channel" hide />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="Memberships" stackId="a" fill="#D4AF37" />
                  <Bar dataKey="Marketplace" stackId="a" fill="#8FB7B3" />
                  <Bar dataKey="Corporate" stackId="a" fill="#3E4E6C" />
                  <Bar dataKey="Affiliate" stackId="a" fill="#B8A58B" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </Section>

      <Section id="financials" title="3-Year Financials: Scale, Margin, & LTV" kicker="Revenue • Users • LTV/CAC">
        <div className="grid lg:grid-cols-2 gap-10">
          <div className="rounded-2xl border bg-white p-4">
            <p className="mb-2 font-medium">Revenue Projection (₹ Cr)</p>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={revenueData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                  <XAxis dataKey="year" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="revenue" stroke="#D4AF37" strokeWidth={3} dot={{ r: 4 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div className="rounded-2xl border bg-white p-4">
            <p className="mb-2 font-medium">Paid Users Projection</p>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={usersData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                  <XAxis dataKey="year" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="users" stroke="#3E4E6C" strokeWidth={3} dot={{ r: 4 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
        <div className="mt-8 grid sm:grid-cols-4 gap-4 text-sm">
          <div className="rounded-xl border bg-white p-4"><p className="text-slate-500">Revenue (Y3)</p><p className="text-xl font-semibold">₹7.5 Cr</p></div>
          <div className="rounded-xl border bg-white p-4"><p className="text-slate-500">Paid Users (Y3)</p><p className="text-xl font-semibold">35,000</p></div>
          <div className="rounded-xl border bg-white p-4"><p className="text-slate-500">Gross Margin</p><p className="text-xl font-semibold">78%</p></div>
          <div className="rounded-xl border bg-white p-4"><p className="text-slate-500">Break-even</p><p className="text-xl font-semibold">Q4 Year 3</p></div>
        </div>
      </Section>

      <Section id="contact" title="Let’s build a world where clarity is a right, not a privilege" kicker="Contact">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="rounded-2xl border bg-white p-6 flex items-center gap-3"><Mail className="text-amber-600"/> <div><div className="text-sm text-slate-500">Email</div><div className="font-medium">krishn@kintzu.com</div></div></div>
          <div className="rounded-2xl border bg-white p-6 flex items-center gap-3"><Globe className="text-amber-600"/> <div><div className="text-sm text-slate-500">Web</div><div className="font-medium">www.kintzu.com</div></div></div>
          <div className="rounded-2xl border bg-white p-6 flex items-center gap-3"><Shield className="text-amber-600"/> <div><div className="text-sm text-slate-500">Location</div><div className="font-medium">Bengaluru, India</div></div></div>
        </div>
      </Section>

      <footer className="py-10 border-t border-amber-200/60 text-center text-sm text-slate-500">
        Kintzu © 2025 • Clarity • Courage • Continuity
      </footer>
    </div>
  );
}
