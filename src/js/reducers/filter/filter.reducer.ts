import { BicycleFilters, FilterPayload } from '@interfaces';
import { FilterActions } from '@constants';

function filterReducer(filters: BicycleFilters, payload: FilterPayload) {
  const { action, key, value } = payload;

  if (action === FilterActions.add) {
    const newValues = key in filters ? [...(filters[key] ?? []), value] : [value];

    return { ...filters, [key]: newValues };
  } else {
    const currentFilterValues = (filters[key] ?? []) as Array;
    const updatedValues = currentFilterValues.filter((currentFilter) => currentFilter !== value);

    const filtersCopy = filters;
    updatedValues.length === 0 ? delete filtersCopy[key] : updatedValues;

    return { ...filtersCopy };
  }
}

export default filterReducer;
