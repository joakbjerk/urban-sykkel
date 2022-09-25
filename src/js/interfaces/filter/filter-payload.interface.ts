import { BicycleSizes, BicycleTypes, FilterActions, FilterKeys } from '@constants';

interface FilterPayload {
  action: FilterActions;
  key: FilterKeys;
  value: BicycleSizes | BicycleTypes;
}

export default FilterPayload;
