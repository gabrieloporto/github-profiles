export function formatNumberWithK(number) {
  const absNumber = Math.abs(number);

  let roundedNumber = absNumber;
  let unit = "";
  if (absNumber >= 1000 && absNumber < 1000000) {
    roundedNumber = Math.round(absNumber / 100) / 10;
    unit = "k";
  }

  return `${roundedNumber}${unit}`;
}
