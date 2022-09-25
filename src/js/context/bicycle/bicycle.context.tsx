import React, { createContext, useContext, ReactElement, ReactNode, useEffect, useState } from 'react';

import { Bicycle } from '@interfaces';
import { BicycleData } from '@data';

interface BicyclesContext {
  bicycles: Bicycle[];
  bookBicycle: (id: string, duration: string) => void;
  cancelBooking: (id: string) => void;
  getMyBookings: () => Bicycle[];
  getBicycleById: (id: string) => Bicycle | undefined;
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

  function bookBicycle(id: string, duraiton: string): void {
    const updatedBicycles = bicycles.map((bicycle) => (bicycle.id === id ? { ...bicycle, isBooked: true, bookingDuration: duraiton } : bicycle));

    setBicycles(updatedBicycles);
  }

  function cancelBooking(id: string): void {
    const updatedBicycles = bicycles.map((bicycle) => (bicycle.id === id ? { ...bicycle, isBooked: false, bookingDuration: '' } : bicycle));
    setBicycles(updatedBicycles);
  }

  function getMyBookings(): Bicycle[] {
    return bicycles.filter((bicycle) => bicycle.isBooked);
  }

  function getBicycleById(id: string): Bicycle | undefined {
    return bicycles.find((bicycle) => bicycle.id === id);
  }

  return <BicyclesContext.Provider value={{ bicycles, bookBicycle, cancelBooking, getMyBookings, getBicycleById }}>{children}</BicyclesContext.Provider>;
};
