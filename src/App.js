import React from 'react';
import Todos from './components/Todos';

function App() {
  this.state = {
    todos: [
      {
        id: 1,
        title: 'Take out the trash',
        completed: false
      },
      {
        id: 2,
        title: 'Dinner with girlly',
        completed: false
      },
      {
        id: 3,
        title: 'meeting with boss',
        completed: false
      }
    ]
  };
  console.log(this.state.todos);
  return (
    <div className='App'>
      <Todos />
    </div>
  );
}

export default App;
