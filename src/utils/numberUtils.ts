export function range(start: number, end: number, step: number = 1) {
  let numbers: number[] = [];

  let current = start;
  while (current < end) {
    numbers.push(current);
    current += step;
  }

  return numbers;
}

export function leftPad(value: string, length: number) {
  let padStr = "0";
  while (padStr.length < length) {
    padStr += padStr;
  }
  console.log(padStr);
  console.log(length);
  return (padStr.toString() + value.toString()).slice(-length);
} 
