import {
  Bell,
  ChevronRight,
  Lock,
  LogOut,
  Palette,
  Pencil,
  User,
} from "lucide-react";

interface SettingRow {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  isLogout?: boolean;
  ocid: string;
}

const SETTINGS: SettingRow[] = [
  { icon: Pencil, label: "Edit Profile", ocid: "profile.edit_profile.button" },
  { icon: Bell, label: "Notifications", ocid: "profile.notifications.button" },
  { icon: Lock, label: "Privacy", ocid: "profile.privacy.button" },
  { icon: Palette, label: "Theme", ocid: "profile.theme.button" },
  {
    icon: LogOut,
    label: "Log Out",
    isLogout: true,
    ocid: "profile.logout.button",
  },
];

interface StatColProps {
  label: string;
  value: string;
  ocid: string;
}

function StatCol({ label, value, ocid }: StatColProps) {
  return (
    <div className="flex flex-col items-center gap-1" data-ocid={ocid}>
      <span className="text-xl font-bold text-foreground">{value}</span>
      <span className="text-sm text-muted-foreground">{label}</span>
    </div>
  );
}

export default function ProfilePage() {
  return (
    <div
      className="min-h-screen bg-background flex flex-col items-center pt-10 pb-20 px-5"
      data-ocid="profile.page"
    >
      {/* Avatar */}
      <div
        className="relative w-[120px] h-[120px] rounded-full flex items-center justify-center mb-5"
        style={{
          background: "linear-gradient(135deg, #ff5252 0%, #ff9800 100%)",
          boxShadow: "0 0 28px 6px rgba(255, 82, 82, 0.35)",
        }}
        data-ocid="profile.avatar"
      >
        <User
          className="text-white"
          style={{ width: 60, height: 60 }}
          strokeWidth={1.5}
        />
      </div>

      {/* Username */}
      <h1
        className="text-2xl font-bold text-foreground tracking-wide mb-2 font-display"
        data-ocid="profile.username"
      >
        @Babbu00786
      </h1>

      {/* Bio */}
      <p className="text-base text-primary mb-7" data-ocid="profile.bio">
        Nexus Creator • AI Enthusiast
      </p>

      {/* Stats Card */}
      <div
        className="w-full max-w-md bg-card rounded-2xl px-6 py-5 mb-5"
        data-ocid="profile.stats.card"
      >
        <div className="flex items-center justify-around">
          <StatCol label="Posts" value="47" ocid="profile.stats.posts" />
          <div className="w-px h-10 bg-border" />
          <StatCol
            label="Followers"
            value="1.2K"
            ocid="profile.stats.followers"
          />
          <div className="w-px h-10 bg-border" />
          <StatCol
            label="Following"
            value="234"
            ocid="profile.stats.following"
          />
        </div>
      </div>

      {/* Account Settings Card */}
      <div
        className="w-full max-w-md bg-card rounded-2xl px-5 py-5"
        data-ocid="profile.settings.card"
      >
        <h2
          className="text-base font-bold text-primary mb-4 font-display tracking-wide"
          data-ocid="profile.settings.title"
        >
          Account Settings
        </h2>

        <div className="flex flex-col">
          {SETTINGS.map((setting, index) => {
            const Icon = setting.icon;
            const isLast = index === SETTINGS.length - 1;
            return (
              <div key={setting.label}>
                <button
                  type="button"
                  className="w-full flex items-center gap-4 py-3 group transition-smooth hover:opacity-80 active:opacity-60"
                  data-ocid={setting.ocid}
                  aria-label={setting.label}
                >
                  <Icon
                    className={`w-5 h-5 flex-shrink-0 ${
                      setting.isLogout
                        ? "text-primary"
                        : "text-muted-foreground"
                    }`}
                  />
                  <span
                    className={`flex-1 text-left text-[15px] font-medium ${
                      setting.isLogout ? "text-primary" : "text-foreground"
                    }`}
                  >
                    {setting.label}
                  </span>
                  <ChevronRight
                    className={`w-4 h-4 flex-shrink-0 ${
                      setting.isLogout
                        ? "text-primary"
                        : "text-muted-foreground"
                    }`}
                  />
                </button>
                {!isLast && <div className="h-px bg-border opacity-60 mx-1" />}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
