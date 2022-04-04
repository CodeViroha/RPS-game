//Logic to find out winner
const FindWinner = (player1, player2) => {
    if (player1 === player2) {
        return "It's a draw!"
    }
    else if (
        (player1 === 'Rock' && player2 === 'Scissor')||
        (player1 === 'Scissor' && player2 === 'Paper')||
        (player1 === 'Paper' && player2 === 'Rock')
    ) {return "Player 1 wins" }
    else { return "Player 2 wins" }
}

export default FindWinner