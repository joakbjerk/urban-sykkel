import React, { ReactElement, useState } from 'react';

import { HoursBooking } from '@components';
import { useBicycles } from '@context';
import { BookingTypes } from '@constants';
import { BookingDuration } from '@interfaces';
import { getDateTimeFromBooking } from '@utils';

import './booking-panel.scss';

interface BookingPanelProps {
  bicycleId: string;
}

const defaultBooking: BookingDuration = { type: BookingTypes.hour, amount: 1 };

const BookingPanel = ({ bicycleId }: BookingPanelProps): ReactElement => {
  const [bookingDuration, setBookingDuration] = useState<BookingDuration>(defaultBooking);
  const { bookBicycle } = useBicycles();

  function onHourChange(amount: number): void {
    setBookingDuration({ type: BookingTypes.hour, amount });
  }

  function onCheck(event: React.ChangeEvent<HTMLInputElement>): void {
    const type = event.currentTarget.value as BookingTypes;
    const isChecked = bookingDuration.type === type;

    setBookingDuration(isChecked ? defaultBooking : { type, amount: 1 });
  }

  function onSubmit(event: React.MouseEvent<HTMLButtonElement>): void {
    event.preventDefault();
    bookBicycle(bicycleId, bookingDuration);
  }

  return (
    <form className="booking-panel">
      <h3 className="booking-panel-title">Book for</h3>
      <HoursBooking onHourChange={onHourChange} />
      <label>
        <input type="checkbox" onChange={onCheck} checked={bookingDuration.type === BookingTypes.day} value={BookingTypes.day} /> One day
      </label>
      <label>
        <input type="checkbox" onChange={onCheck} checked={bookingDuration.type === BookingTypes.week} value={BookingTypes.week} /> One week
      </label>
      <button type="button" className="booking-button-confirm" onClick={onSubmit}>
        Book for{' '}
        <time dateTime={getDateTimeFromBooking(bookingDuration)}>
          {bookingDuration.amount} {bookingDuration.type}
        </time>
      </button>
    </form>
  );
};

export default BookingPanel;
