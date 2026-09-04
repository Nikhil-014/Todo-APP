import { useContext } from 'react';
import { TodoItemsContext } from "../store/todo-items-store";

const WelcomeMsg = () => {
  const contextObj = useContext(TodoItemsContext);
  const todoItems = contextObj.todoItems;

  if (todoItems.length === 0) {
    return (
      <center>
        <h1
          style={{
            fontSize: "2.8rem",
            color: "#FF6B6B",
            fontFamily: "cursive",
          }}
        >
          🎉 Nothing Left To Do! Relax & Enjoy Your Day ☀️
        </h1>
      </center>
    );
  }

  return null;
};

export default WelcomeMsg;