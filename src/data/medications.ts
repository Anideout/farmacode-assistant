export interface Medication {
  id: string;
  name: string;
  activeIngredient: string;
  dosage: string;
  laboratory: string;
  country: string;
  type: "Genérico" | "Referencia" | "Bioequivalente";
  category: string;
  administration: string;
  presentation: string;
  certISP: boolean;
  description: string;
}

export const medications: Medication[] = [
  {
    id: "sertralina-50",
    name: "Sertralina 50mg",
    activeIngredient: "Sertralina",
    dosage: "50mg",
    laboratory: "Mintlab",
    country: "Chile",
    type: "Bioequivalente",
    category: "Antidepresivo (ISRS)",
    administration: "Oral",
    presentation: "30 comprimidos recubiertos",
    certISP: true,
    description:
      "Inhibidor selectivo de la recaptación de serotonina. Indicado para el tratamiento de la depresión, trastorno obsesivo-compulsivo, trastorno de pánico, trastorno de estrés postraumático y fobia social.",
  },
  {
    id: "atorvastatina-20",
    name: "Atorvastatina 20mg",
    activeIngredient: "Atorvastatina",
    dosage: "20mg",
    laboratory: "Sandoz",
    country: "Alemania",
    type: "Genérico",
    category: "Hipolipemiante (Estatina)",
    administration: "Oral",
    presentation: "30 comprimidos recubiertos",
    certISP: true,
    description:
      "Estatina utilizada para reducir los niveles de colesterol LDL y triglicéridos en sangre. Ayuda a prevenir enfermedades cardiovasculares en pacientes con factores de riesgo.",
  },
  {
    id: "losartan-50",
    name: "Losartán 50mg",
    activeIngredient: "Losartán",
    dosage: "50mg",
    laboratory: "Bestpharma",
    country: "Chile",
    type: "Bioequivalente",
    category: "Antihipertensivo (ARA II)",
    administration: "Oral",
    presentation: "30 comprimidos recubiertos",
    certISP: true,
    description:
      "Antagonista de los receptores de angiotensina II. Indicado para el tratamiento de la hipertensión arterial, protección renal en pacientes diabéticos y reducción del riesgo cardiovascular.",
  },
];
