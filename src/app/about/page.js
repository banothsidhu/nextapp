import Herosection from "../components/Herosection"
export const metadata = {
    title:"About",
  }
const page = () => {
    return (
       <Herosection title="About" imageURL = "/about1.svg" imageHeight={550} imageWidth={550} data={'A Netflix clone is a website or application that imitates the features and functionality of Netflix, allowing users to stream movies and TV shows.'}/>
    )
}

export default page
