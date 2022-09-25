import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';

import { Bicycle } from '@interfaces';
import { Paths } from '@routing';

import './bicycle-card.scss';

const BicycleCard = ({ id, name, size, type, bookingDuration }: Bicycle): ReactElement => {
  return (
    <article className="bicycle-card">
      <h2>{name}</h2>
      <p>{size}</p>
      <p>{type}</p>
      <p>{bookingDuration}</p>
      <Link to={`${Paths.Booking}/${id}`}>Book</Link>
    </article>
  );
};

export default BicycleCard;
