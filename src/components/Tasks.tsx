import { TaskItem } from './TaskItem';
import styles from './Tasks.module.css';
import { ClipboardText } from "phosphor-react";

export interface Task {
  id: string;
  text: string;
  isFinished: boolean;
}

interface TasksProps {
  tasks: Task[];
  onDeleteTask: (id: string) => void;
  onCheckTask: (id: string) => void;
}

export function Tasks({ tasks, onDeleteTask, onCheckTask }: TasksProps) {
  const finishedTasks = tasks.filter(task => task.isFinished).length;

  return (
    <div className={styles.tasks}>
      <div className={styles.info}>
        <div className={styles['tasks-created']}>Tarefas criadas <span className={styles.counter}>{tasks.length}</span></div>
        <div className={styles['tasks-done']}>Concluídas <span className={styles.counter}>{finishedTasks} de {tasks.length}</span></div>
      </div>

      <div className={styles.list}>
        {tasks.length > 0 ?
          tasks.map(task =>
            <TaskItem
              key={task.id}
              id={task.id}
              text={task.text}
              isFinished={task.isFinished}
              onDelete={() => onDeleteTask(task.id)}
              onCheck={() => onCheckTask(task.id)} />
          ) : (
            <div className={styles.empty}>
              <ClipboardText size={56} />
              <p>
                <strong>Você ainda não tem tarefas cadastradas</strong>
                <br />
                Crie tarefas e organize seus itens a fazer
              </p>
            </div>
          )}
      </div>
    </div>
  )
}