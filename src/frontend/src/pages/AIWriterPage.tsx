import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Brain, PenLine, Sparkles } from "lucide-react";
import { useRef, useState } from "react";

const PLACEHOLDER_OUTPUT =
  "Your AI-generated story or song will appear here...";

export default function AIWriterPage() {
  const [prompt, setPrompt] = useState("");
  const [output, setOutput] = useState(PLACEHOLDER_OUTPUT);
  const [isLoading, setIsLoading] = useState(false);
  const outputRef = useRef<HTMLDivElement>(null);

  const handleGenerate = async () => {
    const trimmed = prompt.trim();
    if (!trimmed) return;

    setIsLoading(true);
    setOutput("");

    await new Promise((resolve) => setTimeout(resolve, 2000));

    setOutput(
      `✨ AI Generated: ${trimmed}\n\nOnce upon a time in the digital realm, creativity met technology. This is your unique story inspired by "${trimmed}". Let your imagination soar across the Nexus!\n\nIn the space between thought and expression, words take flight — dancing on the edges of possibility. Every idea you bring becomes a living narrative, woven from the threads of countless voices, synthesized into something entirely your own.\n\nThe Nexus sings of innovation, of moments crystallized in verse. May your creativity never dim.`,
    );
    setIsLoading(false);

    setTimeout(() => {
      outputRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  const isPlaceholder = output === PLACEHOLDER_OUTPUT;

  return (
    <div className="min-h-[calc(100vh-72px)] bg-background flex flex-col px-5 pt-8 pb-4">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center flex-shrink-0">
            <Sparkles className="w-5 h-5 text-primary" aria-hidden />
          </div>
          <h1
            className="text-2xl font-bold text-primary font-display tracking-tight leading-tight"
            data-ocid="ai_writer.title"
          >
            AI Lyricist &amp; Storyteller
          </h1>
        </div>
        <p className="text-sm text-muted-foreground ml-[52px]">
          Generate poems, stories, or song lyrics with AI
        </p>
      </div>

      {/* Prompt Input */}
      <div className="relative mb-5">
        <div className="absolute left-3 top-3.5 z-10 pointer-events-none">
          <PenLine className="w-4 h-4 text-primary opacity-70" aria-hidden />
        </div>
        <Textarea
          data-ocid="ai_writer.prompt.input"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Enter a topic, emotion, or idea..."
          rows={3}
          className="
            pl-9 pr-4 py-3 resize-none text-sm text-foreground
            bg-card border border-border rounded-2xl
            placeholder:text-muted-foreground
            focus-visible:border-primary focus-visible:ring-1 focus-visible:ring-primary
            transition-smooth
          "
          onKeyDown={(e) => {
            if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) handleGenerate();
          }}
        />
      </div>

      {/* Generate Button */}
      <Button
        data-ocid="ai_writer.generate_button"
        onClick={handleGenerate}
        disabled={isLoading || !prompt.trim()}
        className="
          w-full rounded-full py-3 font-semibold text-base font-display
          bg-primary text-background hover:bg-primary/90
          disabled:opacity-40 disabled:cursor-not-allowed
          transition-smooth flex items-center justify-center gap-2
          mb-6
        "
      >
        <Brain className="w-5 h-5" aria-hidden />
        Generate
      </Button>

      {/* Output Area */}
      <div
        ref={outputRef}
        data-ocid="ai_writer.output_card"
        className="
          flex-1 min-h-[200px] rounded-2xl
          bg-card border border-primary/25
          shadow-[0_0_18px_2px_rgba(255,82,82,0.08)]
          p-5 overflow-y-auto
        "
      >
        {isLoading ? (
          <div
            data-ocid="ai_writer.loading_state"
            className="flex items-center justify-center h-full min-h-[160px]"
          >
            <div className="flex flex-col items-center gap-3">
              <div className="w-8 h-8 rounded-full border-2 border-primary border-t-transparent animate-spin" />
              <span className="text-sm text-muted-foreground">
                Generating your content…
              </span>
            </div>
          </div>
        ) : (
          <p
            className={`text-sm leading-relaxed whitespace-pre-wrap break-words ${
              isPlaceholder ? "text-muted-foreground italic" : "text-foreground"
            }`}
          >
            {output}
          </p>
        )}
      </div>
    </div>
  );
}
