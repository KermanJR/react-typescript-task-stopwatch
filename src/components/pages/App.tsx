import React from 'react';
import Form from '../Forms';
import List from '../Lists';
import { Stopwatch } from '../Stopwatch';
import style from './App.module.scss'
import { Itarefa } from '../../types/tarefas';



function App() {

  const [tarefas, setTarefas] = React.useState<Itarefa[] | []>([])
  const [selecionado, setSelecionado] = React.useState<Itarefa>();

  function selecionaTarefa(tarefaSelecionada: Itarefa){
    setSelecionado(tarefaSelecionada)
    setTarefas(tarefasAntigas => tarefasAntigas.map(tarefa=>({
      ...tarefa,
      selecionado: tarefa.id === tarefaSelecionada.id ? true : false
    })))
  }
  
  function finalizarTarefa(){
    if(selecionado){
      setSelecionado(undefined)
      setTarefas(tarefasAnteriotes => tarefasAnteriotes.map(tarefa=>{
        if(tarefa.id === selecionado.id){
          return {
            ...tarefa,
            selecionado: false,
            completado: true
          }
        }
        return tarefa;
      }))
    }
  }

  return (
    <div className={style.AppStyle}>
        <Form setTarefas={setTarefas}/>
        <List tarefas={tarefas}
              selecionaTarefa={selecionaTarefa}
        />
        <Stopwatch 
         selecionado={selecionado}
         finalizarTarefa={finalizarTarefa}/>
    </div>
  );
}

export default App;
