"use client";

import { Input, Select, SelectItem } from "@nextui-org/react";
import { stages } from "@/app/utility/data";
import React from "react";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
export default function Filter() {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();
  console.log(pathname);
  const [typedQuery, setTypesQuery] = React.useState("");
  const [limit, setLimit] = React.useState("");

  React.useEffect(() => {
    const timer = setTimeout(() => {
      const params = new URLSearchParams(searchParams);

      if (typedQuery) {
        params.set("query", typedQuery);
      } else {
        params.delete("query");
      }

      if (limit) {
        params.set("limit", limit);
      } else {
        params.delete("limit");
      }

      replace(`${pathname}?${params.toString()}`, { scroll: false });
    }, 500);
    return () => clearTimeout(timer);
  }, [typedQuery, limit]);

  const handleSearch = (term: string) => {
    setTypesQuery(term);
  };
  return (
    <div className="flex w-full justify-between mb-14">
      <Input
        defaultValue={searchParams.get("name")?.toString()}
        onChange={(e) => handleSearch(e.target.value)}
        className="w-[350px]"
        placeholder="Search"
      />
      <Select
        placeholder="Limit"
        aria-label="Select application stage"
        className="max-w-lg"
        classNames={{ base: "w-[120px]" }}
        scrollShadowProps={{
          isEnabled: false,
        }}
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
          setLimit(e.target.value);
        }}
      >
        {stages.map((stage) => (
          <SelectItem key={stage.key}>{stage.key}</SelectItem>
        ))}
      </Select>
    </div>
  );
}
