import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import FindWinner from '../FindWinner'
import ViewCard from './ViewCard'

const ViewUser = () => {

    const [data, setData] = useState({
        player1: null,
        player2: null,
        winner: ''
    })
    let computer = useLocation().pathname === '/computer'

    //Triggering Play to see winner
    const play = () => {
        if (computer) {
            setData(prevState => ({
                ...prevState,
                player1: ['Rock', 'Paper', 'Scissor'][Math.floor(Math.random() * 3)]
            }))
        }
        else {
            if (data.player1 === null || data.player2 === null) {
                alert('Player input remaining')
            }
        }

        setData(prevState => ({
            ...prevState
            , winner: FindWinner(data.player1, data.player2)
        }));

    }

    const handleChange = (player, choice) => {
        setData(prevState => ({
            ...prevState,
            [player]: choice
        }))
    }

    return (
        <div className="container text-center">
            {data.winner === '' ? <>
                {computer ? null :
                    <div className="blur-card fixed-top" style={{ marginTop: '18vh' }}>
                        <img onClick={() => handleChange("player1", "Rock")}
                            src={'../../images/Rock.png'} alt="Rock" />
                        <img onClick={() => handleChange("player1", "Scissor")}
                            src={'../../images/Scissor.png'} alt="Scissor" />
                        <img onClick={() => handleChange("player1", "Paper")}
                            src={'../../images/Paper.png'} alt="Paper" />
                    </div>
                }
                <div>
                    <ViewCard player1={data.player1} player2={data.player2} play={play} />
                    <div className="blur-card fixed-bottom">
                        <img onClick={() => handleChange("player2", "Rock")}
                            src={'../../images/Rock.png'} alt="Rock" />
                        <img onClick={() => handleChange("player2", "Scissor")}
                            src={'../../images/Scissor.png'} alt="Scissor" />
                        <img onClick={() => handleChange("player2", "Paper")}
                            src={'../../images/Paper.png'} alt="Paper" />
                    </div>
                </div>
            </> :
                <>
                    <h3 className="blur-card" style={{ marginTop: '35vh' }}>{data.winner}</h3>
                    <button className="btn btn-primary"
                        onClick={() => { setData(prevState => ({ ...prevState, winner: '' })) }}>
                        Replay</button>
                </>
            }

        </div>

    )
}

export default ViewUser