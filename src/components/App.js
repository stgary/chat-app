import React from 'react';
import { Route } from 'react-router-dom';
import Join from './Join/Join';
import Chat from './Chat/Chat';

export default function App() {
  return (
    <div>
      <Route 
        exact path='/' 
        component={Join} 
      />
      <Route 
        path='/chat' 
        component={Chat} 
      />
    </div>
  );
}

