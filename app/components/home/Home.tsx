import React from "react";

type Stage = "to applied" | "applied" | "interviews" | "offer" | "reject";

interface Company {
  company: string;
  portion: string;
  day: Date;
  link: string;
  files?: File[];
  hiringManager?: string;
}

interface Application {
  stage: Stage;
  companyData: Company;
}

const applications: Application[] = [
  {
    stage: "applied",
    companyData: {
      company: "Tech Innovations",
      portion: "Frontend Developer",
      day: new Date("2024-10-05"),
      link: "https://tech-innovations.jobs/frontend-developer",
      hiringManager: "john.doe@techinnovations.com",
    },
  },
  {
    stage: "interviews",
    companyData: {
      company: "NextGen Solutions",
      portion: "Backend Developer",
      day: new Date("2024-09-22"),
      link: "https://nextgen.jobs/backend-developer",
      hiringManager: "jane.smith@nextgen.com",
    },
  },
  {
    stage: "offer",
    companyData: {
      company: "FutureWorks",
      portion: "Full Stack Engineer",
      day: new Date("2024-10-10"),
      link: "https://futureworks.jobs/fullstack-engineer",
    },
  },
];

export default function Home() {
  return <div>Home</div>;
}
