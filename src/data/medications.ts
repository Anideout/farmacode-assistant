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
  {
    id: "metformina-500",
    name: "Metformina 500mg",
    activeIngredient: "Metformina",
    dosage: "500mg",
    laboratory: "Farmachemie",
    country: "Chile",
    type: "Genérico",
    category: "Antidiabético",
    administration: "Oral",
    presentation: "60 comprimidos recubiertos",
    certISP: true,
    description:
      "Biguanida utilizada en el tratamiento de la diabetes tipo 2. Mejora el control glucémico y reduce el riesgo de complicaciones metabólicas.",
  },
  {
    id: "ibuprofeno-400",
    name: "Ibuprofeno 400mg",
    activeIngredient: "Ibuprofeno",
    dosage: "400mg",
    laboratory: "Genfar",
    country: "Colombia",
    type: "Genérico",
    category: "Antiinflamatorio (AINE)",
    administration: "Oral",
    presentation: "20 comprimidos",
    certISP: true,
    description:
      "Antiinflamatorio no esteroide. Indicado para aliviar dolor, fiebre e inflamación en diferentes condiciones agudas.",
  },
  {
    id: "amoxicilina-500",
    name: "Amoxicilina 500mg",
    activeIngredient: "Amoxicilina",
    dosage: "500mg",
    laboratory: "Tecnifarm",
    country: "Chile",
    type: "Referencia",
    category: "Antibiótico (Penicilina)",
    administration: "Oral",
    presentation: "15 cápsulas",
    certISP: true,
    description:
      "Antibiótico beta-lactámico de amplio espectro. Utilizado en infecciones bacterianas susceptibles del tracto respiratorio, urinario y otros órganos.",
  },
  {
    id: "omeprazol-20",
    name: "Omeprazol 20mg",
    activeIngredient: "Omeprazol",
    dosage: "20mg",
    laboratory: "Pharmamedical",
    country: "Chile",
    type: "Bioequivalente",
    category: "Inhibidor de Bomba de Protones",
    administration: "Oral",
    presentation: "30 cápsulas",
    certISP: true,
    description:
      "Inhibidor de la bomba de protones. Indicado para úlcera péptica, reflujo gastroesofágico y gastritis. Reduce eficazmente la producción de ácido gástrico.",
  },
  {
    id: "lisinopril-10",
    name: "Lisinopril 10mg",
    activeIngredient: "Lisinopril",
    dosage: "10mg",
    laboratory: "Laboratorio Chile",
    country: "Chile",
    type: "Genérico",
    category: "Antihipertensivo (IECA)",
    administration: "Oral",
    presentation: "30 comprimidos recubiertos",
    certISP: true,
    description:
      "Inhibidor de la enzima convertidora de angiotensina. Utilizado en el tratamiento de hipertensión e insuficiencia cardíaca.",
  },
  {
    id: "ranitidina-150",
    name: "Ranitidina 150mg",
    activeIngredient: "Ranitidina",
    dosage: "150mg",
    laboratory: "Mintlab",
    country: "Chile",
    type: "Genérico",
    category: "Bloqueador H2",
    administration: "Oral",
    presentation: "30 comprimidos",
    certISP: true,
    description:
      "Antagonista de receptores H2 de histamina. Indicado para úlcera duodenal, úlcera gástrica y reflujo gastroesofágico.",
  },
  {
    id: "fluoxetina-20",
    name: "Fluoxetina 20mg",
    activeIngredient: "Fluoxetina",
    dosage: "20mg",
    laboratory: "Varipharm",
    country: "Chile",
    type: "Bioequivalente",
    category: "Antidepresivo (ISRS)",
    administration: "Oral",
    presentation: "30 cápsulas",
    certISP: true,
    description:
      "Inhibidor selectivo de la recaptación de serotonina. Utilizado en depresión, trastorno obsesivo-compulsivo, bulimia nerviosa y trastorno de pánico.",
  },
  {
    id: "amlodipina-5",
    name: "Amlodipina 5mg",
    activeIngredient: "Amlodipina",
    dosage: "5mg",
    laboratory: "Sandoz",
    country: "Alemania",
    type: "Genérico",
    category: "Antihipertensivo (Calcio-antagonista)",
    administration: "Oral",
    presentation: "30 comprimidos",
    certISP: true,
    description:
      "Antagonista de canales de calcio. Indicado para hipertensión arterial y prevención de angina de pecho.",
  },
  {
    id: "diclofenaco-50",
    name: "Diclofenaco 50mg",
    activeIngredient: "Diclofenaco",
    dosage: "50mg",
    laboratory: "Farmamedical",
    country: "Chile",
    type: "Referencia",
    category: "Antiinflamatorio (AINE)",
    administration: "Oral",
    presentation: "20 comprimidos",
    certISP: true,
    description:
      "AINE con fuerte actividad antiinflamatoria. Utilizado para dolor moderado a severo e inflamación en procesos agudos de corta duración.",
  },
  {
    id: "claritromicina-500",
    name: "Claritromicina 500mg",
    activeIngredient: "Claritromicina",
    dosage: "500mg",
    laboratory: "Tecnifarm",
    country: "Chile",
    type: "Genérico",
    category: "Antibiótico (Macrólido)",
    administration: "Oral",
    presentation: "14 comprimidos recubiertos",
    certISP: true,
    description:
      "Antibiótico macrólido de amplio espectro. Indicado en infecciones bacterianas respiratorias, otorrinolaringológicas y dermatológicas.",
  },
  {
    id: "cetirizina-10",
    name: "Cetirizina 10mg",
    activeIngredient: "Cetirizina",
    dosage: "10mg",
    laboratory: "Genfar",
    country: "Colombia",
    type: "Genérico",
    category: "Antihistamínico",
    administration: "Oral",
    presentation: "30 comprimidos",
    certISP: true,
    description:
      "Antagonista de receptores H1 de histamina. Indicado para aliviar síntomas de alergias como rinitis alérgica y urticaria.",
  },
];
