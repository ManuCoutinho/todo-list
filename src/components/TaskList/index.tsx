import { useState, FormEvent, useEffect } from 'react'
import { FiTrash, FiCheckSquare } from 'react-icons/fi'

import * as S from './styles'

interface Task {
  id: number
  title: string
  isComplete: boolean
}

export function TaskList() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [newTaskTitle, setNewTaskTitle] = useState('')

  useEffect(() => {
    const list = localStorage.getItem('tasks')
    if (list) {
      return setTasks(JSON.parse(list))
    }
  }, [])
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  function handleCreateNewTask(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!newTaskTitle) return

    const newTask = {
      id: Math.random(),
      title: newTaskTitle,
      isComplete: false
    }
    setTasks((oldState) => [...oldState, newTask])
    console.log(tasks)
    localStorage.setItem('tasks', JSON.stringify(tasks))
    setNewTaskTitle('')
  }

  function handleToggleTaskCompletion(id: number) {
    const newTasks = tasks.map((task) =>
      task.id === id
        ? {
            ...task,
            isComplete: !task.isComplete
          }
        : task
    )
    setTasks(newTasks)
    localStorage.setItem('tasks', JSON.stringify(newTasks))
  }

  function handleRemoveTask(id: number) {
    const filteredTasks = tasks.filter((task) => task.id !== id)
    setTasks(filteredTasks)
    localStorage.setItem('tasks', JSON.stringify(filteredTasks))
  }

  return (
    <S.TaskContainer>
      <S.TaskHeader>
        <S.Heading>Minhas tasks</S.Heading>
        <S.Form aria-label='criar tasks' onSubmit={handleCreateNewTask}>
          <S.Input
            type='text'
            inputMode='text'
            placeholder='Adicionar nova tarefa'
            onChange={(e) => setNewTaskTitle(e.target.value)}
            value={newTaskTitle}
          />
          <S.ButtonCreateTask
            aria-label='criar'
            type='submit'
            data-testid='add-task-button'
          >
            <FiCheckSquare size={16} color='#FFFFFF' />
          </S.ButtonCreateTask>
        </S.Form>
      </S.TaskHeader>
      <S.TaskListContainer>
        <ul>
          {tasks.map((task) => (
            <S.Item key={task.id}>
              <S.Wrapper data-testid='task'>
                <S.CheckboxContainer aria-label='Concluir task'>
                  <S.Task
                    type='checkbox'
                    aria-labelledby='checked task'
                    id='task'
                    readOnly
                    checked={task.isComplete}
                    onClick={() => handleToggleTaskCompletion(task.id)}
                  />
                  <S.Checkmark></S.Checkmark>
                </S.CheckboxContainer>
                <S.ItemTitle
                  htmlFor='task'
                  completed={task.isComplete}
                  aria-label='task description'
                >
                  {task.title}
                </S.ItemTitle>
              </S.Wrapper>
              <S.DeleteButton
                aria-label='excluir task'
                type='button'
                data-testid='remove-task-button'
                onClick={() => handleRemoveTask(task.id)}
              >
                <FiTrash size={16} />
              </S.DeleteButton>
            </S.Item>
          ))}
        </ul>
      </S.TaskListContainer>
    </S.TaskContainer>
  )
}
