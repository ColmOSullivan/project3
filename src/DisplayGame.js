
function DisplayGame(props) {
    return(
        <section>

            {!props.game ? (
                <h2>Whoops, something went wrong. Try refreshing.</h2>
            ) :(
                <>
                <h2>Check out this game!</h2>
                <div className="gameCard">
                    {props.map( (game) => {
                        return(
                            
                            <div className="gameContainer" key={game.id}>
                                <h2>{game.title}</h2>
                                <img src={game.thumbnail} alt={game.title} />
                                <p>{game.short_description}</p>
                            </div>
                        )
                    })}
                </div>
                </>
            )}

        </section>
    )
}

export default DisplayGame;