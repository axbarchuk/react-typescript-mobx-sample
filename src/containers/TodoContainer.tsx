import * as React from 'react'
import { observer } from 'mobx-react'

import { TodoList } from '../components/TodoList'
import { useTodoStore } from '../stores/TodoStore'
import { TodoModel } from '../stores/models'

export const TodoContainer = observer(() => {
  let todoStore = useTodoStore([
    new TodoModel('Use MobX'),
    new TodoModel('Use React')
  ])

  return (
    <div>
      <TodoList
        todos={todoStore.todos}
        addTodo={todoStore.addTodo}
        editTodo={todoStore.editTodo}
        deleteTodo={todoStore.deleteTodo}
      />
    </div>
  )
})