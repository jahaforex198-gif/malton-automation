import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  ArrowRight, 
  Activity, 
  Shield, 
  Zap, 
  BarChart3, 
  Globe, 
  Cpu, 
  CheckCircle2, 
  Play,
  Menu,
  X
} from 'lucide-react';

// --- Design System Constants ---
const COLORS = {
  bg: '#07090D',
  surface: '#0F1117',
  accent: '#D8FF1E', // The specific neon lime
  textMain: '#FFFFFF',
  textMuted: '#A1A1AA',
  border: 'rgba(255, 255, 255, 0.08)',
  glow: 'rgba(216, 255, 30, 0.15)',
};

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle scroll for navbar transparency
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#07090D] text-white font-sans selection:bg-[#D8FF1E] selection:text-black overflow-x-hidden">
      
      {/* --- Global Grid Overlay --- */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-20" 
           style={{
             backgroundImage: `
               linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
               linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
             `,
             backgroundSize: '60px 60px',
             maskImage: 'radial-gradient(circle at center, black 40%, transparent 100%)'
           }} 
      />

      {/* --- Ambient Glows --- */}
      <div className="fixed top-[-20%] left-[-10%] w-[600px] h-[600px] bg-[#D8FF1E]/10 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="fixed bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none z-0" />

      {/* --- Navigation --- */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 border-b ${isScrolled ? 'bg-[#07090D]/80 backdrop-blur-xl border-white/10 py-4' : 'bg-transparent border-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="w-8 h-8 bg-[#D8FF1E] rounded-lg flex items-center justify-center transform group-hover:rotate-12 transition-transform">
              <Cpu className="w-5 h-5 text-black" />
            </div>
            <span className="text-xl font-bold tracking-tight">MALTON<span className="text-white/50">AI</span></span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {['Solutions', 'Platform', 'Developers', 'Pricing'].map((item) => (
              <a key={item} href="#" className="text-sm font-medium text-gray-400 hover:text-[#D8FF1E] transition-colors">
                {item}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <button className="text-sm font-medium text-white hover:text-[#D8FF1E] transition-colors">Sign In</button>
            <button className="bg-[#D8FF1E] text-black px-6 py-2.5 rounded-full text-sm font-bold hover:shadow-[0_0_20px_rgba(216,255,30,0.4)] transition-all transform hover:scale-105 active:scale-95">
              Get Started
            </button>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed inset-0 z-40 bg-[#07090D] pt-24 px-6 md:hidden"
        >
          <div className="flex flex-col gap-6 text-center">
            {['Solutions', 'Platform', 'Developers', 'Pricing'].map((item) => (
              <a key={item} href="#" className="text-2xl font-bold text-white">{item}</a>
            ))}
            <button className="bg-[#D8FF1E] text-black w-full py-4 rounded-xl font-bold mt-4">Get Started</button>
          </div>
        </motion.div>
      )}

      {/* --- Hero Section --- */}
      <section className="relative z-10 pt-40 pb-20 lg:pt-52 lg:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Hero Content */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[#D8FF1E] animate-pulse" />
              <span className="text-xs font-medium text-[#D8FF1E] uppercase tracking-wider">v2.0 Live Now</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-extrabold tracking-tight leading-[0.95] mb-8">
              Automate <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500">Your Empire</span> <br />
              <span className="text-[#D8FF1E] relative inline-block">
                Instantly
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-[#D8FF1E] opacity-60" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                </svg>
              </span>
            </h1>

            <p className="text-lg text-gray-400 mb-10 max-w-lg leading-relaxed">
              The world's most advanced AI trading infrastructure. Build, backtest, and deploy autonomous strategies with institutional-grade precision.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group bg-[#D8FF1E] text-black px-8 py-4 rounded-full text-base font-bold hover:shadow-[0_0_30px_rgba(216,255,30,0.5)] transition-all flex items-center justify-center gap-2">
                Start Building Free
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 rounded-full text-base font-bold text-white border border-white/10 hover:bg-white/5 transition-all flex items-center justify-center gap-2 backdrop-blur-sm">
                <Play className="w-4 h-4 fill-current" /> Watch Demo
              </button>
            </div>

            <div className="mt-12 flex items-center gap-4 text-sm text-gray-500">
              <div className="flex -space-x-2">
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-[#07090D] bg-gray-800 overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="User" className="w-full h-full object-cover opacity-80" />
                  </div>
                ))}
              </div>
              <p>Trusted by 10,000+ traders</p>
            </div>
          </motion.div>

          {/* Hero Visual / Mockup */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative hidden lg:block perspective-1000"
          >
            {/* Main Dashboard Card */}
            <div className="relative z-20 bg-[#0F1117]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-2xl transform rotate-y-[-10deg] rotate-x-[5deg] hover:rotate-0 transition-transform duration-700">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <div className="text-sm text-gray-400">Total Balance</div>
                  <div className="text-3xl font-bold text-white">$124,592.00</div>
                </div>
                <div className="px-3 py-1 bg-green-500/10 text-green-400 rounded-full text-xs font-bold flex items-center gap-1">
                  <Activity className="w-3 h-3" /> +12.5%
                </div>
              </div>
              
              {/* Abstract Chart */}
              <div className="h-48 w-full relative">
                <svg className="w-full h-full overflow-visible" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#D8FF1E" stopOpacity="0.5" />
                      <stop offset="100%" stopColor="#D8FF1E" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path d="M0,150 C100,140 150,100 200,120 S300,50 400,80 S500,20 600,40 V200 H0 Z" fill="url(#chartGradient)" />
                  <path d="M0,150 C100,140 150,100 200,120 S300,50 400,80 S500,20 600,40" fill="none" stroke="#D8FF1E" strokeWidth="3" strokeLinecap="round" />
                </svg>
                
                {/* Floating Data Point */}
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-[20%] left-[60%] bg-white text-black px-3 py-1.5 rounded-lg text-xs font-bold shadow-lg"
                >
                  $4,230 Profit
                </motion.div>
              </div>

              {/* Bottom Stats Row */}
              <div className="grid grid-cols-3 gap-4 mt-6">
                {[
                  { label: 'Win Rate', val: '68%' },
                  { label: 'Active Bots', val: '12' },
                  { label: 'Volume', val: '$2.4M' }
                ].map((stat, i) => (
                  <div key={i} className="bg-white/5 rounded-xl p-3 border border-white/5">
                    <div className="text-xs text-gray-500 mb-1">{stat.label}</div>
                    <div className="text-lg font-bold text-white">{stat.val}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Background Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-[#D8FF1E]/20 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl -z-10" />
            
            {/* Floating Small Card */}
            <motion.div 
              animate={{ y: [0, 20, 0], x: [0, 10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-12 -right-8 z-30 bg-[#07090D] border border-white/10 p-4 rounded-2xl shadow-2xl max-w-[200px]"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                  <CheckCircle2 className="w-4 h-4 text-green-400" />
                </div>
                <div>
                  <div className="text-xs text-gray-400">Strategy Executed</div>
                  <div className="text-sm font-bold text-white">BTC Long #492</div>
                </div>
              </div>
              <div className="h-1 w-full bg-gray-800 rounded-full overflow-hidden">
                <div className="h-full bg-[#D8FF1E] w-full" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* --- Features Bento Grid --- */}
      <section className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl sm:text-5xl font-bold mb-6 tracking-tight">
              Everything you need to <br />
              <span className="text-[#D8FF1E]">dominate the market</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Powerful tools designed for quantitative traders and institutions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 auto-rows-[300px]">
            
            {/* Large Card */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="md:col-span-2 relative group bg-[#0F1117] border border-white/10 rounded-3xl p-8 overflow-hidden hover:border-[#D8FF1E]/30 transition-colors"
            >
              <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#D8FF1E]/5 rounded-full blur-3xl group-hover:bg-[#D8FF1E]/10 transition-colors" />
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center mb-6 border border-white/10">
                    <Cpu className="w-6 h-6 text-[#D8FF1E]" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">AI Neural Engine</h3>
                  <p className="text-gray-400 max-w-md">Our proprietary machine learning models analyze millions of data points per second to predict market movements with uncanny accuracy.</p>
                </div>
                <div className="mt-8 h-32 bg-gradient-to-r from-white/5 to-transparent rounded-xl border border-white/5 relative overflow-hidden">
                   {/* Abstract visualization */}
                   <div className="absolute inset-0 flex items-end justify-around px-4 pb-4 gap-2">
                      {[40, 70, 45, 90, 60, 80, 50].map((h, i) => (
                        <motion.div 
                          key={i}
                          initial={{ height: 0 }}
                          whileInView={{ height: `${h}%` }}
                          transition={{ duration: 1, delay: i * 0.1 }}
                          className="w-full bg-[#D8FF1E]/20 rounded-t-sm"
                        />
                      ))}
                   </div>
                </div>
              </div>
            </motion.div>

            {/* Tall Card */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="md:row-span-2 relative group bg-[#0F1117] border border-white/10 rounded-3xl p-8 overflow-hidden hover:border-[#D8FF1E]/30 transition-colors"
            >
              <div className="absolute bottom-0 left-0 w-full h-[200px] bg-gradient-to-t from-[#D8FF1E]/10 to-transparent" />
              <div className="relative z-10 h-full flex flex-col">
                <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center mb-6 border border-white/10">
                  <Zap className="w-6 h-6 text-[#D8FF1E]" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Lightning Fast</h3>
                <p className="text-gray-400 mb-8">Execute trades in microseconds with our collocated servers.</p>
                
                <div className="mt-auto space-y-4">
                  {[
                    { label: 'Latency', val: '12ms' },
                    { label: 'Uptime', val: '99.99%' },
                    { label: 'Throughput', val: '1M ops/s' }
                  ].map((stat, i) => (
                    <div key={i} className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/5 backdrop-blur-sm">
                      <span className="text-gray-400 text-sm">{stat.label}</span>
                      <span className="text-white font-mono font-bold">{stat.val}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Standard Card */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="relative group bg-[#0F1117] border border-white/10 rounded-3xl p-8 overflow-hidden hover:border-[#D8FF1E]/30 transition-colors"
            >
              <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center mb-6 border border-white/10">
                <Shield className="w-6 h-6 text-[#D8FF1E]" />
              </div>
              <h3 className="text-xl font-bold mb-2">Bank-Grade Security</h3>
              <p className="text-gray-400 text-sm">AES-256 encryption and cold storage for all assets.</p>
            </motion.div>

            {/* Standard Card */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="relative group bg-[#0F1117] border border-white/10 rounded-3xl p-8 overflow-hidden hover:border-[#D8FF1E]/30 transition-colors"
            >
              <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center mb-6 border border-white/10">
                <Globe className="w-6 h-6 text-[#D8FF1E]" />
              </div>
              <h3 className="text-xl font-bold mb-2">Global Access</h3>
              <p className="text-gray-400 text-sm">Connect from anywhere with our distributed edge network.</p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* --- CTA Section --- */}
      <section className="py-24 relative z-10">
        <div className="max-w-5xl mx-auto px-6">
          <div className="relative bg-[#0F1117] border border-white/10 rounded-[40px] p-12 md:p-24 text-center overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#D8FF1E]/20 rounded-full blur-[100px]" />
            
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight">
                Ready to start <br />
                <span className="text-[#D8FF1E]">printing money?</span>
              </h2>
              <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
                Join thousands of traders who have already automated their success. No credit card required for the free tier.
              </p>
              <button className="bg-[#D8FF1E] text-black px-10 py-5 rounded-full text-lg font-bold hover:shadow-[0_0_40px_rgba(216,255,30,0.6)] transition-all transform hover:scale-105">
                Get Started for Free
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* --- Footer --- */}
      <footer className="border-t border-white/10 bg-[#07090D] pt-20 pb-10 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-[#D8FF1E] rounded-lg flex items-center justify-center">
                  <Cpu className="w-5 h-5 text-black" />
                </div>
                <span className="text-xl font-bold">MALTON<span className="text-white/50">AI</span></span>
              </div>
              <p className="text-gray-500 max-w-sm">
                The next generation of automated trading infrastructure. Built for speed, security, and scalability.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-6">Product</h4>
              <ul className="space-y-4 text-gray-500">
                {['Features', 'Integrations', 'Pricing', 'Changelog'].map(item => (
                  <li key={item}><a href="#" className="hover:text-[#D8FF1E] transition-colors">{item}</a></li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-6">Company</h4>
              <ul className="space-y-4 text-gray-500">
                {['About', 'Blog', 'Careers', 'Contact'].map(item => (
                  <li key={item}><a href="#" className="hover:text-[#D8FF1E] transition-colors">{item}</a></li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 text-sm">© 2024 Malton Automation. All rights reserved.</p>
            <div className="flex gap-6">
              {['Twitter', 'GitHub', 'Discord'].map(social => (
                <a key={social} href="#" className="text-gray-600 hover:text-white transition-colors text-sm">{social}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
