import React, { createContext, useContext, ReactElement, ReactNode, useRef, useState, useEffect } from 'react';

import { Bicycle, FilterPayload } from '@interfaces';
import { BicycleData } from '@data';
import { useFilters } from '@hooks';

interface BicyclesContext {
  bicycles: Bicycle[];
  bookBicycle: (id: string, duration: string) => void;
  cancelBooking: (id: string) => void;
  getMyBookings: () => Bicycle[];
  getBicycleById: (id: string) => Bicycle | undefined;
  dispatchFilter: React.Dispatch<FilterPayload>;
}

interface BicyclesProviderProps {
  children: ReactNode | ReactNode[];
}

const BicyclesContext = createContext<BicyclesContext>({} as BicyclesContext);

export const useBicycles = (): BicyclesContext => useContext<BicyclesContext>(BicyclesContext);

export const BicyclesProvider = ({ children }: BicyclesProviderProps): ReactElement => {
  const [bicycles, setBicycles] = useState<Bicycle[]>([]);
  const { filters, dispatch } = useFilters();

  const originalBicycles = useRef<Bicycle[] | null>(null);

  //Simulating fetching all the bikes from an api-endpoint;
  //That returns a response with a flat data structure;
  useEffect(() => {
    originalBicycles.current = BicycleData;
    setBicycles(BicycleData);
  }, []);

  useEffect(() => {
    const bicyclesToFilter = originalBicycles.current;

    if (!bicyclesToFilter) return;
    console.log('Applying filter', filters);
    const filteredBicycles = bicyclesToFilter.filter((bicycle) => {
      for (const filterKey in filters) {
        if (!Object.hasOwn(filters, filterKey)) return;
        const filtersArray = filters[filterKey];

        if (!filtersArray.includes(bicycle[filterKey])) return false;
      }

      return true;
    });
    console.log(filteredBicycles);

    setBicycles(filteredBicycles);
  }, [filters, originalBicycles]);

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

  return <BicyclesContext.Provider value={{ bicycles, bookBicycle, cancelBooking, getMyBookings, getBicycleById, dispatchFilter: dispatch }}>{children}</BicyclesContext.Provider>;
};
