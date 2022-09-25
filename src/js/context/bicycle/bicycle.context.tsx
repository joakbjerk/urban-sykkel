import React, { createContext, useContext, ReactElement, ReactNode, useEffect, useState } from 'react';

import { Bicycle } from '@interfaces';
import { BicycleData } from '@data';

interface BicyclesContext {
  bicycles: Bicycle[];
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

  return <BicyclesContext.Provider value={{ bicycles }}>{children}</BicyclesContext.Provider>;
};
