import { useNavigate } from "react-router-dom"
import Button from "../Button/Button"
import GameCard from "../GameCard/GameCard"
import image1 from '/images/game1.png'
import image2 from '/images/game2.png'
import image3 from '/images/game3.png'
import image4 from '/images/game4.png'

const Store = () => {
  const navigate = useNavigate();

  const GoBack = () => {
    navigate("/")
  }

  return (
    <div className="w-screen h-full min-h-screen p-10 bg-[rgba(16,16,16,1)] flex flex-col items-center">
      <div className="max-w-[1160px] flex gap-10 flex-wrap items-center justify-center">
        <GameCard imagePath={image1} />
        <GameCard imagePath={image2} />
        <GameCard imagePath={image3} />
        <GameCard imagePath={image4} />
        <GameCard imagePath={image1} />
        <GameCard imagePath={image2} />
        <GameCard imagePath={image3} />
        <GameCard imagePath={image4} /><br />
      </div>
      <Button text="Go Back" clickFunction={GoBack}/>
    </div>
  )
}

export default Store