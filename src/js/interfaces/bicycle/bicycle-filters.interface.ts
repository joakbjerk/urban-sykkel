import { BicycleSizes, BicycleTypes, FilterKeys } from '@constants';

interface BicycleFilters {
  [FilterKeys.type]?: BicycleTypes[];
  [FilterKeys.size]?: BicycleSizes[];
}

export default BicycleFilters;
