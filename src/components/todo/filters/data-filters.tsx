"use client";

import { format, startOfWeek, addDays } from "date-fns";
import { motion } from "framer-motion";
import { useTodoStore } from "@/lib/store";

export function DateFilters() {
  const { selectedDate, setSelectedDate } = useTodoStore();
  const startOfCurrentWeek = startOfWeek(new Date(), { weekStartsOn: 1 });

  return (
    <div className="flex justify-between items-center mb-6">
      {Array.from({ length: 7 }).map((_, index) => {
        const date = addDays(startOfCurrentWeek, index);
        const isSelected =
          format(selectedDate, "yyyy-MM-dd") === format(date, "yyyy-MM-dd");

        return (
          <motion.button
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedDate(date)}
            className={`relative rounded-lg p-3 transition-colors ${
              isSelected ? "bg-black text-white" : "hover:bg-gray-100"
            }`}
          >
            <div className="text-sm font-medium">{format(date, "EEE")}</div>
            <div className="text-xl font-bold">{format(date, "d")}</div>
            {isSelected && (
              <motion.div
                layoutId="active-date"
                className="absolute inset-0 bg-black rounded-lg -z-10"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
          </motion.button>
        );
      })}
    </div>
  );
}
