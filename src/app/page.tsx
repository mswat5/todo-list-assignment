import { DatePicker } from "@/components/calendar/date-picker";
import { AddTodoDialog } from "@/components/todo/AddTodo";
import { format } from "date-fns";

export default function Home() {
  return (
    <div className="min-h-screen bg-white p-4 max-w-lg mx-auto">
      <div className="space-y-8">
        <div className="text-4xl font-bold">{format(new Date(), "EEEE")}</div>
        <DatePicker />
        <AddTodoDialog />
      </div>
    </div>
  );
}
