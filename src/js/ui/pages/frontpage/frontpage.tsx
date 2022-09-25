import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';

import { useBicycles } from '@context';
import { BicycleCard } from '@components';
import { Paths } from '@routing';

import './frontpage.scss';

const Frontpage = (): ReactElement => {
  const { bicycles } = useBicycles();

  return (
    <>
      <Link to={`/${Paths.Booking}/${Paths.MyBookings}`}>My Bookings</Link>
      <div className="bicycle-grid">
        {bicycles.map(({ id, ...rest }) => (
          <BicycleCard key={`bicycle-${id}`} id={id} {...rest} />
        ))}
      </div>
    </>
  );
};

export default Frontpage;
