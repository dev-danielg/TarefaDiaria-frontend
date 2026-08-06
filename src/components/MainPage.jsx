import { useState } from 'react'
import {Eraser, Plus} from 'lucide-react';

function MainPage() {

  const [task, setTask] = useState('')

  function capturarCaracter(){
    const taskCapturada = task.target.value
    SetTask(taskCapturada)
    console.log(taskCapturada)
  }

  function LimparCampo(){
    return setTask('')
  }

  return (
    <>
      <section className='w-full h-screen flex flex-col items-center justify-center bg-sky-600'>
          <button className='border bg-cyan-300 h-10 pl-4 pr-10 flex items-center justify-evenly'>
              Nova Tarefa
              <Plus
              className='ml-4'
              size={16}
              />
          </button>
          <div className='relative px-8'>
            <input type='text' placeholder='Procure pela task' className='pr-10 w-90 bg-slate-200 p-2' value={task} onChange={(e) => setTask(e.target.value)}/>
            <Eraser 
            className='absolute top-1/2 translate-x-1/2 -translate-y-1/2 right-14 text-gray-400 cursor-pointer transition duration-150 hover:text-sky-600'
            size={18}
            onClick={LimparCampo}
            />
        </div>
        <div className='border w-full h-1/2 flex items-center justify-evenly'>

          <div className="isolate aspect-video w-92 h-64 bg-white/20 shadow-lg rounded-xl">
          </div>
          
        </div>
      </section>
    </>
  )
}

export default MainPage
