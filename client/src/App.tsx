import React, { Component } from 'react';
import { connect } from 'socket.io-client';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  public componentDidMount() {
    const ws = connect('http://localhost:3000');

    ws.on('connection', () => {
      console.log('Connected');
    });

    ws.on('error', (err: Error) => {
      console.log('Error while connecting %o', err);
    });

    ws.on('hello', (data: any) => {
      console.log('New data incoming %o', data);
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
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
}

export default App;
