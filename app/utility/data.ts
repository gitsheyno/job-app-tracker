import { Application, Columns, StageValue } from "./types";
import { parseDate } from "@internationalized/date";

export const applications: Application[] = [
  {
    stage: "applied",
    companyData: {
      companyName: "Tech Innovations",
      position: "Frontend Developer",
      day: parseDate("2024-04-04"),
      link: "https://tech-innovations.jobs/frontend-developer",
      hiringManager: "john.doe@techinnovations.com",
    },
  },
  {
    stage: "interviewed",
    companyData: {
      companyName: "NextGen Solutions",
      position: "Backend Developer",
      day: parseDate("2024-04-04"),
      link: "https://nextgen.jobs/backend-developer",
      hiringManager: "jane.smith@nextgen.com",
    },
  },
  {
    stage: "offer",
    companyData: {
      companyName: "FutureWorks",
      position: "Full Stack Engineer",
      day: parseDate("2024-04-04"),
      link: "https://futureworks.jobs/fullstack-engineer",
    },
  },
  {
    stage: "reject",
    companyData: {
      companyName: "FutureWorkss",
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
    key: "companyName",
    label: "companyName",
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
export const stages: StageValue[] = [
  { key: "todo", value: "To Do" },
  { key: "applied", value: "Applied" },
  { key: "interviewed", value: "Interviewed" },
  { key: "offer", value: "Offer" },
  { key: "reject", value: "Rejected" },
];
