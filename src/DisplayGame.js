
function DisplayGame(props) {
    return(
        <section>

            {!props.games ? (
                <h2>Whoops, something went wrong. Try refreshing.</h2>
            ) :(
                <>
                <h2>Check out this game!</h2>
                <div className="gameCard">
                    {/* ternarary here */}
                    {/* {props.games( (game) => { */}
                        
                            <div className="gameContainer" key={props.games.id}>
                                <h2>{props.games.title}</h2>
                                <img src={props.games.thumbnail} alt={props.games.title} />
                                <p>{props.games.short_description}</p>
                            </div>
                        
                    {/* })} */}
                </div>
                </>
            )}

        </section>
    )
}

export default DisplayGame;