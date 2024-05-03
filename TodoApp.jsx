import { TodoAdd } from "./TodoAdd";
import { TodoList } from "./TodoList";
import { useTodos } from "./useTodos";

//148
export const TodoApp = () => {
  const {todos,handleNewTodo,handleToggleTodo,handleDeleteTodo} = useTodos();

  return (
    <>
      <div className="row">
        <div className="col-7">
          <h1>
            TodoApp:{todos.length}, <small>pendientes:{todos.filter(todo => !todo.done).length}</small>
          </h1>
          <hr />
          <TodoList
            todos={todos}
            onDeleteTodo={handleDeleteTodo}
            onToggleTodo={handleToggleTodo}
          />
        </div>
        <div className="col-5">
          <h4>Agregar TODO</h4>
          <hr />
          <TodoAdd addNewFunction={handleNewTodo} />
        </div>
      </div>
    </>
  );
};
