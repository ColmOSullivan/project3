import { useState } from 'react'
import axios from "axios";
import DisplayGame from './DisplayGame';


function GenreForm(){
    

const [filteredGames, setFilteredGames] = useState(null)
const [userChoice, setUserChoice] = useState('mmorpg')

const handleUserChoice = (e) =>{
    setUserChoice(e.target.value);
}

const getGame = () => {
    const options = {
        method: 'GET',
        url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
        params: {
                category: userChoice
                },
        headers: {
            'X-RapidAPI-Key': '038c7bb3bamshd5a55fd28d83252p1a3bfdjsncb0a0c2ef1d6',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
        };
        axios.request(options)
        .then( (res) => {
            const gameArray = res.data;
            const randomGame = Math.floor(Math.random() * gameArray.length)
            const newFilteredGames = res.data[randomGame]
            setFilteredGames(newFilteredGames)
        }).catch(function (error) {
            console.error(error);
        });
}
    return(
        <>
        <div className="heroText">
        <h1>Random Free-to-play game</h1>
        </div>
            <div className="subText">
            <h2>Select a category of game you're interested in</h2>
            </div>
            <div className="selctionContainer">
            <select
                className='categorySelect' 
                name="gamesGenre" 
                id="gamesGenre"
                onChange={(e) =>handleUserChoice(e)}
                value={userChoice} >
                    <option value="placeholder" disabled>Pick one!</option>
                    <option value="2d">2D</option>
                    <option value="3d">3D</option>
                    <option value="action">Action</option>
                    <option value="action-rpg">Action-rpg</option>
                    <option value="anime">Anime</option>
                    <option value="battle-royale">Battle-royale</option>
                    <option value="card">Card</option>
                    <option value="fantasy">Fantasy</option>
                    <option value="fighting">Fighting</option>
                    <option value="first-person">First Person</option>
                    <option value="flight">Flight</option>
                    <option value="horror">horror</option>
                    <option value="low-spec">low-spec</option>
                    <option value="martial-arts">Martial-arts</option>
                    <option value="military">Military</option>
                    <option value="mmorts">MMORTS</option>
                    <option value="mmo">MMO</option>
                    <option value="moba">MOBA</option>
                    <option value="mmofps">MMOFPS</option>
                    <option value="mmorpg">MMORPG</option>
                    <option value="mmotps">MMOTPS</option>
                    <option value="open-world">Open-World</option>
                    <option value="permadeath">Permadeath</option>
                    <option value="pixel">Pixel</option>
                    <option value="pvp">PVP</option>
                    <option value="pve">PVE</option>
                    <option value="racing">Racing</option>
                    <option value="sandbox">Sandbox</option>
                    <option value="shooter">Shooter</option>
                    <option value="social">Social</option>
                    <option value="sports">Sports</option>
                    <option value="strategy">Strategy</option>
                    <option value="survival">Survival</option>
                    <option value="space">Space</option>
                    <option value="sailing">Sailing</option>
                    <option value="side-scroller">Side-scroller</option>
                    <option value="superhero">Superhero</option>
                    <option value="sci-fi">Sci-fi</option>
                    <option value="top-down">Top-down</option>
                    <option value="tank">Tank</option>
                    <option value="turn-based">Turn-Based</option>
                    <option value="third-Person">Third-Person</option>
                    <option value="tower-defense"> Tower-defense</option>
                    <option value="voxel">Voxel</option>
                    <option value="zombie">Zombie</option>
                </select>
                <button className='rollButton' onClick={getGame}>{filteredGames ?"Re-roll" : "Get a game!"}</button>
            </div>
        <DisplayGame games = {filteredGames}/>
        </>
    )
}

export default GenreForm;