import React, { ReactElement } from 'react';
import { useMatch } from 'react-router-dom';

import { useBicycles } from '@context';
import { BookingPanel } from '@components';
import { Bicycle } from '@interfaces';
import { Paths } from '@routing';
import { getDateTimeFromBooking } from '@utils';

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
  const { cancelBooking } = useBicycles();
  const isAtMyBookings = useMatch(`/${Paths.MyBookings}`);

  return (
    <article className="bicycle-card">
      <img src={BicycelImages[`${type}-${size}`]} alt={`Image of a ${size} ${type} bicycle`} />
      <section className="bicycle-card-data">
        <h2 className="bicycle-card-name">{name}</h2>
        {isAtMyBookings && bookingDuration && (
          <>
            <p className="bicycle-card-booking-text">
              Booked for{' '}
              <time className="booking-time" dateTime={getDateTimeFromBooking(bookingDuration)}>
                {`${bookingDuration.amount} ${bookingDuration.type}`}
              </time>
            </p>
            <button className="cancel-booking-button" onClick={() => cancelBooking(id)}>
              Cancel
            </button>
          </>
        )}

        {isBooked && !isAtMyBookings && <p className="booked-disclaimer">Booked</p>}
        {!isBooked && <BookingPanel bicycleId={id} />}
      </section>
    </article>
  );
};

export default BicycleCard;
