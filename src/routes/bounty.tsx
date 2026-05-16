import { createFileRoute } from "@tanstack/react-router";
import { Copy, CheckCircle2, Gift, Trophy, ArrowRight, Download, Medal } from "lucide-react";
import { useState, useEffect } from "react";
import { getTopAffiliates } from "@/lib/firebase";

// @ts-ignore - Ignore TS error for missing declaration if applicable
import geminiImg from "@/assets/Gemini_Generated_Image_9ga5li9ga5li9ga5.webp";
// @ts-ignore
import chatgptImg from "@/assets/ChatGPT Image May 16, 2026, 07_31_37 AM.webp";
// @ts-ignore
import newImg1 from "@/assets/fc017ee4-206f-4554-b96b-03e36bb81a76.webp";
// @ts-ignore
import newImg2 from "@/assets/0fadc3a5-46f6-48b8-bdf4-123c3461ff11.webp";
// @ts-ignore
import newImg3 from "@/assets/ChatGPT Image May 16, 2026, 11_59_45 AM.webp";

const ALL_IMAGES = [geminiImg, chatgptImg, newImg1, newImg2, newImg3];

export const Route = createFileRoute("/bounty")({
  component: BountyPage,
});

function TelegramBanner() {
  return (
    <a
      href="https://t.me/nigeriaclippers"
      target="_blank"
      rel="noopener noreferrer"
      className="mb-6 flex w-full items-center justify-center gap-2 rounded-2xl bg-[#0088cc]/10 p-4 text-[#0088cc] transition-colors hover:bg-[#0088cc]/20 border border-[#0088cc]/20"
    >
      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.19-.08-.05-.19-.02-.27 0-.11.03-1.93 1.23-5.46 3.62-.51.35-.98.52-1.4.51-.46-.01-1.35-.26-2.01-.48-.81-.27-1.46-.42-1.4-.88.03-.24.36-.48.97-.74 3.78-1.65 6.31-2.74 7.58-3.27 3.61-1.51 4.36-1.77 4.85-1.78.11 0 .35.03.48.14.11.08.14.22.15.34-.01.07-.01.19-.03.26z" />
      </svg>
      <span className="font-bold text-sm">Join Nigeria Clippers on Telegram for updates</span>
      <ArrowRight className="h-4 w-4" />
    </a>
  );
}

