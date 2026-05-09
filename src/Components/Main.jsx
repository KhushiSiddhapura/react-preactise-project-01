import MainRight from "./MainComponents/MainRight"
import MainText from "./MainComponents/MainText"


const Main = () => {
  return (
    <div className="h-150 bg-linear-to-l from-green-300 to-gray-100 flex">
        <MainText />
        <MainRight />
    </div>
  )
}

export default Main