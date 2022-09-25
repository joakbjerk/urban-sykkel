import React, { ReactNode, ReactElement } from 'react';

import './bicycle-grid.scss';

interface BicycleGridProps {
  children: ReactNode | ReactNode[];
}

const BicycleGrid = ({ children }: BicycleGridProps): ReactElement => {
  return <div className="bicycle-grid">{children}</div>;
};

export default BicycleGrid;
