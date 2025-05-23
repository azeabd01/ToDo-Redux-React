import React from 'react';
import AddTask from './features/tasks/AddTask';
import TaskList from './features/tasks/TaskList';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <Container className="py-5 bg-light min-vh-100 ">
      <h2 className="text-center mb-4">📝 Listes des Tâches </h2>
      <AddTask />
      <TaskList />
    </Container>
  );
}

export default App;
