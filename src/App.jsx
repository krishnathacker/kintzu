import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, BarChart, Bar, Legend } from "recharts";
import { ArrowRight, Landmark, Scale, Users, Compass, Handshake, Heart, ChartLine, Briefcase, PieChart as PieIcon, Rocket, Shield, Mail, Globe, CheckCircle2 } from "lucide-react";

// ------------------ DATA ------------------
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

// Market composition (₹ Cr) — matches ₹12,000 Cr total
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

// Revenue stack blend (illustrative %) for Year 3
const revenueBlend = [
  { channel: "Mix", Memberships: 45, Marketplace: 35, Corporate: 15, Affiliate: 5 },
];

// LTV/CAC ratio growth
const ltvCac = [
  { year: "Year 1", ratio: 5.0 }, // 10,000 / 2,000
  { year: "Year 2", ratio: 10.4 }, // 12,500 / 1,200
  { year: "Year 3", ratio: 16.7 }, // 15,000 / 900
];

const COLORS = ["#D4AF37", "#8FB7B3", "#3E4E6C", "#B8A58B"]; // gold, teal, slate, warm neutral

const Section = ({ id, title, kicker, children }) => (
  <section id={id} className="scroll-mt-24 py-20">
    <div className="max-w-6xl mx-auto px-4">
      {kicker && (
        <p className="uppercase tracking-widest text-[12px] text-slate-500 mb-2">{kicker}</p>
      )}
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
    return (
    <AccessGate>) => document.removeEventListener("click", handleClick);
  }, []);

  return (
    <AccessGate>
    <div className="min-h-screen bg-[linear-gradient(180deg,#FDFBF8_0%,#F8E6D3_100%)] text-slate-800">
      {/* NAV */}
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/60 border-b border-amber-200/40">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* Gold seam logo mark */}
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

      {/* HERO / COVER */}
      <section id="hero" className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 py-24 md:py-28">
          <motion.h1 initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{duration:0.6}} className="text-4xl md:text-6xl font-serif leading-tight text-slate-900">
            KINTZU: <span className="text-amber-600">Life Transition Infrastructure</span>
          </motion.h1>
          <motion.p initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{delay:0.1,duration:0.6}} className="mt-5 text-lg md:text-xl max-w-4xl">
            Kintzu helps people navigate relationship transitions with dignity and structure — combining therapy, legal guidance, and financial clarity in one trusted experience. It’s not a divorce platform. It’s <strong>life transition infrastructure</strong>.
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
        {/* Decorative kintsugi seam */}
        <svg className="absolute -bottom-12 right-0 w-[520px] h-[220px] opacity-70" viewBox="0 0 600 260" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 200 C120 120, 240 280, 360 160 S 520 40, 600 120" stroke="#D4AF37" strokeWidth="6" strokeLinecap="round"/>
        </svg>
      </section>

      {/* CRISIS / PROBLEM */}
      <Section id="problem" title="The Crisis: Emotional Chaos, Structural Void" kicker="Context">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <p>
              Every year, India’s family courts handle <strong>8.2 lakh cases</strong>. Fewer than <strong>10%</strong> access support before litigation.
            </p>
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

      {/* MARKET VOID */}
      <Section id="market" title="The Market Void: A ₹12,000 Cr Category Awaiting a Brand" kicker="TAM • SAM • Beachhead">
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div>
            <p>
              The "relationship-lifecycle economy" in India exceeds <strong>₹12,000 crore ($1B+)</strong>, but is fragmented and unbranded. Target: <strong>35M</strong> Urban professionals (28–45 years) — educated, digitally native, and privacy-conscious. Kintzu is positioned to become India’s first trusted life transition brand.
            </p>
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

      {/* TAILWINDS */}
      <Section id="tailwinds" title="Macro Tailwinds: Culture Shifts Toward Clarity" kicker="Why now">
        <div className="grid md:grid-cols-2 gap-10">
          <div className="space-y-3">
            <p>Post-pandemic, India is shifting: Therapy usage doubled. Courts favor mediation. Corporates introduce “life event” benefits. Digital privacy laws (DPDP 2023) enable confidential B2C services.</p>
            <p>Consumers now expect calm, confidential, judgment-free digital help.</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {["Therapy adoption ↑","Mediation momentum","Corporate benefits","Privacy-first infra"].map((t,i) => (
              <div key={i} className="rounded-xl border bg-white p-4 text-sm font-medium">
                <span className="text-amber-600">•</span> {t}
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* SOLUTION / JOURNEY */}
      <Section id="solution" title="Our Solution: A Guided, Human-First Companion" kicker="Reflection • Resolution • Reorganization">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="rounded-2xl border bg-white p-6">
            <div className="flex items-center gap-2 mb-2 text-amber-700 font-semibold"><Compass size={18}/> Reflection</div>
            <p><strong>Need:</strong> Clarity & Courage → <strong>Compass™</strong>: Guided self-assessment.</p>
          </div>
          <div className="rounded-2xl border bg-white p-6">
            <div className="flex items-center gap-2 mb-2 text-amber-700 font-semibold"><Handshake size={18}/> Resolution</div>
            <p><strong>Need:</strong> Action & Trust → <strong>Counsel</strong>: Verified experts (lawyers, mediators).</p>
          </div>
          <div className="rounded-2xl border bg-white p-6">
            <div className="flex items-center gap-2 mb-2 text-amber-700 font-semibold"><Users size={18}/> Reorganization</div>
            <p><strong>Need:</strong> Stability & Renewal → <strong>Circle + Dashboard</strong>: Co-parenting, community, financial resets.</p>
          </div>
        </div>
        <p className="mt-6 font-medium">Key Takeaway: Kintzu’s differentiated value lies in <em>Continuity</em> — emotional support meets structural solutions.</p>
      </Section>

      {/* STORIES */}
      <Section id="stories" title="User Stories: From Conflict to Dignified Reorganization" kicker="Human outcomes">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="rounded-2xl border bg-white p-6">
            <p className="text-slate-500 text-sm mb-2">Ananya • 34 • Marketing Manager</p>
            <p>“I didn’t know if I should stay or go. Kintzu’s Compass helped me find clarity — and my courage.” She used Compass, found clarity, and booked a therapist. Within weeks she found emotional stability and made an informed choice.</p>
          </div>
          <div className="rounded-2xl border bg-white p-6">
            <p className="text-slate-500 text-sm mb-2">Ravi • 42 • Small Business Owner</p>
            <p>“We’d decided to part but wanted peace, not pain.” He used Counsel for mediation and Circle for co-parenting. The process was organized, respectful, and child-centered.</p>
          </div>
        </div>
      </Section>

      {/* PRODUCT EXPERIENCE */}
      <Section id="product" title="Product Experience: Built for Fragility" kicker="Designed for fragility">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <p>Every pixel and word is designed to reduce overwhelm and increase agency. Anonymous onboarding, calm visuals (soft neutrals, high white space), human-in-the-loop, and privacy by design.</p>
            <p className="mt-3 italic">“It feels like talking to someone who truly gets it.”</p>
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

      {/* MODEL */}
      <Section id="model" title="Business Model: High Margin Hybrid" kicker="Multi-revenue stack">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <p>Kintzu blends predictable subscription revenue, marketplace fees, and corporate partnerships.</p>
            <ul className="mt-4 space-y-2">
              <li>1) <strong>Memberships</strong> (Freemium → Concierge): Recurring revenue.</li>
              <li>2) <strong>Marketplace</strong> (15% Take Rate): Counsel, therapy, mediation.</li>
              <li>3) <strong>Corporate Plans</strong>: Life Transition Benefit.</li>
              <li>4) <strong>Affiliate & Insights</strong>: Capital-light margins.</li>
            </ul>
            <p className="mt-4">Unit Economics: High margin, low churn. <strong>LTV/CAC &gt; 6x</strong> by Year 3.</p>
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

      {/* FINANCIALS */}
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
        <div className="mt-10 grid lg:grid-cols-2 gap-10 items-start">
          <div className="rounded-2xl border bg-white p-4">
            <p className="mb-2 font-medium">Use of Funds (Seed Round)</p>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={fundsData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={110} label>
                    {fundsData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div className="rounded-2xl border bg-white p-4">
            <p className="mb-2 font-medium">LTV/CAC Ratio Growth</p>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={ltvCac} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                  <XAxis dataKey="year" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="ratio" fill="#8FB7B3" />
                </BarChart>
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

      {/* ROADMAP */}
      <Section id="roadmap" title="Traction Roadmap: Global Ambition" kicker="0–36 months">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="rounded-2xl border bg-white p-6"><p className="text-slate-500 text-sm mb-1">0–6 Months</p><p>Launch Compass & Counsel; first corporate pilot.</p><div className="mt-3 text-amber-700 text-sm inline-flex items-center gap-1"><CheckCircle2 size={16}/> KPI: 500 users</div></div>
          <div className="rounded-2xl border bg-white p-6"><p className="text-slate-500 text-sm mb-1">6–12 Months</p><p>Launch Circle & Dashboard; strengthen brand trust.</p><div className="mt-3 text-amber-700 text-sm inline-flex items-center gap-1"><CheckCircle2 size={16}/> KPI: 10 corporate pilots</div></div>
          <div className="rounded-2xl border bg-white p-6"><p className="text-slate-500 text-sm mb-1">Year 2–3</p><p>10-city rollout; ₹5 Cr ARR; integrate financial rails; Global pilot (Singapore/UK NRIs).</p><div className="mt-3 text-amber-700 text-sm inline-flex items-center gap-1"><CheckCircle2 size={16}/> KPI: Break-even Q4 Y3</div></div>
        </div>
      </Section>

      {/* TEAM */}
      <Section id="team" title="Team: Trust, Tech, & Clinical Depth" kicker="Founders • Leads • Advisors">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <p><strong>Founder/CEO:</strong> Strategy & behavioral insight. Builds trust-first platforms across mental health, legal tech, and social impact.</p>
            <p className="mt-3"><strong>Head of Product:</strong> UX, privacy, and emotion-aware design; experimentation at speed.</p>
          </div>
          <div>
            <p><strong>Legal Lead:</strong> Former court mediator; dignified, fast, fair process SOPs.</p>
            <p className="mt-3"><strong>Clinical Lead:</strong> RCI-certified psychologist; quality/trauma protocols and escalation safety net.</p>
          </div>
        </div>
      </Section>

      {/* ASK */}
      <Section id="ask" title="Funding Ask: ₹3–4 Cr Seed Round" kicker="Use of funds">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <p>Kintzu is raising ₹3–4 Cr (~$450k) for an 18-month runway.</p>
            <p className="mt-3">Use of Funds (emphasize Trust & Growth): 35% Product & Tech, 25% Expert Network QA, 25% Marketing & Trust, 15% Ops & Compliance.</p>
            <p className="mt-3 font-medium">Call to Action: By investing in Kintzu, you’re shaping the category-defining platform for dignified decision-making in India.</p>
          </div>
          <div className="rounded-2xl border bg-white p-6 flex items-center justify-center">
            <Rocket className="text-amber-600"/>
            <p className="ml-3 font-medium">Every rupee goes toward clarity, trust, and growth.</p>
          </div>
        </div>
      </Section>

      {/* VISION */}
      <Section id="vision" title="The Vision: “The Gold in Our Cracks”" kicker="Kintsugi">
        <p>
          Inspired by <em>Kintsugi</em>, Kintzu celebrates repair — not rupture. We believe every relationship — even when redefined — can be more beautiful through understanding. Every ending deserves a thoughtful beginning.
        </p>
      </Section>

      {/* SUMMARY */}
      <Section id="summary" title="Summary Snapshot" kicker="One-page view">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border bg-white p-6">
            <ul className="space-y-2">
              <li>• Market: <strong>₹12,000 Cr TAM</strong></li>
              <li>• Model: <strong>Hybrid subscription + marketplace</strong></li>
              <li>• Margins: <strong>70%+ gross by Year 3</strong></li>
              <li>• Users: <strong>35,000 paying by Year 3</strong></li>
              <li>• Mission: <strong>Normalize life transitions through clarity & compassion</strong></li>
            </ul>
          </div>
          <div className="rounded-2xl border bg-white p-6">
            <p className="font-medium mb-2">Category Ownership</p>
            <p>Continuity is the moat. Kintzu orchestrates the full journey: Compass → Counsel → Circle → Dashboard — from reflection to reorganization.</p>
          </div>
        </div>
      </Section>

      {/* CONTACT */}
      <Section id="contact" title="Let’s build a world where clarity is a right, not a privilege" kicker="Contact">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="rounded-2xl border bg-white p-6 flex items-center gap-3"><Mail className="text-amber-600"/> <div><div className="text-sm text-slate-500">Email</div><div className="font-medium">krishn@kintzu.com</div></div></div>
          <div className="rounded-2xl border bg-white p-6 flex items-center gap-3"><Globe className="text-amber-600"/> <div><div className="text-sm text-slate-500">Web</div><div className="font-medium">www.kintzu.com</div></div></div>
          <div className="rounded-2xl border bg-white p-6 flex items-center gap-3"><Shield className="text-amber-600"/> <div><div className="text-sm text-slate-500">Location</div><div className="font-medium">Bengaluru, India</div></div></div>
        </div>
        <div className="mt-10 flex items-center gap-3">
          <a href="#solution" className="inline-flex items-center gap-2 rounded-2xl bg-amber-400 hover:bg-amber-500 text-white px-5 py-3 transition">See the solution <ArrowRight size={16}/></a>
          <a href="#financials" className="inline-flex items-center gap-2 rounded-2xl border border-slate-300 bg-white hover:bg-slate-50 px-5 py-3 transition">See financials <ChartLine size={16}/></a>
        </div>
      </Section>

      <footer className="py-10 border-t border-amber-200/60 text-center text-sm text-slate-500">
        Kintzu © 2025 • Clarity • Courage • Continuity
      </footer>
    </div>
  );
}
