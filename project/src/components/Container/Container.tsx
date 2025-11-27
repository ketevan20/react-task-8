import FeaturedGames from "../FeaturedGames/FeaturedGames"
import Footer from "../Footer/Footer"
import GamesLauncher from "../GamesLauncher/GamesLauncher"
import { Header } from "../Header/Header"
import NewsFeed from "../NewsFeed/NewsFeed"

const Container = () => {
  return (
    <div className="w-screen bg-[rgba(16,16,16,1)]">
        <Header />
        <img src="/images/banner.png"/>
        <div className="flex flex-col items-center">
            <FeaturedGames />
            <NewsFeed />
            <GamesLauncher />
        </div>
        <Footer />
    </div>
  )
}

export default Container