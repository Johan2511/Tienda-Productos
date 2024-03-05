import { useContext, useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ShoopingCartContext } from '../../Context'
import Layout from '../../Components/Layout'

function SignIn() {

  const context = useContext(ShoopingCartContext)
  const [view, setView ] = useState('user-info')
  const form = useRef(null)

  //Account
  const account = localStorage.getItem('account')
  const parsedAccount = JSON.parse(account)
  //trae una cuenta
  const noAccountInLocalStorage = parsedAccount ? Object.keys(parsedAccount).length === 0 : true
  const noAccountInLocalStage = context.account ? Object.keys(context.account).length === 0 : true
  const hasUserAnAccount = !noAccountInLocalStorage || !noAccountInLocalStage

  
  const createAnAccount = () => {
    const formData = new FormData(form.current)
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      password: formData.get('password'),
    }
    
    // Guardar la cuenta en el Local Storage
    localStorage.setItem('account', JSON.stringify(data))

    console.log(data);
  }
  
  
  
  const renderLogIn = () => {
    return (
      <div className="flex justify-center items-center">
          <div className="w-full max-w-md">
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
                />
                {parsedAccount?.email}
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
                />
                {parsedAccount?.password}
              </div>
              <div className="flex flex-col items-center justify-between ">
                <button
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 mb-2 rounded focus:outline-none focus:shadow-outline w-full"
                  type="submit"
                  onClick={() => alert('Lógica de inicio de sesión aquí')}
                  disabled={!hasUserAnAccount}
                >
                  Log In
                </button>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full" 
                href="#" 
                onClick={() => setView('create-user-info')}
                disabled={hasUserAnAccount}>
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
    )
  }

const renderCreateUserInfo = () => {
  return (
    <form ref={form} className='flex flex-col gap-4 w-80'>
      <div className='flex flex-col gap-1'>
          <label htmlFor="name">Your name:</label>
          <input 
          type="text"
          id='name'
          name='name'
          defaultValue={parsedAccount?.name}
          placeholder='Johan'
          className='rounded-lg border border-black/60 focus:outline-none py-2 px-4' />
      </div>
      <div className='flex flex-col gap-1'>
          <label htmlFor="email">Your email:</label>
          <input 
          type="text"
          id='email'
          name='email'
          defaultValue={parsedAccount?.email}
          placeholder='correoFalso123@gmail.com'
          className='rounded-lg border border-black/60 focus:outline-none py-2 px-4' />
      </div>
      <div className='flex flex-col gap-1'>
          <label htmlFor="password" className='font-light text-sm'>Your password:</label>
          <input 
          type="text"
          id='password'
          name='password'
          defaultValue={parsedAccount?.password}
          placeholder='********'
          className='rounded-lg border border-black/60 focus:outline-none py-2 px-4' />
      </div>
      <Link to="/" >
        <button className='bg-blue-500 hover:bg-blue-700 text-white w-full rounded-lg py-3'
        onClick={() => createAnAccount()}>
          Create
        </button>
      </Link>
    </form>
  )
}

const renderView = () => view === 'create-user-info' ? renderCreateUserInfo() : renderLogIn() 

  return (
      <Layout>
            <div className='flex items-center justify-center relative w-80 mb-4'>
            <h1 className='font-medium text-xl'>
              Welcome 
            </h1>
          </div>
        {renderView()}
    </Layout>
  )
}

export default SignIn