import AIWriterPage from "@/pages/AIWriterPage";
import ChannelPage from "@/pages/ChannelPage";
import MarketplacePage from "@/pages/MarketplacePage";
import ProfilePage from "@/pages/ProfilePage";
import { Brain, ShoppingBag, Tv2, User } from "lucide-react";
import { useState } from "react";

type TabId = "ai-writer" | "marketplace" | "channel" | "profile";

interface Tab {
  id: TabId;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}

const TABS: Tab[] = [
  { id: "ai-writer", label: "AI Writer", icon: Brain },
  { id: "marketplace", label: "Market", icon: ShoppingBag },
  { id: "channel", label: "Channel", icon: Tv2 },
  { id: "profile", label: "Profile", icon: User },
];

export default function App() {
  const [activeTab, setActiveTab] = useState<TabId>("ai-writer");

  const renderPage = () => {
    switch (activeTab) {
      case "ai-writer":
        return <AIWriterPage />;
      case "marketplace":
        return <MarketplacePage />;
      case "channel":
        return <ChannelPage />;
      case "profile":
        return <ProfilePage />;
    }
  };

  return (
    <div className="min-h-screen overflow-hidden flex flex-col bg-background dark">
      {/* Tab content area */}
      <main className="flex-1 overflow-y-auto overflow-x-hidden pb-20">
        {renderPage()}
      </main>

      {/* Bottom Navigation Bar */}
      <nav
        className="fixed bottom-0 left-0 right-0 z-50 bg-card border-t border-border"
        data-ocid="bottom_nav"
      >
        <div className="flex items-center justify-around px-2 py-2 max-w-lg mx-auto">
          {TABS.map((tab) => {
            const isActive = activeTab === tab.id;
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                data-ocid={`nav.${tab.id}.tab`}
                className={`flex flex-col items-center justify-center gap-1 px-4 py-2 rounded-xl transition-smooth min-w-[64px] ${
                  isActive
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                aria-label={tab.label}
                aria-selected={isActive}
                role="tab"
              >
                <Icon
                  className={`w-6 h-6 transition-smooth ${
                    isActive ? "text-primary" : "text-muted-foreground"
                  }`}
                />
                <span
                  className={`text-[11px] font-medium leading-none transition-smooth ${
                    isActive ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  {tab.label}
                </span>
              </button>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
