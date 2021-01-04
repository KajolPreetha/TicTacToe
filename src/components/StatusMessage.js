import React from 'react'

const StatusMessage = ({ winner, current }) => {

    const noMovesLeft = current.board.every((e) => e !== null);

    return (
        <div>
            <h2>
                {winner && `Winner is ${winner}`}
                {!winner && !noMovesLeft && `Next player is ${current.isXNext ? "X" : "O"}`}
                {!winner && noMovesLeft && "X and O tied"}
            </h2>
        </div>
    )
}

export default StatusMessage
