import buttonStyle from "./userInput.module.css";
import style from "./sampleData.module.css";
import { useContext } from 'react'
import { TodoItemsContext } from '../store/todo-items-store.jsx'

const SampleData = () => {
  const { todoItems, deleteItem } = useContext(TodoItemsContext);

  return (
    <div className={style.sampleList}>
      {todoItems.map((items, index) => (
        <div className={style.sampleRow} key={items.name + index}>
          <p className={style.todoName}>{items.name}</p>

          <p className={style.todoDate}>{items.date}</p>

          <div className={style.sampleActions}>
            <button
              className={`${buttonStyle.todoBtn} ${buttonStyle.deleteBtn}`}
              type="button"
              onClick={() => deleteItem(items.name)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default SampleData;