import React from "react";
import Button from "../Button";
import styles from './Form.module.scss'
import { Itarefa } from "../../types/tarefas";
import {v4 as uuidv4} from 'uuid'



interface Props {
    setTarefas: React.Dispatch<React.SetStateAction<Itarefa[]>>
}

function Form({setTarefas}: Props){
    const [tarefa, setTarefa] = React.useState("")
    const [tempo, setTempo] = React.useState("00:00")

    //Add new task function
    function taskSubmit(event: React.FormEvent<HTMLFormElement>){
        event.preventDefault()
        setTarefas(tarefasAntigas =>
            [...tarefasAntigas, 
                {
                    tarefa,
                    tempo,
                    selecionado: false,
                    completado: false,
                    id: uuidv4()
                }
            ]
        )
        
        setTarefa("");
        setTempo("00:00");
    }

    return(
        <form className={styles.novaTarefa} 
                    onSubmit={taskSubmit}
                >
                    <div className={styles.inputContainer}>
                        <label htmlFor="tarefa">Adicione um novo estudo:</label>
                        <input 
                            type="text"
                            name="tarefa"
                            id="tarefa"
                            placeholder="O que você quer estudar?"
                            required
                            value={tarefa}
                            onChange={(e)=> setTarefa(
                                e.target.value
                            )}

                        />

                    </div>
                    <div className={styles.inputContainer}>
                    <label htmlFor="tempo">Tempo:</label>
                    <input 
                            type="time"
                            step="1"
                            id="tempo"
                            name="tempo"
                            value={tempo}
                            onChange={(e)=> setTempo(
                                e.target.value
                            )}
                            min="00:00:00"
                            required
                        />
                    </div>
                    <Button
                        type="submit">
                        Adicionar
                    </Button>
                </form>
    )
}



export default Form;
