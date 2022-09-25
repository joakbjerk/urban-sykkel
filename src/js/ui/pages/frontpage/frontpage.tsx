import React, { ReactElement } from 'react';

import { BicycleData } from '@data';

import './frontpage.scss';

const Frontpage = (): ReactElement => {
  return (
    <div className="bicycle-grid">
      {BicycleData.map(({ id, name, size, type }) => (
        <article className="bicycle-card" key={`bicycle-${id}`}>
          <p>{name}</p>
          <p>{type}</p>
        </article>
      ))}
    </div>
  );
};

export default Frontpage;
