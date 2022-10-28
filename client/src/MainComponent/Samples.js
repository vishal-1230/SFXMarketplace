import React, {useState, useEffect} from 'react'
import Card from './Card'
import styles from './Samples.module.css'

function Cards() {

    const arr=['abcd', 'efgh', 'ijkl', 'mnop', 'qrst', 'uvwx', 'yz', 'abcd', 'efgh', 'ijkl', 'mnop', 'qrst', 'uvwx', 'yz', 'abcd', 'efgh', 'ijkl', 'mnop', 'qrst', 'uvwx', 'yz']
    // const arr=['abcd', 'efgh', 'ijkl', 'mnop', 'qrst', 'uvwx']
    // const arr=['abcd', 'efgh', 'ijkl', 'mnop', 'qrst']
    const [samples, setsamples] = useState([])
    async function getSamples(){
      const response = await fetch(`http://localhost:8080/audios/getSamples`)
      const data = await response.json()
      setsamples(data)
    }
    useEffect(getSamples)

  return (
    <div className={styles.cards}>
        {
            samples.map((i)=>{
                return <Card name={i.name} />
            })
        }
    </div>
  )
}

export default Cards