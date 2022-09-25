import React, { ReactElement } from 'react';
import { useMatch } from 'react-router-dom';

import { BookingPanel } from '@components';
import { Bicycle } from '@interfaces';
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

const BicycleCard = ({ id, name, size, type, isBooked, bookingDuration }: Bicycle): ReactElement => {
  const isAtMyBookings = useMatch(`/${Paths.MyBookings}`);

  return (
    <article className="bicycle-card">
      <img src={BicycelImages[`${type}-${size}`]} alt={`Image of a ${size} ${type} bicycle`} />
      <section className="bicycle-card-data">
        <h2>{name}</h2>

        {isAtMyBookings && <p>Booked for {`${bookingDuration?.amount} ${bookingDuration?.type}`}</p>}
        {isBooked ? <p>Booked!</p> : <BookingPanel bicycleId={id} />}
      </section>
    </article>
  );
};

export default BicycleCard;
