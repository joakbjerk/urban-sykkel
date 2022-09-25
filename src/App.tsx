import React, { ReactElement } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Frontpage } from '@pages';
import { Header, Footer } from '@landmarks';

import './App.scss';

const renderTarget = document.querySelector('#render');

if (!renderTarget) throw new Error('Could not find the render target!');

const App = (): ReactElement => {
  return (
    <>
      <Router>
        <Header />
        <main>
          <Routes>
            <Route index element={<Frontpage />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </>
  );
};

const root = createRoot(renderTarget);
root.render(<App />);
