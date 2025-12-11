"use client";
import { Sun, Moon } from "lucide-react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Heart } from "lucide-react";
import { TrendingUp } from "lucide-react";
import { Calendar } from "lucide-react";
import { Sparkles } from "lucide-react";
import dynamic from "next/dynamic";

const ThemeSwitch = dynamic(() => import("@/src/components/ThemeSwitch"), {
  ssr: false,
  loading: () => <div className="w-5 h-5" />,
});

export default function Home() {
  return (
    <div className="relative min-h-screen w-full">
      <div className="grain-overlay"></div>
      <div className="flex flex-col min-h-screen items-center justify-center font-sans bg-[url(/gradient-optimized.webp)] bg-cover bg-center">
        {/* Navigation - Lovable style clean nav */}
        <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b-1 border-black">
          <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-400 to-pink-500 flex items-center justify-center">
                <span className="text-white text-sm">🧠</span>
              </div>
              <span className="font-semibold text-lg text-foreground">
                Micro Mood
              </span>
            </div>
            <div className="flex items-center gap-4">
              <ThemeSwitch />
              <Link href="/dashboard">
                <button className="text-foreground font-medium">Log in</button>
              </Link>
              <Link href="/dashboard">
                <button className="bg-foreground text-background hover:bg-foreground/90 font-medium px-5 rounded-xl">
                  Get started
                </button>
              </Link>
            </div>
          </div>
        </nav>

        {/* Hero Section - centered layout */}
        <section className="flex justify-center items-center h-screen">
          <div className="max-w-4xl mx-auto text-center">
            {/* Main Headline */}
            <div className="flex flex-col mb-6">
              <h1 className="font-neue text-5xl md:text-7xl font-semi-bold text-foreground leading-[1.1] tracking-tight">
                Understand your emotions
              </h1>
              <h1 className="font-editorial italic text-5xl md:text-7xl bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent ">
                one sentence at a time
              </h1>
            </div>

            {/* Subtitle */}
            <p className="text-xl text-muted-foreground max-w-xl mx-auto mb-12 leading-relaxed">
              Track your mood daily, reflect monthly
            </p>

            {/* Chat Input Box - Lovable signature element */}
            <div className="max-w-2xl mx-auto mb-16">
              <div className="bg-card rounded-2xl shadow-xl border border-border/50 p-4">
                <div className="text-left text-muted-foreground mb-4 px-2">
                  How are you feeling today?
                </div>
                <div className="flex items-center gap-3 px-2">
                  <button className="p-2 rounded-lg hover:bg-secondary transition-colors">
                    <span className="text-xl">+</span>
                  </button>
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-border text-sm text-muted-foreground">
                    <span className="text-lg">😊</span>
                    Mood
                  </div>
                  <div className="flex-1" />
                  <Link href="/dashboard">
                    <button className="bg-blue-500 hover:bg-blue-600 text-white rounded-xl px-4 gap-2">
                      <span className="text-sm">Start</span>
                    </button>
                  </Link>
                  <button className="p-2 rounded-lg bg-gradient-to-r from-orange-400 to-pink-500 text-white">
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section - Lovable style card grid */}
        <section className="py-16 px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="bg-card/80 backdrop-blur-sm rounded-3xl border border-border/50 p-8 md:p-12">
              <p className="text-sm font-medium text-muted-foreground mb-4">
                From the Community
              </p>

              {/* Filter Pills */}
              <div className="flex flex-wrap gap-2 mb-8">
                <button className="px-4 py-2 rounded-lg bg-secondary border border-border text-sm font-medium text-foreground">
                  Featured
                </button>
                {[
                  "Daily Check-ins",
                  "Insights",
                  "Monthly Wrapped",
                  "Streaks",
                ].map((filter) => (
                  <button
                    key={filter}
                    className="px-4 py-2 rounded-lg border border-border text-sm font-medium text-muted-foreground hover:bg-secondary transition-colors"
                  >
                    {filter}
                  </button>
                ))}
              </div>

              {/* Feature Cards Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                <FeatureCard
                  icon={<Heart className="w-5 h-5" />}
                  title="Daily Check-ins"
                  description="Pick an emoji, write one sentence. Takes 30 seconds."
                  gradient="from-rose-400 to-pink-500"
                />
                <FeatureCard
                  icon={<TrendingUp className="w-5 h-5" />}
                  title="Mood Insights"
                  description="Discover patterns in your emotional well-being."
                  gradient="from-blue-400 to-cyan-500"
                />
                <FeatureCard
                  icon={<Calendar className="w-5 h-5" />}
                  title="Monthly Wrapped"
                  description="Beautiful summary of your month, Spotify style."
                  gradient="from-orange-400 to-amber-500"
                />
                <FeatureCard
                  icon={<Sparkles className="w-5 h-5" />}
                  title="AI Insights"
                  description="Get personalized observations about your moods."
                  gradient="from-purple-400 to-indigo-500"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section - Lovable style card grid */}
        <section className="py-16 px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="bg-card/80 backdrop-blur-sm rounded-3xl border border-border/50 p-8 md:p-12">
              <p className="text-sm font-medium text-muted-foreground mb-4">
                From the Community
              </p>

              {/* Filter Pills */}
              <div className="flex flex-wrap gap-2 mb-8">
                <button className="px-4 py-2 rounded-lg bg-secondary border border-border text-sm font-medium text-foreground">
                  Featured
                </button>
                {[
                  "Daily Check-ins",
                  "Insights",
                  "Monthly Wrapped",
                  "Streaks",
                ].map((filter) => (
                  <button
                    key={filter}
                    className="px-4 py-2 rounded-lg border border-border text-sm font-medium text-muted-foreground hover:bg-secondary transition-colors"
                  >
                    {filter}
                  </button>
                ))}
              </div>

              {/* Feature Cards Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                <FeatureCard
                  icon={<Heart className="w-5 h-5" />}
                  title="Daily Check-ins"
                  description="Pick an emoji, write one sentence. Takes 30 seconds."
                  gradient="from-rose-400 to-pink-500"
                />
                <FeatureCard
                  icon={<TrendingUp className="w-5 h-5" />}
                  title="Mood Insights"
                  description="Discover patterns in your emotional well-being."
                  gradient="from-blue-400 to-cyan-500"
                />
                <FeatureCard
                  icon={<Calendar className="w-5 h-5" />}
                  title="Monthly Wrapped"
                  description="Beautiful summary of your month, Spotify style."
                  gradient="from-orange-400 to-amber-500"
                />
                <FeatureCard
                  icon={<Sparkles className="w-5 h-5" />}
                  title="AI Insights"
                  description="Get personalized observations about your moods."
                  gradient="from-purple-400 to-indigo-500"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section - Lovable style card grid */}
        <section className="py-16 px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="bg-card/80 backdrop-blur-sm rounded-3xl border border-border/50 p-8 md:p-12">
              <p className="text-sm font-medium text-muted-foreground mb-4">
                From the Community
              </p>

              {/* Filter Pills */}
              <div className="flex flex-wrap gap-2 mb-8">
                <button className="px-4 py-2 rounded-lg bg-secondary border border-border text-sm font-medium text-foreground">
                  Featured
                </button>
                {[
                  "Daily Check-ins",
                  "Insights",
                  "Monthly Wrapped",
                  "Streaks",
                ].map((filter) => (
                  <button
                    key={filter}
                    className="px-4 py-2 rounded-lg border border-border text-sm font-medium text-muted-foreground hover:bg-secondary transition-colors"
                  >
                    {filter}
                  </button>
                ))}
              </div>

              {/* Feature Cards Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                <FeatureCard
                  icon={<Heart className="w-5 h-5" />}
                  title="Daily Check-ins"
                  description="Pick an emoji, write one sentence. Takes 30 seconds."
                  gradient="from-rose-400 to-pink-500"
                />
                <FeatureCard
                  icon={<TrendingUp className="w-5 h-5" />}
                  title="Mood Insights"
                  description="Discover patterns in your emotional well-being."
                  gradient="from-blue-400 to-cyan-500"
                />
                <FeatureCard
                  icon={<Calendar className="w-5 h-5" />}
                  title="Monthly Wrapped"
                  description="Beautiful summary of your month, Spotify style."
                  gradient="from-orange-400 to-amber-500"
                />
                <FeatureCard
                  icon={<Sparkles className="w-5 h-5" />}
                  title="AI Insights"
                  description="Get personalized observations about your moods."
                  gradient="from-purple-400 to-indigo-500"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6 relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Start your emotional journey
            </h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Join thousands building better emotional awareness.
            </p>
            <Link href="/dashboard">
              <button className="px-8 py-6 text-lg bg-foreground text-background hover:bg-foreground/90 font-medium rounded-xl gap-2">
                Get Started — It's Free
                <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-6 border-t border-border/30 relative z-10">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-md bg-gradient-to-br from-orange-400 to-pink-500 flex items-center justify-center">
                <span className="text-white text-xs">🧠</span>
              </div>
              <span className="font-semibold text-foreground">Micro Mood</span>
            </div>
            <div className="flex gap-8 text-sm text-muted-foreground">
              <span>Company</span>
              <span>Product</span>
              <span>Resources</span>
              <span>Legal</span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

const FeatureCard = ({
  icon,
  title,
  description,
  gradient,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  gradient: string;
}) => {
  return (
    <div className="group bg-secondary/50 rounded-2xl overflow-hidden border border-border/50 hover:border-border transition-all cursor-pointer">
      {/* Preview area with gradient */}
      <div
        className={`h-32 bg-gradient-to-br ${gradient} flex items-center justify-center`}
      >
        <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center text-white">
          {icon}
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-foreground mb-1 text-sm">{title}</h3>
        <p className="text-xs text-muted-foreground line-clamp-2">
          {description}
        </p>
      </div>
    </div>
  );
};
