import { useState,useEffect } from 'react'
import axios from "axios";
import DisplayGame from './DisplayGame';


function GenreForm(){
    
const [allGames, setAllGames] = useState([]);
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
            setAllGames(res.data);
            const randomGame = Math.floor(Math.random() * res.data.length)
            const newFilteredGames = res.data[randomGame]
            setFilteredGames(newFilteredGames)
        })
}
    return(
        <>
            <h2>Select a genre/category of game you're interested in:</h2>
            <div className="optionsContainer">
            <select 
                name="gamesGenre" 
                id="gamesGenre"
                onChange={(e) =>handleUserChoice(e)}
                value={userChoice} >
                    <option value="placeholder" disabled>Pick one!</option>
                    <option value="mmorpg">MMORPG</option>
                    <option value="shooter">Shooter</option>
                    <option value="moba">MOBA</option>
                    <option value="strategy">Strategy</option>
                    <option value="racing">Racing</option>
                    <option value="sports">Sports</option>
                    <option value="social">Social</option>
                    <option value="sandbox">Sandbox</option>
                    <option value="open-world">Open-World</option>
                    <option value="survival">Survival</option>
                    <option value="pvp">PVP</option>
                    <option value="pve">PVE</option>
                    <option value="pixel">Pixel</option>
                    <option value="voxel">Voxel</option>
                    <option value="zombie">Zombie</option>
                    <option value="turn-based">Turn-Based</option>
                    <option value="first-person">First Person</option>
                    <option value="third-Person">third-Person</option>
                    <option value="top-down">top-down</option>
                    <option value="tank">tank</option>
                    <option value="space">space</option>
                    <option value="sailing">sailing</option>
                    <option value="side-scroller">side-scroller</option>
                    <option value="superhero">superhero</option>
                    <option value="permadeath">permadeath</option>
                    <option value="card">card</option>
                    <option value="battle-royale">battle-royale</option>
                    <option value="mmo">mmo</option>
                    <option value="mmofps">mmofps</option>
                    <option value="mmotps">mmotps</option>
                    <option value="3d">3d</option>
                    <option value="2d">2d</option>
                    <option value="anime">anime</option>
                    <option value="fantasy">fantasy</option>
                    <option value="sci-fi">sci-fi</option>
                    <option value="fighting">fighting</option>
                    <option value="action-rpg">action-rpg</option>
                    <option value="action">action</option>
                    <option value="military">military</option>
                    <option value="martial-arts">martial-arts</option>
                    <option value="flight">flight</option>
                    <option value="low-spec">low-spec</option>
                    <option value="tower-defense"> tower-defense</option>
                    <option value="horror">horror</option>
                    <option value="mmorts">mmorts</option>
                </select>
                <button onClick={getGame}>{filteredGames ?"Re-roll" : "Get a game!"}</button>
            </div>
        <DisplayGame games = {filteredGames}/>
        </>
    )
}

export default GenreForm;