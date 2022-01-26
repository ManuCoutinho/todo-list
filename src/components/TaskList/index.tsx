import { useState } from "react";
import { FiTrash, FiCheckSquare } from "react-icons/fi";

import styles from "./styles.module.scss";

interface Task {
  id: number;
  title: string;
  isComplete: boolean;
}

export function TaskList() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTaskTitle, setNewTaskTitle] = useState("");

  function handleCreateNewTask() {
    if (!newTaskTitle) return;

    const newTask = {
      id: Math.random(),
      title: newTaskTitle,
      isComplete: false,
    };
    setTasks((oldState) => [...oldState, newTask]);
    setNewTaskTitle("");
  }

  function handleToggleTaskCompletion(id: number) {
    //!checked task

    const newTasks = tasks.map((task) =>
      task.id === id
        ? {
            ...task,
            isComplete: !task.isComplete,
          }
        : task
    );
    setTasks(newTasks);
  }

  function handleRemoveTask(id: number) {
    //!delete task
    const filteredTasks = tasks.filter((task) => task.id !== id);
    setTasks(filteredTasks);
  }

  return (
    <section className={styles.taskContainer}>
      <div className={styles.taskHeader}>
        <h2>Minhas tasks</h2>

        <div className={styles.formGroup}>
          <input
            type="text"
            placeholder="Adicionar nova tarefa"
            onChange={(e) => setNewTaskTitle(e.target.value)}
            value={newTaskTitle}
          />
          <button
            type="submit"
            data-testid="add-task-button"
            onClick={handleCreateNewTask}
            className={styles.buttonCreateTask}
          >
            <FiCheckSquare size={16} color="#FFFFFF" />
          </button>
        </div>
      </div>

      <main className={styles.taskList}>
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              <div
                className={task.isComplete ? styles.completed : ""}
                data-testid="task"
              >
                <label className={styles.checkboxContainer} aria-label="Concluir task">
                  <input
                    type="checkbox"
                    readOnly
                    checked={task.isComplete}
                    onClick={() => handleToggleTaskCompletion(task.id)}
                  />
                  <span className={styles.checkmark}></span>
                </label>
                <p>{task.title}</p>
              </div>

              <button
                type="button"
                data-testid="remove-task-button"
                onClick={() => handleRemoveTask(task.id)}
                role="button" aria-label="Deletar task"
                className={styles.deleteButton}
              >
                <FiTrash size={16} />
              </button>
            </li>
          ))}
        </ul>
      </main>
    </section>
  );
}
