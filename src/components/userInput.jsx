import { useRef, useContext } from "react";
import style from "./userInput.module.css";
import { TodoItemsContext } from "../store/todo-items-store";

const UserInput = () => {
  const { addTodoItems } = useContext(TodoItemsContext);
  
  const todoNameElement = useRef();
  const dueDateElement = useRef();

  const addTodo = (event) => {
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const todoDate = dueDateElement.current.value;
    addTodoItems(todoName, todoDate);
    todoNameElement.current.value = "";
    dueDateElement.current.value = "";
  };

  return (
    <div className={`${style.inputCont} container text-center`}>
      <form onSubmit={addTodo} >
      <div className={`${style.inputCont} row`}>
        <div className={`${style.inputRow} col-8`}>
          <input
            className={`${style.todoName}`}
            type="text"
            placeholder="Enter here todo items"
            ref={todoNameElement}
          />
        </div>

        <div className={`${style.inputRow} col-4`}>
          <input
            className={`${style.todoDate}`}
            type="date"
            ref={dueDateElement}
          />
        </div>

        <div className={`${style.inputRow} col-4`}>
          <input type="submit" className={`${style.todoBtn}`} value="Add"/>
        </div>
      </div>
      </form>
    </div>
  );
};

export default UserInput;
