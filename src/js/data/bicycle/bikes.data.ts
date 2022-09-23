import { Bicycle } from '@interfaces';
import { BicycleSizes, BicycleTypes } from '@constants';

function createBicycles(amount: number, type: BicycleTypes, size: BicycleSizes): Bicycle[] {
  const bicycles = [];

  let creationIndex = 1;
  const stopIndex = amount + 1;

  for (creationIndex; creationIndex < stopIndex; creationIndex++) {
    bicycles.push({ id: `${type}-${size}-${creationIndex}`, name: 'Razor', type, size });
  }

  return bicycles;
}

//Normal bicycldes;
const largeNormallBicycles = createBicycles(3, BicycleTypes.normal, BicycleSizes.large);
const mediumNormalBicycles = createBicycles(4, BicycleTypes.normal, BicycleSizes.medium);
const smallNormalBicycles = createBicycles(2, BicycleTypes.normal, BicycleSizes.small);

//Electrical bicycles;
const largeElectricalBicycles = createBicycles(3, BicycleTypes.electric, BicycleSizes.large);
const mediumElectricalBicycles = createBicycles(4, BicycleTypes.electric, BicycleSizes.medium);
const smallElectricalBicycles = createBicycles(2, BicycleTypes.electric, BicycleSizes.small);

const BicycleData = [...largeNormallBicycles, ...mediumNormalBicycles, ...smallNormalBicycles, ...largeElectricalBicycles, ...mediumElectricalBicycles, ...smallElectricalBicycles];

export default BicycleData;
