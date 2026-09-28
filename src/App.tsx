import React from 'react';
import { 
  Activity, Layers, Map, Navigation, 
  Thermometer, Droplet, Target, Globe, 
  ArrowRight, Terminal, ChevronRight, Brain,
  Database, Server, Workflow, MapPin, Bot,
  ArrowDownRight, User
} from 'lucide-react';

// --- Custom Social Icons ---
const LinkedinIcon = ({ size = 20, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const InstagramIcon = ({ size = 20, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

// --- Shared UI ---
const SectionHeader: React.FC<{ tag: string; title: string; description?: string }> = ({ tag, title, description }) => (
  <div className="mb-12 md:mb-16 max-w-4xl">
    <div className="flex items-center gap-3 mb-4">
      <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full shadow-[0_0_8px_#06b6d4]"></div>
      <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">{tag}</span>
    </div>
    <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4 drop-shadow-md">{title}</h2>
    {description && <p className="text-gray-300 text-lg leading-relaxed drop-shadow-sm">{description}</p>}
  </div>
);

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; text: string }> = ({ icon, title, text }) => (
  <div className="p-6 border border-white/20 bg-white/[0.05] backdrop-blur-xl rounded-sm shadow-lg hover:bg-white/[0.09] hover:border-cyan-500/40 transition-all">
    <div className="w-10 h-10 border border-cyan-500/30 bg-cyan-950/40 flex items-center justify-center mb-5 text-cyan-300 rounded-sm">{icon}</div>
    <h3 className="text-white font-mono text-sm font-bold uppercase tracking-wide mb-3">{title}</h3>
    <p className="text-sm text-gray-300 leading-relaxed">{text}</p>
  </div>
);

// --- 1. Navbar ---
const Navbar: React.FC = () => (
  <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/20 backdrop-blur-xl shadow-sm">
    <div className="max-w-[90rem] mx-auto px-6 h-14 flex items-center justify-between">
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 bg-cyan-500 flex items-center justify-center shadow-[0_0_10px_rgba(6,182,212,0.5)]">
            <div className="w-2 h-2 bg-black"></div>
          </div>
          <span className="text-white font-mono font-bold tracking-widest text-lg drop-shadow-md">SOLV<span className="text-cyan-500">X</span></span>
        </div>
        <div className="hidden md:flex items-center gap-6 text-xs font-mono text-gray-300 drop-shadow-md">
          <a href="#audience" className="hover:text-cyan-400 transition-colors">AUDIENCE</a>
          <a href="#solution" className="hover:text-cyan-400 transition-colors">SOLUTION</a>
          <a href="#architecture" className="hover:text-cyan-400 transition-colors">ARCHITECTURE</a>
          <a href="#about" className="hover:text-cyan-400 transition-colors">ABOUT</a>
        </div>
      </div>
      <div className="flex items-center gap-6">
        <div className="hidden md:flex items-center gap-2 text-xs font-mono text-cyan-300 drop-shadow-md">
          <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse shadow-[0_0_8px_#4ade80]"></div>
          SYSTEM ONLINE
        </div>
        <button className="px-4 py-1.5 bg-white text-black font-mono text-xs font-bold hover:bg-cyan-500 hover:text-white transition-colors flex items-center gap-2 shadow-lg">
          LAUNCH VIEWER <ArrowRight size={14} />
        </button>
      </div>
    </div>
  </nav>
);

// --- 2. Hero ---
const Hero: React.FC = () => (
  <section className="relative w-full pt-32 pb-20 md:pt-40 md:pb-32 px-6 border-b border-white/10 bg-transparent overflow-hidden">
    <div className="max-w-[90rem] mx-auto relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
      <div className="pr-8">
        <div className="inline-flex items-center gap-2 px-2.5 py-1 mb-6 border border-white/30 bg-white/[0.08] backdrop-blur-md text-[10px] font-mono text-cyan-400 uppercase tracking-widest shadow-lg rounded-sm">
          <Terminal size={12} />
          System Active // v1.0
        </div>
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tighter mb-6 leading-[1.05] uppercase drop-shadow-2xl">
          See the Ocean <br />
          <span className="text-cyan-400 text-opacity-90">Beyond the Surface.</span>
        </h1>
        <p className="text-gray-200 text-lg md:text-xl mb-10 leading-relaxed max-w-xl drop-shadow-lg">
          A browser-based platform that brings ocean model predictions and real-world observations together across location, depth and time.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="px-6 py-3.5 bg-cyan-600/90 backdrop-blur-sm text-white font-mono text-sm hover:bg-cyan-500 transition-colors flex items-center justify-center gap-2 font-bold shadow-[0_0_20px_rgba(6,182,212,0.5)] hover:shadow-[0_0_30px_rgba(6,182,212,0.8)] border border-cyan-400/50 rounded-sm">
            LAUNCH EXPLORER <ChevronRight size={16} />
          </button>
        </div>
      </div>
      <div className="relative aspect-square md:aspect-video lg:aspect-square max-h-[550px] w-full border border-white/20 bg-white/[0.03] backdrop-blur-xl overflow-hidden flex flex-col group rounded-sm shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
        <div className="h-8 border-b border-white/20 bg-white/[0.08] flex items-center px-4 justify-between z-30">
          <div className="text-[10px] font-mono text-gray-300 flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-green-500 rounded-full shadow-[0_0_5px_#4ade80]"></div>
            CANVAS_PLACEHOLDER
          </div>
          <div className="flex gap-1.5">
            <div className="w-2 h-2 rounded-sm border border-white/40"></div>
            <div className="w-2 h-2 rounded-sm border border-white/40"></div>
          </div>
        </div>
        <div className="flex-1 relative w-full h-full overflow-hidden bg-gradient-to-b from-transparent to-cyan-950/20">
          <div className="absolute top-0 left-0 w-full h-full opacity-40 origin-bottom transform perspective-[800px] rotateX-[60deg] scale-[2]">
            <div className="w-full h-full bg-[linear-gradient(to_right,#06b6d4_1px,transparent_1px),linear-gradient(to_bottom,#06b6d4_1px,transparent_1px)] bg-[size:40px_40px]"></div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#020202]/50 via-transparent to-transparent z-10"></div>
          <svg className="absolute inset-0 w-full h-full z-10 opacity-70" preserveAspectRatio="none">
            <path d="M -100,100 C 150,200 350,50 600,150 C 850,250 1000,100 1200,150" fill="none" stroke="#06b6d4" strokeWidth="1.5" strokeDasharray="4 4"/>
            <path d="M 0,250 C 250,150 450,350 700,200 C 950,50 1100,300 1200,250" fill="none" stroke="#3b82f6" strokeWidth="2" />
            <path d="M -50,400 C 200,450 400,300 650,450 C 900,600 1100,350 1200,400" fill="none" stroke="#06b6d4" strokeWidth="1" />
          </svg>
          <div className="absolute top-[25%] left-[30%] z-20 flex flex-col items-center">
            <div className="w-2.5 h-2.5 bg-white rounded-full shadow-[0_0_15px_#fff]"></div>
            <div className="w-px h-32 bg-gradient-to-b from-white/80 to-transparent"></div>
            <span className="absolute left-4 top-0 text-[9px] font-mono text-white bg-white/[0.1] backdrop-blur-md px-1.5 py-0.5 border border-white/30 whitespace-nowrap rounded-sm">ARGO_774</span>
          </div>
          <div className="absolute top-[55%] left-[65%] z-20 flex flex-col items-center">
            <div className="w-2 h-2 bg-cyan-400 rounded-full shadow-[0_0_15px_#06b6d4]"></div>
            <div className="w-px h-20 bg-gradient-to-b from-cyan-400/80 to-transparent"></div>
            <span className="absolute right-4 top-0 text-[9px] font-mono text-cyan-400 bg-white/[0.1] backdrop-blur-md px-1.5 py-0.5 border border-cyan-500/40 whitespace-nowrap rounded-sm">GLIDER_TRK</span>
          </div>
          <div className="absolute bottom-5 left-5 z-30">
            <div className="flex items-center gap-3 mb-2 opacity-90">
              <div className="text-[9px] font-mono text-cyan-400 flex items-center gap-1"><Thermometer size={10}/> TEMP</div>
              <div className="text-[9px] font-mono text-blue-400 flex items-center gap-1"><Navigation size={10}/> CURRENTS</div>
            </div>
            <div className="text-[10px] font-mono text-gray-200 border-l-2 border-cyan-500/80 pl-2.5 bg-white/[0.08] backdrop-blur-md py-1.5 pr-3 shadow-lg rounded-r-sm">
              DEPTH: 0m to -2000m <br/>
              TIME: +48H FORECAST
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// --- 3. Target Audience ---
const TargetAudience: React.FC = () => {
  const users = [
    { role: "Operational Oceanographers", icon: <Activity size={20} className="text-cyan-400" />, need: "Monitor ocean state, currents and fronts while keeping model outputs and in-situ observations in one workflow." },
    { role: "Ocean Forecasters", icon: <Target size={20} className="text-cyan-400" />, need: "Validate predictive fields against Argo observations and inspect where model values diverge by location, time and depth." },
    { role: "Marine Researchers", icon: <Layers size={20} className="text-cyan-400" />, need: "Explore multidimensional NetCDF data, profiles, errors and anomalies without manually stitching together separate tools." },
    { role: "Decision Support Teams", icon: <Globe size={20} className="text-cyan-400" />, need: "Get rapid situational awareness from currents, observations, anomalies and data-coverage context." }
  ];

  return (
    <section id="audience" className="py-24 px-6 border-b border-white/10 bg-transparent">
      <div className="max-w-[90rem] mx-auto">
        <SectionHeader tag="End Users" title="WHO HAS THIS PROBLEM?" description="SolvX is designed around users who need to move from raw multidimensional ocean data to a clear, inspectable interpretation." />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {users.map((u, i) => (
            <div key={i} className="p-6 border border-white/20 bg-white/[0.05] backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.1)] hover:bg-white/[0.1] hover:border-white/30 transition-all group flex flex-col rounded-sm">
              <div className="w-10 h-10 border border-white/20 bg-white/[0.1] backdrop-blur-md flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-inner rounded-sm">{u.icon}</div>
              <h3 className="text-sm font-bold font-mono text-white mb-3 uppercase tracking-wide drop-shadow-md">{u.role}</h3>
              <p className="text-sm text-gray-200 leading-relaxed drop-shadow-sm">{u.need}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- 4. Unified Solution + Innovations ---
const Solution: React.FC = () => {
  const capabilities = [
    { icon: <Globe size={20}/>, title: "3D Ocean Visualization", text: "Explore ocean state as a depth-aware 3D field with bathymetry, variable colouring, current vectors and interactive depth exploration." },
    { icon: <Activity size={20}/>, title: "Model ↔ Observation", text: "Collocate model and Argo measurements using location, time, depth and variable, then inspect signed differences, profiles, bias, MAE and RMSE." },
    { icon: <Brain size={20}/>, title: "ML / Anomaly Detection", text: "Detect unusual ocean conditions and flag regions for investigation using configurable analytical baselines; keep the reason for each flag inspectable." },
    { icon: <MapPin size={20}/>, title: "Observation Gap Intelligence", text: "Map sparse observation coverage and expose regions where limited measurements make model interpretation harder." },
    { icon: <Bot size={20}/>, title: "AI Scientific Assistant", text: "Ask questions in natural language, request explanations of selected regions, and translate supported requests into 3D navigation or analysis actions." },
    { icon: <Workflow size={20}/>, title: "One Analysis Workspace", text: "Unifies exploration, observation overlays, comparison, anomalies and explanations instead of forcing users across disconnected scientific tools." }
  ];

  const workflow = [
    ["EXPLORE", "3D field + depth + time"],
    ["OBSERVE", "Argo / future sensors"],
    ["COMPARE", "Collocation + profiles + error"],
    ["DETECT", "Anomaly + coverage gaps"],
    ["EXPLAIN", "Evidence-backed AI summary"],
    ["ACT", "Jump to region / layer"]
  ];

  return (
    <section id="solution" className="py-24 px-6 border-b border-white/10 bg-transparent">
      <div className="max-w-[90rem] mx-auto">
        <SectionHeader
          tag="Our Solution"
          title="SOLVX — FROM OCEAN DATA TO OCEAN INTELLIGENCE"
          description="SolvX is not just a 3D ocean viewer. It combines volumetric visualization, real observations, model validation, anomaly analysis, observation-coverage intelligence and an AI explanation layer in one browser-based workspace."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {capabilities.map((c, i) => <FeatureCard key={i} icon={c.icon} title={c.title} text={c.text} />)}
        </div>

        <div className="mt-10 border border-cyan-500/20 bg-cyan-950/15 backdrop-blur-xl rounded-sm p-6 md:p-8">
          <div className="flex items-center gap-3 mb-6">
            <Terminal size={17} className="text-cyan-300"/>
            <span className="text-xs font-mono text-cyan-300 uppercase tracking-widest">Core Innovation Loop</span>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-6 gap-3">
            {workflow.map(([step, desc], i) => (
              <React.Fragment key={step}>
                <div className="border border-white/15 bg-white/[0.04] p-4 rounded-sm">
                  <div className="text-[10px] font-mono text-cyan-400 tracking-widest mb-2">{String(i + 1).padStart(2, "0")}</div>
                  <div className="text-white font-mono text-xs font-bold">{step}</div>
                  <div className="text-gray-400 text-[11px] mt-2 leading-relaxed">{desc}</div>
                </div>
                {i < workflow.length - 1 && <div className="hidden lg:flex items-center justify-center text-cyan-500/50"><ChevronRight size={16}/></div>}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// --- 5. Scientific Impact ---
const TechImpact: React.FC = () => (
  <section className="py-24 px-6 border-b border-white/10 bg-transparent">
    <div className="max-w-[90rem] mx-auto">
      <SectionHeader tag="Use Cases" title="SCIENTIFIC IMPACT" description="Translating complex multidimensional datasets into inspectable analysis for research, forecasting and operational decision support." />
      <div className="grid md:grid-cols-2 gap-4">
        {[
          { title: "Climate & Ocean Modeling", desc: "Inspect model fields against in-situ observations and identify depth-dependent discrepancies." },
          { title: "Marine Navigation", desc: "Explore current vectors and observed/modelled conditions within a common spatial view." },
          { title: "Ecological Monitoring", desc: "Combine temperature, salinity and chlorophyll context with observational coverage." },
          { title: "Disaster Management", desc: "Surface anomalous regions and model-observation differences to speed situational analysis." },
          { title: "Search & Rescue", desc: "Use current structure and observational context to understand modelled surface behaviour." },
          { title: "Fisheries", desc: "Inspect depth-aware temperature, currents and chlorophyll patterns across selected regions." },
          { title: "Scientific Research", desc: "Work with multidimensional model data and observation profiles in a unified analysis environment." },
          { title: "Data Quality & Planning", desc: "Expose sparse observational areas and highlight where additional measurements may improve interpretation." }
        ].map((item, i) => (
          <div key={i} className="pl-5 border-l-2 border-cyan-400/50 bg-white/[0.05] backdrop-blur-md p-4 rounded-r-sm shadow-sm hover:bg-white/[0.1] transition-colors">
            <h4 className="text-white text-sm font-medium mb-1.5 drop-shadow-sm">{item.title}</h4>
            <p className="text-sm text-gray-200">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// --- 6. Team ---
const AboutTeam: React.FC = () => {
  const mentor = {
    name: "[ Mentor Name ]",
    role: "Project Mentor",
    description: "Provide a brief description of how your mentor guided the architecture, vision, or scientific accuracy of the SolvX platform for the hackathon.",
    linkedin: "#",
    instagram: "#"
  };

  const teamMembers = [
    { name: "Anchal Prakash", role: "Frontend & UI/UX", desc: "Responsible for React architecture, glassmorphism design system, and responsive UI implementations.", linkedin: "#", instagram: "#" },
    { name: "[ Teammate 2 ]", role: "Data Pipeline", desc: "Describe their role handling NetCDF datasets, API integrations, and backend data parsing.", linkedin: "#", instagram: "#" },
    { name: "[ Teammate 3 ]", role: "3D Visualization", desc: "Describe their role building the Three.js canvas, volumetric rendering, and spatial plotting.", linkedin: "#", instagram: "#" },
    { name: "[ Teammate 4 ]", role: "Oceanographic Models", desc: "Describe their role ensuring scientific accuracy across physical and biogeochemical variables.", linkedin: "#", instagram: "#" },
    { name: "[ Teammate 5 ]", role: "Cloud Architecture", desc: "Describe their role managing deployment and environment setup.", linkedin: "#", instagram: "#" },
    { name: "[ Teammate 6 ]", role: "Research & Validation", desc: "Describe their role validating model comparisons against observation data.", linkedin: "#", instagram: "#" }
  ];

  return (
    <section id="about" className="py-24 px-6 border-b border-white/10 bg-transparent">
      <div className="max-w-[70rem] mx-auto">
        <SectionHeader tag="The Team" title="TEAM SOLVX" description="Manipal Institute of Technology Bengaluru" />
        <div className="flex justify-center mb-16 mt-8">
          <div className="p-8 border border-cyan-500/30 bg-cyan-950/20 backdrop-blur-md rounded-sm text-center flex flex-col items-center shadow-[0_0_30px_rgba(6,182,212,0.15)] max-w-lg w-full relative group">
            <div className="w-20 h-20 bg-cyan-900/50 border border-cyan-400/50 rounded-full flex items-center justify-center mb-5 shadow-[0_0_20px_rgba(6,182,212,0.2)] group-hover:scale-105 transition-transform"><User size={32} className="text-cyan-300" /></div>
            <h4 className="text-white text-xl font-bold mb-2 drop-shadow-sm">{mentor.name}</h4>
            <p className="text-xs font-mono text-cyan-300 uppercase tracking-widest mb-4">{mentor.role}</p>
            <p className="text-sm text-gray-300 leading-relaxed mb-6 px-4">{mentor.description}</p>
            <div className="flex items-center gap-4 mt-auto border-t border-white/10 pt-4 w-full justify-center">
              <a href={mentor.linkedin} className="text-gray-400 hover:text-cyan-400 transition-colors" target="_blank" rel="noreferrer"><LinkedinIcon size={20} /></a>
              <a href={mentor.instagram} className="text-gray-400 hover:text-pink-400 transition-colors" target="_blank" rel="noreferrer"><InstagramIcon size={20} /></a>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {teamMembers.map((member, i) => (
            <div key={i} className="p-6 md:p-8 border border-white/20 bg-white/[0.05] backdrop-blur-md rounded-sm hover:bg-white/[0.1] hover:border-cyan-500/50 transition-all group flex flex-col shadow-md">
              <div className="flex items-center gap-5 mb-4">
                <div className="w-16 h-16 bg-cyan-950/40 border border-cyan-500/30 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:bg-cyan-900/60 transition-all shadow-[0_0_15px_rgba(6,182,212,0.1)]"><User size={24} className="text-cyan-400 opacity-80" /></div>
                <div>
                  <h4 className="text-white text-lg font-bold mb-1 drop-shadow-sm">{member.name}</h4>
                  <p className="text-[10px] font-mono text-cyan-300/80 uppercase tracking-widest">{member.role}</p>
                </div>
              </div>
              <p className="text-sm text-gray-300 leading-relaxed flex-1 mb-6">{member.desc}</p>
              <div className="flex items-center gap-4 mt-auto border-t border-white/10 pt-4">
                <a href={member.linkedin} className="text-gray-400 hover:text-cyan-400 transition-colors" target="_blank" rel="noreferrer"><LinkedinIcon size={18} /></a>
                <a href={member.instagram} className="text-gray-400 hover:text-pink-400 transition-colors" target="_blank" rel="noreferrer"><InstagramIcon size={18} /></a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- 7. Correct System Architecture ---
const SystemArchitecture: React.FC = () => (
  <section id="architecture" className="py-24 px-6 border-b border-white/10 bg-transparent">
    <div className="max-w-[90rem] mx-auto">
      <SectionHeader
        tag="System Design"
        title="SYSTEM ARCHITECTURE"
        description="The real architecture is a data-to-insight pipeline: scientific datasets are processed on the backend, served through APIs, rendered in the browser, and reused by the analytical and AI layers."
      />

      <div className="border border-white/20 bg-black/20 backdrop-blur-xl rounded-sm overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.25)]">
        <div className="px-5 py-3 border-b border-white/15 bg-white/[0.04] flex items-center gap-2 text-[10px] font-mono text-cyan-300 uppercase tracking-widest">
          <Server size={13} /> End-to-end data flow
        </div>

        <div className="p-5 md:p-8 overflow-x-auto">
          <div className="min-w-[980px] space-y-4">
            <div className="grid grid-cols-5 gap-3">
              {[
                { icon: <Database size={18}/>, title: "MODEL DATA", text: "NetCDF / scientific multidimensional fields" },
                { icon: <MapPin size={18}/>, title: "OBSERVATIONS", text: "Argo + extensible observation sources" },
                { icon: <Layers size={18}/>, title: "STATIC CONTEXT", text: "Bathymetry + geography" },
                { icon: <Brain size={18}/>, title: "ANALYTICS INPUT", text: "Profiles, anomalies, gaps, comparisons" },
                { icon: <Bot size={18}/>, title: "USER QUESTIONS", text: "Natural-language exploration requests" }
              ].map((b, i) => (
                <div key={i} className="p-4 border border-white/15 bg-white/[0.04] rounded-sm">
                  <div className="text-cyan-300 mb-3">{b.icon}</div>
                  <div className="text-[10px] font-mono text-cyan-400 tracking-widest mb-2">{b.title}</div>
                  <div className="text-sm text-gray-200 leading-relaxed">{b.text}</div>
                </div>
              ))}
            </div>

            <div className="flex justify-center text-cyan-500/60"><ArrowDownRight size={18}/></div>

            <div className="grid grid-cols-3 gap-4">
              <div className="p-5 border border-cyan-500/30 bg-cyan-950/20 rounded-sm">
                <div className="flex items-center gap-2 text-cyan-300 font-mono text-xs font-bold uppercase tracking-widest mb-3"><Server size={16}/> FastAPI Backend</div>
                <div className="text-sm text-gray-300 leading-relaxed">
                  REST API layer for dataset discovery, regional subsetting, point/profile extraction and analysis requests.
                </div>
              </div>
              <div className="p-5 border border-cyan-500/30 bg-cyan-950/20 rounded-sm">
                <div className="flex items-center gap-2 text-cyan-300 font-mono text-xs font-bold uppercase tracking-widest mb-3"><Workflow size={16}/> Data & Analysis Services</div>
                <div className="text-sm text-gray-300 leading-relaxed">
                  Python services use xarray/NumPy for NetCDF slicing, depth/time/space selection, collocation, interpolation, RMSE/bias and analytical layers.
                </div>
              </div>
              <div className="p-5 border border-cyan-500/30 bg-cyan-950/20 rounded-sm">
                <div className="flex items-center gap-2 text-cyan-300 font-mono text-xs font-bold uppercase tracking-widest mb-3"><Database size={16}/> Data + Cache</div>
                <div className="text-sm text-gray-300 leading-relaxed">
                  Local model archives and observation data are read server-side; subsetting/caching limits browser payloads and rendering cost.
                </div>
              </div>
            </div>

            <div className="flex justify-center text-cyan-500/60"><ArrowDownRight size={18}/></div>

            <div className="p-5 border border-white/15 bg-white/[0.04] rounded-sm">
              <div className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest mb-3">API Response / Analysis Contract</div>
              <div className="grid md:grid-cols-4 gap-3">
                {[
                  ["Ocean Fields", "values + coords + depth + time + units"],
                  ["Observations", "location + profile + timestamp + variables"],
                  ["Comparisons", "model + observation + signed difference + metrics"],
                  ["Insights", "anomalies + gaps + explanation context"]
                ].map(([t, d]) => (
                  <div key={t} className="p-4 bg-black/20 border border-white/10 rounded-sm">
                    <div className="text-white font-mono text-xs font-bold mb-2">{t}</div>
                    <div className="text-[11px] text-gray-400 leading-relaxed">{d}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center text-cyan-500/60"><ArrowDownRight size={18}/></div>

            <div className="grid grid-cols-3 gap-4">
              <div className="p-5 border border-white/15 bg-white/[0.04] rounded-sm">
                <div className="flex items-center gap-2 text-white font-mono text-xs font-bold uppercase tracking-widest mb-3"><Globe size={16} className="text-cyan-300"/> React Frontend</div>
                <p className="text-sm text-gray-300 leading-relaxed">Controls, geographic selection, depth/time/variable navigation and UI state.</p>
              </div>
              <div className="p-5 border border-white/15 bg-white/[0.04] rounded-sm">
                <div className="flex items-center gap-2 text-white font-mono text-xs font-bold uppercase tracking-widest mb-3"><Layers size={16} className="text-cyan-300"/> Three.js / WebGL</div>
                <p className="text-sm text-gray-300 leading-relaxed">Transforms returned scientific fields and bathymetry into interactive 3D visualization and overlays.</p>
              </div>
              <div className="p-5 border border-white/15 bg-white/[0.04] rounded-sm">
                <div className="flex items-center gap-2 text-white font-mono text-xs font-bold uppercase tracking-widest mb-3"><Brain size={16} className="text-cyan-300"/> Analysis + AI Layer</div>
                <p className="text-sm text-gray-300 leading-relaxed">Displays model-vs-observation metrics, anomaly/gap results and uses analysis context to explain selected regions or execute supported commands.</p>
              </div>
            </div>

            <div className="flex justify-center text-cyan-500/60"><ArrowDownRight size={18}/></div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-5 border border-cyan-500/30 bg-cyan-950/20 rounded-sm">
                <div className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest mb-2">Primary Output</div>
                <div className="text-white font-mono text-base font-bold">Explore → Compare → Detect → Explain</div>
              </div>
              <div className="p-5 border border-white/15 bg-white/[0.04] rounded-sm">
                <div className="text-[10px] font-mono text-gray-400 uppercase tracking-widest mb-2">Deployment / Delivery</div>
                <div className="text-gray-200 text-sm leading-relaxed">Hosting is a delivery layer only; it is not part of the scientific data-processing pipeline.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// --- 8. Footer ---
const Footer: React.FC = () => (
  <footer className="py-8 px-6 bg-transparent flex flex-col md:flex-row justify-between items-center gap-4 mt-8">
    <div className="text-gray-300 font-mono text-[10px] uppercase tracking-widest drop-shadow-md">
      © {new Date().getFullYear()} SolvX System — Hackathon Build
    </div>
    <div className="flex gap-6 text-gray-200 text-[10px] font-mono uppercase tracking-widest drop-shadow-md">
      <a href="#solution" className="hover:text-cyan-300 transition-colors">Solution</a>
      <a href="#architecture" className="hover:text-cyan-300 transition-colors">Architecture</a>
      <a href="#about" className="hover:text-cyan-300 transition-colors">Team</a>
    </div>
  </footer>
);

// --- Main App ---
const App: React.FC = () => (
  <div className="min-h-screen text-gray-100 font-sans selection:bg-cyan-900/50 selection:text-cyan-50 relative">
    <div className="fixed inset-0 z-[-2] bg-cover bg-center bg-no-repeat opacity-75" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1551244072-5d12893278ab?q=80&w=2560&auto=format&fit=crop')" }}></div>
    <div className="fixed inset-0 z-[-1] pointer-events-none bg-gradient-to-b from-[#0369a1]/30 to-[#020617]/80"></div>
    <div className="relative z-10">
      <Navbar />
      <Hero />
      <TargetAudience />
      <Solution />
      <TechImpact />
      <AboutTeam />
      <SystemArchitecture />
      <Footer />
    </div>
  </div>
);

export default App;
