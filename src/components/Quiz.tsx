import { useState } from "react";
import { Scissors, Smartphone, RefreshCw } from "lucide-react";

type Answer = { q: number; v: number };

const QUESTIONS = [
  {
    q: "How comfortable are you on camera?",
    options: [
      { label: "Very shy — I'd rather stay behind the scenes", v: 0 },
      { label: "Somewhere in between", v: 1 },
      { label: "I enjoy showing my face & talking", v: 2 },
    ],
  },
  {
    q: "Have you edited a video on your phone before?",
    options: [
      { label: "Never", v: 0 },
      { label: "A few times", v: 1 },
      { label: "Often — I know CapCut basics", v: 2 },
    ],
  },
  {
    q: "How much time can you give per day?",
    options: [
      { label: "30 min — I want quick wins", v: 0 },
      { label: "1–2 hours", v: 1 },
      { label: "I'm ready to go all in", v: 2 },
    ],
  },
];

export function Quiz() {
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [step, setStep] = useState(0);
  const [done, setDone] = useState(false);

  const select = (v: number) => {
    const next = [...answers, { q: step, v }];
    setAnswers(next);
    if (step + 1 < QUESTIONS.length) setStep(step + 1);
    else setDone(true);
  };

  const reset = () => {
    setAnswers([]);
    setStep(0);
    setDone(false);
  };

  const score = answers.reduce((s, a) => s + a.v, 0);
  const recommendsOriginal = score >= 4;

  if (done) {
    return (
      <div className="rounded-3xl border border-border bg-secondary p-6">
        <div className="text-xs font-bold uppercase tracking-wider text-primary">
          Your recommendation
        </div>
        <div className="mt-4 flex items-start gap-4">
          <div
            className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-primary-foreground"
            style={{ background: "var(--grad-cta)" }}
          >
            {recommendsOriginal ? (
              <Smartphone className="h-7 w-7" />
            ) : (
              <Scissors className="h-7 w-7" />
            )}
          </div>
          <div>
            <h3 className="text-xl font-black leading-tight">
              {recommendsOriginal
                ? "Start with simple original clips"
                : "Start with clipping existing videos"}
            </h3>
            <p className="mt-2 text-[15px] text-muted-foreground">
              {recommendsOriginal
                ? "You're ready to talk to camera. Record short product reviews or reaction clips on your phone and submit them to brand campaigns."
                : "Skip the camera fear. Take long videos brands provide, cut the best 30–60s moments, add captions and post. Lower lift, faster first paycheck."}
            </p>
          </div>
        </div>
        <button
          onClick={reset}
          className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground underline underline-offset-4"
        >
          <RefreshCw className="h-3.5 w-3.5" /> Retake quiz
        </button>
      </div>
    );
  }

  const current = QUESTIONS[step];
  return (
    <div className="rounded-3xl border border-border bg-secondary p-6">
      <div className="flex items-center justify-between">
        <div className="text-xs font-bold uppercase tracking-wider text-primary">
          Question {step + 1} of {QUESTIONS.length}
        </div>
        <div className="flex gap-1">
          {QUESTIONS.map((_, i) => (
            <span
              key={i}
              className={`h-1.5 w-6 rounded-full transition-colors ${
                i <= step ? "bg-primary" : "bg-border"
              }`}
            />
          ))}
        </div>
      </div>
      <h3 className="mt-4 text-xl font-bold leading-snug">{current.q}</h3>
      <div className="mt-5 space-y-2.5">
        {current.options.map((o) => (
          <button
            key={o.label}
            onClick={() => select(o.v)}
            className="w-full rounded-2xl border border-border bg-background p-4 text-left text-[15px] font-medium transition-colors hover:border-primary hover:bg-secondary active:scale-[0.99]"
          >
            {o.label}
          </button>
        ))}
      </div>
    </div>
  );
}
