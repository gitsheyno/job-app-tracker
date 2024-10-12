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

export default function Home() {
  return (
    <Table
      classNames={{ wrapper: "max-w-4xl mx-auto" }}
      aria-label="job applications"
    >
      <TableHeader aria-label="label" columns={columns}>
        {(column) => (
          <TableColumn className="text-center" key={column.key}>
            {column.label}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody aria-label="label" items={applications}>
        {(item) => {
          const { companyData, stage } = item;

          const data = {
            ...companyData,
            stage,
          };
          return (
            <TableRow key={item.companyData.company}>
              {(columnKey) => (
                <TableCell key={columnKey}>
                  <Row key={columnKey} col={columnKey} data={data} />
                </TableCell>
              )}
            </TableRow>
          );
        }}
      </TableBody>
    </Table>
  );
}
