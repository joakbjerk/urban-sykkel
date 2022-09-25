import React, { ReactElement } from 'react';

import { useBicycles } from '@context';
import { BicycleCard, FilterMenu, BicycleGrid } from '@components';

import './frontpage.scss';

const Frontpage = (): ReactElement => {
  const { bicycles } = useBicycles();

  return (
    <>
      <FilterMenu />
      <BicycleGrid>
        {bicycles.map(({ id, ...rest }) => (
          <BicycleCard key={`bicycle-${id}`} id={id} {...rest} />
        ))}
      </BicycleGrid>
    </>
  );
};

export default Frontpage;
