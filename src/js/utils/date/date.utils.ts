import { BookingTypes } from '@constants';
import { BookingDuration } from '@interfaces';

export function getDateTimeFromBooking(bookingDuraiton: BookingDuration): string {
  if (bookingDuraiton.type === BookingTypes.hour) return `${bookingDuraiton.amount}h`;
  if (bookingDuraiton.type === BookingTypes.day) return `${bookingDuraiton.amount}d`;
  if (bookingDuraiton.type === BookingTypes.week) return `${bookingDuraiton.amount}w`;

  return '';
}
