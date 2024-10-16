"use client";
import React from "react";
import Row from "../row/Row";
import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
} from "@nextui-org/table";

import { columns, applications } from "../../utility/data";
import { MergedApplication } from "@/app/utility/types";
import { CalendarDate } from "@nextui-org/react";

export default function Home({ data }: { data: MergedApplication[] }) {
  console.log(data);
  return (
    <Table classNames={{ wrapper: "mx-auto" }} aria-label="job applications">
      <TableHeader aria-label="label" columns={columns}>
        {(column) => (
          <TableColumn className="text-center" key={column.key}>
            {column.label}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody aria-label="label" items={data}>
        {(item) => {
          // const { companyData, stage } = item;

          // const data = {
          //   ...item,
          //   day: new CalendarDate(2024, 10, 8),
          // };
          return (
            <TableRow key={item.appId}>
              {(columnKey) => (
                <TableCell key={columnKey}>
                  <Row key={columnKey} col={columnKey} data={item} />
                </TableCell>
              )}
            </TableRow>
          );
        }}
      </TableBody>
    </Table>
  );
}
