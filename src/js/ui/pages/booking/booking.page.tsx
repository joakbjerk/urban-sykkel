import React, { ReactElement } from 'react';
import { Outlet } from 'react-router-dom';

import './booking.page.scss';

const Booking = (): ReactElement => {
  return (
    <>
      <h1>Booking</h1>
      <Outlet />
    </>
  );
};

export default Booking;
