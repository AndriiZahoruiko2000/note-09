import refs from './refs';

export function renderTask(markup) {
  refs.list.insertAdjacentHTML('afterbegin', markup);
}
