import { useState,useEffect } from 'react'
import axios from "axios";
import DisplayGame from './DisplayGame';


function GenreForm(props){
    
const [allGames, setAllGames] = useState([]);
const [filteredGames, setFilteredGames] = useState([])

console.log(filteredGames)


/* getGame hook is making a copy of allGames, generating one random number and giving that as an index for filtered games to get one random game.*/ 


    const [userChoice, setUserChoice] = useState('mmo')

    const handleUserChoice = (e) =>{
        setUserChoice(e.target.value);
    }

    useEffect(() => {
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
                setAllGames(gameArray);
            })
        //   axios.request(options)
        //   .then( (res) => {
            // const gameArray = res.data;
            // setAllGames(gameArray);
            const copyOfAllGames = [...allGames];
            const randomGame = Math.floor(Math.random() * copyOfAllGames.length)
            const newFilteredGames = copyOfAllGames[randomGame]
            setFilteredGames(newFilteredGames)
    },[userChoice]);



    /**/ 

    // const getGame = () =>{
        
    //   }
    return(
        <>
        <form onSubmit={(e) => props.getGame(e, userChoice)}>
            <h2>Select a genre/category of game you're interested in:</h2>
            <select 
            name="gamesGenre" 
                id="gamesGenre"
                onChange={handleUserChoice}
            value={userChoice} >
                    <option value="placeholder" disabled>Pick one!</option>
                    <option value="mmorpg">mmorpg</option>
                    <option value="shooter">shooter</option>
                    <option value="moba">moba</option>

                </select>
            <button type="submit">Show me a game!</button>
        </form>
        <DisplayGame games = {filteredGames}/>
        </>
    )
}

export default GenreForm;


/*
<option value="strategy">strategy</option>
                <option value="racing">racing</option>
 <option value="sports">sports</option>
                <option value="social">social</option>
                <option value="sandbox">sandbox</option>
                <option value="open-world">open-world</option>
                <option value="survival">survival</option>
                <option value="pvp">pvp</option>
                <option value="pve">pve</option>
                <option value="pixel">pixel</option>
                <option value="voxel">voxel</option>
                <option value="zombie">zombie</option>
                <option value="turn-based">turn-based</option>
                <option value="first-person">first-person</option>
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
*/ 