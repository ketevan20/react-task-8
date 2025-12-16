import { motion } from 'motion/react'

type ButtonProps = {
    text: string,
    clickFunction?: () => void
}

const Button = ({text, clickFunction}: ButtonProps) => {
  return (
    <motion.button whileHover={{scale: 1.05}} whileTap={{scale: 1.1}} onClick={clickFunction} className="bg-[rgba(252,175,23,1)] px-12 py-[15px] rounded-lg font-bold text-[rgba(2,2,2,1)] text-[20px] leading-[150%] tracking-[-1.1%] hover:bg-[#c48508]">
        {text}
    </motion.button>
  )
}

export default Button