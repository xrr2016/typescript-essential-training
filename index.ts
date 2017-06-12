const container = document.getElementById('container')

const todo = {
  id: 123,
  name: 'Learning TypeScript.',
  completed: true
}

container.innerHTML = `
  <div todo='${todo.id}' class="collection-item">
    <i class="${todo.completed ? 'blue-text text-darken-2' : 'hide'} material-icons">thumb_up</i>
    <span class="name">${todo.name}</span>
  </div>`