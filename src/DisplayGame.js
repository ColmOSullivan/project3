import Footer from './Footer'
function DisplayGame(props) {
return(
    <>
    <section>
        {!props.games ? 
            <>
                <section className="contentSection flexContainer">
                    <h2>Make a selection to display a suggested game.</h2>
                    <div className="gameCardBefore cardFont flexContainer">
                        <h3 className="cardTitleBefore">Press "Get a game!" to display something. </h3>
                    </div>
                </section>
            </>
            :
            <>
            <section className="contentSection flexContainer">
                <h2>Check out this game!</h2>

                    <div className="gameCard cardFont " key={props.games.id}>
                        <div className="cardContent">
                            <h3 className='cardTitle'>{props.games.title}</h3>
                            <img className="cardImage" src={props.games.thumbnail} alt={props.games.title} />
                            <div className="cardBody">
                            <p>{props.games.short_description}</p>
                            <a className="linkButton" href={props.games.game_url}>Link to game</a>
                            </div>
                        </div>
                    </div>
            </section>
            </>
        }
    </section>
    <Footer />
    </>
)
}

export default DisplayGame;