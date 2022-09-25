import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';

import { BicycleCard, BicycleGrid } from '@components';
import { useBicycles } from '@context';
import { Paths } from '@routing';

import './my-bookings.scss';

const MyBookings = (): ReactElement => {
  const { getMyBookings } = useBicycles();

  const bookedBicycles = getMyBookings();

  return (
    <section className="my-bookings">
      <h2>My bookings</h2>

      {bookedBicycles.length > 0 ? (
        <BicycleGrid>
          {bookedBicycles.map(({ id, ...rest }) => (
            <BicycleCard key={`bicycle-${id}`} id={id} {...rest} />
          ))}
        </BicycleGrid>
      ) : (
        <p>
          You have no booked bikes <Link to={Paths.Index}>go back to book</Link>.
        </p>
      )}
    </section>
  );
};

export default MyBookings;
