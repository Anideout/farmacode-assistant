import { useState, useMemo } from "react";
import { Search, Lightbulb, ShieldCheck, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { medications } from "@/data/medications";
import type { Medication } from "@/data/medications";
import MedicationDialog from "@/components/MedicationDialog";

const Dashboard = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState<Medication | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Obtener categorías únicas
  const categories = useMemo(
    () => Array.from(new Set(medications.map((m) => m.category))).sort(),
    []
  );

  // Filtrar medicamentos
  const filteredMedications = useMemo(() => {
    return medications.filter((med) => {
      const matchesSearch =
        med.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        med.activeIngredient.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory =
        selectedCategory === null || med.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  const handlePillClick = (id: string) => {
    const med = medications.find((m) => m.id === id);
    if (med) setSelected(med);
  };

  return (
    <div className="flex flex-col px-5 pt-6 pb-24">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <p className="text-muted-foreground text-sm">¡Hola! ¿En qué puedo ayudarte?</p>
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
      <div className="relative mb-4">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <input
          type="text"
          placeholder="Busca un medicamento..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full h-12 pl-11 pr-4 rounded-xl bg-secondary text-secondary-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
        />
      </div>

      {/* Categories Filter */}
      <div className="mb-6">
        <div className="flex gap-2 flex-wrap">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
              selectedCategory === null
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-secondary-foreground hover:bg-secondary/70"
            }`}
          >
            Todos
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                selectedCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/70"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Medications List */}
      <div className="mb-8">
        <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider mb-3">
          Medicamentos ({filteredMedications.length})
        </p>
        <div className="flex flex-col gap-2">
          {filteredMedications.length > 0 ? (
            filteredMedications.map((med) => (
              <button
                key={med.id}
                onClick={() => handlePillClick(med.id)}
                className="p-3 rounded-lg bg-secondary text-secondary-foreground hover:bg-secondary/70 transition-colors text-left"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm font-semibold">{med.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {med.activeIngredient} • {med.laboratory}
                    </p>
                  </div>
                  <span className="text-xs px-2 py-1 rounded bg-primary/10 text-primary font-medium">
                    {med.type}
                  </span>
                </div>
              </button>
            ))
          ) : (
            <p className="text-sm text-muted-foreground text-center py-4">
              No se encontraron medicamentos
            </p>
          )}
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

      <MedicationDialog
        medication={selected}
        open={!!selected}
        onOpenChange={(open) => !open && setSelected(null)}
      />
    </div>
  );
};

export default Dashboard;