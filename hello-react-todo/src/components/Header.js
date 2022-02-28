import { Header, TextInput, PasswordInput, Button, Group } from '@mantine/core';
import axios from 'axios';

export default () => {
  return (
    <Header height={100} padding='xs'>
      <Group>
        <TextInput placeholder='User Name' style={{ width: 300 }} />
        <PasswordInput placeholder='Password' style={{ width: 300 }} />
        <Button
          onClick={async () => {
            const { data } = await axios.get('http://localhost:4000/about');
            console.log('sign in ', data);
          }}
        >
          Sign In
        </Button>
        <Button variant='outline'>Sign Up</Button>
      </Group>
    </Header>
  );
};
