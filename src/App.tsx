import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/header';
import BookingPage from './pages/bookingPage';
import Desserts from './pages/desserts';
import HomePage from './pages/homePage';
import MainCourse from './pages/maincourse';
import Starters from './pages/starters';
import Vegetarian from './pages/vegetarian';

export interface IAppProps {}

const App: React.FunctionComponent<IAppProps> = (props) => {
  return (
  <BrowserRouter>
  <Header />
  <Routes>
    <Route path="/" element={<HomePage />}/>
    <Route path="/boka" element={<BookingPage />}/>
    <Route path="/efterätter" element={<Desserts />}/>
    <Route path="/förätter" element={<Starters />}/>
    <Route path="/varmrätter" element={<MainCourse />}/>
    <Route path="/vegetarisk" element={<Vegetarian />}/>
  </Routes>
  </BrowserRouter>
  );
};

export default App;