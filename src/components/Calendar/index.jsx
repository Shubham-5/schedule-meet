import React from "react";
import { DayPicker } from "react-day-picker";
import { MdChevronRight, MdChevronLeft } from "react-icons/md";

export default function Calendar({ date, setDate, availableDays }) {
  const isDayAvailable = (day) => {
    const selectedDate = new Date(day);
    return availableDays.some((availableDay) => {
      const availableDate = new Date(availableDay);
      return (
        selectedDate.getFullYear() === availableDate.getFullYear() &&
        selectedDate.getMonth() === availableDate.getMonth() &&
        selectedDate.getDate() === availableDate.getDate()
      );
    });
  };

  return (
    <DayPicker
      mode="single"
      selected={date}
      onSelect={setDate}
      modifiers={{
        available: isDayAvailable,
      }}
      classNames={{
        caption: "flex justify-center py-2 mb-4 relative items-center",
        caption_label: "text-sm font-medium text-gray-900",
        nav: "flex items-center",
        nav_button:
          "h-10 rounded-full w-10 bg-transparent hover:bg-blue-50 p-1 transition-colors duration-300",
        nav_button_previous: "absolute left-1.5",
        nav_button_next: "absolute right-1.5",
        table: "w-full border-collapse",
        head_row: "flex font-medium text-gray-900",
        head_cell: "m-0.5 w-full md:w-10 font-normal text-sm",
        row: "flex w-full mt-2",
        cell: "text-gray-600 rounded-full h-10 w-full md:w-10 text-center text-sm p-0 m-0.5 relative focus-within:relative focus-within:z-20",
        day: "h-10 w-full md:w-10 p-0 font-normal",
        day_range_end: "day-range-end",
        day_selected:
          "rounded-full bg-blue-500 text-white hover:bg-blue-600 hover:text-white focus:bg-blue-500 focus:text-white",
        day_today: "rounded-full bg-gray-200 text-gray-900",
        day_outside:
          "day-outside text-gray-500 opacity-50 aria-selected:bg-gray-500 aria-selected:text-gray-900 aria-selected:bg-opacity-10",
        day_disabled: "text-gray-500 opacity-50",
        day_hidden: "invisible",
      }}
      components={{
        IconLeft: ({ ...props }) => (
          <MdChevronLeft {...props} className="w-full h-full" />
        ),
        IconRight: ({ ...props }) => (
          <MdChevronRight {...props} className="w-full h-full" />
        ),
      }}
    />
  );
}
