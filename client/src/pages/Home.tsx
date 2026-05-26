import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, Edit2, X, Save, Smartphone, Shield, Zap, 
  BarChart3, Clock, Layers, Star, CheckCircle, Globe, 
  Cpu, TrendingUp, Activity
} from 'lucide-react';

// --- Types & Data ---
interface Feature {
  id: number;
  number: string;
  title: string;
  description: string;
  isFeatured?: boolean;
  icon: any;
}

const initialFeatures: Feature[] = [
  {
    id: 1,
    number: '01',
    title: 'Neural Automation',
    description: 'Self-learning algorithms that adapt to your workflow patterns in real-time.',
    isFeatured: false,
    icon: Cpu,
  },
  {
    id: 2,
    number: '02',
    title: 'Predictive Analytics',
    description: 'Forecast market trends and user behavior with 99.8% accuracy using our proprietary models.',
    isFeatured: true,
    icon: TrendingUp,
  },
  {
    id: 3,
    number: '03',
    title: 'Quantum Security',
    description: 'Military-grade encryption protecting your assets across all global nodes.',
    isFeatured: false,
    icon: Shield,
  },
];

// --- Components ---

const Navbar = () => (
  <motion.nav 
    initial={{ y: -100 }}
    animate={{ y: 0 }}
    className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#0D0D0D]/70 backdrop-blur-xl"
  >
    <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
      <div className="flex items-center gap-2 group cursor-pointer">
        <div className="w-8 h-8 bg-[#C8FF00] rounded-lg flex items-center justify-center transform group-hover:rotate-12 transition-transform">
          <Zap className="w-5 h-5 text-black fill-black" />
        </div>
        <span className="text-2xl font-bold tracking-tighter text-white">
          MALTON<span className="text-[#C8FF00]">.AI</span>
        </span>
      </div>

      <div className="hidden md:flex items-center gap-8">
        {['Solutions', 'Platform', 'Developers', 'Company'].map((item) => (
          <a key={item} href="#" className="text-sm font-medium text-gray-400 hover:text-[#C8FF00] transition-colors relative group">
            {item}
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#C8FF00] transition-all group-hover:w-full" />
          </a>
        ))}
      </div>

      <button className="bg-white/5 hover:bg-[#C8FF00] hover:text-black text-white border border-white/10 px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 hover:shadow-[0_0_30px_rgba(200,255,0,0.4)]">
        Launch App
      </button>
    </div>
  </motion.nav>
);

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const rotate1 = useTransform(scrollY, [0, 500], [0, 10]);
  const rotate2 = useTransform(scrollY, [0, 500], [0, -5]);

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#C8FF00]/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
        
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C8FF00] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C8FF00]"></span>
            </span>
            <span className="text-[#C8FF00] text-xs font-bold uppercase tracking-widest">System Online v2.0</span>
          </div>

          <h1 className="text-6xl lg:text-8xl font-bold leading-[0.9] tracking-tighter mb-8 text-white">
            Automate <br />
            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C8FF00] to-emerald-400">Impossible</span>
          </h1>

          <p className="text-gray-400 text-lg lg:text-xl max-w-lg leading-relaxed mb-10 font-light">
            Deploy autonomous AI agents that scale your infrastructure instantly. 
            Trusted by Fortune 500 companies to manage billions in transactions.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="group bg-[#C8FF00] text-black px-8 py-4 rounded-full text-sm font-bold uppercase tracking-widest hover:shadow-[0_0_40px_rgba(200,255,0,0.5)] transition-all duration-300 flex items-center gap-2">
              Start Building
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 rounded-full text-sm font-bold uppercase tracking-widest text-white border border-white/20 hover:bg-white/5 hover:border-white/40 transition-all duration-300 backdrop-blur-sm">
              View Documentation
            </button>
          </div>

          <div className="mt-16 flex items-center gap-6 border-t border-white/10 pt-8">
            <div className="flex -space-x-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-12 h-12 rounded-full border-2 border-[#0D0D0D] bg-gray-800 overflow-hidden relative z-10 hover:z-20 hover:scale-110 transition-all">
                  <img src={`https://i.pravatar.cc/100?img=${i + 15}`} alt="User" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <div>
              <div className="flex text-[#C8FF00] mb-1">
                {[1,2,3,4,5].map(s => <Star key={s} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-white font-bold">10,000+ Developers</p>
              <p className="text-gray-500 text-sm">Trust Malton AI daily</p>
            </div>
          </div>
        </motion.div>

        {/* Right Visuals (Floating Devices) */}
        <motion.div 
          style={{ y: y1 }}
          className="relative hidden lg:block h-[600px] perspective-1000"
        >
          {/* Main Device */}
          <motion.div 
            style={{ rotate: rotate1 }}
            className="absolute top-10 right-10 w-72 h-[500px] bg-[#141414] border border-white/10 rounded-[3rem] shadow-2xl overflow-hidden z-20"
          >
            <div className="absolute top-0 inset-x-0 h-8 bg-black/40 z-30 backdrop-blur-md flex justify-center">
              <div className="w-32 h-4 bg-black rounded-b-xl" />
            </div>
            <div className="w-full h-full bg-gradient-to-br from-gray-900 to-black p-8 flex flex-col justify-between relative">
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
              <div className="mt-12">
                <div className="flex justify-between items-end mb-6">
                  <div>
                    <p className="text-gray-500 text-xs uppercase tracking-wider">Total Volume</p>
                    <h3 className="text-3xl font-bold text-white mt-1">$4.2M</h3>
                  </div>
                  <div className="text-[#C8FF00] text-sm font-bold flex items-center gap-1">
                    <TrendingUp className="w-4 h-4" /> +24.5%
                  </div>
                </div>
                <div className="h-32 w-full flex items-end gap-2">
                  {[40, 70, 45, 90, 60, 80, 50, 95].map((h, i) => (
                    <motion.div 
                      key={i}
                      initial={{ height: 0 }}
                      animate={{ height: `${h}%` }}
                      transition={{ delay: i * 0.1, duration: 1 }}
                      className="flex-1 bg-gradient-to-t from-[#C8FF00]/20 to-[#C8FF00] rounded-t-sm"
                    />
                  ))}
                </div>
              </div>
              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-4 border border-white/5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#C8FF00]/20 flex items-center justify-center text-[#C8FF00]">
                    <Activity className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-white text-sm font-bold">System Optimal</p>
                    <p className="text-gray-500 text-xs">All nodes operational</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Secondary Device (Behind) */}
          <motion.div 
            style={{ y: y2, rotate: rotate2 }}
            className="absolute top-32 right-40 w-64 h-[400px] bg-[#0D0D0D] border border-white/5 rounded-[2rem] shadow-xl overflow-hidden z-10 opacity-60"
          >
             <div className="w-full h-full bg-gradient-to-b from-gray-900 to-black p-6 flex flex-col justify-center items-center">
                <Globe className="w-24 h-24 text-white/5 animate-spin-slow" />
                <div className="mt-8 space-y-3 w-full">
                  {[1,2,3].map(i => (
                    <div key={i} className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: '70%' }}
                        transition={{ delay: i * 0.5, duration: 1.5 }}
                        className="h-full bg-[#C8FF00]/30" 
                      />
                    </div>
                  ))}
                </div>
             </div>
          </motion.div>

          {/* Floating Card */}
          <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-20 left-10 z-30 bg-[#1A1A1A]/80 backdrop-blur-xl border border-white/10 p-6 rounded-2xl shadow-2xl max-w-xs"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="p-3 bg-[#C8FF00] rounded-xl">
                <Shield className="w-6 h-6 text-black" />
              </div>
              <span className="text-[#C8FF00] text-xs font-bold bg-[#C8FF00]/10 px-2 py-1 rounded">SECURE</span>
            </div>
            <h4 className="text-white font-bold text-lg">Encryption Active</h4>
            <p className="text-gray-400 text-sm mt-1">256-bit AES protection enabled on all data streams.</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const Features = ({ onEdit }: { onEdit: (f: Feature) => void }) => {
  return (
    <section className="py-32 bg-[#0D0D0D] relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20">
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            Engineered for <span className="text-[#C8FF00]">Scale</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
            Our platform provides the foundational layer for next-generation applications. 
            Built for speed, security, and infinite scalability.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {initialFeatures.map((feature, idx) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              onClick={() => onEdit(feature)}
              className={`
                group relative p-8 rounded-3xl cursor-pointer transition-all duration-500
                ${feature.isFeatured 
                  ? 'bg-[#C8FF00] text-black shadow-[0_0_50px_rgba(200,255,0,0.2)] scale-105 z-10' 
                  : 'bg-[#141414] border border-white/5 hover:border-[#C8FF00]/30 hover:bg-[#1A1A1A]'
                }
              `}
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 transition-colors ${feature.isFeatured ? 'bg-black/10' : 'bg-white/5 group-hover:bg-[#C8FF00]/10'}`}>
                <feature.icon className={`w-7 h-7 ${feature.isFeatured ? 'text-black' : 'text-white group-hover:text-[#C8FF00]'}`} />
              </div>
              
              <div className={`text-xs font-bold uppercase tracking-widest mb-4 ${feature.isFeatured ? 'text-black/60' : 'text-[#C8FF00]'}`}>
                {feature.number}
              </div>
              
              <h3 className={`text-2xl font-bold mb-4 ${feature.isFeatured ? 'text-black' : 'text-white'}`}>
                {feature.title}
              </h3>
              
              <p className={`leading-relaxed ${feature.isFeatured ? 'text-black/80' : 'text-gray-400'}`}>
                {feature.description}
              </p>

              <div className="mt-8 flex items-center gap-2 font-bold text-sm group-hover:gap-4 transition-all">
                {feature.isFeatured ? 'Explore Feature' : 'Learn More'} 
                <ArrowRight className="w-4 h-4" />
              </div>

              {!feature.isFeatured && (
                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Edit2 className="w-5 h-5 text-[#C8FF00]" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const StatsSection = () => (
  <section className="py-20 bg-[#0D0D0D] border-y border-white/5">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="order-2 lg:order-1 relative h-[400px] bg-[#141414] rounded-3xl border border-white/5 p-8 overflow-hidden">
          {/* Abstract Chart */}
          <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
            <defs>
              <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#C8FF00" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#C8FF00" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path d="M0,300 Q150,250 300,280 T600,200 T900,150 L900,400 L0,400 Z" fill="url(#chartGradient)" />
            <path d="M0,300 Q150,250 300,280 T600,200 T900,150" fill="none" stroke="#C8FF00" strokeWidth="3" vectorEffect="non-scaling-stroke" />
          </svg>
          
          {/* Floating Stat Cards */}
          <motion.div 
            animate={{ y: [0, -15, 0], rotate: [-2, 2, -2] }}
            transition={{ duration: 7, repeat: Infinity }}
            className="absolute top-10 left-10 bg-[#0D0D0D]/90 backdrop-blur-md p-5 rounded-2xl border border-white/10 shadow-2xl z-10"
          >
            <p className="text-gray-400 text-xs uppercase">Latency</p>
            <p className="text-white text-2xl font-bold">12ms</p>
            <span className="text-[#C8FF00] text-xs font-bold">Global Edge</span>
          </motion.div>

          <motion.div 
            animate={{ y: [0, 20, 0], rotate: [2, -2, 2] }}
            transition={{ duration: 8, repeat: Infinity, delay: 1 }}
            className="absolute bottom-10 right-10 bg-[#0D0D0D]/90 backdrop-blur-md p-5 rounded-2xl border border-white/10 shadow-2xl z-10"
          >
            <p className="text-gray-400 text-xs uppercase">Requests/sec</p>
            <p className="text-white text-2xl font-bold">84.5K</p>
            <span className="text-[#C8FF00] text-xs font-bold">+12% Peak</span>
          </motion.div>
        </div>

        <div className="order-1 lg:order-2">
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
            Real-time insights at <span className="text-[#C8FF00]">light speed</span>
          </h2>
          <p className="text-gray-400 text-lg mb-8 leading-relaxed">
            Monitor every transaction, API call, and user interaction with millisecond precision. 
            Our dashboard updates instantly, giving you the power to react before issues arise.
          </p>
          
          <div className="space-y-6">
            {[
              { label: 'Uptime Guarantee', val: '99.99%' },
              { label: 'Data Processed', val: '50PB+' },
              { label: 'Global Nodes', val: '240+' }
            ].map((stat, i) => (
              <div key={i} className="flex items-center justify-between p-6 bg-[#141414] rounded-2xl border border-white/5 hover:border-[#C8FF00]/30 transition-colors">
                <span className="text-gray-400 font-medium">{stat.label}</span>
                <span className="text-white text-xl font-bold">{stat.val}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-[#0D0D0D] pt-20 pb-10 border-t border-white/5">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-2">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-[#C8FF00] rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-black fill-black" />
            </div>
            <span className="text-2xl font-bold text-white">MALTON.AI</span>
          </div>
          <p className="text-gray-400 max-w-sm leading-relaxed">
            Building the infrastructure for the autonomous economy. 
            Join the revolution today.
          </p>
        </div>
        
        <div>
          <h4 className="text-white font-bold mb-6">Platform</h4>
          <ul className="space-y-4 text-gray-400">
            {['Features', 'Integrations', 'Pricing', 'Changelog'].map(item => (
              <li key={item}><a href="#" className="hover:text-[#C8FF00] transition-colors">{item}</a></li>
            ))}
          </ul>
        </div>
        
        <div>
          <h4 className="text-white font-bold mb-6">Legal</h4>
          <ul className="space-y-4 text-gray-400">
            {['Privacy', 'Terms', 'Security', 'Status'].map(item => (
              <li key={item}><a href="#" className="hover:text-[#C8FF00] transition-colors">{item}</a></li>
            ))}
          </ul>
        </div>
      </div>
      
      <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5">
        <p className="text-gray-500 text-sm">© 2024 Malton Automation Inc.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          {/* Social icons would go here */}
        </div>
      </div>
    </div>
  </footer>
);

// --- Main Page Component ---

export default function Home() {
  const [selectedFeature, setSelectedFeature] = useState<Feature | null>(null);
  const [editForm, setEditForm] = useState({ title: '', description: '' });

  const handleCardClick = (feature: Feature) => {
    if (feature.isFeatured) return; // Don't edit featured card for demo
    setSelectedFeature(feature);
    setEditForm({ title: feature.title, description: feature.description });
  };

  const handleSave = () => {
    if (!selectedFeature) return;
    // In a real app, update state here
    setSelectedFeature(null);
  };

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-white selection:bg-[#C8FF00] selection:text-black overflow-x-hidden font-sans">
      <Navbar />
      <Hero />
      <Features onEdit={handleCardClick} />
      <StatsSection />
      
      {/* Trust / CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#C8FF00]/5" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-5xl lg:text-7xl font-bold text-white mb-8 tracking-tight">
            Ready to <span className="text-[#C8FF00]">Scale?</span>
          </h2>
          <p className="text-gray-400 text-xl mb-12 max-w-2xl mx-auto">
            Join thousands of developers building the future of automation.
            Get started for free today.
          </p>
          <button className="bg-[#C8FF00] text-black px-12 py-5 rounded-full text-sm font-bold uppercase tracking-widest hover:shadow-[0_0_50px_rgba(200,255,0,0.6)] transition-all duration-300 transform hover:scale-105">
            Get Started Now
          </button>
        </div>
      </section>

      <Footer />

      {/* Edit Modal */}
      <AnimatePresence>
        {selectedFeature && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedFeature(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#141414] border border-white/10 rounded-3xl w-full max-w-lg overflow-hidden shadow-2xl"
            >
              <div className="p-8 border-b border-white/5 flex justify-between items-center">
                <h3 className="text-2xl font-bold text-white">Edit Feature</h3>
                <button onClick={() => setSelectedFeature(null)} className="text-gray-400 hover:text-white transition-colors">
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <div className="p-8 space-y-6">
                <div>
                  <label className="block text-xs font-bold text-[#C8FF00] uppercase mb-3 tracking-wider">Title</label>
                  <input 
                    type="text" 
                    value={editForm.title}
                    onChange={(e) => setEditForm({ ...editForm, title: e.target.value })}
                    className="w-full bg-[#0D0D0D] border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-[#C8FF00] focus:ring-1 focus:ring-[#C8FF00] transition-all"
                  />
                </div>
                
                <div>
                  <label className="block text-xs font-bold text-[#C8FF00] uppercase mb-3 tracking-wider">Description</label>
                  <textarea 
                    value={editForm.description}
                    onChange={(e) => setEditForm({ ...editForm, description: e.target.value })}
                    rows={4}
                    className="w-full bg-[#0D0D0D] border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-[#C8FF00] focus:ring-1 focus:ring-[#C8FF00] transition-all resize-none"
                  />
                </div>

                <div className="flex gap-4 pt-4">
                  <button 
                    onClick={() => setSelectedFeature(null)}
                    className="flex-1 bg-transparent border border-white/20 text-white py-4 rounded-xl font-bold hover:bg-white/5 transition-colors"
                  >
                    Cancel
                  </button>
                  <button 
                    onClick={handleSave}
                    className="flex-1 bg-[#C8FF00] text-black py-4 rounded-xl font-bold hover:shadow-[0_0_20px_rgba(200,255,0,0.4)] transition-all flex items-center justify-center gap-2"
                  >
                    <Save className="w-5 h-5" /> Save Changes
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
