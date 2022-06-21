import React, { ReactNode } from 'react'
import styles from './Button.module.scss'

interface Props{
    type?: "button" | "submit" | "reset" | undefined
    onClick?: () => void,
    children?: React.ReactNode
}

function Button({onClick, type, children}: Props){
    return(
        <button 
            onClick={onClick}
            type={type} 
            className={styles.botao}>
            {children}
        </button>  
    )
}

export default Button;