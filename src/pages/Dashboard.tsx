import { Search, User, Lightbulb, ShieldCheck } from "lucide-react";

const recentSearches = ["Sertralina 50mg", "Atorvastatina", "Losartán 5..."];

const Dashboard = () => {
  return (
    <div className="flex flex-col px-5 pt-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <p className="text-muted-foreground text-sm">Hola 👋</p>
          <h1 className="text-xl font-bold text-foreground">UsuarioFarmaCode</h1>
        </div>
        <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
          <User className="w-5 h-5 text-secondary-foreground" />
        </div>
      </div>

      {/* Logo */}
      <div className="flex items-center gap-2 mb-6">
        <ShieldCheck className="w-6 h-6 text-primary" />
        <span className="text-lg font-extrabold tracking-tight text-foreground">
          Farma<span className="text-primary">Code</span>
        </span>
      </div>

      {/* Search */}
      <div className="relative mb-8">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <input
          type="text"
          placeholder="Busca un medicamento..."
          className="w-full h-12 pl-11 pr-4 rounded-xl bg-secondary text-secondary-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
        />
      </div>

      {/* Recent Searches */}
      <div className="mb-8">
        <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider mb-3">
          Búsquedas recientes
        </p>
        <div className="flex gap-2 flex-wrap">
          {recentSearches.map((s) => (
            <span
              key={s}
              className="px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground text-xs font-medium"
            >
              {s}
            </span>
          ))}
        </div>
      </div>

      {/* Tip Card */}
      <div className="glass-card p-5 mb-6">
        <div className="flex items-center gap-2 mb-3">
          <Lightbulb className="w-5 h-5 text-warning" />
          <span className="text-xs font-bold uppercase tracking-wider text-warning">
            Consejo del día
          </span>
        </div>
        <p className="text-sm leading-relaxed text-card-foreground/90">
          Los medicamentos bioequivalentes certificados por el ISP tienen la misma
          efectividad y seguridad que el medicamento original. Te permiten acceder
          a tratamientos efectivos a menor costo en farmacias, sin comprometer tu
          salud.
        </p>
      </div>

      {/* Disclaimer */}
      <p className="text-[10px] text-muted-foreground text-center leading-relaxed px-2">
        App únicamente informativa. No reemplaza una receta médica ni constituye
        consejo profesional de salud.
      </p>
    </div>
  );
};

export default Dashboard;
