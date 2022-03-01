import { useState } from 'react';
import { isLeapYear } from '../../util';
import './ExploreContainer.css';

interface ContainerProps {}

const ExploreContainer: React.FC<ContainerProps> = () => {
  const DayOfMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
  const now = new Date()
  const firstDay = new Date(now.getFullYear(), now.getMonth(), 1)
  const pad = (firstDay.getDay() + 6) % 7
  const calendar = []
  let week :number[] = []
  Array.from({length: pad + DayOfMonth[now.getMonth()]}).map((_, i) => {
    week.push(i + 1 - pad < 0 ? 0: i + 1 - pad) 
    if (!((i + 1) % 7)) {
      calendar.push([...week])
      week = []
    }

  })
  if (week.length) calendar.push([...week, ...Array.from({length: 7 - week.length}, _ => 0)])
  return (
    <>
      {calendar.map((week, i) => <div key={i} className='outer'>
        {week.map((day, j) => <div key={j} className='cell'>{day < 1 ? '': day}</div>)}
      </div>)}
    </>
  )
}

export default ExploreContainer;
