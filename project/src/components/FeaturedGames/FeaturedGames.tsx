import Button from '../Button/Button'
import GameCard from '../GameCard/GameCard'
import image1 from '/images/game1.png'
import image2 from '/images/game2.png'
import image3 from '/images/game3.png'
import image4 from '/images/game4.png'

const FeaturedGames = () => {
  return (
    <div className="w-[1160px] mt-20">

        <div className="mb-10 flex items-center justify-between">
            <p className="text-[rgba(246,246,246,1)] font-extrabold text-[48px] leading-[150%] tracking-[-1.1%]">Jogos em Destaque</p>
            <div className="flex gap-4">
                <div className="bg-[rgba(96,96,96,1)] rounded-[100px] hover:bg-[#454545] hover:cursor-pointer">
                    <p className="my-1 mx-6 text-[rgba(246,246,246,1)] font-medium text-[16px] leading-[150%] tracking-[-1.1%]">PC</p>
                </div>
                <div className="bg-[rgba(96,96,96,1)] rounded-[100px] hover:bg-[#454545] hover:cursor-pointer">
                    <p className="my-1 mx-6 text-[rgba(246,246,246,1)] font-medium text-[16px] leading-[150%] tracking-[-1.1%]">Console</p>
                </div>
                <div className="bg-[rgba(96,96,96,1)] rounded-[100px] hover:bg-[#454545] hover:cursor-pointer">
                    <p className="my-1 mx-6 text-[rgba(246,246,246,1)] font-medium text-[16px] leading-[150%] tracking-[-1.1%]">Dispositivos Portáteis</p>
                </div>
            </div>
        </div>

        <div className="mb-16 flex justify-between">
            <GameCard imagePath={image1}/>
            <GameCard imagePath={image2}/>
            <GameCard imagePath={image3}/>
            <GameCard imagePath={image4}/>
        </div>

        <div className='text-center'><Button text='Ver todos os jogos'/></div>
    </div>
  )
}

export default FeaturedGames