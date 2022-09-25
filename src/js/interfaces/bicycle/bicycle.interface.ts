import { BicycleSizes, BicycleTypes } from '@constants';
import { BookingDuration } from '@interfaces';

interface Bicycle {
  id: string;
  name: string;
  type: BicycleTypes;
  size: BicycleSizes;
  isBooked: boolean;
  bookingDuration: BookingDuration | null;
}

export default Bicycle;
