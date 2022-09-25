import React, { ReactElement, useState } from 'react';

import { useBicycles } from '@context';
import { FilterKeys, FilterActions } from '@constants';
import { BicycleSizes, BicycleTypes } from '@constants';
import { FilterButton } from '@components';

import './filter-menu.scss';

interface FilterButtonData {
  label: string;
  type: FilterKeys;
  value: BicycleTypes | BicycleSizes;
}

const filterButtonsData: FilterButtonData[] = [
  { label: 'Electric', type: FilterKeys.type, value: BicycleTypes.electric },
  { label: 'Regular', type: FilterKeys.type, value: BicycleTypes.regular },
  { label: 'Large', type: FilterKeys.size, value: BicycleSizes.large },
  { label: 'Medium', type: FilterKeys.size, value: BicycleSizes.medium },
  { label: 'Small', type: FilterKeys.size, value: BicycleSizes.small },
];

const FilterMenu = (): ReactElement => {
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const { dispatchFilter } = useBicycles();

  function toggleFilter(key: FilterKeys, value: BicycleSizes | BicycleTypes): void {
    const action = isFilterActive(value) ? FilterActions.remove : FilterActions.add;
    console.log('Act', action);
    dispatchFilter({ action, key, value });
    setActiveFilters(action === FilterActions.add ? [...activeFilters, value] : activeFilters.filter((activeFilter) => activeFilter !== value));
  }

  function isFilterActive(value: BicycleTypes | BicycleSizes): boolean {
    return activeFilters.includes(value);
  }

  return (
    <section>
      <h2>Filter by</h2>
      <div className="filter-menu-buttons">
        {filterButtonsData.map(({ label, type, value }) => (
          <FilterButton key={`filter-button-${value}`} onClick={() => toggleFilter(type, value)} label={label} isActive={isFilterActive(value)} />
        ))}
      </div>
    </section>
  );
};

export default FilterMenu;
