import React, { useEffect, useState } from 'react'
import Board from './Board'



const TicTacToe = () => {

    const [squares, setSquares] = useState(Array(9).fill(null));
    const [player, setPlayer] = useState("X");
    const [winner, setWinner] = useState("");

    const handleSqaureClick = (index) => {
    
        if (squares[index] !== null){
            return;
        };
            const newSquares = [...squares];
            newSquares[index] = player;
            setSquares(newSquares);
            setPlayer(player === "X" ? "O" : "X");
        };
    
    const handleReset = () => {
        setWinner("");
        setSquares(Array(9).fill(null));
        setPlayer("X");
    }
        
     const checkWinner = () => {
            const winningCombos = [
                { combo: [0, 1, 2], }, // top row
                { combo: [3, 4, 5], }, // middle row
                { combo: [6, 7, 8], }, // bottom row
                { combo: [0, 4, 8], }, // top left to bottom right
                { combo: [2, 4, 6], }, // top right to bottom left
                { combo: [0, 3, 6], }, // left column
                { combo: [1, 4, 7], }, // middle column
                { combo: [2, 5, 8], } // right column
            ];
            for(const {combo} of winningCombos){
                const [a, b, c] = combo;
                if(squares[a] && squares[a] === squares[b] && squares[b] === squares[c]){
                    setWinner(squares[a]);
                    return;
                }
            }
            const isDraw = squares.every((square) => square !== null)
            if(isDraw){
                setWinner("Draw");
            }
        };


     useEffect(()=>{
            checkWinner();
        },[squares]);

  return (
    <div className='flex flex-col items-center justify-center gap-8'>
        <h1 className='text-4xl text-bold underline text-orange-400'>TicTactToe Game</h1>

         <div className='flex items-center justify-center mt-[40px]'>
        <Board squares={squares} 
               squareClick = {handleSqaureClick}/> 
        </div>

        {winner && (
            <div className='absolute top-10 left-0 w-full'>
                <div className='p-4 text-center font-bold'>
                    {winner === "Draw" ? <p className='text-3xl'>It's a Draw</p> :
                    <p className='text-3xl'>Player {winner} wins!</p>}
                </div>
            </div>
        )}

        <button className='rounded bg-black text-center text-white
        p-4 text-2xl w-32' 
        onClick={handleReset}>Reset</button>

    </div>
  
    
   
    
  );
}

export default TicTacToe