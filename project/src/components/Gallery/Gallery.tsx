import { useNavigate, useParams } from "react-router-dom";
import Button from "../Button/Button";

const Gallery = () => {
    const { number } = useParams();
    const navigate = useNavigate();

    const GoBack = () => {
        navigate("/")
    }

    const game = games[number as keyof typeof games];


    return (
        <div className="w-full h-full min-h-screen bg-[rgba(16,16,16,1)] flex justify-center items-start p-10">
            <div className="w-[1160px] flex gap-10 bg-[rgba(2,2,2,1)] rounded-2xl overflow-hidden p-10">
                <img src={game.image} alt={game.title} className="w-[400px] h-auto rounded-lg" />
                <div className="text-white">
                    <h1 className="text-[rgba(252,175,23,1)] text-3xl font-bold mb-4">{game.title}</h1>
                    <p className="mb-4">{game.description}</p>
                    <ul className="space-y-1 mb-10">
                        <li><strong className="text-[rgba(252,175,23,1)]">Genre:</strong> {game.genre}</li>
                        <li><strong className="text-[rgba(252,175,23,1)]">Developer:</strong> {game.developer}</li>
                        <li><strong className="text-[rgba(252,175,23,1)]">Release Year:</strong> {game.releaseYear}</li>
                        <li><strong className="text-[rgba(252,175,23,1)]">Platforms:</strong> {game.platforms}</li>
                        <li><strong className="text-[rgba(252,175,23,1)]">Mode:</strong> {game.mode}</li>
                    </ul>
                    <Button text="Go Back" clickFunction={GoBack}/>
                </div>
            </div>
        </div>
    );
};

export default Gallery;

export const games = {
    '1': {
        image: '/images/game1.png',
        title: 'Grand Theft Auto V',
        genre: 'Action, Open World, Adventure',
        developer: 'Rockstar Games',
        releaseYear: 2013,
        platforms: 'PC, PlayStation, Xbox',
        mode: 'Single-player / Online multiplayer',
        description: 'Grand Theft Auto V is an open-world action-adventure game following three criminals—Michael, Franklin, and Trevor—as they navigate heists, gang conflicts, and the criminal underworld of Los Santos. The game is famous for its massive map, freedom of gameplay, and cinematic storytelling.',
    },
    '2': {
        image: '/images/game2.png',
        title: 'Grand Theft Auto Online',
        genre: 'Action, Open World, Multiplayer',
        developer: 'Rockstar Games',
        releaseYear: 2013,
        platforms: 'PC, PlayStation, Xbox',
        mode: 'Online multiplayer',
        description: 'Grand Theft Auto Online is the multiplayer experience set in the world of GTA V. Players create a custom character and explore Los Santos with friends, taking on missions, heists, businesses, and competitive modes in an ever-expanding online world updated regularly by Rockstar Games.',
    },
    '3': {
        image: '/images/game3.png',
        title: 'Red Dead Redemption 2',
        genre: 'Action, Open World, Adventure',
        developer: 'Rockstar Games',
        releaseYear: 2018,
        platforms: 'PC, PlayStation, Xbox',
        mode: 'Single-player campaign',
        description: 'Red Dead Redemption 2 is a story-driven open-world Western game set in 1899. You play as Arthur Morgan, an outlaw in the Van der Linde gang, struggling with loyalty, survival, and change as America moves toward modern times. The game is known for its emotional narrative, realistic world, and incredible attention to detail.',
    },
    '4': {
        image: '/images/game4.png',
        title: 'Red Dead Online',
        genre: 'Action, Open World, Multiplayer',
        developer: 'Rockstar Games',
        releaseYear: 2019,
        platforms: 'PC, PlayStation, Xbox',
        mode: 'Online multiplayer',
        description: 'Red Dead Online is the multiplayer experience set in the world of Red Dead Redemption 2. Players create their own character and explore a living, evolving frontier — completing missions, hunting, trading, bounty hunting, and forming posses with friends across the open world.',
    },
};
