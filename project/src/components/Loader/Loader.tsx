import { motion } from 'motion/react'

const Loader = () => {
    return (
        <div className="w-full h-screen flex items-center justify-center bg-[#0B0B0B]">
            <motion.div
                className="w-16 h-16 border-4 border-[#FCAF17] border-t-transparent rounded-full"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
            />
        </div>
    )
}

export default Loader