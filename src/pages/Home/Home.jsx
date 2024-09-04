import React from 'react'
import HomeCard from './components/HomeCard'
import { cardObject } from '../../utils/constant'

const Home = () => {
  return (
    <div className='flex flex-wrap gap-4 gap-y-9 my-9 '>
      {
        cardObject.map((card, index) => (
          <HomeCard key={index} card={card} />
        ))
      }
    </div>
  )
}
export default Home
