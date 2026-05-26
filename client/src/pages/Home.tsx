import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Bot,
  Zap,
  Shield,
  ArrowRight,
  CheckCircle2,
  BarChart3,
  Clock,
  Layers,
  Sparkles,
  TrendingUp,
  Users,
  Globe
} from "lucide-react";
import { getLoginUrl } from "@/const";
import { motion } from "framer-motion";
import { useState } from "react";


const features = [
  { icon: Bot, title: "AI-Powered Automation", description: "Leverage cutting-edge artificial intelligence to automate complex workflows and boost productivity." },
  { icon: Zap, title: "Lightning Fast", description: "Experience real-time processing with our optimized infrastructure built for speed and efficiency." },
  { icon: Shield, title: "Enterprise Security", description: "Bank-grade encryption and security protocols to keep your data safe and compliant." },
  { icon: BarChart3, title: "Advanced Analytics", description: "Gain deep insights with comprehensive dashboards and real-time performance metrics." },
  { icon: Clock, title: "24/7 Monitoring", description: "Continuous monitoring and automated alerts ensure your systems run smoothly around the clock." },
  { icon: Layers, title: "Seamless Integration", description: "Connect with your favorite tools and platforms through our extensive API ecosystem." }
];

const benefits = [
  "Reduce operational costs by up to 60%",
  "Eliminate manual errors and improve accuracy",
  "Scale operations without adding headcount",
  "Get actionable insights in real-time",
  "Focus on strategic initiatives, not repetitive tasks",
  "Deploy automations in minutes, not months"
];

const stats = [
  { value: "10M+", label: "Tasks Automated", icon: CheckCircle2 },
  { value: "99.9%", label: "Uptime SLA", icon: Shield },
  { value: "500+", label: "Enterprise Clients", icon: Users },
  { value: "50+", label: "Countries Served", icon: Globe }
];

