import { Bot, Send } from "lucide-react";
import { useState } from "react";

interface DrugCard {
  name: string;
  lab: string;
  country: string;
  tags: { label: string; color: string }[];
}

const alternatives: DrugCard[] = [
  {
    name: "Sertralina Mintlab",
    lab: "Mintlab",
    country: "Chile",
    tags: [
      { label: "Cert. ISP", color: "bg-success/20 text-success" },
      { label: "Genérico", color: "bg-info/20 text-info" },
    ],
  },
  {
    name: "Sertralina Sandoz",
    lab: "Sandoz",
    country: "Alemania",
    tags: [
      { label: "Cert. ISP", color: "bg-success/20 text-success" },
      { label: "Genérico", color: "bg-info/20 text-info" },
    ],
  },
  {
    name: "Sertralina Bestpharma",
    lab: "Bestpharma",
    country: "Chile",
    tags: [
      { label: "Cert. ISP", color: "bg-success/20 text-success" },
      { label: "Genérico", color: "bg-info/20 text-info" },
    ],
  },
  {
    name: "Altruline 50mg (Original)",
    lab: "Pfizer",
    country: "Referencia",
    tags: [
      { label: "Referencia", color: "bg-secondary text-secondary-foreground" },
    ],
  },
];

const Chat = () => {
  const [input, setInput] = useState("");

  return (
    <div className="flex flex-col h-[calc(100vh-5rem)]">
      {/* Header */}
      <div className="flex items-center justify-center gap-2 py-4 border-b border-border/40">
        <Bot className="w-5 h-5 text-primary" />
        <h2 className="text-base font-bold text-foreground">Asistente FarmaCode</h2>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
        {/* Bot message 1 */}
        <div className="max-w-[85%] bg-card rounded-2xl rounded-tl-md p-4 text-sm leading-relaxed text-card-foreground">
          ¡Hola! He analizado tu escaneo. El principio activo detectado es{" "}
          <strong className="text-foreground">Sertralina 50mg</strong>. Este medicamento es un{" "}
          <strong className="text-foreground">Antidepresivo</strong>, formulado para administración{" "}
          <strong className="text-foreground">Oral</strong>, en presentación de{" "}
          <strong className="text-foreground">30 comprimidos</strong>.
        </div>

        {/* Bot message 2 */}
        <div className="max-w-[85%] bg-card rounded-2xl rounded-tl-md p-4 text-sm text-card-foreground">
          He encontrado estas opciones bioequivalentes certificadas para ti. Tienen la misma eficacia y seguridad.
        </div>

        {/* Drug cards */}
        <div className="space-y-3 max-w-[90%]">
          {alternatives.map((drug) => (
            <div key={drug.name} className="glass-card p-4">
              <p className="font-semibold text-sm text-foreground">{drug.name}</p>
              <p className="text-xs text-muted-foreground mt-0.5">
                {drug.lab} — {drug.country}
              </p>
              <div className="flex gap-2 mt-2 flex-wrap">
                {drug.tags.map((tag) => (
                  <span
                    key={tag.label}
                    className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${tag.color}`}
                  >
                    {tag.label}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Disclaimer */}
      <div className="px-4 py-2 bg-muted/50 border-t border-border/30">
        <p className="text-[10px] text-muted-foreground text-center leading-relaxed">
          App únicamente informativa. No reemplaza una receta médica ni constituye consejo profesional.
          Ante cualquier duda, consulte a su médico.
        </p>
      </div>

      {/* Input */}
      <div className="px-4 py-3 border-t border-border/40 bg-nav">
        <div className="flex items-center gap-2">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="¿Qué son los bioequivalentes?"
            className="flex-1 h-10 px-4 rounded-full bg-secondary text-sm text-secondary-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
          />
          <button className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shrink-0 transition-transform active:scale-90">
            <Send className="w-4 h-4 text-primary-foreground" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
