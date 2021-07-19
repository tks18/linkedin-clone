import React from 'react';
import './App.css';
import Header from './header';
import Sidebar from './sidebar';
import Feed from './feed';

function App() {
  return (
    <div className="app">
      {/* Header */}
      <Header />
      {/* App Body */}
      <div className="app__body">
        {/* Sidebar */}
        <Sidebar />
        {/* feed */}
        <Feed />
        {/* Widgets */}
      </div>
    </div>
  );
}

export default App;
