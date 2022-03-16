import React from 'react';
import style from './Botao.module.scss';

interface Props {
    type?: "button" | "submit" | "reset" | undefined, 
    onClick?: () => void, /*pode ou não receber um tipo*/
    children?: React.ReactNode
}

function Botao({onClick, type, children}: Props) {
    return(
        <button 
            onClick={onClick} 
            type={type} 
            className={style.botao}
        >
            {children} {/*children irá pegar o texto que estiver dentro da tag - tal como em html*/}
        </button>
    )
}

export default Botao;