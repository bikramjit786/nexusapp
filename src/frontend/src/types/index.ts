export interface Product {
  id: string;
  name: string;
  price: string;
  priceValue: number;
  category: "merch" | "digital" | "bundle" | "badge";
  iconName: string;
  accentColor: string;
  description?: string;
}

export interface Channel {
  id: string;
  name: string;
  subscribers: string;
  subscriberCount: number;
  iconName: string;
  accentColor: string;
  category: "music" | "ai" | "tech" | "gaming" | "news" | "creative";
  isSubscribed?: boolean;
}

export interface AIWriterState {
  prompt: string;
  output: string;
  isLoading: boolean;
  tone: "default" | "professional" | "casual" | "creative" | "dramatic";
  contentType: "story" | "song" | "poem" | "caption";
  characterLimit: number;
}

export interface ProfileStats {
  posts: number;
  followers: string;
  following: number;
}

export interface UserProfile {
  username: string;
  tagline: string;
  stats: ProfileStats;
  avatarInitial?: string;
}
