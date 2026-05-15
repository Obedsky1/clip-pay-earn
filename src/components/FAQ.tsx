import { useState } from "react";
import { Plus } from "lucide-react";

const FAQS = [
  {
    q: "What exactly is 'clipping'?",
    a: "Clipping means taking a long video — like a podcast, interview, or product demo — and cutting out the best 30–60 second moments to post as short videos on TikTok, Reels or Facebook.",
  },
  {
    q: "Where do I get the videos to clip?",
    a: "From content reward platforms (like Whop) and brand campaigns. They post the source content and tell you what kind of clips they want.",
  },
  {
    q: "Do I need followers to start?",
    a: "No. Most brand campaigns pay based on the views your post gets, not your follower count. New accounts can earn from day one if a clip performs.",
  },
  {
    q: "When and how do I get paid?",
    a: "Most campaigns pay after your post is reviewed and reaches the agreed view threshold — usually weekly or every two weeks via the campaign platform. Payment timing depends on each campaign's rules. We don't promise specific amounts.",
  },
  {
    q: "What apps do I need?",
    a: "Just your phone, TikTok or Instagram, and a free editor like CapCut. No laptop, no paid software.",
  },
  {
    q: "Is this guaranteed income?",
    a: "No. Earnings depend on the campaigns you join, your video quality, and how well your clips perform. The course teaches the system — your results depend on the work you put in.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="space-y-3">
      {FAQS.map((f, i) => {
        const isOpen = open === i;
        return (
          <div
            key={f.q}
            className="overflow-hidden rounded-2xl border border-border bg-secondary"
          >
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-4 p-5 text-left"
            >
              <span className="text-[15px] font-bold leading-snug">{f.q}</span>
              <Plus
                className={`h-5 w-5 shrink-0 text-primary transition-transform ${
                  isOpen ? "rotate-45" : ""
                }`}
              />
            </button>
            {isOpen && (
              <div className="px-5 pb-5 text-[15px] leading-relaxed text-muted-foreground">
                {f.a}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
