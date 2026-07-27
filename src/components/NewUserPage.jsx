import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import { UserRound, Lock, Mail } from 'lucide-react';
import axios from 'axios'

function NewUserPage(){
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    const navigate = useNavigate();
    function ReturnLogin(){
        navigate('/')
    }

    function ToMain(){
        navigate('/Main')
    }


    const handleCadastro = async (e) => {
        e.preventDefault()
        setLoading(true)
        setError('')

        try {
            const response = await axios.post('http://127.0.0.1:5000/api/usuarios', {
                nome: name,
                email: email,
                senha: password
            })

            console.log('Usuário Cadastrado:', response.data)
            alert('Usuário cadastrado com sucesso!')
            setName('')
            setEmail('')
            setPassword('')
            ToMain()
        } catch (err) {
            console.error('Erro ao cadastrar:', err)
            setError(err.response?.data?.mensagem || 'Erro ao tentar cadastrar usuário')
        } finally {
            setLoading(false)
        }
    }

    return(
        <>
        <section className='w-full h-screen flex flex-col items-center justify-center bg-sky-600'>
            <h1 className='text-8xl font-normal mb-12 text-zinc-50 primaryFont'>Tarefa Diária</h1>
            <form onSubmit={handleCadastro} className='border-2 border-blue-600 bg-gray-200 rounded-md w-90 h-1/2 pl-10 pr-10 shadow-xl flex flex-col items-center justify-center gap-4'>
                <div className='relative px-8 w-fit'>
                    <UserRound
                    className='absolute top-1/2 -translate-y-1/2 left-11 text-blue-600'
                    size={18}
                    />
                    <input 
                    type='text' 
                    placeholder='Nome' 
                    className='p-2 bg-gray-200 border border-gray-400 rounded-md w-64 pl-10 text-sm transition duration-150 focus:outline-none focus:ring-2 focus:ring-blue-600'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                </div>
                
                <div className='relative px-8 w-fit'>
                    <Mail
                    className='absolute top-1/2 -translate-y-1/2 left-11 text-blue-600'
                    size={18}
                    />
                    <input 
                    type='email' 
                    placeholder='E-mail' 
                    className='p-2 bg-gray-200 border border-gray-400 rounded-md w-64 pl-10 text-sm transition duration-150 focus:outline-none focus:ring-2 focus:ring-blue-600'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                </div>
                
                <div className='relative px-8 w-fit'>
                    <Lock
                    className='absolute top-1/2 -translate-y-1/2 left-11 text-blue-600'
                    size={18}
                    />
                    <input 
                    type='password'
                    placeholder='Senha' 
                    className='p-2 bg-gray-200 border border-gray-400 rounded-md w-64 pl-10 text-sm transition duration-150 focus:outline-none focus:ring-2 focus:ring-blue-600'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                </div>
                
                {error && <p className='text-red-500'>{error}</p>}
                <button 
                    type='submit'
                    className='p-2 w-36 border border-gray-400 rounded-md shadow-md trasition duration-150 hover:bg-blue-600 text-sm   hover:text-gray-200 font-semibold'
                    disabled={loading}
                >
                    {loading ? 'Cadastrando...' : 'Cadastrar'}
                </button>
                <p className='text-gray-800 text-sm font-semibold cursor-pointer trasition duration-150 hover:text-blue-600' onClick={ReturnLogin}> Retornar</p>
            </form>
        </section>
        </>
    )
}

export default NewUserPage