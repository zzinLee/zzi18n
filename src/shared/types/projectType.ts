interface Project {
  projectId: string;
  name: string;
  description?: string;
  createdAt?: string;
  updatedAt?: string;
}

interface NameSpace {
  projectId: string;
  nsId: string;
  name: string;
  description?: string;
  createdAt?: string;
  updatedAt?: string;
}

interface Translation {
  projectId: string;
  nsId: string;
  translationKey: string;
  locales: string[];
  strings: {
    [key: string]: string; //localeId: string;
  };
  createdAt?: string;
  updatedAt?: string;
}

export type { Project, NameSpace, Translation };
