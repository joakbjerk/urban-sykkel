import { BicycleFilters, FilterPayload } from '@interfaces';
import { FilterActions } from '@constants';

function filterReducer(filters: BicycleFilters, payload: FilterPayload) {
  const { action, key, value } = payload;

  if (action === FilterActions.add) {
    const newValues = key in filters ? [...(filters[key] ?? []), value] : [value];

    return { ...filters, [key]: newValues };
  }
  if (action === FilterActions.remove) {
    const newValues = [...(filters[key] ?? [])].filter((currentValue) => currentValue !== value);

    const filtersCopy = filters;

    if (newValues.length === 0) {
      delete filtersCopy[key];
      return { ...filtersCopy };
    }

    return { ...filtersCopy, [key]: newValues };
  }
}

export default filterReducer;
