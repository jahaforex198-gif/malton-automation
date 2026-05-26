import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, Edit2, X, Save, BarChart3, Shield, Zap, 
  Layers, Star, CheckCircle, TrendingUp, Users, Globe 
} from 'lucide-react';

// --- Types ---
interface Feature {
  id: number;
  number: string;
  title: string;
  description: string;
  isFeatured?: boolean;
  icon: any;
}

// --- Initial Data ---
const initialFeatures: Feature[] = [
  {
    id: 1,
    number: '01.',
    title: 'AI-Powered Core',
    description: 'Self-learning algorithms that optimize your workflows in real-time, reducing manual intervention by 80%.',
    isFeatured: false,
    icon: Zap,
  },
  {
    id: 2,
    number: '02.',
    title: 'Real-Time Analytics',
    description: 'Live data visualization with sub-millisecond latency. Track every metric that matters to your bottom line.',
    isFeatured: true,
    icon: BarChart3,
  },
  {
    id: 3,
    number: '03.',
    title: 'Enterprise Security',
    description: 'Bank-grade encryption and SOC2 compliance built-in. Your data is protected by military-standard protocols.',
    isFeatured: false,
    icon: Shield,
  },
];

export default function Home() {
  const [features, setFeatures] = useState<Feature[]>(initialFeatures);
  const [selectedFeature, setSelectedFeature] = useState<Feature | null>(null);
  const [editForm, setEditForm] = useState({ title: '', description: '' });

  const handleCardClick = (feature: Feature) => {
    setSelectedFeature(feature);
    setEditForm({ title: feature.title, description: feature.description });
  };

  const handleSave = () => {
    if (!selectedFeature) return;
    setFeatures(features.map(f => 
      f.id === selectedFeature.id 
        ? { ...f, title: editForm.title, description: editForm.description }
        : f
    ));
    setSelectedFeature(null);
  };

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-white font-sans selection:bg-[#C8FF00] selection:text-black overflow-x-hidden">
      
      {/* --- Navigation --- */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#0D0D0D]/70 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold tracking-tighter"
          >
            MALTON<span className="text-[#C8FF00]">AI</span>
          </motion.div>
          
          <div className="hidden md:flex space-x-8">
            {['Solutions', 'Platform', 'Developers', 'Company'].map((item, i) => (
              <motion.a 
                key={item}
                href={`#${item.toLowerCase()}`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="text-sm font-medium text-gray-400 hover:text-[#C8FF00] transition-colors"
              >
                {item}
              </motion.a>
            ))}
          </div>

          <motion.button 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(200, 255, 0, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#C8FF00] text-black px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all"
          >
            Get Started
          </motion.button>
        </div>
      </nav>

      {/* --- Hero Section --- */}
      <section className="relative pt-40 pb-20 lg:pt-52 lg:pb-32 overflow-hidden">
        {/* Background Glows */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#C8FF00]/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center relative z-10">
          
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 border border-[#C8FF00]/20 rounded-full bg-[#C8FF00]/5 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C8FF00] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C8FF00]"></span>
              </span>
              <span className="text-[#C8FF00] text-[10px] font-bold uppercase tracking-widest">System Operational</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold leading-[1.1] mb-8 tracking-tight">
              Automate the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C8FF00] to-emerald-400">Impossible.</span>
            </h1>

            <p className="text-gray-400 text-lg mb-10 max-w-lg leading-relaxed font-light">
              Deploy intelligent agents that work 24/7. From data processing to customer engagement, Malton AI scales your operations instantly.
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-6 mb-12">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-[#0D0D0D] bg-gray-800 overflow-hidden shadow-lg">
                    <img src={`https://i.pravatar.cc/100?img=${i + 15}`} alt="User" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all" />
                  </div>
                ))}
                <div className="w-10 h-10 rounded-full border-2 border-[#0D0D0D] bg-[#1A1A1A] flex items-center justify-center text-[10px] font-bold text-white">
                  +2k
                </div>
              </div>
              <div className="pt-1">
                <div className="flex items-center gap-1 text-[#C8FF00] mb-1">
                  <Star className="w-4 h-4 fill-[#C8FF00]" />
                  <Star className="w-4 h-4 fill-[#C8FF00]" />
                  <Star className="w-4 h-4 fill-[#C8FF00]" />
                  <Star className="w-4 h-4 fill-[#C8FF00]" />
                  <Star className="w-4 h-4 fill-[#C8FF00]" />
                </div>
                <div className="text-sm text-gray-400">Trusted by 168K+ innovators</div>
              </div>
            </div>

            <div className="flex gap-4">
              <button className="group bg-[#C8FF00] text-black px-8 py-4 rounded-full text-sm font-bold uppercase tracking-wider hover:shadow-[0_0_30px_rgba(200,255,0,0.4)] transition-all flex items-center gap-2">
                Start Building <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 rounded-full text-sm font-bold uppercase tracking-wider border border-white/10 text-white hover:bg-white/5 hover:border-white/20 transition-all">
                View Demo
              </button>
            </div>
          </motion.div>

          {/* Right Visuals (Abstract Dashboard) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative h-[600px] w-full hidden lg:block"
          >
            {/* Main Card */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[500px] bg-[#141414] border border-white/10 rounded-3xl shadow-2xl overflow-hidden z-20"
            >
              <div className="p-6 border-b border-white/5 flex items-center justify-between">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                  <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
                </div>
                <div className="text-xs text-gray-500 font-mono">live_feed.json</div>
              </div>
              <div className="p-8 space-y-6">
                <div className="flex justify-between items-end">
                  <div>
                    <div className="text-gray-500 text-xs uppercase tracking-wider mb-1">Total Volume</div>
                    <div className="text-4xl font-bold text-white">$4,289,302</div>
                  </div>
                  <div className="text-[#C8FF00] text-sm font-bold flex items-center gap-1 bg-[#C8FF00]/10 px-2 py-1 rounded">
                    <TrendingUp className="w-3 h-3" /> +24.5%
                  </div>
                </div>
                
                {/* Mock Chart */}
                <div className="h-32 w-full flex items-end gap-1">
                  {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 100].map((h, i) => (
                    <motion.div 
                      key={i}
                      initial={{ height: 0 }}
                      animate={{ height: `${h}%` }}
                      transition={{ duration: 1, delay: i * 0.05 }}
                      className="flex-1 bg-gradient-to-t from-[#C8FF00]/20 to-[#C8FF00] rounded-t-sm opacity-80"
                    />
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="bg-[#0D0D0D] p-4 rounded-xl border border-white/5">
                    <Users className="w-5 h-5 text-gray-400 mb-2" />
                    <div className="text-xl font-bold text-white">8,492</div>
                    <div className="text-xs text-gray-500">Active Nodes</div>
                  </div>
                  <div className="bg-[#0D0D0D] p-4 rounded-xl border border-white/5">
                    <Globe className="w-5 h-5 text-gray-400 mb-2" />
                    <div className="text-xl font-bold text-white">99.9%</div>
                    <div className="text-xs text-gray-500">Uptime</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Floating Badge 1 */}
            <motion.div 
              animate={{ y: [0, 20, 0], rotate: [0, 5, 0] }}
              transition={{ duration: 5, repeat: Infinity, delay: 1 }}
              className="absolute top-20 right-10 bg-[#1A1A1A]/90 backdrop-blur-md p-4 rounded-2xl border border-white/10 shadow-xl z-30 w-48"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-full bg-[#C8FF00] flex items-center justify-center text-black">
                  <Zap className="w-4 h-4 fill-current" />
                </div>
                <div className="text-xs font-bold text-white">Speed Optimized</div>
              </div>
              <div className="h-1 w-full bg-gray-800 rounded-full overflow-hidden">
                <div className="h-full bg-[#C8FF00] w-[92%]" />
              </div>
            </motion.div>

            {/* Floating Badge 2 */}
            <motion.div 
              animate={{ y: [0, -25, 0], rotate: [0, -5, 0] }}
              transition={{ duration: 7, repeat: Infinity, delay: 0.5 }}
              className="absolute bottom-32 left-0 bg-[#1A1A1A]/90 backdrop-blur-md p-4 rounded-2xl border border-white/10 shadow-xl z-30 w-56"
            >
              <div className="flex items-center gap-3">
                <Shield className="w-8 h-8 text-[#C8FF00]" />
                <div>
                  <div className="text-sm font-bold text-white">Security Verified</div>
                  <div className="text-xs text-gray-400">End-to-end encrypted</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* --- Features Section --- */}
      <section className="py-24 bg-[#0D0D0D] relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl lg:text-6xl font-bold mb-6 tracking-tight">
                Engineered for <br />
                <span className="text-[#C8FF00]">Scale & Speed</span>
              </h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-end"
            >
              <p className="text-gray-400 text-lg leading-relaxed max-w-md">
                Our infrastructure handles millions of requests per second with zero downtime. Built for the demands of modern enterprise.
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onClick={() => handleCardClick(feature)}
                className={`
                  group relative p-8 rounded-3xl cursor-pointer transition-all duration-500
                  ${feature.isFeatured 
                    ? 'bg-[#C8FF00] text-black shadow-[0_0_40px_rgba(200,255,0,0.15)] transform md:-translate-y-4' 
                    : 'bg-[#141414] border border-white/5 hover:border-[#C8FF00]/30 hover:bg-[#1A1A1A]'
                  }
                `}
              >
                <div className={`w-12 h-12 rounded-2xl mb-6 flex items-center justify-center ${feature.isFeatured ? 'bg-black/10' : 'bg-[#C8FF00]/10'}`}>
                  <feature.icon className={`w-6 h-6 ${feature.isFeatured ? 'text-black' : 'text-[#C8FF00]'}`} />
                </div>

                <div className={`text-xs font-bold mb-4 tracking-widest uppercase ${feature.isFeatured ? 'text-black/60' : 'text-[#C8FF00]'}`}>
                  {feature.number}
                </div>
                
                <h3 className={`text-2xl font-bold mb-4 ${feature.isFeatured ? 'text-black' : 'text-white'}`}>
                  {feature.title}
                </h3>
                
                <p className={`leading-relaxed ${feature.isFeatured ? 'text-black/80' : 'text-gray-400'}`}>
                  {feature.description}
                </p>
                
                <div className={`mt-8 flex items-center font-bold text-sm ${feature.isFeatured ? 'text-black' : 'text-white'} opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0`}>
                  Configure <ArrowRight className="w-4 h-4 ml-2" />
                </div>

                {!feature.isFeatured && (
                  <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Edit2 className="w-4 h-4 text-[#C8FF00]" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Stats / Trust Section --- */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-[#141414] border border-white/5 rounded-[40px] p-8 lg:p-16 relative overflow-hidden">
            {/* Decorative Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

            <div className="grid lg:grid-cols-2 gap-16 relative z-10">
              <div>
                <h3 className="text-3xl font-bold mb-6">Global Infrastructure</h3>
                <p className="text-gray-400 mb-8 text-lg">Deployed across 35 regions worldwide, ensuring your data is always close to your users.</p>
                
                <div className="space-y-6">
                  {[
                    { label: 'Requests / sec', value: '2.4M', change: '+18%' },
                    { label: 'Avg. Latency', value: '12ms', change: '-5%' },
                    { label: 'Data Processed', value: '840TB', change: '+42%' },
                  ].map((stat, i) => (
                    <div key={i} className="flex items-center justify-between p-5 bg-[#0D0D0D] rounded-2xl border border-white/5">
                      <span className="text-gray-400 font-medium">{stat.label}</span>
                      <div className="flex items-center gap-4">
                        <span className="text-white font-bold text-lg">{stat.value}</span>
                        <span className={`text-xs font-bold px-2 py-1 rounded-full ${stat.change.startsWith('+') ? 'bg-[#C8FF00]/10 text-[#C8FF00]' : 'bg-red-500/10 text-red-500'}`}>
                          {stat.change}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative min-h-[400px] flex items-center justify-center">
                 {/* Abstract Globe/Network Visualization */}
                 <div className="relative w-full h-full bg-[#0D0D0D] rounded-3xl border border-white/5 overflow-hidden flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#C8FF00]/5 to-transparent" />
                    <BarChart3 className="w-32 h-32 text-[#C8FF00]/20 animate-pulse" />
                    
                    {/* Floating Stat Card */}
                    <motion.div 
                      animate={{ y: [0, -15, 0], rotate: [-2, 2, -2] }}
                      transition={{ duration: 6, repeat: Infinity }}
                      className="absolute top-1/4 left-1/4 bg-[#1A1A1A]/90 backdrop-blur-xl p-5 rounded-2xl border border-white/10 shadow-2xl z-20"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-ping" />
                        <span className="text-xs font-bold text-gray-300">System Healthy</span>
                      </div>
                      <div className="mt-2 text-2xl font-bold text-white">99.99%</div>
                    </motion.div>

                     <motion.div 
                      animate={{ y: [0, 20, 0], rotate: [2, -2, 2] }}
                      transition={{ duration: 8, repeat: Infinity, delay: 1 }}
                      className="absolute bottom-1/4 right-1/4 bg-[#1A1A1A]/90 backdrop-blur-xl p-5 rounded-2xl border border-white/10 shadow-2xl z-20"
                    >
                      <div className="text-xs font-bold text-gray-300 mb-1">Active Agents</div>
                      <div className="text-2xl font-bold text-[#C8FF00]">8,432</div>
                    </motion.div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Footer --- */}
      <footer className="border-t border-white/5 bg-[#0D0D0D] py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-xl font-bold tracking-tighter">MALTON<span className="text-[#C8FF00]">AI</span></div>
          <div className="text-gray-500 text-sm">
            © 2024 Malton Automation Inc.
          </div>
          <div className="flex gap-6">
            {['Privacy', 'Terms', 'Twitter', 'GitHub'].map((item) => (
              <a key={item} href="#" className="text-gray-500 hover:text-[#C8FF00] text-sm transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </footer>

      {/* --- Edit Modal (Polished) --- */}
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
              initial={{ scale: 0.95, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 20, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#141414] border border-white/10 rounded-3xl w-full max-w-lg overflow-hidden shadow-2xl"
            >
              <div className="p-6 border-b border-white/5 flex justify-between items-center bg-[#1A1A1A]">
                <div>
                  <h3 className="text-lg font-bold text-white">Edit Feature</h3>
                  <p className="text-xs text-gray-500">Update content for {selectedFeature.number}</p>
                </div>
                <button onClick={() => setSelectedFeature(null)} className="text-gray-400 hover:text-white bg-white/5 hover:bg-white/10 p-2 rounded-full transition-all">
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              <div className="p-8 space-y-6">
                <div>
                  <label className="block text-xs font-bold text-[#C8FF00] uppercase tracking-wider mb-2">Feature Title</label>
                  <input 
                    type="text" 
                    value={editForm.title}
                    onChange={(e) => setEditForm({ ...editForm, title: e.target.value })}
                    className="w-full bg-[#0D0D0D] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#C8FF00] focus:ring-1 focus:ring-[#C8FF00] transition-all placeholder-gray-600"
                  />
                </div>
                
                <div>
                  <label className="block text-xs font-bold text-[#C8FF00] uppercase tracking-wider mb-2">Description</label>
                  <textarea 
                    value={editForm.description}
                    onChange={(e) => setEditForm({ ...editForm, description: e.target.value })}
                    rows={4}
                    className="w-full bg-[#0D0D0D] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#C8FF00] focus:ring-1 focus:ring-[#C8FF00] transition-all placeholder-gray-600 resize-none"
                  />
                </div>

                <div className="flex gap-3 pt-4">
                  <button 
                    onClick={() => setSelectedFeature(null)}
                    className="flex-1 bg-transparent border border-white/10 text-white py-3.5 rounded-xl font-bold hover:bg-white/5 transition-all"
                  >
                    Cancel
                  </button>
                  <button 
                    onClick={handleSave}
                    className="flex-1 bg-[#C8FF00] text-black py-3.5 rounded-xl font-bold hover:shadow-[0_0_20px_rgba(200,255,0,0.3)] transition-all flex items-center justify-center gap-2"
                  >
                    <Save className="w-4 h-4" /> Save Changes
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
