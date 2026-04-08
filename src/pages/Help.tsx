import { ScanLine, MessageCircle, Search, ShieldCheck } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Busca medicamentos",
    desc: "Usa la barra de búsqueda en Inicio para encontrar información sobre cualquier medicamento.",
  },
  {
    icon: ScanLine,
    title: "Escanea la caja",
    desc: "Ve a la pestaña Escanear, encuadra el nombre del medicamento y la app detectará el texto automáticamente.",
  },
  {
    icon: MessageCircle,
    title: "Consulta alternativas",
    desc: "El Asistente FarmaCode te mostrará el principio activo y alternativas bioequivalentes certificadas.",
  },
  {
    icon: ShieldCheck,
    title: "Información confiable",
    desc: "Todas las alternativas mostradas cuentan con certificación del ISP. La app es solo informativa.",
  },
];

const Help = () => {
  return (
    <div className="px-5 pt-8">
      <h2 className="text-xl font-bold text-foreground mb-2">¿Cómo usar FarmaCode?</h2>
      <p className="text-sm text-muted-foreground mb-8">
        Sigue estos pasos para aprovechar al máximo la aplicación.
      </p>

      <div className="space-y-5">
        {steps.map((step, i) => (
          <div key={i} className="flex gap-4 items-start">
            <div className="w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center shrink-0">
              <step.icon className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground">{step.title}</p>
              <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 glass-card p-4">
        <p className="text-[10px] text-muted-foreground text-center leading-relaxed">
          App únicamente informativa. No reemplaza una receta médica ni constituye consejo profesional de salud.
        </p>
      </div>
    </div>
  );
};

export default Help;
