import { ITarefa } from '../../../types/tarefa';
import style from './Item.module.scss';

interface Props extends ITarefa {
    selecionaTarefa: (tarefaSelecionada: ITarefa) => void
}

export default function Item( /*desestruturação de props*/
    {
        tarefa, 
        tempo, 
        selecionado, 
        completado, 
        id, 
        selecionaTarefa
    }: Props){ 
    return(
        <li className={`${style.item} ${selecionado ? style.itemSelecionado : ''} ${completado ? style.itemCompletado: ''}`} 
            onClick={() => !completado && selecionaTarefa(
                {
                    tarefa,
                    tempo,
                    selecionado,
                    completado,
                    id
                }
            )}
        >
            <h3> {tarefa} </h3>
            <span> {tempo} </span>
            {completado && <span className={style.concluido} aria-label="tarefa completada"></span>}
        </li>
    )
}

/*o item só tem a responsabilidade de renderizar os elementos que recebe*/