import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Team } from './routes/Team/Team';
import { Teams } from './routes/Teams/Teams';

function App(): JSX.Element {
  return (
    <>
      <header className='header'>
        <Link to='/'>Football Information Center</Link>
      </header>
      <div className='main'>
        <Routes>
          <Route path='/teams'>
            <Route index element={<Teams />} />
            <Route path=':teamId' element={<Team />} />
          </Route>

          <Route path='*' element={<Navigate to='/teams' replace></Navigate>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
