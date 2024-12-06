"use client";

import { isToday, parseISO } from "date-fns";
import { useTodoStore } from "@/lib/store";
import { TodoItem } from "./todo-item";

export function TodoList() {
  const { todos, toggleTodo } = useTodoStore();
  const CurrentDayTodos = todos.filter((todo) => isToday(parseISO(todo.date)));

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Today</h2>
      <div className="space-y-4">
        {CurrentDayTodos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} onToggle={toggleTodo} />
        ))}
        {CurrentDayTodos.length === 0 && (
          <p className="text-center text-gray-500">No tasks for today</p>
        )}
      </div>
    </div>
  );
}
