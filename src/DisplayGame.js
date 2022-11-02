
function DisplayGame(props) {
return(
    <>
    <section>
        {!props.games ? 
            <>
                <section className="contentSection flexContainer">
                    <div className="gameCard Before cardFont flexContainer">
                        <h3 className="cardTitleBefore">Press "Get a game!" to display something. </h3>
                    </div>
                </section>
            </>
            :
            <>
            <section className="contentSection flexContainer">
                

                    <div className="gameCard cardFont " key={props.games.id}>
                        <div className="cardContent">
                            <h3 className='cardTitle'>{props.games.title}</h3>
                            <img className="cardImage" src={props.games.thumbnail} alt={props.games.title} />
                            <div className="cardBody">
                            <p>{props.games.short_description}</p>
                            <a className="linkButton" href={props.games.game_url}>Click to learn more</a>
                            </div>
                        </div>
                    </div>
            </section>
            </>
        }
    </section>
    
    </>
)
}

export default DisplayGame;