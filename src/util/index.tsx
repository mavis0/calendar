export function isLeapYear (year: number): boolean {
  return !(year % 400 || (year % 4 && !(year % 100)))
}

export function geneMonthCal (year: number, month: number): number[][] {
  const calendar = []
  const DayOfMonth = [31, isLeapYear(year) ? 29: 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
  const firstDay = new Date(year, month, 1)
  const pad = (firstDay.getDay() + 6) % 7
  let week :number[] = []
  Array.from({length: pad + DayOfMonth[month]}).map((_, i) => {
    week.push(i + 1 - pad < 0 ? 0: i + 1 - pad) 
    if (!((i + 1) % 7)) {
      calendar.push([...week])
      week = []
    }
  })
  if (week.length) calendar.push([...week, ...Array.from({length: 7 - week.length}, _ => 0)])
  return calendar
}