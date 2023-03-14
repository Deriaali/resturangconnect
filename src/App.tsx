import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/header';
import BookingPage from './pages/bookingPage';
import HomePage from './pages/homePage';

export interface IAppProps {}

const App: React.FunctionComponent<IAppProps> = (props) => {
  return (
  <BrowserRouter>
  <Header />
  <Routes>
    <Route path="/" element={<HomePage />}/>
    <Route path="/boka" element={<BookingPage />}/>
  </Routes>
  </BrowserRouter>
  );
};

export default App;