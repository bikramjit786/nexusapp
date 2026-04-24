# Design Brief

## Direction

NexusApp — Dark creator platform with surgical red accent, brutalist surfaces, and premium energy.

## Tone

Brutalist/raw meets modern tech — bold clarity without ornamentation, red accent applied sparingly for maximum impact on active states and CTAs.

## Differentiation

Red accent intensity at tab highlights + buttons creates "creator energy" without the generic dark theme flatness or visual fatigue.

## Color Palette

| Token         | OKLCH         | Role                          |
| ------------- | ------------- | ----------------------------- |
| background    | 0.09 0 0      | Pure black, primary surface   |
| foreground    | 0.95 0 0      | White text, 95% lightness     |
| card          | 0.13 0 0      | Elevated containers, near-black |
| primary       | 0.55 0.28 25  | Red accent (#ff5252 equiv)    |
| accent        | 0.55 0.28 25  | Active tab, button focus      |
| muted         | 0.18 0 0      | Secondary surface             |
| destructive   | 0.55 0.28 25  | Error + alert (same as accent) |
| border        | 0.22 0 0      | Subtle dividers, 22% grey     |

## Typography

- Display: Space Grotesk — geometric precision for headings & section titles, active tab labels
- Body: Satoshi — warm approachability for UI labels, descriptions, tab labels
- Mono: JetBrains Mono — code, technical content (optional for v1)
- Scale: hero `text-5xl font-bold`, h2 `text-2xl font-semibold`, label `text-sm font-semibold`, body `text-base`

## Elevation & Depth

Card separation via background lightness shift (`#000000` → `#1a1a1a` → `#212121`). Minimal shadows (none on cards, subtle `shadow-sm` on active buttons). No glow or neon effects. Pure layering.

## Structural Zones

| Zone         | Background | Border | Notes                          |
| ------------ | ---------- | ------ | ------------------------------ |
| Top Header   | card       | none   | Title + icon section, red headings |
| Content      | background | none   | Pure black, main tab content   |
| Cards/Inputs | card       | 10% opacity accent | Semi-transparent red border on focus |
| Bottom Tabs  | background | none   | Tab bar, red icon/label on active |

## Spacing & Rhythm

Spacious layout (20px padding horizontal, 30px gaps between sections). Tab content full-height with scroll. Card grouping via visual gaps + subtle borders. Micro-spacing: 8px increments (gap, padding inner).

## Component Patterns

- Buttons: filled red (`bg-accent text-accent-foreground`), rounded 30px, 14px vert padding, `transition-smooth` on hover
- Cards: `bg-card rounded-2xl`, 16px border-radius, optional border with 10% red accent opacity on focus, 12px internal padding
- Tabs: active shows red icon + label, inactive grey, smooth transition. Full-width tab bar, 4-column equal split

## Motion

- Entrance: fade-in 200ms on tab switch via React state, no fade during load
- Hover: accent button darkens (10% opacity decrease on red), text remains white, smooth 150ms transition
- Decorative: none — focus on clarity and responsiveness

## Constraints

- No gradients on cards or buttons — all flat surfaces via CSS vars only
- Red accent (#ff5252 / OKLCH 0.55 0.28 25) used only for: active tab highlight, primary CTA buttons, focus states, section headings
- No shadows except `shadow-sm` on button hover
- All text must use semantic tokens (accent, muted-foreground) — never raw color values
- Border-radius: 30px on pill buttons, 12-16px on cards, 8px on smaller inputs

## Signature Detail

Red tab indicator lights up on active nav item, creating a scanner-like "energy" effect while keeping everything else minimal and brutalist.

