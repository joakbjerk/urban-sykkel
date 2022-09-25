import { BicycleSizes, BicycleTypes } from '@constants';

interface Bicycle {
  id: string;
  name: string;
  type: BicycleTypes;
  size: BicycleSizes;
  isBooked: boolean;
  bookingDuration: string;
}

export default Bicycle;
