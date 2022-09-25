import { useReducer } from 'react';

import { BicycleFilters, FilterPayload } from '@interfaces';
import { filterReducer } from '@reducers';

const initalFilter = {} as BicycleFilters;

interface UseFilters {
  filters: BicycleFilters;
  dispatch: React.Dispatch<FilterPayload>;
}

function useFilters(): UseFilters {
  const [filters, dispatch] = useReducer(filterReducer, initalFilter);

  return { filters, dispatch };
}

export default useFilters;
