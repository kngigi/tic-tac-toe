import React from 'react'

const Square = ({value, onClick}) => {
  return (
    <div onClick={onClick} className='border border-black h-32
    w-32 flex items-center justify-center text-3xl cursor-pointer'>
        {value}
    </div>
  )
}

export default Square