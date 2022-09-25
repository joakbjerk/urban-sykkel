import React, { ReactElement } from 'react';

import { Bicycle } from '@interfaces';
import { useBicycles } from '@context';

import './bicycle-card.scss';

const BicycleCard = ({ id, name, size, type, isBooked }: Bicycle): ReactElement => {
  const { bookBicycle } = useBicycles();

  return (
    <article className="bicycle-card">
      <h2>{name}</h2>
      <p>{size}</p>
      <p>{type}</p>
      <button disabled={isBooked} type="button" onClick={() => bookBicycle(id)}>
        Book
      </button>
    </article>
  );
};

export default BicycleCard;
