import { Camera } from "lucide-react";

const Scanner = () => {
  return (
    <div className="relative flex flex-col items-center justify-between min-h-[calc(100vh-5rem)] bg-background">
      {/* Header */}
      <div className="text-center pt-8 z-10">
        <h2 className="text-lg font-bold text-foreground">Escanear medicamento</h2>
        <p className="text-sm text-muted-foreground mt-1">Encuadra el nombre del medicamento</p>
      </div>

      {/* Viewfinder */}
      <div className="relative w-64 h-64 my-8">
        {/* Simulated dark camera bg */}
        <div className="absolute inset-0 rounded-2xl bg-muted/30" />

        {/* Scan line animation */}
        <div className="absolute left-4 right-4 h-[2px] bg-primary/60 animate-scan-line rounded-full" />

        {/* Corners */}
        <div className="scan-corner scan-corner--tl top-0 left-0" />
        <div className="scan-corner scan-corner--tr top-0 right-0" />
        <div className="scan-corner scan-corner--bl bottom-0 left-0" />
        <div className="scan-corner scan-corner--br bottom-0 right-0" />
      </div>

      {/* Detected text pill */}
      <div className="px-4 py-2 rounded-full bg-primary/20 border border-primary/30 mb-4">
        <span className="text-sm text-primary font-medium">
           Texto detectado: Sertralina 50mg
        </span>
      </div>

      {/* Shutter */}
      <div className="flex flex-col items-center gap-3 pb-8">
        <p className="text-xs text-muted-foreground">Mantén la cámara estable</p>
        <button className="relative w-[72px] h-[72px] rounded-full bg-foreground flex items-center justify-center transition-transform active:scale-95">
          <span className="absolute inset-0 rounded-full border-[3px] border-accent animate-pulse-ring" />
          <Camera className="w-7 h-7 text-background" />
        </button>
      </div>
    </div>
  );
};

export default Scanner;
