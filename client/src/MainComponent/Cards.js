import React from 'react'
import Card from './Card'
import './Cards.css'

function Cards() {

    const arr=['abcd', 'efgh', 'ijkl', 'mnop', 'qrst']

  return (
    <div className="cards">
        {
            arr.map((i)=>{
                return <Card name={i} />
            })
        }
    </div>
  )
}

export default Cards