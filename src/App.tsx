import React from 'react';
import './App.css';

export interface Props {
  name: string;
  level?: number;
}

const App = ({ ...props }: Props) => {
  if (props && props.level && props.level < 0) {
    throw new Error('Level is not enough!');
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;