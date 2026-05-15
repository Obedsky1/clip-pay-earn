import { createFileRoute } from "@tanstack/react-router";
import {
  Smartphone,
  Scissors,
  Upload,
  Wallet,
  PlayCircle,
  TrendingDown,
  TrendingUp,
  Sparkles,
  Check,
  ArrowRight,
  Zap,
  Eye,
  DollarSign,
  BookOpen,
  Hash,
  Target,
  Rocket,
} from "lucide-react";
import heroCreator from "@/assets/hero-creator.jpg";
import phoneEditing from "@/assets/phone-editing.jpg";
import phonesStack from "@/assets/phones-stack.jpg";
import { Quiz } from "@/components/Quiz";
import { FAQ } from "@/components/FAQ";

export const Route = createFileRoute("/")({
  component: Landing,
  head: () => ({
    meta: [
      { title: "Clipping Income System — Beginner to Paid Creator" },
      {
        name: "description",
        content:
          "Learn how beginners in Africa earn by clipping short videos for brands. No followers, no laptop required.",
      },
    ],
  }),
});

function CTAButton({ children, large }: { children: React.ReactNode; large?: boolean }) {
  return (
    <a
      href="#final"
      className={`inline-flex items-center justify-center gap-2 rounded-full font-bold text-primary-foreground transition-transform active:scale-95 hover:scale-[1.02] ${
        large ? "px-8 py-5 text-lg w-full" : "px-6 py-4 text-base"
      }`}
      style={{ background: "var(--grad-cta)", boxShadow: "var(--shadow-glow)" }}
    >
      {children} <ArrowRight className="h-5 w-5" />
    </a>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-3 py-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
      {children}
    </div>
  );
}

