import React, { ReactElement, useState } from 'react';
import { useMatch } from 'react-router-dom';

import { Bicycle } from '@interfaces';
import { useBicycles } from '@context';
import { Paths } from '@routing';

import ElectricLargeImg from '@assets/images/electric-large.jpg';
import ElectricMediumImg from '@assets/images/electric-medium.jpg';
import ElectricSmallImg from '@assets/images/electric-small.jpg';
import RegularLargeImg from '@assets/images/regular-large.jpg';
import RegularMediumImg from '@assets/images/regular-medium.jpg';
import RegularSmallImg from '@assets/images/regular-small.jpg';

const BicycelImages = {
  'electric-large': ElectricLargeImg,
  'electric-medium': ElectricMediumImg,
  'electric-small': ElectricSmallImg,
  'regular-large': RegularLargeImg,
  'regular-medium': RegularMediumImg,
  'regular-small': RegularSmallImg,
};

import './bicycle-card.scss';

const MAX_HOURS = 23;
const MIN_HOURS = 1;

const BicycleCard = ({ id, name, size, type, isBooked, bookingDuration }: Bicycle): ReactElement => {
  const [hours, setHours] = useState<number>(1);
  const { bookBicycle } = useBicycles();
  const isAtMyBookings = useMatch(`/${Paths.MyBookings}`);

  return (
    <article className="bicycle-card">
      <img src={BicycelImages[`${type}-${size}`]} alt={`Image of a ${size} ${type} bicycle`} />
      <h2>{name}</h2>
      <p>{size}</p>
      <p>{type}</p>
      {isAtMyBookings && <p>{bookingDuration}</p>}
      {isBooked ? (
        <p>Booked!</p>
      ) : (
        <section>
          <h3>Booking options</h3>
          <div className="bicycle-cards-hours">
            <button disabled={hours <= MIN_HOURS} onClick={() => setHours((currentHours) => --currentHours)}>
              -
            </button>
            <p>
              {hours} {`hour${hours > MIN_HOURS ? 's' : ''}`}
            </p>
            <button disabled={hours >= MAX_HOURS} onClick={() => setHours((currentHours) => ++currentHours)}>
              +
            </button>
            <button onClick={() => bookBicycle(id, `${hours} hours`)}>
              Book for {hours} {`hour${hours > 1 ? 's' : ''}`}
            </button>
          </div>
          <button onClick={() => bookBicycle(id, 'One Day')}>Book for One Day</button>
          <button onClick={() => bookBicycle(id, `One Week`)}>Book for One Week</button>
        </section>
      )}
    </article>
  );
};

export default BicycleCard;
