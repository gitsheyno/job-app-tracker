"use client";
import React, { ReactNode } from "react";
import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
} from "@nextui-org/table";
import { Chip, Input, DatePicker, DateValue } from "@nextui-org/react";
import { Stage, MergedApplication } from "../../utility/types";
import { columns, applications } from "../../utility/data";

export default function Home() {
  const stageStatus: Record<
    Stage,
    "default" | "primary" | "secondary" | "success" | "warning" | "danger"
  > = {
    applied: "primary",
    interviewed: "warning",
    reject: "danger",
    offer: "success",
    todo: "default",
  };

  const renderCell = React.useCallback(
    (application: MergedApplication, columnKey: React.Key): ReactNode => {
      const cellValue = application[columnKey as keyof MergedApplication];

      if (columnKey === "stage") {
        return (
          <Chip color={stageStatus[cellValue as Stage]}>
            {cellValue as Stage}
          </Chip>
        );
      } else if (
        columnKey === "company" ||
        columnKey === "position" ||
        columnKey === "link"
      ) {
        return <Input type="string" defaultValue={cellValue?.toString()} />;
      } else if (columnKey === "day") {
        return <DatePicker defaultValue={cellValue as DateValue} />;
      }
    },
    [stageStatus]
  );

  return (
    <Table
      classNames={{ wrapper: "max-w-4xl mx-auto" }}
      aria-label="job applications"
    >
      <TableHeader columns={columns}>
        {(column) => (
          <TableColumn className="text-center" key={column.key}>
            {column.label}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody items={applications}>
        {(item) => {
          const { companyData, stage } = item;

          const data = {
            ...companyData,
            stage,
          };
          return (
            <TableRow key={item.companyData.company}>
              {(columnKey) => (
                <TableCell>{renderCell(data, columnKey)}</TableCell>
              )}
            </TableRow>
          );
        }}
      </TableBody>
    </Table>
  );
}
