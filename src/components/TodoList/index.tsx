import React from 'react'
import {observable} from 'mobx'
import { TodoModel } from '../../stores/models'

// import { observer } from 'mobx-react'

export interface TodoActions {
  addTodo: (data: Partial<TodoModel>) => any;
  editTodo: (id: string, data: Partial<TodoModel>) => any;
  deleteTodo: (id: string) => any;
}

export interface TodoListProps extends TodoActions {
  todos: TodoModel[]
}

export const TodoList = ({ todos, addTodo, editTodo, deleteTodo }: TodoListProps) => {
  return (
    <section>
      <button onClick={() => addTodo({ text: 'Test' })}>ADD</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <p>ID: {todo.id}</p>
            <p>TEXT: {todo.text}</p>
            <p>DONE: {todo.completed ? "V" : "X"}</p>
            <button onClick={() => todo.complete()}>OK</button>
          </li>
        ))}
      </ul>
    </section>
  )
}