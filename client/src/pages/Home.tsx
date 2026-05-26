import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  Activity, 
  Cpu, 
  Shield, 
  Zap, 
  TrendingUp, 
  Layers, 
  Terminal,
  Play,
  BarChart3,
  Globe
} from 'lucide-react';

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#07090D] text-white selection:bg-[#D8FF1E] selection:text-black overflow-x-hidden">
      
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-[#07090D]/80 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#D8FF1E] rounded-lg flex items-center justify-center">
              <Cpu className="w-5 h-5 text-black" />
            </div>
            <span className="text-xl font-bold tracking-tight">MALTON<span className="text-gray-400">AI</span></span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
            <a href="#features" className="hover:text-white transition-colors">Engine</a>
            <a href="#analytics" className="hover:text-white transition-colors">Analytics</a>
            <a href="#security" className="hover:text-white transition-colors">Security</a>
          </div>

          <button className="bg-white/10 hover:bg-[#D8FF1E] hover:text-black text-white px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 border border-white/10 hover:border-[#D8FF1E]">
            Launch App
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Typography */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative z-10"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#D8FF1E] text-xs font-mono mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D8FF1E] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D8FF1E]"></span>
              </span>
              SYSTEM ONLINE v2.4
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold leading-[0.95] mb-8">
              Automate wealth <br />
              with <span className="text-[#D8FF1E] glow-text">precision</span>.
            </h1>

            <p className="text-lg text-gray-400 mb-10 max-w-lg leading-relaxed font-light">
              Institutional-grade AI automation for the modern trader. 
              Execute strategies, analyze markets, and scale your portfolio 
              with zero latency.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="group bg-[#D8FF1E] text-black px-8 py-4 rounded-full text-sm font-bold uppercase tracking-wider hover:shadow-[0_0_30px_rgba(216,255,30,0.4)] transition-all duration-300 flex items-center gap-2">
                Start Building <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 rounded-full text-sm font-bold uppercase tracking-wider text-white border border-white/10 hover:bg-white/5 transition-all duration-300 flex items-center gap-2">
                <Play className="w-4 h-4 fill-current" /> View Demo
              </button>
            </div>

            <div className="mt-16 pt-8 border-t border-white/5 flex items-center gap-8">
              <div>
                <div className="text-3xl font-bold text-white">$4.2B+</div>
                <div className="text-xs text-gray-500 uppercase tracking-widest mt-1">Volume Processed</div>
              </div>
              <div className="w-px h-12 bg-white/10"></div>
              <div>
                <div className="text-3xl font-bold text-white">0.02s</div>
                <div className="text-xs text-gray-500 uppercase tracking-widest mt-1">Latency</div>
              </div>
            </div>
          </motion.div>

          {/* Right: Abstract Dashboard UI */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative lg:h-[600px] w-full"
          >
            {/* Main Dashboard Card */}
            <div className="absolute inset-0 bg-[#0F1117] border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
              {/* Header */}
              <div className="h-14 border-b border-white/5 flex items-center justify-between px-6 bg-white/[0.02]">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
                </div>
                <div className="text-xs font-mono text-gray-500">LIVE_FEED // BTC-USD</div>
              </div>

              {/* Content Grid */}
              <div className="p-6 grid grid-cols-2 gap-4 h-full">
                {/* Chart Area */}
                <div className="col-span-2 bg-[#07090D] rounded-xl border border-white/5 p-4 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Activity className="w-5 h-5 text-[#D8FF1E]" />
                  </div>
                  <div className="flex justify-between items-end h-32 gap-2">
                    {[40, 65, 45, 70, 55, 80, 60, 90, 75, 50, 85, 95].map((h, i) => (
                      <motion.div 
                        key={i}
                        initial={{ height: 0 }}
                        animate={{ height: `${h}%` }}
                        transition={{ duration: 1, delay: i * 0.1 }}
                        className={`w-full rounded-sm ${i > 8 ? 'bg-[#D8FF1E]' : 'bg-white/10'}`}
                      />
                    ))}
                  </div>
                  <div className="mt-4 flex justify-between text-xs font-mono text-gray-500">
                    <span>00:00</span>
                    <span>12:00</span>
                    <span>23:59</span>
                  </div>
                </div>

                {/* Stat Card 1 */}
                <div className="bg-[#13161C] rounded-xl border border-white/5 p-4 flex flex-col justify-between">
                  <div className="flex items-center gap-2 text-gray-400 text-xs uppercase">
                    <TrendingUp className="w-3 h-3" /> Profit
                  </div>
                  <div className="text-2xl font-bold text-white mt-2">+124.5%</div>
                  <div className="text-xs text-[#D8FF1E] mt-1">▲ 2.4% today</div>
                </div>

                {/* Stat Card 2 */}
                <div className="bg-[#13161C] rounded-xl border border-white/5 p-4 flex flex-col justify-between relative overflow-hidden">
                  <div className="absolute -right-4 -top-4 w-20 h-20 bg-[#D8FF1E]/10 rounded-full blur-xl"></div>
                  <div className="flex items-center gap-2 text-gray-400 text-xs uppercase">
                    <Cpu className="w-3 h-3" /> AI Confidence
                  </div>
                  <div className="text-2xl font-bold text-white mt-2">98.2%</div>
                  <div className="w-full bg-white/10 h-1 mt-2 rounded-full overflow-hidden">
                    <div className="h-full bg-[#D8FF1E] w-[98%]"></div>
                  </div>
                </div>

                {/* Terminal Log */}
                <div className="col-span-2 bg-[#07090D] rounded-xl border border-white/5 p-4 font-mono text-xs overflow-hidden">
                  <div className="flex items-center gap-2 text-gray-500 mb-2">
                    <Terminal className="w-3 h-3" /> SYSTEM_LOG
                  </div>
                  <div className="space-y-1 opacity-70">
                    <div className="flex justify-between"><span className="text-gray-500">10:42:01</span> <span className="text-green-400">Strategy executed: LONG_ETH</span></div>
                    <div className="flex justify-between"><span className="text-gray-500">10:42:05</span> <span className="text-gray-300">Arbitrage detected: 0.4% spread</span></div>
                    <div className="flex justify-between"><span className="text-gray-500">10:42:12</span> <span className="text-[#D8FF1E]">Auto-compound enabled</span></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-10 -right-10 glass-panel p-4 rounded-2xl shadow-2xl z-20 w-48"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                  <Globe className="w-4 h-4" />
                </div>
                <div className="text-xs text-gray-400">Global Nodes</div>
              </div>
              <div className="text-xl font-bold">24 Active</div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-5 -left-5 glass-panel p-4 rounded-2xl shadow-2xl z-20 w-56"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-full bg-[#D8FF1E]/20 flex items-center justify-center text-[#D8FF1E]">
                  <Shield className="w-4 h-4" />
                </div>
                <div className="text-xs text-gray-400">Security Status</div>
              </div>
              <div className="text-xl font-bold text-white">Encrypted</div>
              <div className="text-xs text-green-400 mt-1">● All systems nominal</div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Bento Grid */}
      <section id="features" className="py-24 bg-[#07090D] relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Engineered for <span className="text-[#D8FF1E]">dominance</span>.
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl">
              Our infrastructure handles millions of data points per second, 
              delivering actionable insights before the market moves.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Feature 1 */}
            <div className="md:col-span-2 glass-panel p-8 rounded-3xl relative overflow-hidden group hover:border-[#D8FF1E]/30 transition-colors">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#D8FF1E]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-[#D8FF1E]/10 transition-colors"></div>
              <Zap className="w-10 h-10 text-[#D8FF1E] mb-6" />
              <h3 className="text-2xl font-bold mb-3">Real-Time Execution</h3>
              <p className="text-gray-400 max-w-md">
                Zero-latency order execution powered by edge computing nodes located in major financial hubs worldwide.
              </p>
              <div className="mt-8 h-32 bg-black/40 rounded-xl border border-white/5 relative overflow-hidden">
                <div className="absolute inset-0 flex items-end justify-between px-4 pb-4">
                   {[30, 50, 40, 70, 60, 90, 80].map((h, i) => (
                     <div key={i} className="w-8 bg-[#D8FF1E]/20 rounded-t-sm" style={{ height: `${h}%` }}></div>
                   ))}
                </div>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="glass-panel p-8 rounded-3xl relative overflow-hidden group hover:border-[#D8FF1E]/30 transition-colors">
              <Layers className="w-10 h-10 text-[#D8FF1E] mb-6" />
              <h3 className="text-2xl font-bold mb-3">Neural Networks</h3>
              <p className="text-gray-400">
                Self-learning algorithms that adapt to market volatility instantly.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="glass-panel p-8 rounded-3xl relative overflow-hidden group hover:border-[#D8FF1E]/30 transition-colors">
              <Shield className="w-10 h-10 text-[#D8FF1E] mb-6" />
              <h3 className="text-2xl font-bold mb-3">Bank-Grade Security</h3>
              <p className="text-gray-400">
                AES-256 encryption and cold storage protocols for asset protection.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="md:col-span-2 glass-panel p-8 rounded-3xl relative overflow-hidden group hover:border-[#D8FF1E]/30 transition-colors flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <BarChart3 className="w-10 h-10 text-[#D8FF1E] mb-6" />
                <h3 className="text-2xl font-bold mb-3">Predictive Analytics</h3>
                <p className="text-gray-400">
                  Forecast market trends with 94% accuracy using our proprietary deep learning models trained on decades of historical data.
                </p>
              </div>
              <div className="flex-1 w-full bg-black/40 rounded-xl border border-white/5 p-4">
                <div className="flex justify-between text-xs text-gray-500 mb-4">
                  <span>Prediction</span>
                  <span className="text-[#D8FF1E]">High Confidence</span>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-20 text-xs text-gray-400">BTC Trend</div>
                    <div className="flex-1 h-2 bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full bg-[#D8FF1E] w-[85%]"></div>
                    </div>
                    <div className="text-xs font-mono">85%</div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-20 text-xs text-gray-400">ETH Volatility</div>
                    <div className="flex-1 h-2 bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full bg-white/30 w-[45%]"></div>
                    </div>
                    <div className="text-xs font-mono">45%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 bg-[#07090D] py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-[#D8FF1E] rounded flex items-center justify-center">
              <Cpu className="w-3 h-3 text-black" />
            </div>
            <span className="text-lg font-bold tracking-tight">MALTON<span className="text-gray-400">AI</span></span>
          </div>
          <div className="text-gray-500 text-sm">
            © 2024 Malton Automation. All systems operational.
          </div>
          <div className="flex gap-6">
            {['Privacy', 'Terms', 'Status'].map((item) => (
              <a key={item} href="#" className="text-gray-500 hover:text-[#D8FF1E] text-sm transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
