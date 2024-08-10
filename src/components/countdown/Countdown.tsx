interface prop {
    showComponent: boolean
}

function Countdown ({showComponent}: prop): JSX.Element {
    return (
        <> 
            {showComponent && (<h1>Teste</h1>)}
        </>
    )
}

export default Countdown