function BountyPage() {
  const [copiedLink, setCopiedLink] = useState(false);
  const [copiedTextIndex, setCopiedTextIndex] = useState<number | null>(null);
  const [whatsappNumber, setWhatsappNumber] = useState("");
  const [leaderboard, setLeaderboard] = useState<any[]>([]);
  const [loadingLeaderboard, setLoadingLeaderboard] = useState(true);

  useEffect(() => {
    getTopAffiliates().then(data => {
      const combined = [...data];
      const demoData = [
        { whatsapp: "08031234567", score: 14 },
        { whatsapp: "09029876543", score: 9 },
        { whatsapp: "08145559999", score: 7 },
        { whatsapp: "07061112222", score: 5 },
        { whatsapp: "08097778888", score: 3 }
      ];
      
      demoData.forEach(demo => {
        if (!combined.find(d => d.whatsapp === demo.whatsapp)) {
          combined.push(demo);
        }
      });
      
      combined.sort((a, b) => b.score - a.score);
      
      setLeaderboard(combined);
      setLoadingLeaderboard(false);
    });
  }, []);
  const cleanNumber = whatsappNumber.replace(/\D/g, "");
  const isValidNumber = cleanNumber.length >= 10;
  
  const referralLink = isValidNumber 
    ? `https://yourcontent.name.ng/?ref=${cleanNumber}`
    : "https://yourcontent.name.ng/?ref=YOUR_NUMBER_HERE";

  const swipeCopies = [
    `Want to make $1,000/month without showing your face? 🚀\n\nBrands are now paying creators directly to cut and post short clips from their videos. No followers needed. Just your phone.\n\nClick my link below to get the full step-by-step system while the onboarding is still open! 👇\n${referralLink}`,
    `Tired of posting TikToks for 0 views and 0 money? 😤\n\nThere's a new system where brands pay you strictly to clip their content. It's called the Clipping Income System. \n\nGrab the training and start earning this week! 👇\n${referralLink}`,
    `I just discovered how people are getting paid to clip podcasts! 🤯💸\n\nNo laptop, no paid ads, and no showing your face. You just need a phone and CapCut.\n\nLearn the exact strategy here: 👇\n${referralLink}`
  ];

  const copyLink = () => {
    if (!isValidNumber) return;
    navigator.clipboard.writeText(referralLink);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const copyText = (text: string, index: number) => {
    if (!isValidNumber) return;
    navigator.clipboard.writeText(text);
    setCopiedTextIndex(index);
    setTimeout(() => setCopiedTextIndex(null), 2000);
  };

  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      <div className="mx-auto max-w-md px-5 pb-20 pt-8 sm:px-6">
        <TelegramBanner />
        {/* HEADER */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-3 py-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            <Trophy className="h-4 w-4 text-amber-500" /> Affiliate Contest
          </div>
          <h1 className="mt-6 text-5xl font-black leading-[1.1] tracking-tight">
            Win a{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">
              $2,000
            </span>{" "}
            Cash Bounty
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Refer the most people to the Clipping Income System by the end of the month and take home
            the grand prize.
          </p>
        </div>

        {/* LEADERBOARD */}
        <section className="mt-10 rounded-3xl border border-border bg-card p-6 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
            <Trophy className="w-32 h-32" />
          </div>
          <h2 className="flex items-center gap-2 text-xl font-bold">
            <Medal className="h-6 w-6 text-emerald-500" /> Live Leaderboard
          </h2>
          <p className="mt-1 text-sm text-muted-foreground mb-6">
            The top affiliates competing for the $2,000 grand prize.
          </p>

          {loadingLeaderboard ? (
            <div className="text-center py-6 text-sm text-muted-foreground animate-pulse">
              Loading rankings...
            </div>
          ) : leaderboard.length === 0 ? (
            <div className="text-center py-6 text-sm text-muted-foreground bg-secondary rounded-xl border border-border">
              No referrals yet. Be the first to get on the board!
            </div>
          ) : (
            <div className="space-y-3 relative z-10">
              {leaderboard.map((user, idx) => (
                <div key={user.whatsapp} className="flex items-center justify-between p-3 rounded-xl border border-border bg-secondary/50">
                  <div className="flex items-center gap-3">
                    <span className={`flex items-center justify-center w-8 h-8 rounded-full font-black ${idx === 0 ? 'bg-amber-500/20 text-amber-500 border border-amber-500/30' : idx === 1 ? 'bg-slate-300/20 text-slate-300 border border-slate-300/30' : idx === 2 ? 'bg-orange-600/20 text-orange-500 border border-orange-600/30' : 'bg-background text-muted-foreground'}`}>
                      {idx + 1}
                    </span>
                    <span className="font-bold tracking-tight">
                      {user.whatsapp.includes('@') 
                        ? `${user.whatsapp.split('@')[0].substring(0, 3)}••••@${user.whatsapp.split('@')[1]}`
                        : `${user.whatsapp.substring(0, 4)}••••${user.whatsapp.substring(8)}`}
                    </span>
                  </div>
                  <div className="text-sm font-bold bg-primary/10 text-primary px-3 py-1 rounded-full">
                    {user.score} {user.score === 1 ? 'Sale' : 'Sales'}
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* YOUR LINK */}
        <section className="mt-10 rounded-3xl border border-border bg-secondary p-6">
          <h2 className="flex items-center gap-2 text-xl font-bold">
            <Gift className="h-5 w-5 text-primary" /> Your Referral Link
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Enter your WhatsApp number to generate your unique tracking link. Make sure it's correct so we can pay you!
          </p>

          <div className="mt-5">
            <label className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
              WhatsApp Number
            </label>
            <input
              type="tel"
              placeholder="e.g. 08012345678"
              value={whatsappNumber}
              onChange={(e) => setWhatsappNumber(e.target.value)}
              className="mt-1 w-full rounded-xl border border-border bg-background p-3 text-sm font-medium outline-none transition-colors focus:border-primary"
            />
          </div>

          <div className="mt-4 flex flex-col gap-2 rounded-xl border border-border bg-background p-2 sm:flex-row sm:items-center">
            <input
              type="text"
              readOnly
              value={referralLink}
              className={`flex-1 bg-transparent px-2 py-2 sm:py-0 text-sm font-medium outline-none ${!isValidNumber ? "text-muted-foreground" : "text-foreground"}`}
            />
            <button
              onClick={copyLink}
              disabled={!isValidNumber}
              className="flex items-center justify-center gap-1.5 rounded-lg bg-primary px-4 py-2 text-sm font-bold text-primary-foreground transition-all active:scale-95 disabled:opacity-50 disabled:active:scale-100 w-full sm:w-auto"
            >
              {copiedLink ? <CheckCircle2 className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
              {copiedLink ? "Copied" : "Copy"}
            </button>
          </div>
        </section>

        {/* SWIPE COPY */}
        <section className="mt-8">
          <h2 className="text-2xl font-black">Promotional Text</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Copy and paste this ready-made text to your WhatsApp status, Facebook groups, or Twitter.
          </p>
          <div className="mt-4 flex flex-col gap-4">
            {swipeCopies.map((copy, index) => (
              <div key={index} className="relative overflow-hidden rounded-2xl border border-border bg-secondary">
                <div className="whitespace-pre-wrap p-5 text-sm font-medium leading-relaxed">
                  {copy}
                </div>
                <div className="flex justify-end border-t border-border bg-background/50 p-3">
                  <button
                    onClick={() => copyText(copy, index)}
                    className="flex items-center gap-1.5 rounded-lg border border-border bg-secondary px-4 py-2 text-sm font-bold transition-all active:scale-95 hover:bg-muted"
                  >
                    {copiedTextIndex === index ? (
                      <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                    {copiedTextIndex === index ? "Copied to clipboard" : "Copy Text"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* RESOURCES */}
        <section className="mt-10">
          <h2 className="text-2xl font-black">Resources & Images</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Use these images along with your text to grab attention. Download them directly to your device.
          </p>
          <div className="mt-6 flex flex-col gap-6">
            {ALL_IMAGES.map((img, i) => (
              <div key={i} className="overflow-hidden rounded-3xl border border-border bg-secondary shadow-lg">
                <img src={img} alt={`Promotional graphic ${i + 1}`} className="w-full object-cover" />
                <div className="border-t border-border bg-background/50 p-3 flex justify-end">
                  <a 
                    href={img} 
                    download={`promo-image-${i + 1}.webp`} 
                    className="flex items-center gap-1.5 rounded-lg bg-primary px-4 py-2 text-sm font-bold text-primary-foreground transition-all active:scale-95 hover:bg-primary/90"
                  >
                    <Download className="h-4 w-4" /> Download Image
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="mt-12 text-center">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-sm font-bold text-muted-foreground hover:text-foreground"
          >
            <ArrowRight className="h-4 w-4 rotate-180" /> Back to Home
          </a>
        </div>
      </div>
    </main>
  );
}
