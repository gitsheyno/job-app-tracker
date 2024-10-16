import { CalendarDate } from "@nextui-org/react";

export type Stage = "todo" | "applied" | "interviewed" | "offer" | "reject";

export interface Company {
  companyName: string;
  position: string;
  day: CalendarDate;
  link: string;
  files?: File[];
  hiringManager?: string;
}

export interface Application {
  stage: Stage;
  companyData: Company;
}

export interface Columns {
  key: string;
  label: string;
}

export type MergedApplication = {
  appId: number;
  stage: Stage;
  companyName: string;
  position: string;
  // day: Date;
  link: string;
  files?: File[];
  hiringManager?: string;
};

export type StageValue = {
  key: Stage; // The key must be a valid Stage
  value: string; // The display value
};
