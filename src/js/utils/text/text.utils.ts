export function capitalizeFirstLetter(text: string): string {
  const capitalizedFirstLetter = text.charAt(0);
  const restOfText = text.slice(0);

  return `${capitalizedFirstLetter}${restOfText}`;
}
