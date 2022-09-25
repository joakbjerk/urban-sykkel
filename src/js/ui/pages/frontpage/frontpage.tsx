import React, { ReactElement, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { useBicycles } from '@context';
import { BicycleCard } from '@components';
import { FilterKeys, FilterActions } from '@constants';
import { Paths } from '@routing';

import './frontpage.scss';
import { BicycleSizes, BicycleTypes } from '@constants';

const Frontpage = (): ReactElement => {
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const { bicycles, dispatchFilter } = useBicycles();

  function toggleFilter(key: FilterKeys, value: BicycleSizes | BicycleTypes): void {
    const action = activeFilters.includes(value) ? FilterActions.remove : FilterActions.add;

    dispatchFilter({ action, key, value });
    setActiveFilters(action === FilterActions.add ? [...activeFilters, value] : activeFilters.filter((activeFilter) => activeFilter !== value));
  }

  return (
    <>
      <Link to={`/${Paths.MyBookings}`}>My Bookings</Link>
      <section>
        <h2>Filter by</h2>
        <button onClick={() => toggleFilter(FilterKeys.type, BicycleTypes.electric)}>Electric</button>
        <button onClick={() => toggleFilter(FilterKeys.type, BicycleTypes.normal)}>Normal</button>
        <button onClick={() => toggleFilter(FilterKeys.size, BicycleSizes.large)}>Large</button>
        <button onClick={() => toggleFilter(FilterKeys.size, BicycleSizes.medium)}>Medium</button>
        <button onClick={() => toggleFilter(FilterKeys.size, BicycleSizes.small)}>Small</button>
      </section>
      <div className="bicycle-grid">
        {bicycles.map(({ id, ...rest }) => (
          <BicycleCard key={`bicycle-${id}`} id={id} {...rest} />
        ))}
      </div>
    </>
  );
};

export default Frontpage;