export default function Home() {
  const { user, loading } = useAuth();
  const [isHovered, setIsHovered] = useState(false);
  const fadeInUp = { initial: { opacity: 0, y: 40 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6 } };
  const staggerContainer = { animate: { transition: { staggerChildren: 0.1 } } };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/20">
      <nav className="fixed top-0 left-0 right-0 z-50 border-b bg-background/80 backdrop-blur-md">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <motion.div className="flex items-center gap-2" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <Sparkles className="h-5 w-5" />
              </div>
              <span className="text-xl font-bold tracking-tight">Malton Automation</span>
            </motion.div>
            <motion.div className="flex items-center gap-4" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
              {loading ? (<div className="h-9 w-24 animate-pulse rounded-md bg-muted" />) : user ? (
                <Button onClick={() => window.location.href = "/dashboard"} variant="default">Dashboard</Button>) : (
                <Button onClick={() => window.location.href = getLoginUrl()} variant="default" className="group">
                  Get Started <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>)}
            </motion.div>
          </div>
        </div>
      </nav>

      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-1/4 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute bottom-20 right-1/4 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="mx-auto max-w-4xl text-center" initial={fadeInUp.initial} animate={fadeInUp.animate} transition={fadeInUp.transition}>
            <div className="inline-flex items-center gap-2 rounded-full border bg-muted/50 px-4 py-1.5 text-sm font-medium mb-6">
              <Sparkles className="h-4 w-4 text-primary" /><span>Next-Generation Automation Platform</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl mb-6">
              Automate Your Workflow,{" "}
              <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">Amplify Your Impact</span>
            </h1>
            <p className="text-lg text-muted-foreground sm:text-xl mb-8 max-w-2xl mx-auto">
              Transform your business operations with intelligent automation. Reduce costs, eliminate errors, and unlock unprecedented efficiency with our AI-powered platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="group text-base px-8" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} onClick={() => window.location.href = getLoginUrl()}>
                Start Free Trial
                <motion.div animate={{ x: isHovered ? 4 : 0 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}><ArrowRight className="ml-2 h-5 w-5" /></motion.div>
              </Button>
              <Button size="lg" variant="outline" className="text-base px-8" onClick={() => window.location.href = "#features"}>Learn More</Button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 border-y bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-8" variants={staggerContainer} initial="initial" whileInView="animate" viewport={{ once: true }}>
            {stats.map((stat, index) => (
              <motion.div key={stat.label} className="text-center" variants={fadeInUp} custom={index}>
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-xl bg-primary/10 text-primary mb-4"><stat.icon className="h-6 w-6" /></div>
                <div className="text-3xl font-bold mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="features" className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="mx-auto max-w-2xl text-center mb-16" initial={fadeInUp.initial} whileInView={fadeInUp.animate} viewport={{ once: true }} transition={fadeInUp.transition}>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Everything You Need to Automate Successfully</h2>
            <p className="text-lg text-muted-foreground">Powerful features designed to streamline your operations and drive growth</p>
          </motion.div>
          <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" variants={staggerContainer} initial="initial" whileInView="animate" viewport={{ once: true }}>
            {features.map((feature, index) => (
              <motion.div key={feature.title} variants={fadeInUp} custom={index}>
                <Card className="h-full border-muted hover:border-primary/50 transition-colors hover:shadow-lg">
                  <CardHeader>
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary mb-4"><feature.icon className="h-6 w-6" /></div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent><CardDescription className="text-base">{feature.description}</CardDescription></CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20 lg:py-32 bg-gradient-to-br from-primary/5 to-blue-500/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">Why Leading Companies Choose Malton Automation</h2>
              <p className="text-lg text-muted-foreground mb-8">Join hundreds of enterprises that have transformed their operations with our cutting-edge automation solutions.</p>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.li key={benefit} className="flex items-start gap-3" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" /><span className="text-muted-foreground">{benefit}</span>
                  </motion.li>
                ))}
              </ul>
              <div className="mt-8"><Button size="lg" className="group" onClick={() => window.location.href = getLoginUrl()}>Start Your Journey<ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" /></Button></div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative">
              <div className="relative rounded-2xl border bg-card p-6 shadow-xl">
                <div className="absolute -top-4 -right-4 h-24 w-24 rounded-full bg-primary/20 blur-2xl" /><div className="absolute -bottom-4 -left-4 h-32 w-32 rounded-full bg-blue-500/20 blur-2xl" />
                <div className="relative space-y-6">
                  <div className="flex items-center gap-4"><div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center"><TrendingUp className="h-6 w-6 text-primary" /></div><div><div className="text-2xl font-bold">+247%</div><div className="text-sm text-muted-foreground">Productivity Increase</div></div></div>
                  <div className="h-px bg-border" />
                  <div className="flex items-center gap-4"><div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center"><Clock className="h-6 w-6 text-primary" /></div><div><div className="text-2xl font-bold">-85%</div><div className="text-sm text-muted-foreground">Processing Time</div></div></div>
                  <div className="h-px bg-border" />
                  <div className="flex items-center gap-4"><div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center"><Bot className="h-6 w-6 text-primary" /></div><div><div className="text-2xl font-bold">10,000+</div><div className="text-sm text-muted-foreground">Automations Running</div></div></div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="relative mx-auto max-w-4xl rounded-3xl bg-gradient-to-br from-primary to-blue-600 p-8 sm:p-12 lg:p-16 overflow-hidden" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="absolute top-0 right-0 h-64 w-64 rounded-full bg-white/10 blur-3xl" /><div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
            <div className="relative text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-white mb-4">Ready to Transform Your Business?</h2>
              <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">Start automating today and experience the future of work. No credit card required for your free trial.</p>
              <Button size="lg" variant="secondary" className="group text-base px-8" onClick={() => window.location.href = getLoginUrl()}>Get Started Free<ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" /></Button>
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="border-t py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground"><Sparkles className="h-4 w-4" /></div>
              <span className="font-semibold">Malton Automation</span>
            </div>
            <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Malton Automation. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
