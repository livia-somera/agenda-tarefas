import React from 'react';
import style from './Relogio.module.scss';

interface Props{
    tempo: number | undefined
}

export default function Relogio({tempo = 0}: Props){
    const minutos = Math.floor(tempo/60);
    const segundos = tempo % 60;
    const [minutoDezena, minutoUnidade] = String(minutos).padStart(2, '0'); /*permite setar uma configuração padrão para exibir os números*/
    const [segundoDezena, segundoUnidade] = String(segundos).padStart(2, '0');
    return(
        <> {/*para fingir que tem um elemento pai*/}
            <span className={style.relogioNumero}>{minutoDezena}</span>
            <span className={style.relogioNumero}>{minutoUnidade}</span>
            <span className={style.relogioDivisao}>:</span>
            <span className={style.relogioNumero}>{segundoDezena}</span>
            <span className={style.relogioNumero}>{segundoUnidade}</span>
        </>
    )
}
