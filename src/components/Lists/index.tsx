import React from 'react';
import styles from './List.module.scss'
import Item from "./Item";
import { Itarefa } from '../../types/tarefas';


interface Props{
    tarefas: Itarefa[],
    selecionaTarefa: (tarefaSelecionado: Itarefa)=> void;
}
  

function List({tarefas, selecionaTarefa}: Props){
    return(
        <aside className={styles.listaTarefas}>
            <h2>Estudos do dia</h2>
            <ul>
                {tarefas.map((item)=>(
                    <Item 
                        selecionaTarefa={selecionaTarefa}
                        key={item.id}
                        {...item}
                    />
                ))}
            </ul>
        </aside>
    )
}

export default List;