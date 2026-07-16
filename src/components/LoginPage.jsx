function LoginPage(){
    return(
        <>
        <section class='w-full h-screen border flex flex-col items-center justify-center'>
            <h1 class='text-6xl font-semibold mb-12'>Tarefa Diária</h1>
            <form method='' class='border w-1/2 h-1/2 flex flex-col items-center justify-center gap-4'>
                <input type='email' placeholder='informe seu e-mail' class='p-2 bg-gray-200 border border-gray-400 rounded-md'/>
                <input type='password'placeholder='informe sua senha' class='p-2 bg-gray-200 border border-gray-400 rounded-md'/>
                <button class='p-2 w-48  border rounded-xl'>acessar</button>
            </form>
        </section>
        </>
    )
}

export default LoginPage