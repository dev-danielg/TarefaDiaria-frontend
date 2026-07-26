import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import { Mail, Lock } from 'lucide-react';
import axios from 'axios';

function LoginPage(){

    const navigate = useNavigate();
    function ToNewUser(){
        navigate('/NewUserPage')
    }

    function ToMain(){
        navigate('/Main')
    }

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    const handleCadastro = async (e) => {
        e.preventDefault()
        setLoading(true)
        setError('')

        try {
            const response = await axios.post('http://localhost:5000/api/usuarios', {
                email: email,
                senha: password
            })

            console.log('Usuário logado:', response.data)
            alert('Usuário logado com sucesso!')
            setEmail('')
            setPassword('')
            ToMain()
        } catch (err) {
            console.error('Erro ao logar:', err)
            setError(err.response?.data?.mensagem || 'Erro ao tentar logar')
        } finally {
            setLoading(false)
        }
    }

    return(
        <>
        <section className='w-full h-screen  flex flex-col items-center justify-center bg-sky-600'>
            <h1 className='text-8xl font-normal mb-12 text-zinc-50 primaryFont'>Tarefa Diária</h1>
            <form onSubmit={handleCadastro} className='border-2 border-blue-600 bg-gray-200 rounded-md w-90 h-1/2 pl-10 pr-10 shadow-xl flex flex-col items-center justify-center gap-4'>
                <div class='relative px-8 w-fit'>
                    <Mail
                    className='absolute top-1/2 -translate-y-1/2 left-11 text-blue-600'
                    size={18}
                    />
                    <input
                        type='email'
                        placeholder='Informe seu e-mail'
                        className='p-2 bg-gray-200 border border-gray-400 rounded-md w-64 pl-10 text-sm transition duration-150 focus:outline-none focus:ring-2 focus:ring-blue-600'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                <div class='relative px-8 w-fit'>
                    <Lock
                    className='absolute top-1/2 -translate-y-1/2 left-11 text-blue-600'
                    size={18}
                    />
                    <input
                        type='password'
                        placeholder='Informe sua senha'
                        className='p-2 bg-gray-200 border border-gray-400 rounded-md w-64 pl-10 text-sm transition duration-150 focus:outline-none focus:ring-2 focus:ring-blue-600'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                {error && <p className='text-red-500'>{error}</p>}
                <button 
                    type='submit'
                    className='p-2 w-36 border border-gray-400 rounded-md shadow-md trasition duration-150 hover:bg-blue-600 text-sm  hover:text-gray-200 font-semibold'
                    disabled={loading}
                >
                    {loading ? 'Acessando...' : 'Acessar'}
                </button>
                <p className='text-gray-400 text-sm font-semibold'>Não tem conta? <span className='text-gray-800 font-semibold cursor-pointer trasition duration-150 hover:text-blue-600' onClick={ToNewUser}>Clique aqui!</span></p>
            </form>
        </section>
        </>
    )
}

export default LoginPage