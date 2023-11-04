import { Header } from './components/Header/Header'
import { TaskList } from './components/TaskList/TaskList'

const tasks = [
  {
      name: "Aprender sobre React.",
      state: false
  },
  {
      name: "Realizar el laboratorio sobre listado de tareas.",
      state: false
  },
  {
      name: "Pasar IETI.",
      state: true
  },
]

function App() {

  return (
    <>
      <Header />
      <TaskList list={tasks}/>
    </>
  );
}

export default App
