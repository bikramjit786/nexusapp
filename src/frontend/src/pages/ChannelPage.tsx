import {
  Brain,
  Brush,
  Gamepad2,
  Monitor,
  Music,
  Newspaper,
  Tv2,
} from "lucide-react";
import { useState } from "react";

interface Channel {
  id: string;
  name: string;
  subscribers: string;
  Icon: React.ComponentType<{
    className?: string;
    style?: React.CSSProperties;
  }>;
  accentColor: string;
  bgColor: string;
}

const CHANNELS: Channel[] = [
  {
    id: "music-nexus",
    name: "Music Nexus",
    subscribers: "125K subscribers",
    Icon: Music,
    accentColor: "#f472b6",
    bgColor: "rgba(244,114,182,0.15)",
  },
  {
    id: "ai-daily",
    name: "AI Daily",
    subscribers: "89K subscribers",
    Icon: Brain,
    accentColor: "#60a5fa",
    bgColor: "rgba(96,165,250,0.15)",
  },
  {
    id: "tech-reviews",
    name: "Tech Reviews",
    subscribers: "210K subscribers",
    Icon: Monitor,
    accentColor: "#4ade80",
    bgColor: "rgba(74,222,128,0.15)",
  },
  {
    id: "gaming-hub",
    name: "Gaming Hub",
    subscribers: "340K subscribers",
    Icon: Gamepad2,
    accentColor: "#c084fc",
    bgColor: "rgba(192,132,252,0.15)",
  },
  {
    id: "nexus-news",
    name: "Nexus News",
    subscribers: "67K subscribers",
    Icon: Newspaper,
    accentColor: "#fb923c",
    bgColor: "rgba(251,146,60,0.15)",
  },
  {
    id: "creative-suite",
    name: "Creative Suite",
    subscribers: "45K subscribers",
    Icon: Brush,
    accentColor: "#22d3ee",
    bgColor: "rgba(34,211,238,0.15)",
  },
];

export default function ChannelPage() {
  const [subscribed, setSubscribed] = useState<Set<string>>(new Set());

  const toggleSubscribe = (id: string) => {
    setSubscribed((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  return (
    <div
      className="min-h-full bg-background px-5 pt-8 pb-24"
      data-ocid="channel.page"
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-1">
        <Tv2 className="w-7 h-7 text-primary shrink-0" />
        <h1 className="text-2xl font-bold text-primary font-display tracking-tight">
          Trending Channels
        </h1>
      </div>
      <p className="text-sm text-muted-foreground mb-6 pl-10">
        Discover and subscribe to top creators
      </p>

      {/* Channel List */}
      <ul className="flex flex-col gap-3" data-ocid="channel.list">
        {CHANNELS.map((channel, index) => {
          const { id, name, subscribers, Icon, accentColor, bgColor } = channel;
          const isSubscribed = subscribed.has(id);

          return (
            <li
              key={id}
              data-ocid={`channel.item.${index + 1}`}
              className="flex items-center gap-4 bg-card rounded-xl px-4 py-3 border border-border transition-smooth hover:border-border/60"
            >
              {/* Avatar */}
              <div
                className="w-[55px] h-[55px] rounded-full shrink-0 flex items-center justify-center"
                style={{ backgroundColor: bgColor }}
              >
                <Icon
                  className="w-[30px] h-[30px]"
                  style={{ color: accentColor }}
                />
              </div>

              {/* Channel info */}
              <div className="flex-1 min-w-0">
                <p className="text-foreground text-[17px] font-semibold leading-tight truncate">
                  {name}
                </p>
                <p className="text-muted-foreground text-xs mt-0.5">
                  {subscribers}
                </p>
              </div>

              {/* Subscribe button */}
              <button
                type="button"
                onClick={() => toggleSubscribe(id)}
                data-ocid={`channel.subscribe_button.${index + 1}`}
                className={`shrink-0 px-4 py-1.5 rounded-full text-sm font-semibold transition-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                  isSubscribed
                    ? "bg-muted text-muted-foreground"
                    : "bg-primary text-background hover:opacity-90 active:scale-95"
                }`}
              >
                {isSubscribed ? "Subscribed" : "Subscribe"}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
