"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { questions, coffeeResults, Personality } from "./quizData";

type Screen = "welcome" | "quiz" | "result";

const KEYS = ["A", "B", "C", "D", "E"];

export default function Home() {
  const [screen, setScreen] = useState<Screen>("welcome");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Personality[]>([]);
  const [result, setResult] = useState<(typeof coffeeResults)[number] | null>(null);

  const calculateResult = useCallback((allAnswers: Personality[]) => {
    const counts: Partial<Record<Personality, number>> = {};
    for (const p of allAnswers) {
      counts[p] = (counts[p] || 0) + 1;
    }

    // Pick the personality with the highest count; on tie, first in coffeeResults order wins
    let winner: Personality = coffeeResults[0].personality;
    let maxCount = 0;
    for (const r of coffeeResults) {
      const c = counts[r.personality] || 0;
      if (c > maxCount) {
        maxCount = c;
        winner = r.personality;
      }
    }

    return coffeeResults.find((r) => r.personality === winner)!;
  }, []);

  const handleAnswer = useCallback(
    (personality: Personality) => {
      const newAnswers = [...answers, personality];
      setAnswers(newAnswers);

      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setResult(calculateResult(newAnswers));
        setScreen("result");
      }
    },
    [answers, currentQuestion, calculateResult]
  );

  const restart = useCallback(() => {
    setScreen("welcome");
    setCurrentQuestion(0);
    setAnswers([]);
    setResult(null);
  }, []);

  // ── Welcome Screen ──
  if (screen === "welcome") {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center px-6">
        <div className="animate-fade-in text-center max-w-2xl">
          <p className="text-lg tracking-widest uppercase text-neutral-500 mb-4">
            Quiz Time
          </p>
          <h1 className="text-5xl sm:text-7xl font-bold leading-tight mb-6">
            What&apos;s Your{" "}
            <span className="gradient-text">Coffee Personality</span>?
          </h1>
          <p className="text-neutral-400 text-lg mb-12 max-w-md mx-auto">
            Answer 7 quirky questions and we&apos;ll match you with your perfect
            brew.
          </p>
          <button
            onClick={() => setScreen("quiz")}
            className="px-10 py-4 rounded-full text-lg font-semibold text-black transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(232,255,71,0.3)] cursor-pointer"
            style={{ background: "linear-gradient(135deg, #e8ff47, #47ffb4)" }}
          >
            Start Quiz
          </button>
        </div>
      </div>
    );
  }

  // ── Quiz Screen ──
  if (screen === "quiz") {
    const q = questions[currentQuestion];

    return (
      <div className="flex min-h-screen flex-col items-center justify-between px-6 py-10">
        <div className="w-full max-w-2xl flex-1 flex flex-col justify-center">
          <div key={currentQuestion} className="animate-fade-in">
            <p className="text-sm font-semibold tracking-widest uppercase mb-2" style={{ color: "#e8ff47" }}>
              Question {currentQuestion + 1} of {questions.length}
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-10 leading-snug">
              {q.question}
            </h2>

            <div className="flex flex-col gap-3">
              {q.options.map((option, i) => (
                <button
                  key={i}
                  onClick={() => handleAnswer(option.personality)}
                  className="option-card flex items-center gap-4 w-full text-left px-5 py-4 rounded-xl bg-[#111] cursor-pointer"
                >
                  <span className="kbd-badge">{KEYS[i]}</span>
                  <span className="text-xl">{option.emoji}</span>
                  <span className="text-base sm:text-lg">{option.text}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full max-w-2xl flex gap-2 mt-10">
          {questions.map((_, i) => (
            <div
              key={i}
              className={`progress-segment ${i <= currentQuestion ? "active" : ""}`}
            />
          ))}
        </div>
      </div>
    );
  }

  // ── Result Screen ──
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6">
      <div className="animate-fade-in text-center max-w-2xl">
        <p className="text-lg tracking-widest uppercase text-neutral-500 mb-4">
          Your Result
        </p>
        <div className="relative w-64 h-64 sm:w-80 sm:h-80 mx-auto mb-8 rounded-2xl overflow-hidden border border-neutral-800">
          <Image
            src={result!.image}
            alt={result!.coffee}
            fill
            className="object-cover"
          />
        </div>
        <h1 className="text-4xl sm:text-6xl font-bold mb-4">
          You&apos;re a{" "}
          <span className="gradient-text">{result!.personality}</span>!
        </h1>
        <p className="text-2xl sm:text-3xl text-neutral-300 mb-2">
          Your coffee: <strong>{result!.coffee}</strong>
        </p>
        <p className="text-xl text-neutral-500 italic mb-12">
          &ldquo;{result!.tagline}&rdquo;
        </p>
        <button
          onClick={restart}
          className="px-10 py-4 rounded-full text-lg font-semibold text-black transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(232,255,71,0.3)] cursor-pointer"
          style={{ background: "linear-gradient(135deg, #e8ff47, #47ffb4)" }}
        >
          Retake Quiz
        </button>
      </div>
    </div>
  );
}
