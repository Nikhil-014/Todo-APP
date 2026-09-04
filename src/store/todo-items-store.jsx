import { createContext } from 'react';
import {  useReducer } from 'react'

export const TodoItemsContext = createContext([]);

const todoItemsReducer = (currTodoItems, action) => {
    if (action.type === "NEW_ITEM") {
      const newTodoItem = [
        ...currTodoItems,
        { name: action.payload.itemName, date: action.payload.itemDate },
      ];
      return newTodoItem;
    } else if (action.type === "DELETE_ITEM") {
      const newItems = currTodoItems.filter((item) => item.name !== action.payload.itemName);
      return newItems;
    }
    return currTodoItems;
  };

export const TodoItemsContextProvider = ({ children }) => {
  const [todoItems, dispatchTodoItems] = useReducer(todoItemsReducer, []);

  const addTodoItems = (itemName, itemDate) => {
    const newItemAction = {
      type: "NEW_ITEM",
      payload: {
        itemName,
        itemDate,
      },
    };
    dispatchTodoItems(newItemAction);
  };

  const deleteItem = (itemName) => {
    const deleteItemAction = {
      type: "DELETE_ITEM",
      payload: {
        itemName,
      },
    };
    dispatchTodoItems(deleteItemAction);
  };

  return (
    <TodoItemsContext.Provider
      value={{
        todoItems,
        addTodoItems,
        deleteItem,
      }}
    >
      {children}
    </TodoItemsContext.Provider>
  );
};