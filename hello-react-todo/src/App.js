import { AppShell } from '@mantine/core';
import Header from './components/Header';
import TodoList from './components/TodoList';

export default () => {
  return (
    <AppShell padding='md' header={<Header></Header>}>
      <TodoList />
    </AppShell>
  );
};
