interface Todo {
  name: string
  state: TodoState
}

enum TodoState {
  New = 1,
  Active,
  Completed,
  Deleted
}

let todo = {
  name: 'learning',
  get state() {
    return TodoState.Completed
  },
  set state(newState) {
    this._state = newState
  }
}