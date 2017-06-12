var container = document.getElementById('container');
var todo = {
    id: 123,
    name: 'Learning TypeScript.',
    completed: true
};
container.innerHTML = "\n  <div todo='" + todo.id + "' class=\"collection-item\">\n    <i class=\"" + (todo.completed ? 'blue-text text-darken-2' : 'hide') + " material-icons\">thumb_up</i>\n    <span class=\"name\">" + todo.name + "</span>\n  </div>";
