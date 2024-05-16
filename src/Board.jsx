import React from 'react'
import Square from './Square'

const Board = ({squares, squareClick}) => {
  return (
    <div className='flex flex-col items-center justify-center'>
        <div className='grid grid-cols-3 grid-rows-3'>
           {
            squares.map((square, index) =>(
                <Square key={index} value={square} 
                        onClick={()=>squareClick(index)}/>
            ))
           }
       </div>
    </div>
    
  )
}

export default Board