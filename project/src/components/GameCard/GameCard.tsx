import { motion } from 'motion/react'

type GameCardProps = {
  imagePath: string;
}
const GameCard = ({ imagePath }: GameCardProps) => {
  return (
    <div className='relative'>
      <motion.div className='absolute inset-0 rounded-2xl overflow-hidden pointer-events-none'>
        <motion.div initial={{translateX: "-100%"}} animate={{translateX: "100%"}} transition={{duration: 2, repeat: Infinity, repeatDelay: 1}} className='h-0.5 bg-[#e117fc]'></motion.div>
        <motion.div initial={{translateY: "-100%"}} animate={{translateY: "100%"}} transition={{duration: 2, repeat: Infinity, repeatDelay: 1}} className='w-0.5 bg-[#fc1717] absolute top-0 right-0 bottom-0'></motion.div>
        <motion.div initial={{translateX: "-100%"}} animate={{translateX: "100%"}} transition={{duration: 2, repeat: Infinity, repeatDelay: 1}} className='h-0.5 bg-[#066d89] absolute bottom-0 left-0 right-0'></motion.div>
        <motion.div initial={{translateY: "-100%"}} animate={{translateY: "100%"}} transition={{duration: 2, repeat: Infinity, repeatDelay: 1}} className='w-0.5 bg-[#FCAF17] absolute top-0 left-0 bottom-0'></motion.div>
      </motion.div>

      <motion.div initial={{scale:1}} whileHover={{scale: 1.1}} whileTap={{scale: 1.2}} className="w-[260px] h-[315px] rounded-2xl overflow-hidden">
        <img src={imagePath} alt="" />
      </motion.div>
    </div>
  )
}

export default GameCard