import { Link } from 'react-router-dom'
import Button from '../Button/Button'
import GameCard from '../GameCard/GameCard'
import image1 from '/images/game1.png'
import image2 from '/images/game2.png'
import image3 from '/images/game3.png'
import image4 from '/images/game4.png'
import { motion } from 'motion/react'


const FeaturedGames = () => {
    return (
        <motion.div initial={{ scale: 0.8, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} transition={{ duration: 2 }} className="w-[1160px] mt-20 overflow-hidden">

            <div className="mb-10 flex items-center justify-between">
                <p className="text-[rgba(246,246,246,1)] font-extrabold text-[48px] leading-[150%] tracking-[-1.1%]">Jogos em Destaque</p>
                <div className="flex gap-4">
                    <motion.div initial={{rotateX: 0}} whileHover={{rotateX: 360}} transition={{duration: 1}} className="bg-[rgba(96,96,96,1)] rounded-[100px] hover:bg-[#454545] hover:cursor-pointer">
                        <p className="my-1 mx-6 text-[rgba(246,246,246,1)] font-medium text-[16px] leading-[150%] tracking-[-1.1%]">PC</p>
                    </motion.div>
                    <motion.div initial={{rotateX: 0}} whileHover={{rotateX: 360}} transition={{duration: 1}} className="bg-[rgba(96,96,96,1)] rounded-[100px] hover:bg-[#454545] hover:cursor-pointer">
                        <p className="my-1 mx-6 text-[rgba(246,246,246,1)] font-medium text-[16px] leading-[150%] tracking-[-1.1%]">Console</p>
                    </motion.div>
                    <motion.div initial={{rotateX: 0}} whileHover={{rotateX: 360}} transition={{duration: 1}} className="bg-[rgba(96,96,96,1)] rounded-[100px] hover:bg-[#454545] hover:cursor-pointer">
                        <p className="my-1 mx-6 text-[rgba(246,246,246,1)] font-medium text-[16px] leading-[150%] tracking-[-1.1%]">Dispositivos Portáteis</p>
                    </motion.div>
                </div>
            </div>

            <div className="mb-16 flex justify-between">
                <Link to={'/gallery/1'}><GameCard imagePath={image1} /></Link>
                <Link to={'/gallery/2'}><GameCard imagePath={image2} /></Link>
                <Link to={'gallery/3'}><GameCard imagePath={image3} /></Link>
                <Link to={'gallery/4'}><GameCard imagePath={image4} /></Link>
            </div>

            <div className='text-center'><Button text='Ver todos os jogos' /></div>
        </motion.div>
    )
}

export default FeaturedGames