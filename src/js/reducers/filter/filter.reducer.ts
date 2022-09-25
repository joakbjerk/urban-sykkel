import { BicycleFilters, FilterPayload } from '@interfaces';
import { FilterActions } from '@constants';

function filterReducer(filters: BicycleFilters, payload: FilterPayload) {
  const { action, key, value } = payload;
  console.log('Kommer hit');
  console.log(action);
  if (action === FilterActions.add) {
    const newValues = key in filters ? [...(filters[key] ?? []), value] : [value];
    console.log(newValues);
    return { ...filters, [key]: newValues };
  }
  if (action === FilterActions.remove) {
    const newValues = [...(filters[key] ?? [])].filter((currentValue) => currentValue !== value);

    const filtersCopy = filters;
    console.log(newValues);
    if (newValues.length === 0) {
      delete filtersCopy[key];
      return { ...filtersCopy };
    }

    return { ...filtersCopy, [key]: newValues };
  }
  console.log('No return');
}

export default filterReducer;
