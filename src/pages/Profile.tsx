import { useState } from "react";
import { User, Clock, ChevronRight } from "lucide-react";
import { medications } from "@/data/medications";
import type { Medication } from "@/data/medications";
import MedicationDialog from "@/components/MedicationDialog";
import ThemeToggle from "@/components/ThemeToggle";

const searchHistory = [
  { medication: medications[0], date: "Hoy, 14:32" },
  { medication: medications[1], date: "Ayer, 09:15" },
  { medication: medications[2], date: "05 Abr, 18:40" },
];

const Profile = () => {
  const [selected, setSelected] = useState<Medication | null>(null);

  return (
    <div className="flex flex-col px-5 pt-6">
      {/* Header */}
      <h1 className="text-xl font-bold text-foreground mb-6">Mi Perfil</h1>

      {/* Avatar card */}
      <div className="glass-card p-5 flex items-center gap-4 mb-8">
        <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center">
          <User className="w-7 h-7 text-primary" />
        </div>
        <div>
          <p className="font-bold text-foreground">UsuarioFarmaCode</p>
          <p className="text-xs text-muted-foreground">usuario@farmacode.cl</p>
        </div>
      </div>

      {/* Theme Toggle */}
      <div className="mb-6">
        <ThemeToggle />
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-3 mb-8">
        <div className="glass-card p-4 text-center">
          <p className="text-2xl font-bold text-primary">{searchHistory.length}</p>
          <p className="text-[11px] text-muted-foreground mt-1">Búsquedas realizadas</p>
        </div>
        <div className="glass-card p-4 text-center">
          <p className="text-2xl font-bold text-accent">{medications.length}</p>
          <p className="text-[11px] text-muted-foreground mt-1">Medicamentos vistos</p>
        </div>
      </div>

      {/* History */}
      <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider mb-3">
        Historial de búsquedas
      </p>

      <div className="space-y-2">
        {searchHistory.map((item, i) => (
          <button
            key={i}
            onClick={() => setSelected(item.medication)}
            className="glass-card w-full p-4 flex items-center justify-between hover:bg-card/90 transition-colors text-left"
          >
            <div className="flex items-center gap-3">
              <Clock className="w-4 h-4 text-muted-foreground" />
              <div>
                <p className="text-sm font-medium text-foreground">{item.medication.name}</p>
                <p className="text-[11px] text-muted-foreground">{item.date}</p>
              </div>
            </div>
            <ChevronRight className="w-4 h-4 text-muted-foreground" />
          </button>
        ))}
      </div>

      <MedicationDialog
        medication={selected}
        open={!!selected}
        onOpenChange={(open) => !open && setSelected(null)}
      />
    </div>
  );
};

export default Profile;
