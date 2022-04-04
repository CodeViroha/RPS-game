import React from 'react'

//When users selects an option, to view the selected
const ViewCard = ({ player1, player2, play }) => {
    return (
        <>
            {player1 === null ? null :
                <div className="card blur-card float-left" style={{ width: "18rem", marginTop: '28vh' }}>
                    <img className="card-img-top" src={`../../images/${player1}.png`} alt="choice" />
                    <div className="card-body">
                        <h5 className="card-title">Player 1 selected {player1}</h5>
                    </div>
                </div>}
            <button className="btn btn-success" onClick={play} style={{ marginTop: '35vh' }}>Play</button>
            {player2 === null ? null :
                <div className="card blur-card float-right" style={{ width: "18rem", marginTop: "28vh" }}>
                    <img className="card-img-top" src={`../../images/${player2}.png`} alt="choice" />
                    <div className="card-body">
                        <h5 className="card-title">Player 2 selected {player2}</h5>
                    </div>
                </div>}
        </>
    )
}

export default ViewCard