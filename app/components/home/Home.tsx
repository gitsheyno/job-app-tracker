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
import {
  Input,
  DatePicker,
  DateValue,
  Select,
  SelectItem,
} from "@nextui-org/react";
import { Stage, MergedApplication } from "../../utility/types";
import { columns, applications, stages } from "../../utility/data";

export default function Home() {
  const renderCell = (
    application: MergedApplication,
    columnKey: React.Key
  ): ReactNode => {
    const cellValue = application[columnKey as keyof MergedApplication];

    if (columnKey === "stage") {
      return (
        <Select
          aria-label="Select application stage"
          defaultSelectedKeys={[stages[0].key]}
          className="max-w-lg"
          classNames={{ base: "w-[150px]" }}
          scrollShadowProps={{
            isEnabled: false,
          }}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
            // console.log("clicked", e.target.value);
          }}
        >
          {stages.map((animal) => (
            <SelectItem key={animal.key}>{animal.key}</SelectItem>
          ))}
        </Select>
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
  };

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
                <TableCell>{renderCell(data, columnKey)}</TableCell>
              )}
            </TableRow>
          );
        }}
      </TableBody>
    </Table>
  );
}
