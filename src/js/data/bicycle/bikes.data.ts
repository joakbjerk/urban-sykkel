import { Bicycle } from '@interfaces';
import { BicycleSizes, BicycleTypes } from '@constants';
import { capitalizeFirstLetter } from '@utils';

function createBicycles(amount: number, type: BicycleTypes, size: BicycleSizes): Bicycle[] {
  const bicycles = [];

  let creationIndex = 1;
  const stopIndex = amount + 1;

  for (creationIndex; creationIndex < stopIndex; creationIndex++) {
    bicycles.push({ id: `${type}-${size}-${creationIndex}`, name: `${capitalizeFirstLetter(type)} ${capitalizeFirstLetter(size)}`, type, size });
  }

  return bicycles;
}

//Normal bicycldes;
export const largeNormallBicycles = createBicycles(4, BicycleTypes.normal, BicycleSizes.large);
export const mediumNormalBicycles = createBicycles(4, BicycleTypes.normal, BicycleSizes.medium);
export const smallNormalBicycles = createBicycles(3, BicycleTypes.normal, BicycleSizes.small);

//Electrical bicycles;
export const largeElectricalBicycles = createBicycles(3, BicycleTypes.electric, BicycleSizes.large);
export const mediumElectricalBicycles = createBicycles(4, BicycleTypes.electric, BicycleSizes.medium);
export const smallElectricalBicycles = createBicycles(2, BicycleTypes.electric, BicycleSizes.small);

const BicycleData = [...largeNormallBicycles, ...mediumNormalBicycles, ...smallNormalBicycles, ...largeElectricalBicycles, ...mediumElectricalBicycles, ...smallElectricalBicycles];

export default BicycleData;
