"use client";
import { AccordionDemo } from "./Components/accordian";
import { AlertDestructive } from "./Components/alert";
import { AlertDialogDemo } from "./Components/alert-dialog";
import { BadgeDemo } from "./Components/badge";
import { BreadcrumbDemo } from "./Components/BreadCrumb";
import { DatePickerDemo } from "./Components/Calendar";
import { CardWithForm } from "./Components/card";
import { ChartDemo } from "./Components/Chart";
import { DataTableDemo } from "./Components/DataTable";
import { DialogDemo } from "./Components/dialog";

export default function Home() {
  return (
    <div className="w-full">
      <div className="w-full mt-2 flex flex-col justify-start items-start gap-2">
        <DialogDemo />
        <ChartDemo />
        <CardWithForm />
        <DataTableDemo />
        <AccordionDemo />
        <AlertDestructive />
        <AlertDialogDemo />
        <BadgeDemo />
        <BreadcrumbDemo />
        <DatePickerDemo />
      </div>
    </div>
  );
}
