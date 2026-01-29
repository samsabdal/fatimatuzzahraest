export interface OfficeBearer {
  name: string;
  role: string;
}

export interface Program {
  title: string;
  ageGroup?: string;
  description: string;
  imagePrompt: string;
}

export interface ContactFormState {
  name: string;
  email: string;
  message: string;
}