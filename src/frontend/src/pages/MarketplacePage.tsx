import { Brain, Brush, Search, ShoppingBag, Store, Trophy } from "lucide-react";
import { useState } from "react";

interface Product {
  id: number;
  name: string;
  price: string;
  icon: React.ComponentType<{
    className?: string;
    style?: React.CSSProperties;
  }>;
  accentColor: string;
  accentBg: string;
}

const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Nexus Hoodie",
    price: "$45",
    icon: ShoppingBag,
    accentColor: "#ff5252",
    accentBg: "rgba(255,82,82,0.15)",
  },
  {
    id: 2,
    name: "Digital Art Pack",
    price: "$12",
    icon: Brush,
    accentColor: "#448aff",
    accentBg: "rgba(68,138,255,0.15)",
  },
  {
    id: 3,
    name: "AI Prompt Bundle",
    price: "$8",
    icon: Brain,
    accentColor: "#69f0ae",
    accentBg: "rgba(105,240,174,0.15)",
  },
  {
    id: 4,
    name: "Nexus Badge",
    price: "$5",
    icon: Trophy,
    accentColor: "#ffd740",
    accentBg: "rgba(255,215,64,0.15)",
  },
];

export default function MarketplacePage() {
  const [search, setSearch] = useState("");

  const filtered = PRODUCTS.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div
      className="min-h-full px-5 pt-6 pb-6"
      style={{
        background: "linear-gradient(180deg, #000000 0%, #111111 100%)",
      }}
      data-ocid="marketplace.page"
    >
      {/* Header */}
      <div className="mb-1 flex items-center gap-3">
        <Store className="w-7 h-7 shrink-0" style={{ color: "#ff5252" }} />
        <h1
          className="text-2xl font-bold font-display leading-tight"
          style={{ color: "#ff5252", letterSpacing: "0.01em" }}
        >
          Nexus Marketplace
        </h1>
      </div>
      <p className="text-sm mb-5" style={{ color: "rgba(255,255,255,0.55)" }}>
        Buy and sell digital goods, merch &amp; more
      </p>

      {/* Search bar */}
      <div
        className="flex items-center gap-3 px-4 py-3 rounded-full mb-7"
        style={{ background: "#1a1a1a" }}
      >
        <Search className="w-5 h-5 shrink-0" style={{ color: "#888888" }} />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search products..."
          data-ocid="marketplace.search_input"
          className="flex-1 bg-transparent text-sm outline-none placeholder:text-[#666666] text-foreground min-w-0"
          aria-label="Search products"
        />
      </div>

      {/* Product grid */}
      {filtered.length === 0 ? (
        <div
          className="flex flex-col items-center justify-center py-20 gap-3"
          data-ocid="marketplace.empty_state"
        >
          <ShoppingBag className="w-12 h-12" style={{ color: "#333333" }} />
          <p className="text-muted-foreground text-sm">No products found</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-4" data-ocid="marketplace.list">
          {filtered.map((product, index) => {
            const Icon = product.icon;
            return (
              <div
                key={product.id}
                data-ocid={`marketplace.item.${index + 1}`}
                className="flex flex-col items-center justify-center gap-4 rounded-2xl py-6 px-3 border transition-smooth hover:scale-[1.02] active:scale-[0.98] cursor-default"
                style={{
                  background: "#1a1a1a",
                  borderColor: "#2a2a2a",
                }}
              >
                {/* Icon with accent bg circle */}
                <div
                  className="flex items-center justify-center w-16 h-16 rounded-full"
                  style={{ background: product.accentBg }}
                >
                  <Icon
                    className="w-9 h-9"
                    style={{ color: product.accentColor }}
                  />
                </div>

                {/* Name */}
                <p
                  className="text-base font-bold text-center leading-tight font-display"
                  style={{ color: "#ffffff" }}
                >
                  {product.name}
                </p>

                {/* Price */}
                <p
                  className="text-xl font-bold leading-none"
                  style={{ color: "#ff5252" }}
                >
                  {product.price}
                </p>

                {/* Buy Now button */}
                <button
                  type="button"
                  data-ocid={`marketplace.buy_button.${index + 1}`}
                  className="px-6 py-2 rounded-full text-sm font-semibold transition-smooth hover:brightness-110 active:brightness-90"
                  style={{
                    background: "#ff5252",
                    color: "#000000",
                  }}
                >
                  Buy Now
                </button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
