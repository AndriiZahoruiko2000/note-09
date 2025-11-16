function getTask() {
  const loadedTasks = localStorage.getItem('tasks');
  const parsedTasks = JSON.parse(loadedTasks);
  return parsedTasks;
}

function addTask(task) {
  const tasks = getTask();
  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function removeTask(id) {
  let tasks = getTask();
  tasks = tasks.filter(el => el.id !== id);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

export default {
  getTask,
  addTask,
  removeTask,
};
