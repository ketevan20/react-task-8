import logo from '/images/logo-small.svg'
import arrow from '/images/arrow_drop_down.svg'
import Button from '../Button/Button'
import search from '/images/search.png'
import person from '/images/person.png'
import { Link } from 'react-router-dom'
import { motion } from 'motion/react'

export const Header = () => {
  return (
    <div className="w-screen h-28 bg-[rgba(2,2,2,1)] flex items-center justify-center">
      <div className="w-[1160px] flex justify-between">

        <div className='flex gap-[47px] items-center'>
          <motion.img animate={{scale:[0.8, 1, 0.8]}} transition={{duration: 1, repeat: Infinity, ease: "easeInOut"}} src={logo} alt="logo" />
          <div className='flex gap-6'>
            <div className='flex items-center'>
              <p className="text-[rgba(255,255,255,1)] font-medium text-[16px] leading-[150%] tracking-[-1.1%] hover:text-[rgba(252,175,23,1)] hover:cursor-pointer">Jogos</p>
              <img src={arrow} alt="" />
            </div>
            <Link to={"/store"}><p className="text-[rgba(255,255,255,1)] font-medium text-[16px] leading-[150%] tracking-[-1.1%] hover:text-[rgba(252,175,23,1)] hover:cursor-pointer">Loja</p></Link>
            <Link to={"/help"}><p className="text-[rgba(255,255,255,1)] font-medium text-[16px] leading-[150%] tracking-[-1.1%] hover:text-[rgba(252,175,23,1)] hover:cursor-pointer">Ajuda</p></Link>
          </div>
        </div>

        <div className='flex gap-6 items-center'>
          <Button text='Baixe o Launcher' />

          <motion.div whileHover={{scale: 1.05}} whileTap={{scale: 1.1}} className='w-12 h-12 bg-[rgba(90,90,90,1)] rounded-full flex items-center justify-center hover:bg-[#454545] hover:cursor-pointer'>
            <img src={search} alt="" />
          </motion.div>

          <motion.div whileHover={{scale: 1.05}} whileTap={{scale: 1.1}} className='w-12 h-12 bg-[rgba(90,90,90,1)] rounded-full flex items-center justify-center hover:bg-[#454545] hover:cursor-pointer'>
            <img src={person} alt="" />
          </motion.div>
        </div>

      </div>

    </div>
  )
}
