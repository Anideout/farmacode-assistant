import { useTheme } from "next-themes";
import { Sun, Moon, Monitor } from "lucide-react";
import { useEffect, useState } from "react";

const themes = [
  { value: "light", icon: Sun, label: "Claro" },
  { value: "dark", icon: Moon, label: "Oscuro" },
  { value: "system", icon: Monitor, label: "Sistema" },
];

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="glass-card p-4 flex items-center justify-center">
        <div className="w-10 h-10 rounded-full bg-muted animate-pulse" />
      </div>
    );
  }

  return (
    <div className="glass-card p-4">
      <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider mb-3">
        Apariencia
      </p>
      <div className="flex gap-2">
        {themes.map(({ value, icon: Icon, label }) => {
          const isActive = theme === value;
          return (
            <button
              key={value}
              onClick={() => setTheme(value)}
              className={`flex-1 flex flex-col items-center gap-2 p-3 rounded-xl transition-all duration-200 ${
                isActive
                  ? "bg-primary/15 text-primary border-2 border-primary/30 shadow-sm"
                  : "bg-muted/50 text-muted-foreground border-2 border-transparent hover:bg-muted"
              }`}
            >
              <Icon className={`w-5 h-5 ${isActive ? "stroke-[2.5]" : ""}`} />
              <span className="text-[10px] font-medium">{label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ThemeToggle;
