"use client";

import TableBookingForm from "@/app/table-booking/(section)/TableBookingForm";
import Booking from "./Booking";

const TableBooking = ({}) => {
  return (
    <div className="flex h-full w-full items-center justify-center gap-[1.2rem] bg-[#000] py-12">
      {/* <TableBookingForm /> */}
      <Booking />
    </div>
  );
};

export default TableBooking;
