"use client";

import { format } from "date-fns";
import { useTodoStore } from "@/lib/store";
import { TodoItem } from "./todo-item";
import { DateFilters } from "./filters/data-filters";
import { TodoStats } from "./stats/todo-stats";
import { motion, AnimatePresence } from "framer-motion";

export function TodoList() {
  const { todos, selectedDate, toggleTodo } = useTodoStore();
  const filteredTodos = todos.filter(
    (todo) =>
      format(new Date(todo.date), "yyyy-MM-dd") ===
      format(selectedDate, "yyyy-MM-dd")
  );

  return (
    <div className="space-y-6">
      <DateFilters />
      <TodoStats />
      <div className="bg-gray-200">
        <h2 className="text-2xl font-bold mb-4">
          {format(selectedDate, "MMMM d, yyyy")}
        </h2>
        <AnimatePresence mode="popLayout">
          <motion.div className="space-y-4">
            {filteredTodos.map((todo) => (
              <TodoItem key={todo.id} todo={todo} onToggle={toggleTodo} />
            ))}
            {filteredTodos.length === 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="text-center py-8"
              >
                <p className="text-gray-500 mb-2">No tasks for this day</p>
                <p className="text-sm text-gray-400">
                  Click the + button to add a new task
                </p>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
