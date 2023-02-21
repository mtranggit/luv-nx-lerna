import { isOdd } from "luv-is-odd";

export function isEven(n: number) {
  return !isOdd(n);
}
