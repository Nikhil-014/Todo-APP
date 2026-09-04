import Container from './components/container.jsx'
import UserInput from './components/userInput.jsx'
import SampleData from './components/sampleData.jsx'
import WelcomeMsg from './components/welcomMsg.jsx'
import { TodoItemsContextProvider } from './store/todo-items-store.jsx'
import './App.css'

function App() {

  //  const [todoItems, setTodoItems] = useState();

  return (
    <>
      <TodoItemsContextProvider >
        <Container>
          <center><h1 className="appTitle">TODO APP</h1></center>
          <UserInput />
          <WelcomeMsg />
          <SampleData />
        </Container>
      </TodoItemsContextProvider>
    </>
  )
}

export default App
