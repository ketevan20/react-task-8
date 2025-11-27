type GameCardProps = {
    imagePath: string;
}
const GameCard = ({imagePath}: GameCardProps) => {
  return (
    <div className="w-[260px] h-[315px] rounded-2xl overflow-hidden transition duration-300 hover:scale-95 hover:opacity-50 hover:cursor-pointer">
        <img src={imagePath} alt="" />
    </div>
  )
}

export default GameCard