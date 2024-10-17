import { Spinner } from "@nextui-org/react";
import Filter from "./components/filter/Filter";
import Table from "./components/table/Table";
import { Suspense } from "react";

type SearchParams = {
  query?: string;
  limit?: string;
};

export default async function Home({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const query = searchParams.query || "";
  const limit = searchParams.limit || "";
  return (
    <div className="max-w-4xl mx-auto mt-28 flex items-center justify-center flex-col ">
      <Filter />
      <Suspense
        key={query + limit}
        fallback={
          <div className="h-56 flex items-center justify-center w-full">
            <Spinner color="default" />
          </div>
        }
      >
        <Table query={query} limit={limit} />
      </Suspense>
    </div>
  );
}
