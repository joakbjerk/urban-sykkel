import React, { ReactElement } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Booking, BookingDetails, Frontpage, NotFound, MyBookings } from '@pages';
import { Header, Footer } from '@landmarks';
import { BicyclesProvider } from '@context';
import { Paths } from '@routing';

import './App.scss';
const renderTarget = document.querySelector('#render');

if (!renderTarget) throw new Error('Could not find the render target!');

const App = (): ReactElement => {
  return (
    <BicyclesProvider>
      <Router>
        <Header />
        <main>
          <Routes>
            <Route index element={<Frontpage />} />
            <Route path={Paths.MyBookings} element={<MyBookings />} />
            <Route path={Paths.NotFound} element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </BicyclesProvider>
  );
};

const root = createRoot(renderTarget);
root.render(<App />);
