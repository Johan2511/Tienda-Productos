import Layout from '../../Components/Layout'

function SignIn() {
  return (
      <Layout>
        <div className="flex justify-center items-center h-screen">
          <div className="w-full max-w-md">
            <h1 className="text-3xl font-semibold mb-6 text-center">Welcome</h1>
            <form className=" bg-amber-400 shadow-md rounded-lg px-8 pt-6 pb-8 mb-4 w-80 h-80">
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                  Email:
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder='Correofalso123@gmail.com'
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                  Contraseña:
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  name="password"
                  type="password"
                  required
                  placeholder='******'
                />
              </div>
              <div className="flex flex-col items-center justify-between ">
                <button
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 mb-2 rounded focus:outline-none focus:shadow-outline w-full"
                  type="button"
                  onClick={() => alert('Lógica de inicio de sesión aquí')}
                >
                  Sign In
                </button>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full" href="#" onClick={() => alert('Redirigir a la página de registro aquí')}>
                Sign up
              </button>
              </div>
            </form>
            <div className="text-center">
              <a className="text-blue-500 hover:underline" href="#" onClick={() => alert('Lógica para restablecer la contraseña aquí')}>
                Forgot my password
              </a>
              <br />
              
            </div>
          </div>
        </div>
    </Layout>
  )
}

export default SignIn