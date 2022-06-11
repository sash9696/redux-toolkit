import React  from 'react';
import './App.css';
import Nav from './Nav';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import UsersList from './UsersList';
import Users from './Users';

function App() {
  
  
  return (
    <div className="app">
      <BrowserRouter>
        <Nav/>
        <div className="app-body">
           <Routes>
           <Route path='/'  element={<Users/>}/>
          <Route path='/users-list' element={<UsersList/>}/>
           </Routes>
        </div>
        </BrowserRouter>
    </div>

    
  );
}

export default App;
