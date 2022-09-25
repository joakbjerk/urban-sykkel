import React, { ReactElement } from 'react';
import { useParams, Link } from 'react-router-dom';

import { useBicycles } from '@context';
import { Paths } from '@routing';

const BookingDetails = (): ReactElement => {
  const { bicycleId } = useParams();
  const { getBicycleById, bookBicycle } = useBicycles();

  const bicycle = getBicycleById(bicycleId ?? '');

  if (!bicycle)
    return (
      <p>
        Could not find this bicycle <Link to={Paths.Index}>Find a new one</Link>
      </p>
    );

  return (
    <>
      <Link to={Paths.Index}>Back to frontpage</Link>
      <h2>
        {bicycle.name} - {bicycleId}
      </h2>
      <p>
        {bicycle.size} - {bicycle.type}
      </p>
      <section>
        <h3>Booking duraiton</h3>
        <button onClick={() => bookBicycle(bicycle.id, 'one hour')}>One hour</button>
        <button onClick={() => bookBicycle(bicycle.id, 'one day')}>One day</button>
        <button onClick={() => bookBicycle(bicycle.id, 'one week')}>One week</button>
      </section>
    </>
  );
};

export default BookingDetails;
