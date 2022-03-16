import React, { useState } from 'react';
import { ITarefa } from '../../types/tarefa';
import Botao from '../botao';
import style from './Formulario.module.scss';
import {v4 as uuidv4} from 'uuid';

interface Props {
    setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>
}

function Formulario({setTarefas}: Props) {
    const [tarefa, setTarefa] = useState("");
    const [tempo, setTempo] = useState("00:00");
    function adicionarTarefa(evento: React.FormEvent<HTMLFormElement>){ /*evendo de formulário vindo de uma tag html*/
        evento.preventDefault();
        setTarefas(tarefasAntigas => 
            [
                ...tarefasAntigas, /*dá um spread em tarefas antigas */
                {
                    tarefa, 
                    tempo, 
                    selecionado: false,
                    completado: false,
                    id: uuidv4() /*cria um id aleatório*/
                }
            ]
        );
        setTarefa("");
        setTempo("00:00");
    }
    return(
        <form className={style.novaTarefa} onSubmit={adicionarTarefa}>
            <div className={style.inputContainer}>
                <label htmlFor="tarefa"> 
                    Adicione um novo estudo
                </label>
                <input 
                    type="text" 
                    name="tarefa" 
                    id="tarefa" 
                    value={tarefa}
                    onChange={evento => setTarefa(evento.target.value)}
                    placeholder="O que você quer estudar?" 
                />
            </div>

            <div className={style.inputContainer}>
                <label htmlFor="tempo">
                    Tempo
                </label>
                <input 
                    type="time" 
                    step="1" 
                    name="tempo" 
                    value={tempo} 
                    onChange={evento => setTempo(evento.target.value)} 
                    id="tempo" 
                    min="00:00:00" 
                    max="01:20:00" 
                    required 
                />
            </div>
            <Botao type="submit">
                Adicionar
            </Botao>
        </form>
    )
}

export default Formulario;