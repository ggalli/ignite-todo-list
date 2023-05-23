import { useState } from "react";
import { Header } from "./components/Header"
import { Form } from "./components/Form";
import { Task, Tasks } from "./components/Tasks";
import styles from './App.module.css';

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleCreateTask(task: Task) {
    if (task.text.length === 0) return;

    setTasks([
      ...tasks,
      task
    ])
  }

  function handleDeleteTask(id: string) {
    const newTasks = tasks.filter(task => task.id !== id);
    setTasks(newTasks);
  }

  function handleCheckTask(id: string) {
    const newTasks = tasks.map(task => {
      if (task.id === id) {
        task.isFinished = !task.isFinished;
      }
      return task;
    });
    setTasks(newTasks);
  }

  return (
    <>
      <Header />

      <main className={styles.container}>
        <Form onSubmit={handleCreateTask} />
        <Tasks tasks={tasks} onDeleteTask={handleDeleteTask} onCheckTask={handleCheckTask} />
      </main>
    </>
  )
}

export default App
