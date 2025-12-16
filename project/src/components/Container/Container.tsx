import FeaturedGames from "../FeaturedGames/FeaturedGames"
import GamesLauncher from "../GamesLauncher/GamesLauncher"
import NewsFeed from "../NewsFeed/NewsFeed"
import { motion } from 'motion/react'


const Container = () => {
  return (
    <div className="w-screen bg-[rgba(16,16,16,1)]">
        <motion.img initial={{ scale: 0.8, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} transition={{ duration: 2 }} src="/images/banner.png"/>
        <div className="flex flex-col items-center">
            <FeaturedGames />
            <NewsFeed />
            <GamesLauncher />
        </div>
    </div>
  )
}

export default Container