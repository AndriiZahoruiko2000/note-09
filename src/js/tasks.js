import { nanoid } from 'nanoid';

import refs from './refs';
import { createListMarkupTasks, createMarkupTask } from './markup-tasks';
import { renderTask } from './render-tasks';
import localStorageApi from './local-storage-api';

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

//!================================================

refs.form.addEventListener('submit', event => {
  event.preventDefault();
  const formData = new FormData(refs.form);
  const task = {
    title: formData.get('taskName'),
    description: formData.get('taskDescription'),
    id: nanoid(),
  };
  const markup = createMarkupTask(task);
  renderTask(markup);
  localStorageApi.addTask(task);

  refs.form.reset();
});

//!================================================

document.addEventListener('DOMContentLoaded', e => {
  const loadedTasks = localStorageApi.getTask();

  const markup = createListMarkupTasks(loadedTasks);
  //   refs.list.innerHTML = markup;
  renderTask(markup);
});

//!================================================

refs.list.addEventListener('click', e => {
  if (e.target.dataset.type !== 'delete') return;

  const item = e.target.closest('li');
  localStorageApi.removeTask(item.dataset.id);
  item.remove();
});
