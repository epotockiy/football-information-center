import { Container } from '@mui/material';
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
        <h2>
          <Link to='/'>Football Information Center</Link>
        </h2>
      </header>
      <Container className='main' maxWidth='xl'>
        <Routes>
          <Route path='/teams'>
            <Route index element={<Teams />} />
            <Route path=':teamId' element={<Team />} />
          </Route>

          <Route path='*' element={<Navigate to='/teams' replace></Navigate>} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
