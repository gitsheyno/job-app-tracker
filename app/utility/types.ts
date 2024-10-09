import { CalendarDate } from "@nextui-org/react";

export type Stage = "todo" | "applied" | "interviewed" | "offer" | "reject";

export interface Company {
  company: string;
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
  stage: Stage;
  company: string;
  position: string;
  day: CalendarDate;
  link: string;
  files?: File[];
  hiringManager?: string;
};
