export function capitalizeFirstLetter(text: string): string {
  const capitalizedFirstLetter = text.charAt(0).toLocaleUpperCase();
  const restOfText = text.slice(1);

  return `${capitalizedFirstLetter}${restOfText}`;
}

export function getHoursLabel(hours: number): string {
  return `hour${hours > 1 ? 's' : ''}`;
}
