import React from 'react';
import logo from './logo.svg';
import './App.css';

export interface AppProps {
  loading: boolean;
  setConfig: (status: boolean) => undefined;
}

const App: React.FC<AppProps> = (props: AppProps) => {
  return (
    <div className="App">
      <header className="App-header">
        { props.loading && <img src={logo} className="App-logo" alt="logo" /> }
        <button onClick={() => props.setConfig(!props.loading)}> SHOW/HIDE </button>
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
};

export default App;
