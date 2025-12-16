import Button from "../Button/Button"
import { motion } from 'motion/react'

const GamesLauncher = () => {
    return (
        <motion.div initial={{ scale: 0.8, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} transition={{duration: 2}} className="relative w-[1160px] h-[535px] mb-[95px] bg-[url('/images/launcherBackground.png')] rounded-2xl flex items-center overflow-hidden">
            
            <div className="ml-[76px]">
                <div className="max-w-[462px] flex gap-[18px] items-center">
                    <div className="w-[137.65px] h-[126.75px] object-cover"><img className="w-full h-full" src="/images/Logo.svg" alt="" /></div>
                    <p className="font-extrabold text-[rgba(2,2,2,1)] text-[40px] leading-[120%] tracking-[-1.1%]">Games Launcher</p>
                </div>
                <p className="mt-8 mb-16 text-[rgba(2,2,2,1)] font-medium text-[32px] leading-[150%] tracking-[-1.1%]">Todos os seus jogos<br/> em um só lugar.</p>
                <Button text="Download"/>
            </div>

            <img className="absolute right-[-351px] h-[471px]" src="/images/launcher.png" alt="" />

        </motion.div>
    )
}

export default GamesLauncher