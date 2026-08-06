import { useState } from 'react'
import {Eraser, X} from 'lucide-react';

function MainPage() {

  const [tarefa, setTarefa] = useState('');

  const [mostrarToggle, setMostrarToggle] = useState(false)

  return (
    <>
      <section className='w-full h-screen flex flex-col items-center justify-center bg-sky-600'>
        <div className='relative px-8'>
          <input type='text' placeholder='Procure pela tarefa' className='pr-10 w-64 bg-slate-100 p-2'/>
          <Eraser 
          className='absolute top-1/2 translate-x-1/2 -translate-y-1/2 right-14 text-blue-600 cursor-pointer'
          size={18}
          />
        </div>
        <button  onClick={() => setMostrarToggle(!mostrarToggle)} className='w-64 p-2 mt-6 bg-sky-400 font-semibold cursor-pointer transition duration-200 hover:shadow-xl'>
            Nova Tarefa
        </button>

        {mostrarToggle && 
        <div 
        className='w-96 px-2 h-96 border border-gray-400 bg-slate-100 rounded-xl flex flex-col gap-2 items-center justify-center absolute inset-y' >
            <span className='w-full ' onClick={() => setMostrarToggle(!mostrarToggle)}>
              <X
              className='text-red-400 cursor-pointer transition duration-250 hover:text-red-500'
              />
            </span>
            <label className='font-semibold w-full border'>
              Título
            </label>
            <input type='text'
            required
            className='w-full p-2 border border-gray-400 bg-gray-200 rounded-xl transition duration-150 focus:outline-none focus:ring-2 focus:ring-blue-600' />

            <label className='font-semibold w-full border mt-4'>
              Descrição
            </label>
            <textarea className='h-fit p-2 border border-gray-400 bg-gray-200 rounded-xl w-full transition duration-150 focus:outline-none focus:ring-2 focus:ring-blue-600'></textarea>

            <button className='w-64 p-2 mt-6 bg-sky-400 font-semibold cursor-pointer rounded-xl transition duration-200 hover:shadow-xl' type='submit'>
                Adicionar
            </button>
        </div>
        }
        {/* <div className='border w-full h-1/2 flex items-center justify-evenly'>

          <div className="border isolate aspect-video w-92 h-44 bg-white/20 shadow-lg rounded-xl">
          </div>
          <div className="border isolate aspect-video w-92 h-44 bg-white/20 shadow-lg rounded-xl">
          </div>
          <div className="border isolate aspect-video w-92 h-44 bg-white/20 shadow-lg rounded-xl">
          </div>
          
        </div> */}
      </section>
    </>
  )
}

export default MainPage
