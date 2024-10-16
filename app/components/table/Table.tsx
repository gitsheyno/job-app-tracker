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
    //TODO add limit to the api
    `https://job-tracker-server-5q58.onrender.com/app?position=${query}`,
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
