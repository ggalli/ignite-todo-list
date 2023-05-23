import { Check, Trash } from "phosphor-react";
import styles from './TaskItem.module.css';

interface TaskItemProps {
  id: string;
  text: string;
  isFinished: boolean;
  onDelete: () => void;
  onCheck: () => void;
}

export function TaskItem({ id, text, isFinished, onDelete, onCheck }: TaskItemProps) {
  return (
    <div className={styles.task}>
      <input type="checkbox" id={id} name="check" onChange={onCheck} checked={isFinished} />
      <label className={styles.check} htmlFor={id}>
        {isFinished && <Check size={16} weight="bold" />}
      </label>
      <p>{text}</p>
      <Trash className={styles.delete} size={24} weight="bold" onClick={onDelete} />
    </div>
  )
}