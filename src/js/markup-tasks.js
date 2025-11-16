export function createMarkupTask(task) {
  return `<li class="task-list-item" data-id="${task.id}">
    <button class="task-list-item-btn" data-type="delete">Delete</button>
    <h3>${task.title}</h3>
    <p>${task.description}</p>
</li>`;
}

export function createListMarkupTasks(tasks) {
  return tasks.map(createMarkupTask).join('');
}
