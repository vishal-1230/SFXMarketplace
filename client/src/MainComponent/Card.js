import React from 'react'
import styles from './Card.module.css'

function Card(props) {
  return (
    <div className={styles.card}>{props.name} + jk</div>
  )
}

export default Card