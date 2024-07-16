import React from 'react';
import Layout from './components/layout';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import HomePage from './pages/home';
import EventList from './components/eventList';

function App() {
  return (
    <Router>
      <h1 className='text-2xl'>
        <Layout>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/events' element={<EventList />} />
          </Routes>
        </Layout>
      </h1>
    </Router>
  );
}

export default App;
