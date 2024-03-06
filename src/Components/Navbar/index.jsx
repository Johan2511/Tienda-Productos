import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { ShoppingBagIcon } from '@heroicons/react/24/solid'
import { ShoopingCartContext } from '../../Context'

const Navbar = () => {
const context = useContext(ShoopingCartContext)
const activeStyle = 'underline underline-offset-4'

// Sign Out
const signOut = localStorage.getItem('sign-out')
const parsedSignOut = JSON.parse(signOut)
const isUserSignOut = context.singOut || parsedSignOut


// Stringifiar la información
const handleSignOut = () => {
    const stringifiedSignOut = JSON.stringify(true)
    localStorage.setItem('sign-out', stringifiedSignOut)
    context.setSignOut(true)
}

const renderView = () => {
    if (isUserSignOut) {
        return (
            <li>
                <NavLink 
                    to='/sign-in'
                    className={({ isActive }) =>
                    isActive ? activeStyle : undefined}
                    onClick={() => handleSignOut()}>
                Sign Out
                </NavLink>
            </li>
        )    
    } else {
        return(
        <>
            <li className='text-black/60'>
                CorreoFalso123@gmail.com
            </li>
            <li>
                <NavLink 
                    to='/my-orders'
                    className={({ isActive }) =>
                    isActive ? activeStyle : undefined}>
                    My Orders
                </NavLink>
            </li>
            <li>
                <NavLink 
                    to='/my-account'
                    className={({ isActive }) =>
                    isActive ? activeStyle : undefined}>
                    My Account
                </NavLink>
            </li>
            <li>
                <NavLink 
                    to='/sign-in'
                    className={({ isActive }) =>
                    isActive ? activeStyle : undefined}
                    onClick={() => handleSignOut()}>
                Sign Out
                </NavLink>
            </li>
            <li className='flex item-center'>
                <ShoppingBagIcon className='h-6 w-6 text-black'></ShoppingBagIcon>
                <div> {context.cartProducts.length}</div>
            </li>
        </>
        )
    }
}

  return (
    <nav className='flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light bg-amber-400'>
        <ul className='flex items-center gap-3'>
            <li className='font-extrabold text-lg'>
                <NavLink to='/'>
                    Shopi
                </NavLink>
            </li>
            <li>
                <NavLink 
                    to='/'
                    onClick={() => context.setSelectedCategory()}
                    className={({ isActive }) =>
                    isActive ? activeStyle : undefined}>
                    All
                </NavLink>
            </li>
            <li>
                <NavLink 
                    to='/mens clothing'
                    onClick={() => context.setSelectedCategory("men's clothing")}
                    className={({ isActive }) =>
                    isActive ? activeStyle : undefined}>
                    Men´s clothing
                </NavLink>
            </li>
            <li>
                <NavLink 
                    to='/electronics'
                    onClick={() => context.setSelectedCategory('electronics')}
                    className={({ isActive }) =>
                    isActive ? activeStyle : undefined}>
                    Electronics
                </NavLink>
            </li>
            <li>
                <NavLink 
                    to='/jewelery'
                    onClick={() => context.setSelectedCategory('jewelery')}
                    className={({ isActive }) =>
                    isActive ? activeStyle : undefined}>
                    Jewelery
                </NavLink>
            </li>
            <li>
                <NavLink 
                    to='/womens clothing'
                    onClick={() => context.setSelectedCategory("women's clothing")}
                    className={({ isActive }) =>
                    isActive ? activeStyle : undefined}>
                    Women´s clothing
                </NavLink>
            </li>
            <li>
                <NavLink 
                    to='/others'
                    onClick={() => context.setSelectedCategory('others')}
                    className={({ isActive }) =>
                    isActive ? activeStyle : undefined}>
                    Others
                </NavLink>
            </li>
        </ul>
        <ul className='flex items-center gap-3'>
            {renderView()}
            
            <li className='flex item-center'>
                <ShoppingBagIcon className='h-6 w-6 text-black'></ShoppingBagIcon>
                <div> {context.cartProducts.length}</div>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar