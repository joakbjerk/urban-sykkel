import React, { ReactElement } from 'react';

import './filter-button.scss';

interface FilterButtonProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

const FilterButton = ({ label, isActive, onClick }: FilterButtonProps): ReactElement => {
  return (
    <button type="button" className={`filter-button ${isActive ? 'active' : ''}`} onClick={onClick}>
      {label}
    </button>
  );
};

export default FilterButton;
