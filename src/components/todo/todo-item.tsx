"use client";

import { motion } from "framer-motion";
import { Checkbox } from "@/components/ui/checkbox";
import { Todo, useTodoStore } from "@/lib/store";
import { useState } from "react";
import { Pencil, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { EditTodoDialog } from "./edit-todo";

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
}

export function TodoItem({ todo, onToggle }: TodoItemProps) {
  const [isEditing, setIsEditing] = useState(false);
  const { editTodo, deleteTodo } = useTodoStore();

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
        <div className="flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsEditing(true)}
          >
            <Pencil className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => deleteTodo(todo.id)}
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      </motion.div>
      <EditTodoDialog
        todo={todo}
        isOpen={isEditing}
        onClose={() => setIsEditing(false)}
        onSave={editTodo}
      />
    </>
  );
}
