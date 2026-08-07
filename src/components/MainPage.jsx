import { useState } from 'react'
import {Eraser, X} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react'

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

        <AnimatePresence>
            {mostrarToggle && 
            // <div 
            // className='w-96 px-2 h-96 border border-gray-400 bg-slate-100 rounded-xl flex flex-col gap-2 items-center justify-center absolute inset-y' >
            //     <span className='w-full ' onClick={() => setMostrarToggle(!mostrarToggle)}>
            //       <X
            //       className='text-red-400 cursor-pointer transition duration-250 hover:text-red-500'
            //       />
            //     </span>
            //     <label className='font-semibold w-full border'>
            //       Título
            //     </label>
            //     <input type='text'
            //     required
            //     className='w-full p-2 border border-gray-400 bg-gray-200 rounded-xl transition duration-150 focus:outline-none focus:ring-2 focus:ring-blue-600' />

            // <label className='font-semibold w-full border mt-4'>
            //   Descrição
            // </label>
            // <textarea className='h-fit p-2 border border-gray-400 bg-gray-200 rounded-xl w-full transition duration-150 focus:outline-none focus:ring-2 focus:ring-blue-600'></textarea>

            // <button className='w-64 p-2 mt-6 bg-sky-400 font-semibold cursor-pointer rounded-xl transition duration-200 hover:shadow-xl' type='submit'>
            //     Adicionar
            // </button>
            // </div>
              <motion.div
              className='fixed inset-0 bg-black/40 flex items-center justify-center z-50'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMostrarToggle(false)}
            >
                <motion.div
                className='w-96 px-2 h-96 border border-gray-400 bg-slate-100 rounded-xl flex flex-col gap-2 items-center justify-center'
                initial={{ opacity: 0, scale: 0.9, y: 12 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 12 }}
                transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                onClick={(e) => e.stopPropagation()}
              >
                <span className='w-full' onClick={() => setMostrarToggle(false)}>
                  <X className='text-red-400 cursor-pointer transition duration-250 hover:text-red-500' />
                </span>

                <label className='font-semibold w-full border'>Título</label>
                <input
                  type='text'
                  required
                  className='w-full p-2 border border-gray-400 bg-gray-200 rounded-xl transition duration-150 focus:outline-none focus:ring-2 focus:ring-blue-600'
                />

                <label className='font-semibold w-full border mt-4'>Descrição</label>
                <textarea className='h-fit p-2 border border-gray-400 bg-gray-200 rounded-xl w-full transition duration-150 focus:outline-none focus:ring-2 focus:ring-blue-600'></textarea>

                <button
                  className='w-64 p-2 mt-6 bg-sky-400 font-semibold cursor-pointer rounded-xl transition duration-200 hover:shadow-xl'
                  type='submit'
                >
                  Adicionar
                </button>
              </motion.div>
            </motion.div>
          }
        </AnimatePresence>
      </section>
    </>
  )
}

export default MainPage
