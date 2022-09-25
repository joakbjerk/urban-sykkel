export function capitalizeFirstLetter(text: string): string {
  const capitalizedFirstLetter = text.charAt(0).toLocaleUpperCase();
  const restOfText = text.slice(1);

  return `${capitalizedFirstLetter}${restOfText}`;
}
