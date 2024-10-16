import {
  DatePicker,
  DateValue,
  Input,
  Select,
  SelectItem,
} from "@nextui-org/react";
import { stages } from "../../../app/utility/data";
import React, { Key, ReactNode } from "react";
import { MergedApplication, Stage } from "@/app/utility/types";

export default function Row({
  col,
  data,
}: {
  col: Key;
  data: MergedApplication;
}) {
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

  const [color, setColor] = React.useState<
    "default" | "primary" | "secondary" | "success" | "warning" | "danger"
  >(stageStatus[data.stage]);
  const component: ReactNode =
    col === "stage" ? (
      <Select
        color={color}
        aria-label="Select application stage"
        defaultSelectedKeys={[data.stage]}
        className="max-w-lg"
        classNames={{ base: "w-[120px]" }}
        scrollShadowProps={{
          isEnabled: false,
        }}
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
          setColor(stageStatus[e.target.value as Stage]);
        }}
      >
        {stages.map((animal) => (
          <SelectItem key={animal.key}>{animal.key}</SelectItem>
        ))}
      </Select>
    ) : col === "day" ? (
      <DatePicker
      // defaultValue={data[col as keyof MergedApplication]}
      // defaultValue={"2024, 12, 12" as unknown as DateValue}
      />
    ) : (
      <Input
        className="w-[150px]"
        type="string"
        disabled={data[col as keyof MergedApplication] === "reject"}
        defaultValue={data[col as keyof MergedApplication]?.toString()}
      />
    );
  return <>{component}</>;
}
