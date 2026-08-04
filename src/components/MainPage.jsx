import { useState } from 'react'
import {Eraser} from 'lucide-react';

function MainPage() {

  const [task, setTask] = useState('')

  function capturarCaracter(){
    const taskCapturada = task.target.value
    SetTask(taskCapturada)
    console.log(taskCapturada)
  }

  function LimparCampo(){
    return Set

  }

  return (
    <>
      <section className='w-full h-screen flex flex-col items-center justify-center bg-sky-600'>
        <div className='relative px-8'>
          <input type='text' placeholder='Procure pela task' className='pr-10 w-64 bg-slate-400 p-2' value={task} onChange={(e) => setTask(e.target.value)}/>
          <Eraser 
          className='absolute top-1/2 translate-x-1/2 -translate-y-1/2 right-14 text-blue-600 cursor-pointer'
          size={18}

          />
        </div>
        <div className='border w-full h-1/2 flex items-center justify-evenly'>
          <div className=" isolate aspect-video w-92 h-44 bg-white/20 shadow-lg rounded-xl">
            <div className='w-10 h-10 bg-slate-200 rounded-full shadow-xl cursor-pointer hover transform'>
            <span>+</span>
            </div>
          </div>
          
        </div>
      </section>
    </>
  )
}

export default MainPage
