import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';

import { BicycleCard, BicycleGrid } from '@components';
import { useBicycles } from '@context';
import { Paths } from '@routing';

const MyBookings = (): ReactElement => {
  const { getMyBookings } = useBicycles();

  const bookedBicycles = getMyBookings();

  return (
    <>
      <h2>My bookings!</h2>
      <Link to={Paths.Index}>Back frontpage</Link>
      {bookedBicycles.length > 0 ? (
        <BicycleGrid>
          {bookedBicycles.map(({ id, ...rest }) => (
            <BicycleCard key={`bicycle-${id}`} id={id} {...rest} />
          ))}
        </BicycleGrid>
      ) : (
        <p>You have no booked bikes</p>
      )}
    </>
  );
};

export default MyBookings;
