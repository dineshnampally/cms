import React from 'react';
import Header from './Header';
import Dashboard from './Dashboard';

const Home = ({ setIsMS }) => {
  return (
    <div>
      <Header setIsMS={setIsMS} />  
      <Dashboard />
    </div>
  );
};

export default Home;