function Landing() {
  return (
    <main className="min-h-screen bg-background text-foreground antialiased">
      <div className="mx-auto max-w-xl px-5">
        {/* HERO */}
        <section className="pt-12 pb-16">
          <SectionLabel>
            <Sparkles className="h-3 w-3" /> For African creators
          </SectionLabel>
          <h1 className="mt-5 text-[40px] leading-[1.05] font-black tracking-tight sm:text-5xl">
            TikTok goes viral.{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "var(--grad-hero)" }}
            >
              Most African creators still don't get paid.
            </span>
          </h1>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
            Millions of views. Almost zero pay. There's a better way — brands now pay creators
            directly to post short clips on TikTok, Reels & Facebook.
          </p>
          <div className="relative mt-8 overflow-hidden rounded-[28px] border border-border">
            <img
              src={heroCreator}
              alt="Young creator filming a TikTok-style video on their phone"
              width={1024}
              height={1280}
              className="aspect-[4/5] w-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background via-background/70 to-transparent p-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary">
                <span className="h-2 w-2 animate-pulse rounded-full bg-primary" /> Live now
              </div>
              <div className="mt-1 text-sm font-semibold">
                Real creators are already earning from clips
              </div>
            </div>
          </div>
          <div className="mt-8 space-y-3">
            <CTAButton large>Learn How It Works</CTAButton>
            <a
              href="#how"
              className="block text-center text-sm font-semibold text-muted-foreground underline underline-offset-4"
            >
              Start from zero →
            </a>
          </div>
          <div className="mt-8 grid grid-cols-3 gap-3 text-center">
            {[
              { v: "0", l: "Followers needed" },
              { v: "📱", l: "Phone only" },
              { v: "$1–5", l: "per 1k views" },
            ].map((s) => (
              <div
                key={s.l}
                className="rounded-2xl border border-border bg-secondary p-3"
              >
                <div className="text-xl font-black">{s.v}</div>
                <div className="mt-1 text-[11px] text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </div>
        </section>

        {/* REALITY */}
        <section className="py-12">
          <SectionLabel>The reality</SectionLabel>
          <h2 className="mt-4 text-3xl font-black leading-tight">
            The reality of social media earnings
          </h2>
          <div className="mt-6 space-y-4">
            <div className="rounded-3xl border border-border bg-secondary p-5">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-background">
                  <TrendingDown className="h-5 w-5 text-accent" />
                </div>
                <h3 className="text-lg font-bold">TikTok in Africa</h3>
              </div>
              <ul className="mt-4 space-y-2 text-[15px] text-muted-foreground">
                <li>• Viral videos don't automatically mean income</li>
                <li>• Monetization is limited or unavailable in many regions</li>
                <li>• Views ≠ guaranteed money</li>
              </ul>
            </div>
            <div className="rounded-3xl border border-border bg-secondary p-5">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-background">
                  <TrendingDown className="h-5 w-5 text-accent" />
                </div>
                <h3 className="text-lg font-bold">Facebook & Instagram</h3>
              </div>
              <ul className="mt-4 space-y-2 text-[15px] text-muted-foreground">
                <li>• Monetization exists but payouts are small</li>
                <li>• Earnings are inconsistent and depend on eligibility</li>
                <li>• Hard to scale into real income</li>
              </ul>
            </div>
            <div
              className="rounded-3xl p-5"
              style={{
                background: "var(--grad-hero)",
                color: "oklch(0.12 0.02 260)",
              }}
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-background/20">
                  <TrendingUp className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-black">Brand campaign model</h3>
              </div>
              <ul className="mt-4 space-y-2 text-[15px] font-medium">
                <li>✓ Brands pay creators directly</li>
                <li>✓ Get paid per view or per approved post</li>
                <li>✓ No platform monetization rules in the way</li>
              </ul>
            </div>
          </div>
        </section>

        {/* SHIFT */}
        <section className="py-12">
          <SectionLabel>The shift</SectionLabel>
          <h2 className="mt-4 text-3xl font-black leading-tight">
            Why smart creators are shifting
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Instead of waiting for platform payouts, creators now work directly with brands and
            content campaigns.
          </p>
          <blockquote
            className="mt-6 rounded-2xl border-l-4 p-5 text-[17px] font-semibold leading-snug"
            style={{
              borderColor: "var(--primary)",
              background: "var(--surface-elevated)",
            }}
          >
            "You are no longer depending on platform payouts. You are working directly with people
            who pay for attention."
          </blockquote>
        </section>

        {/* WHAT IS THIS */}
        <section className="py-12">
          <SectionLabel>What is clipping?</SectionLabel>
          <h2 className="mt-4 text-3xl font-black leading-tight">
            Turn long videos into short viral clips
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Companies already have long videos — podcasts, interviews, product demos. They need
            people to cut the best 30–60 second moments and post them where attention lives.
          </p>
          <div className="mt-6 rounded-3xl border border-dashed border-primary/40 bg-secondary p-5">
            <p className="text-[15px]">
              <span className="font-bold text-primary">Think of it like this:</span> turning long
              movies into short highlights people actually watch.
            </p>
          </div>
        </section>

        {/* HOW IT WORKS — STEPS */}
        <section id="how" className="py-12">
          <SectionLabel>How it works</SectionLabel>
          <h2 className="mt-4 text-3xl font-black leading-tight">4 simple steps</h2>

          <div className="mt-8 space-y-4">
            {[
              {
                n: "01",
                t: "Get videos",
                d: "You receive long videos or content from a brand or campaign platform.",
                i: PlayCircle,
              },
              {
                n: "02",
                t: "Clip & edit",
                d: "Cut the best 30–60 second moments using phone apps like CapCut.",
                i: Scissors,
              },
              {
                n: "03",
                t: "Post content",
                d: "Upload to TikTok, Instagram Reels, or Facebook Reels.",
                i: Upload,
              },
              {
                n: "04",
                t: "Get paid",
                d: "When your video gets views or is approved, you earn money.",
                i: Wallet,
              },
            ].map(({ n, t, d, i: Icon }) => (
              <div
                key={n}
                className="flex gap-4 rounded-3xl border border-border bg-secondary p-5"
              >
                <div
                  className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-primary-foreground"
                  style={{ background: "var(--grad-cta)" }}
                >
                  <Icon className="h-7 w-7" />
                </div>
                <div className="flex-1">
                  <div className="text-xs font-mono font-bold text-muted-foreground">{n}</div>
                  <h3 className="text-xl font-bold leading-tight">{t}</h3>
                  <p className="mt-1 text-[15px] text-muted-foreground">{d}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-border bg-background p-4">
            <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-wider">
              <span className="text-primary">Get</span>
              <ArrowRight className="h-3 w-3 text-muted-foreground" />
              <span className="text-primary">Edit</span>
              <ArrowRight className="h-3 w-3 text-muted-foreground" />
              <span className="text-primary">Post</span>
              <ArrowRight className="h-3 w-3 text-muted-foreground" />
              <span className="text-accent">Earn</span>
            </div>
          </div>

          <div className="mt-8">
            <CTAButton large>Get Access to Clipping System</CTAButton>
          </div>
        </section>

        {/* WHAT IS WHOP */}
        <section className="py-12">
          <SectionLabel>The bridge</SectionLabel>
          <h2 className="mt-4 text-3xl font-black leading-tight">
            What is Whop?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Whop is just a tool — a platform where brands list "content rewards" and pay people
            to post videos that promote their content or products.
          </p>
          <div className="mt-6 space-y-3">
            {[
              "You don't need to be famous",
              "You don't need followers",
              "You just follow instructions and post content",
            ].map((b) => (
              <div
                key={b}
                className="flex items-center gap-3 rounded-2xl border border-border bg-secondary p-4"
              >
                <Check className="h-5 w-5 shrink-0 text-primary" />
                <span className="text-[15px] font-medium">{b}</span>
              </div>
            ))}
          </div>
        </section>

        {/* TWO WAYS TO EARN */}
        <section className="py-12">
          <SectionLabel>Two paths</SectionLabel>
          <h2 className="mt-4 text-3xl font-black leading-tight">Two ways to earn</h2>
          <div className="mt-6 grid gap-4">
            <div className="rounded-3xl border border-border bg-secondary p-5">
              <div className="flex items-center gap-3">
                <Scissors className="h-6 w-6 text-primary" />
                <h3 className="text-lg font-bold">1. Clipping existing videos</h3>
              </div>
              <ul className="mt-3 space-y-1.5 text-[15px] text-muted-foreground">
                <li>• Edit viral moments from provided content</li>
                <li>• Add captions and hooks</li>
                <li>• Post on social media</li>
              </ul>
            </div>
            <div className="rounded-3xl border border-border bg-secondary p-5">
              <div className="flex items-center gap-3">
                <Smartphone className="h-6 w-6 text-accent" />
                <h3 className="text-lg font-bold">2. Creating original content</h3>
              </div>
              <ul className="mt-3 space-y-1.5 text-[15px] text-muted-foreground">
                <li>• Make simple product videos or reviews</li>
                <li>• Record with your phone</li>
                <li>• Post and submit for payment</li>
              </ul>
            </div>
          </div>
        </section>

        {/* HOW PAYMENT WORKS */}
        <section className="py-12">
          <SectionLabel>Payment</SectionLabel>
          <h2 className="mt-4 text-3xl font-black leading-tight">How payment works</h2>
          <ol className="mt-6 space-y-3">
            {[
              "Join a campaign",
              "Pick a task",
              "Post a video",
              "Submit the link",
              "Get paid based on views or approval",
            ].map((step, i) => (
              <li
                key={step}
                className="flex items-center gap-4 rounded-2xl border border-border bg-secondary p-4"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-black text-primary-foreground">
                  {i + 1}
                </span>
                <span className="text-[15px] font-medium">{step}</span>
              </li>
            ))}
          </ol>
          <div
            className="mt-6 rounded-3xl p-6 text-center"
            style={{ background: "var(--grad-hero)", color: "oklch(0.12 0.02 260)" }}
          >
            <DollarSign className="mx-auto h-8 w-8" />
            <div className="mt-2 text-3xl font-black">$1 – $5</div>
            <div className="text-sm font-semibold">per 1,000 views (varies by campaign)</div>
          </div>
        </section>

        {/* WHAT YOU LEARN */}
        <section className="py-12">
          <SectionLabel>The course</SectionLabel>
          <h2 className="mt-4 text-3xl font-black leading-tight">What you'll learn</h2>
          <p className="mt-3 text-muted-foreground">
            How to earn without depending on TikTok or Facebook monetization systems.
          </p>
          <div className="mt-6 space-y-3">
            {[
              { i: Eye, t: "How to find viral content ideas" },
              { i: Scissors, t: "How to edit clips on mobile apps" },
              { i: TrendingUp, t: "How to grow TikTok or Reels pages" },
              { i: Zap, t: "How to join content reward platforms" },
              { i: Wallet, t: "How to get your first paid video" },
            ].map(({ i: Icon, t }) => (
              <div
                key={t}
                className="flex items-center gap-3 rounded-2xl border border-border bg-secondary p-4"
              >
                <Icon className="h-5 w-5 shrink-0 text-primary" />
                <span className="text-[15px] font-medium">{t}</span>
              </div>
            ))}
          </div>
        </section>

        {/* WHO IT'S FOR */}
        <section className="py-12">
          <SectionLabel>Who it's for</SectionLabel>
          <h2 className="mt-4 text-3xl font-black leading-tight">Built for beginners</h2>
          <div className="mt-6 grid grid-cols-2 gap-3">
            {[
              "Beginners with no experience",
              "Anyone with just a smartphone",
              "Students & unemployed youth",
              "Anyone who wants online income skills",
            ].map((w) => (
              <div
                key={w}
                className="rounded-2xl border border-border bg-secondary p-4 text-[14px] font-medium"
              >
                {w}
              </div>
            ))}
          </div>
        </section>

        {/* FINAL CTA */}
        <section id="final" className="py-16">
          <div
            className="rounded-[32px] p-7 text-center"
            style={{
              background: "var(--surface-elevated)",
              border: "1px solid var(--border)",
            }}
          >
            <SectionLabel>Final step</SectionLabel>
            <h2 className="mt-4 text-3xl font-black leading-tight">
              Start learning the system that pays creators for content
            </h2>
            <p className="mt-3 text-[15px] text-muted-foreground italic">
              "You are no longer depending on platform payouts. You are working directly with
              people who pay for attention."
            </p>
            <div className="mt-7">
              <CTAButton large>Get Access to Clipping System</CTAButton>
            </div>
            <p className="mt-4 text-xs text-muted-foreground">
              Beginner friendly. No laptop required.
            </p>
          </div>
        </section>

        <footer className="pb-10 pt-4 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Clipping Income System
        </footer>
      </div>
    </main>
  );
}
