import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';

function LoginPage(){

    const navigate = useNavigate();
    function ToNewUser(){
        navigate('/NewUserPage')
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
            const response = await axios.get('http://localhost:5000/api/usuarios', {
                email: email,
                senha: password
            })

            console.log('Usuário logado:', response.data)
            alert('Usuário logado com sucesso!')
            setEmail('')
            setPassword('')
        } catch (err) {
            console.error('Erro ao logar:', err)
            setError(err.response?.data?.mensagem || 'Erro ao tentar logar')
        } finally {
            setLoading(false)
        }
    }

    return(
        <>
        <section className='w-full h-screen border flex flex-col items-center justify-center'>
            <h1 className='text-6xl font-semibold mb-12'>Tarefa Diária</h1>
            <form onSubmit={handleCadastro} className='border w-1/2 h-1/2 flex flex-col items-center justify-center gap-4'>
                <input 
                    type='email' 
                    placeholder='informe seu e-mail' 
                    className='p-2 bg-gray-200 border border-gray-400 rounded-md'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input 
                    type='password'
                    placeholder='informe sua senha' 
                    className='p-2 bg-gray-200 border border-gray-400 rounded-md'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                {error && <p className='text-red-500'>{error}</p>}
                <button 
                    type='submit'
                    className='p-2 w-48 border border-gray-400 rounded-md hover:bg-gray-800 hover:text-gray-200 font-semibold'
                    disabled={loading}
                >
                    {loading ? 'Acessando...' : 'Acessar'}
                </button>
                <p className='text-gray-400 font-semibold'>Não tem conta? <span className='text-gray-800 font-semibold cursor-pointer' onClick={ToNewUser}>Clique aqui!</span></p>
            </form>
        </section>
        </>
    )
}

export default LoginPage