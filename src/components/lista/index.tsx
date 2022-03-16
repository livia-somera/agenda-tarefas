import { ITarefa } from '../../types/tarefa';
import Item from './item';
import style from './Lista.module.scss';

interface Props{
    tarefas: ITarefa[],
    selecionaTarefa: (tarefaSelecionada: ITarefa) => void
}

function Lista({tarefas, selecionaTarefa}: Props){
     
    return(
        <aside className={style.listaTarefas}> {/*a lista só tem a responsabilidade de enviar o conteúdo para o item*/}
            <h2>Estudos do dia</h2>
            <ul>
                {tarefas.map((item) => (
                    <Item 
                        selecionaTarefa={selecionaTarefa}
                        key = {item.id}
                        {...item} /*todos os atributos do objeto são usados como prop dentro do componente*/
                    />
                ))}
                
            </ul>
        </aside>
    )
}

export default Lista;