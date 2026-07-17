import {useState} from 'react';
import {useNavigate} from 'react-router-dom';

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

    const handleCadastro = async (e) => {
        e.preventDefault()
        setLoading(true)
        setError('')

        try {
            const response = await axios.post('http://localhost:5000/api/usuarios', {
                nome: name,
                email: email,
                senha: password
            })

            console.log('Usuário Cadastrado:', response.data)
            alert('Usuário cadastrado com sucesso!')
            setName('')
            setEmail('')
            setPassword('')
        } catch (err) {
            console.error('Erro ao cadastrar:', err)
            setError(err.response?.data?.mensagem || 'Erro ao tentar cadastrar usuário')
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
                    type='text' 
                    placeholder='nome' 
                    className='p-2 bg-gray-200 border border-gray-400 rounded-md'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <input 
                    type='email' 
                    placeholder='e-mail' 
                    className='p-2 bg-gray-200 border border-gray-400 rounded-md'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input 
                    type='password'
                    placeholder='senha' 
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
                    {loading ? 'Cadastrando...' : 'Cadastrar'}
                </button>
                <p className='text-gray-800 font-semibold cursor-pointer' onClick={ReturnLogin}> Retornar</p>
            </form>
        </section>
        </>
    )
}

export default NewUserPage