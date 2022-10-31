
function DisplayGame(props) {
    return(
        <section>

            {!props.games ? 
                <h2>Make a selection to display a suggested game.</h2>
             :
                <>
                <h2>Check out this game!</h2>
                <div className="gameCard">
                    
                        
                            <div className="gameContainer" key={props.games.id}>
                                <h2>{props.games.title}</h2>
                                <img src={props.games.thumbnail} alt={props.games.title} />
                                <p>{props.games.short_description}</p>
                                <a className="linkButton" href={props.games.game_url}>Check out the game here</a>
                            </div>
                        
                    
                </div>
                </>
            }

        </section>
    )
}

export default DisplayGame;