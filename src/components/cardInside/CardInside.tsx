import './cardInside.css'

function CardInside (): JSX.Element {
    return (
        <>
            <div className="cardInside">
                <div className="inside-text">
                    <p className="verse">
                        “<em>E, acima de tudo, tenham amor, pois o amor une perfeitamente todas as coisas.</em>” - Cl. 3:14
                    </p>
                    <h1>Karina e Rodrigo</h1>
                    <p className="textInvite">
                        Convidam para a celebração de seu casamento a ser realizada em
                    </p>
                </div>
                <div className='dataHorario'>
                    <div id='dateweek'>
                        <p>SEXTA</p>
                    </div>
                    <div className="separador" id="s1"></div>
                    <div className="dateInvite">
                    <div className="dateMes">SET</div>
                    <div className="dateDia">13</div>
                    <div className="dateAno">2024</div>
                    </div>
                    <div className="separador" id="s2"></div>
                    <div id="dateHour">
                        <p>19H00 </p>
                    </div>
                </div>
                <div className='place'>
                    <p className='rest'>Local: Restaurante Di Liana</p>
                </div>
            </div>
        </>
    )
}

export default CardInside