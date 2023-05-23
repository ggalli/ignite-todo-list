import { FormEvent, useState } from "react";
import { Task } from "./Tasks";
import styles from './Form.module.css';
import { PlusCircle } from "phosphor-react";
import { v4 as uuidv4 } from 'uuid';

interface FormProps {
  onSubmit: (task: Task) => void;
}

export function Form({ onSubmit }: FormProps) {
  const [text, setText] = useState('');

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onSubmit({
      id: uuidv4(),
      text,
      isFinished: false
    })
    setText('')
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        type="text"
        placeholder="Adicione uma nova tarefa"
        value={text}
        onChange={(event) => setText(event.target.value)}
      />

      <button className={styles.button} type="submit">
        Criar
        <PlusCircle size={18} weight="bold" />
      </button>
    </form>
  )
}