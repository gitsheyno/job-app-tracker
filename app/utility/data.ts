import { Application, Columns } from "./types";
import { parseDate } from "@internationalized/date";

export const applications: Application[] = [
  {
    stage: "applied",
    companyData: {
      company: "Tech Innovations",
      position: "Frontend Developer",
      day: parseDate("2024-04-04"),
      link: "https://tech-innovations.jobs/frontend-developer",
      hiringManager: "john.doe@techinnovations.com",
    },
  },
  {
    stage: "interviewed",
    companyData: {
      company: "NextGen Solutions",
      position: "Backend Developer",
      day: parseDate("2024-04-04"),
      link: "https://nextgen.jobs/backend-developer",
      hiringManager: "jane.smith@nextgen.com",
    },
  },
  {
    stage: "offer",
    companyData: {
      company: "FutureWorks",
      position: "Full Stack Engineer",
      day: parseDate("2024-04-04"),
      link: "https://futureworks.jobs/fullstack-engineer",
    },
  },
  {
    stage: "offer",
    companyData: {
      company: "FutureWorks",
      position: "Full Stack Engineer",
      day: parseDate("2024-04-04"),
      link: "https://futureworks.jobs/fullstack-engineer",
    },
  },
  {
    stage: "offer",
    companyData: {
      company: "FutureWorks",
      position: "Full Stack Engineer",
      day: parseDate("2024-04-04"),
      link: "https://futureworks.jobs/fullstack-engineer",
    },
  },
];

export const columns: Columns[] = [
  {
    key: "stage",
    label: "Stage",
  },
  {
    key: "company",
    label: "Company",
  },
  {
    key: "position",
    label: "Position",
  },
  {
    key: "day",
    label: "Day",
  },
  {
    key: "link",
    label: "Link",
  },
];
