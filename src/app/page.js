import React from 'react'
import Herosection from './components/Herosection'
export const metadata = {
  title:"Home",
}
const page = () => {
  return (
   <Herosection title="Netflix Clone" imageURL={'/home.svg'} imageHeight={650} imageWidth = {650} data={'From award-winning dramas to blockbuster action movies, we have got you covered. Browse our selection of the latest and greatest movies, and find your new favorite today.'}/>
  )
}

export default page
