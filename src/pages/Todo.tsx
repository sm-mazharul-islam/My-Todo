import TodoContainer from "@/components/todo/TodoContainer";
import Container from "@/components/ui/Container";

const Todo = () => {
  return (
    <Container>
      <h1 className="text-center text-red-400 text-4xl font-semibold  my-10">
        My Todos
      </h1>
      <TodoContainer />
    </Container>
  );
};

export default Todo;
