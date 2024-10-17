import React from "react";
import Home from "../home/Home";
export default async function Table({
  query,
  limit,
}: {
  query: string;
  limit: string;
}) {
  const res = await fetch(
    `https://job-tracker-server-5q58.onrender.com/app?position=${query}&limit=${limit}`,
    {
      cache: "no-store",
    }
  );
  const ans = await res.json();
  return (
    <div className="w-full">
      <Home data={ans.data} />
    </div>
  );
}
