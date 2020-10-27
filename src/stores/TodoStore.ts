import { TodoModel } from './models'
import { useLocalObservable } from 'mobx-react'

export type TodoStore = ReturnType<typeof useTodoStore>
export const useTodoStore = (defaultTodos: TodoModel[] = []) => {
  const store = useLocalObservable(() => ({
    todos: defaultTodos,

    get activeTodos() {
      return store.todos.filter((todo) => !todo.completed)
    },

    get completedTodos() {
      return store.todos.filter((todo) => todo.completed)
    },

    addTodo(item: Partial<TodoModel>): void {
      store.todos.push(new TodoModel(item.text || "", item.completed))
      console.log(store.todos)
    },

    editTodo(id: string, item: Partial<TodoModel>): void {
      store.todos = store.todos.map((todo) => {
        if (todo.id === id) {
          if (typeof item.completed == 'boolean') {
            todo.completed = item.completed
          }
          if (typeof item.text == 'string') {
            todo.text = item.text
          }
        }
        return todo
      })
    },

    deleteTodo(id: string): void {
      store.todos = store.todos.filter((todo) => todo.id !== id)
    }
  }))

  return store
}