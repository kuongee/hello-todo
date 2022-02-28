import axios from 'axios';
import useSWR, { useSWRConfig } from 'swr';
import { List, ThemeIcon } from '@mantine/core';
import { CircleIcon, RocketIcon } from '@primer/octicons-react';

const fetcher = url => axios.get(url).then(res => res.data);

export default () => {
  const { mutate } = useSWRConfig();
  const { data: todoList } = useSWR('/api/todo', fetcher);

  if (!todoList) {
    return <div>Loading...</div>;
  }

  return (
    <List
      cols={1}
      spacing='sm'
      styles={{
        root: { width: '200px' },
      }}
    >
      {todoList.map(todo => (
        <List.Item
          className={!todo.isDone ? '' : 'done'}
          key={todo._id}
          icon={
            <ThemeIcon color={!todo.isDone ? 'teal' : 'red'} size={24} radius='m'>
              {!todo.isDone ? <CircleIcon size={12} /> : <RocketIcon size={12} />}
            </ThemeIcon>
          }
          onClick={async () => {
            await axios.put('/api/todo', { _id: todo._id });
            mutate('/api/todo');
          }}
        >
          {todo.content}
        </List.Item>
      ))}
    </List>
  );
};
