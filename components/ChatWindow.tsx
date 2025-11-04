 "use client";

import { useEffect, useRef, useState } from "react";
import { clsx } from "clsx";

type Message = {
  id: string;
  role: "assistant" | "user";
  content: string;
};

const starterMessages: Message[] = [
  {
    id: "welcome",
    role: "assistant",
    content:
      "Hey! I'm McAssist. I can help you explore the menu, compare nutrition, surface deals, or plan the perfect McDonald's run. What sounds good?"
  }
];

const quickPrompts = [
  "Show me a family meal idea",
  "Any low calorie options?",
  "What are the current deals?",
  "What's a spicy combo?",
  "Plan a sweet treat run"
];

export function ChatWindow() {
  const [messages, setMessages] = useState<Message[]>(() => {
    if (typeof window === "undefined") return starterMessages;
    const stored = window.localStorage.getItem("mcassist-history");
    if (!stored) return starterMessages;
    try {
      const parsed = JSON.parse(stored) as Message[];
      if (!parsed.length) return starterMessages;
      return parsed;
    } catch {
      return starterMessages;
    }
  });
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const displayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = displayRef.current;
    if (el) {
      el.scrollTop = el.scrollHeight;
    }
    if (typeof window !== "undefined") {
      window.localStorage.setItem("mcassist-history", JSON.stringify(messages));
    }
  }, [messages]);

  const submitMessage = async (content: string) => {
    if (!content.trim()) return;
    const trimmed = content.trim();
    const nextMessages: Message[] = [
      ...messages,
      { id: `user-${Date.now()}`, role: "user", content: trimmed }
    ];
    setMessages(nextMessages);
    setLoading(true);
    setInput("");

    try {
      const response = await fetch("/api/agent", {
        method: "POST",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify({
          message: trimmed,
          history: nextMessages.map(({ role, content }) => ({ role, content }))
        })
      });

      if (!response.ok) {
        throw new Error("Failed to get a response from McAssist.");
      }

      const data = (await response.json()) as {
        reply: { role: "assistant"; content: string };
      };

      setMessages((prev) => [
        ...prev,
        {
          id: `assistant-${Date.now()}`,
          role: "assistant",
          content: data.reply.content
        }
      ]);
    } catch (error) {
      console.error(error);
      setMessages((prev) => [
        ...prev,
        {
          id: `assistant-error-${Date.now()}`,
          role: "assistant",
          content:
            "Whoops, something caused a hiccup. Try again in a moment or tweak your question slightly."
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex h-full flex-col rounded-3xl bg-white/90 shadow-xl ring-1 ring-black/5 backdrop-blur">
      <div className="flex items-center justify-between rounded-t-3xl bg-gradient-to-r from-red to-golden px-6 py-4 text-white">
        <div>
          <p className="text-xs uppercase tracking-wider text-white/70">McAssist</p>
          <h2 className="text-lg font-semibold">Always-on McDonald&apos;s crew member</h2>
        </div>
        <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-red">
          Live · AI
        </span>
      </div>

      <div
        ref={displayRef}
        className="no-scrollbar flex-1 space-y-6 overflow-y-auto px-6 py-6"
      >
        {messages.map((message) => (
          <div
            key={message.id}
            className={clsx("flex w-full", message.role === "assistant" ? "justify-start" : "justify-end")}
          >
            <div
              className={clsx(
                "max-w-[80%] rounded-2xl px-5 py-4 text-sm leading-relaxed shadow-sm",
                message.role === "assistant"
                  ? "bg-neutral-100 text-neutral-900 ring-1 ring-neutral-200"
                  : "bg-red text-white"
              )}
            >
              {message.content.split("\n").map((line, idx) => (
                <span key={idx} className="block">
                  {line}
                </span>
              ))}
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start">
            <div className="flex items-center gap-2 rounded-2xl bg-neutral-100 px-4 py-3 text-xs text-neutral-500">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-red" />
              </span>
              McAssist is cooking up a response...
            </div>
          </div>
        )}
      </div>

      <div className="border-t border-neutral-200 bg-white/80 px-6 py-4">
        <div className="mb-3 flex flex-wrap gap-2">
          {quickPrompts.map((prompt) => (
            <button
              key={prompt}
              onClick={() => submitMessage(prompt)}
              className="rounded-full border border-neutral-200 px-3 py-1 text-xs font-medium text-neutral-600 transition hover:border-red hover:text-red"
            >
              {prompt}
            </button>
          ))}
        </div>
        <form
          className="flex items-center gap-3 rounded-full bg-neutral-100 px-4 py-2 ring-1 ring-transparent focus-within:bg-white focus-within:ring-2 focus-within:ring-red"
          onSubmit={(event) => {
            event.preventDefault();
            submitMessage(input);
          }}
        >
          <input
            className="flex-1 bg-transparent text-sm outline-none placeholder:text-neutral-400"
            placeholder="Ask about menu pairings, nutrition goals, deals, or create a craving..."
            value={input}
            onChange={(event) => setInput(event.target.value)}
            disabled={loading}
          />
          <button
            type="submit"
            disabled={loading || !input.trim()}
            className="rounded-full bg-red px-4 py-2 text-sm font-semibold text-white transition disabled:cursor-not-allowed disabled:bg-red/60 hover:bg-[#b71f15]"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
