"use client";

import { motion } from "framer-motion";
import { Checkbox } from "@/components/ui/checkbox";
import { Todo } from "@/lib/store";

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
}

export function TodoItem({ todo, onToggle }: TodoItemProps) {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-start space-x-4 bg-gray-50 p-4 rounded-lg group"
      >
        <Checkbox
          checked={todo.completed}
          onCheckedChange={() => onToggle(todo.id)}
          className="rounded-xl h-5 w-5"
        />
        <div className="flex-1">
          <h3
            className={`font-semibold ${
              todo.completed ? "line-through text-gray-400" : ""
            }`}
          >
            {todo.title}
          </h3>
          <p
            className={`text-sm text-gray-600 ${
              todo.completed ? "line-through" : ""
            }`}
          >
            {todo.description}
          </p>
        </div>
      </motion.div>
    </>
  );
}
