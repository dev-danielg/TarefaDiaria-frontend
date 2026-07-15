function LoginPage(){
    return(
        <>
        <section class='w-full h-screen border flex items-center justify-center'>
            <form method='' class='border w-1/2 h-1/2 flex flex-col items-center justify-center gap-4'>
                <input type='email' placeholder='informe seu e-mail' class='p-2'/>
                <input type='password'placeholder='informe sua senha' class='p-2'/>
                <button class='p-2 border rounded-xl'>acessar</button>
            </form>
        </section>
        </>
    )
}

export default LoginPage