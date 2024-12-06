"use client";

import { AddTodoDialog } from "@/components/todo/AddTodo";
import { TodoList } from "@/components/todo/todo-list";

export default function Home() {
  return (
    <div className="min-h-screen bg-white p-4 max-w-lg mx-auto">
      <div className="space-y-8">
        <TodoList />
        <AddTodoDialog />
      </div>
    </div>
  );
}
