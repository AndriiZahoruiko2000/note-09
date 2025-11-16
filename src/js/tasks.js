import { nanoid } from 'nanoid';

import refs from './refs';

refs.form.addEventListener('submit', event => {
  event.preventDefault();
  const formData = new FormData(refs.form);
  const result = {
    title: formData.get('taskName'),
    description: formData.get('taskDescription'),
    id: nanoid(),
  };
  console.log(result);
});
