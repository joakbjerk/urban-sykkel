import React, { createContext, useContext, ReactElement, ReactNode, useEffect, useState } from 'react';

import { Bicycle } from '@interfaces';
import { BicycleData } from '@data';

interface BicyclesContext {
  bicycles: Bicycle[];
  bookBicycle: (id: string) => void;
}

interface BicyclesProviderProps {
  children: ReactNode | ReactNode[];
}

const BicyclesContext = createContext<BicyclesContext>({} as BicyclesContext);

export const useBicycles = (): BicyclesContext => useContext<BicyclesContext>(BicyclesContext);

export const BicyclesProvider = ({ children }: BicyclesProviderProps): ReactElement => {
  const [bicycles, setBicycles] = useState<Bicycle[]>([]);

  //Simulating fetching all the bikes from an api-endpoint;
  //That returns a response with a flat data structure;
  useEffect(() => {
    setBicycles(BicycleData);
  }, []);

  function bookBicycle(id: string): void {
    const updatedBicycles = bicycles.map((bicycle) => (bicycle.id === id ? { ...bicycle, isBooked: true } : bicycle));

    setBicycles(updatedBicycles);
  }

  function cancelBook(id: string): void {
    const updatedBicycles = bicycles.map((bicycle) => (bicycle.id === id ? { ...bicycle, isBooked: false } : bicycle));
    setBicycles(updatedBicycles);
  }

  return <BicyclesContext.Provider value={{ bicycles, bookBicycle }}>{children}</BicyclesContext.Provider>;
};
