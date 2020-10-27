import { action, makeObservable, observable } from 'mobx'
import { nanoid } from 'nanoid'

export class TodoModel {
  id: string
  @observable text: string
  @observable completed: boolean


  constructor(text: string, completed: boolean = false) {
    this.id = nanoid()
    this.text = text
    this.completed = completed

    makeObservable(this)
  }

  @action
  complete() {
    this.completed = true
  }
}