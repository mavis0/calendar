export function isLeapYear (year: number): boolean {
  return !(year % 400 || (year % 4 && !(year % 100)))
}
