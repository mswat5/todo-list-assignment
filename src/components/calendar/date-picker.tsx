"use client";

import { format, isToday } from "date-fns";

export function DatePicker() {
  return (
    <div className="flex justify-between items-center ">
      {Array.from({ length: 7 }).map((_, index) => {
        const date = new Date();
        date.setDate(date.getDate() - 3 + index);
        const isCurrentDay = isToday(date);
        const isPastDate = date < new Date(new Date().setHours(0, 0, 0, 0));

        return (
          <div
            key={index}
            className={`text-center ${
              isCurrentDay
                ? "bg-black text-white rounded-lg p-2"
                : "text-gray-400 text-lg"
            }`}
          >
            <div className="text-sm">{format(date, "EEE").charAt(0)}</div>
            <div className={`font-bold ${isPastDate ? "text-black" : ""}`}>
              {format(date, "d")}
            </div>
          </div>
        );
      })}
    </div>
  );
}
