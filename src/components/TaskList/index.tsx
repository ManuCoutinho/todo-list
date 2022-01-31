import { useState, FormEvent } from "react";
import { FiTrash, FiCheckSquare } from "react-icons/fi";

import { 
    ButtonCreateTask, 
    CheckboxContainer, 
    Checkmark, 
    DeleteButton, 
    FormGroup,   
    TaskContainer, 
    TaskHeader, 
    TaskListContainer, 
  } from "./styles";

interface Task {
  id: number;
  title: string;
  isComplete: boolean;
}


export function TaskList() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTaskTitle, setNewTaskTitle] = useState("");

  function handleCreateNewTask(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!newTaskTitle) return

    const newTask = {
      id: Math.random(),
      title: newTaskTitle,
      isComplete: false,
    }
    setTasks((oldState) => [...oldState, newTask])
    setNewTaskTitle("")
  }

  function handleToggleTaskCompletion(id: number) {    
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
    const filteredTasks = tasks.filter((task) => task.id !== id);
    setTasks(filteredTasks);
  }

  return (
    <TaskContainer>
      <TaskHeader>
        <h2>Minhas tasks</h2>
        <FormGroup  aria-label="criar tasks" onSubmit={handleCreateNewTask}>
          <input
            type="text"
            placeholder="Adicionar nova tarefa"
            onChange={(e) => setNewTaskTitle(e.target.value)}
            value={newTaskTitle}
          />
          <ButtonCreateTask
            aria-label="criar"
            type="submit"
            data-testid="add-task-button"                   
          >
            <FiCheckSquare size={16} color="#FFFFFF" />
          </ButtonCreateTask>
        </FormGroup>
      </TaskHeader>
      <TaskListContainer>
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              <div
                className={task.isComplete ? '.completed' : ""}
                data-testid="task"
              >
                <CheckboxContainer aria-label="Concluir task">
                  <input 
                  type="checkbox" readOnly
                  checked={task.isComplete}
                  onClick={() => handleToggleTaskCompletion(task.id)}
                  />
                  <Checkmark></Checkmark>                  
                </CheckboxContainer>
                <p>{task.title}</p>
              </div>
              <DeleteButton
                aria-label="excluir task"
                type="button"
                data-testid="remove-task-button"
                onClick={() => handleRemoveTask(task.id)}                             
              >
                <FiTrash size={16} />
              </DeleteButton>
            </li>
          ))}
        </ul>
      </TaskListContainer>
    </TaskContainer>
  );
}