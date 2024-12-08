"use client";

import { motion } from "framer-motion";
import { format } from "date-fns";
import { CheckCircle2, Circle, CalendarDays } from "lucide-react";
import { useTodoStore } from "@/lib/store";

export function TodoStats() {
  const { todos, selectedDate } = useTodoStore();
  const todaysTodos = todos.filter(
    (todo) =>
      format(new Date(todo.date), "yyyy-MM-dd") ===
      format(selectedDate, "yyyy-MM-dd")
  );
  const completedTodos = todaysTodos.filter((todo) => todo.completed);
  const completionRate =
    todaysTodos.length > 0
      ? Math.round((completedTodos.length / todaysTodos.length) * 100)
      : 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="grid grid-cols-3 gap-4 mb-6"
    >
      <div className="bg-white p-4 rounded-lg">
        <div className="flex items-center gap-2 text-gray-600 mb-2">
          <CalendarDays className="h-4 w-4" />
          <span className="text-sm">Total</span>
        </div>
        <p className="text-2xl font-bold">{todaysTodos.length}</p>
      </div>
      <div className="bg-white p-3 rounded-lg">
        <div className="flex items-center gap-2 text-gray-600 mb-2">
          <CheckCircle2 className="h-4 w-4" />
          <span className="text-sm">Completed</span>
        </div>
        <p className="text-2xl font-bold">{completedTodos.length}</p>
      </div>
      <div className="bg-white p-4 rounded-lg">
        <div className="flex items-center gap-2 text-gray-600 mb-2">
          <Circle className="h-4 w-4" />
          <span className="text-sm">Progress</span>
        </div>
        <p className="text-2xl font-bold">{completionRate}%</p>
      </div>
    </motion.div>
  );
}
