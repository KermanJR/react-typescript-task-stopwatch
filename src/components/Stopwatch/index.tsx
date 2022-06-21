
import Button from '../Button'
import React from 'react'
import Watch from './Watch'
import styles from './Stopwatch.module.scss'
import { tempoParaSegundos } from '../../common/utils/time'
import { Itarefa } from '../../types/tarefas'

interface Props {
  selecionado: Itarefa | undefined,
  finalizarTarefa: () =>void
}

export const Stopwatch = ({selecionado, finalizarTarefa}: Props) => {

  const [tempo, setTempo] = React.useState<number>()

  //Usando recursividade
  function regressiva(contador: number = 0){
    setTimeout(()=>{
      if(contador > 0){
        setTempo(contador - 1)
        return regressiva(contador - 1)
      }
      finalizarTarefa()
    }, 1000)
  }

  React.useEffect(()=>{
    if(selecionado?.tempo){
      setTempo(tempoParaSegundos(selecionado?.tempo))
    }
  }, [selecionado])
  
  return (
    <div className={styles.cronometro}>
        <p className={styles.titulo}>Escolha um card e inicie o crônometro: </p>
        <div className={styles.relogioWrapper}>
            <Watch tempo={tempo}/>
        </div>
        <Button onClick={()=> regressiva(tempo)}>Começar</Button>
    </div>
  )
}
