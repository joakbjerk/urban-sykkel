import React, { ReactElement, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { useBicycles } from '@context';
import { BicycleCard, FilterMenu } from '@components';

import { Paths } from '@routing';

import './frontpage.scss';

const Frontpage = (): ReactElement => {
  const { bicycles } = useBicycles();

  return (
    <>
      <Link to={`/${Paths.MyBookings}`}>My Bookings</Link>
      <FilterMenu />
      <div className="bicycle-grid">
        {bicycles.map(({ id, ...rest }) => (
          <BicycleCard key={`bicycle-${id}`} id={id} {...rest} />
        ))}
      </div>
    </>
  );
};

export default Frontpage;
