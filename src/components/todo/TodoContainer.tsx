import { useAppSelector } from "@/redux/hook";
import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";
import { useGetTodosQuery } from "@/redux/api/api";
import { useState } from "react";

const TodoContainer = () => {
  const [priority, setPriority] = useState("");

  //* From Local State
  // const { todos } = useAppSelector((state) => state.todos);

  //* From server
  const { data: todos, isLoading, isError } = useGetTodosQuery(priority);

  // console.log(todos);
  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <div className=" flex justify-between mb-5">
        <AddTodoModal />
        <TodoFilter priority={priority} setPriority={setPriority} />
      </div>
      <div className="bg-primary-gradient w-full h-full rounded-xl p-[5px]">
        <div className="bg-white p-5 w-full h-full rounded-lg space-y-3">
          {todos?.data?.map((item) => (
            <TodoCard {...item} />
          ))}
        </div>
        {/* default component */}

        {/* <div className="bg-white text-2xl font-bold p-5 flex justify-center items-center rounded-md">
          <p>There is no task pending</p>{" "}
        </div> */}

        {/* -------------------------- */}
      </div>
    </div>
  );
};

export default TodoContainer;
