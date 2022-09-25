import React, { ReactElement, useEffect, useState } from 'react';

import './hour-booking.scss';

const MAX_HOURS = 23;
const MIN_HOURS = 1;

interface HourBookingProps {
  onHourChange: (hour: number) => void;
}

const HourBooking = ({ onHourChange }: HourBookingProps): ReactElement => {
  const [hours, setHours] = useState<number>(1);

  useEffect(() => {
    onHourChange(hours);
  }, [hours]);

  function getUpdatedHour(value: string): number {
    const newHour = parseInt(value);

    if (isNaN(newHour) || newHour < MIN_HOURS) return MIN_HOURS;
    if (newHour > MAX_HOURS) return MAX_HOURS;

    return newHour;
  }

  function onChange(event: React.ChangeEvent<HTMLInputElement>): void {
    const updatedHour = getUpdatedHour(event.target.value);
    setHours(updatedHour);
  }

  function onEnterPress(event: React.KeyboardEvent<HTMLInputElement>): void {
    if (event.key !== 'Enter') return;
    event.preventDefault();

    const updatedHour = getUpdatedHour(event.currentTarget.value);

    setHours(updatedHour);
    onHourChange(updatedHour);
  }

  return (
    <label className="hour-booking">
      <button
        type="button"
        className="hour-booking-button"
        aria-label="Decrease hours of booking"
        disabled={hours <= MIN_HOURS}
        onClick={() => setHours((currentHours) => --currentHours)}
      >
        +
      </button>
      <input className="hour-booking-input" type="number" value={hours} onChange={onChange} onKeyDown={onEnterPress} />
      <button
        type="button"
        className="hour-booking-button"
        aria-label="Increase hours of booking"
        disabled={hours >= MAX_HOURS}
        onClick={() => setHours((currentHours) => ++currentHours)}
      >
        +
      </button>
      Hours
    </label>
  );
};

export default HourBooking;
