import React from 'react';
import {ChatEngine} from 'react-chat-engine';
import  ChatFeed  from './components/ChatFeed.jsx';
import './App.css';
import LoginForm from './components/LoginForm'; 
const App = () => {
  if(!localStorage.getItem('username')) return <LoginForm/>
  return (
      <ChatEngine
      height="100vh"
      projectID="0ea3fcdd-f5bb-4fb9-80b2-d98427718504"
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} /> }
      />
  );
}
export default App;
