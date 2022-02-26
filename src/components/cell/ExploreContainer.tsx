import { useState } from 'react';
import './ExploreContainer.css';

interface ContainerProps {}

const ExploreContainer: React.FC<ContainerProps> = () => {
  const date = new Date()
  const [day, setDay] = useState(date.getDay())
  const l = [1, 2, 3, 4, 5, 6, 7]
  return (
    <>
      <div className='outer'>
        <div className='cell'>{day}</div>
        {/* {l.map(x => <div className='cell'>{x === 1 ? '' : x}</div>)} */}
      </div>
    </>
  )
}

export default ExploreContainer;
