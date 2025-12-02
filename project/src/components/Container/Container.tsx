import FeaturedGames from "../FeaturedGames/FeaturedGames"
import GamesLauncher from "../GamesLauncher/GamesLauncher"
import NewsFeed from "../NewsFeed/NewsFeed"

const Container = () => {
  return (
    <div className="w-screen bg-[rgba(16,16,16,1)]">
        <img src="/images/banner.png"/>
        <div className="flex flex-col items-center">
            <FeaturedGames />
            <NewsFeed />
            <GamesLauncher />
        </div>
    </div>
  )
}

export default Container