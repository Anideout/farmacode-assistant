import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Pill, FlaskConical, Building2, MapPin, Package, Syringe } from "lucide-react";
import type { Medication } from "@/data/medications";

interface Props {
  medication: Medication | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const MedicationDialog = ({ medication, open, onOpenChange }: Props) => {
  if (!medication) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[90vw] sm:max-w-md rounded-2xl bg-card border-border/50">
        <DialogHeader>
          <DialogTitle className="text-lg font-bold text-foreground">
            {medication.name}
          </DialogTitle>
        </DialogHeader>

        <div className="flex gap-2 flex-wrap">
          {medication.certISP && (
            <Badge className="bg-primary/20 text-primary border-0 text-[11px]">
              🟢 Cert. ISP
            </Badge>
          )}
          <Badge
            className={`border-0 text-[11px] ${
              medication.type === "Referencia"
                ? "bg-secondary text-secondary-foreground"
                : medication.type === "Genérico"
                ? "bg-accent/20 text-accent"
                : "bg-primary/20 text-primary"
            }`}
          >
            {medication.type}
          </Badge>
        </div>

        <div className="space-y-3 mt-2">
          <Row icon={<FlaskConical className="w-4 h-4 text-primary" />} label="Principio activo" value={medication.activeIngredient} />
          <Row icon={<Pill className="w-4 h-4 text-accent" />} label="Categoría" value={medication.category} />
          <Row icon={<Syringe className="w-4 h-4 text-primary" />} label="Administración" value={medication.administration} />
          <Row icon={<Package className="w-4 h-4 text-accent" />} label="Presentación" value={medication.presentation} />
          <Row icon={<Building2 className="w-4 h-4 text-primary" />} label="Laboratorio" value={medication.laboratory} />
          <Row icon={<MapPin className="w-4 h-4 text-accent" />} label="País" value={medication.country} />
        </div>

        <p className="text-sm text-muted-foreground leading-relaxed mt-2">
          {medication.description}
        </p>

        <p className="text-[10px] text-muted-foreground/70 text-center mt-2">
          Información referencial. Consulte a su médico o farmacéutico.
        </p>
      </DialogContent>
    </Dialog>
  );
};

const Row = ({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) => (
  <div className="flex items-center gap-3">
    {icon}
    <div>
      <p className="text-[11px] text-muted-foreground">{label}</p>
      <p className="text-sm font-medium text-foreground">{value}</p>
    </div>
  </div>
);

export default MedicationDialog;
