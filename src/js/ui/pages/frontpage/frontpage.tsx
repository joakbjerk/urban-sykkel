import React, { ReactElement } from 'react';

import { useBicycles } from '@context';
import { BicycleCard } from '@components';

import './frontpage.scss';

const Frontpage = (): ReactElement => {
  const { bicycles } = useBicycles();

  return (
    <div className="bicycle-grid">
      {bicycles.map(({ id, ...rest }) => (
        <BicycleCard key={`bicycle-${id}`} id={id} {...rest} />
      ))}
    </div>
  );
};

export default Frontpage;
