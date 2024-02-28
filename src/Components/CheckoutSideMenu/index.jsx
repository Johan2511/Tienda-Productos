import { useContext } from 'react'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { ShoopingCartContext } from '../../Context'
import './styles.css'

const CheckOutSideMenu = () => {

  const context = useContext(ShoopingCartContext)

  return (
    <aside className={`${context.isCheckoutSideMenuOpen ? 'flex': 'hidden'} checkout-side-menu  flex-col fixed top-20 right-0 border border-black rounded-lg bg-white`}>
        <div className='flex justify-between items-center p-6'>
            <h2 className='font-medium text-xl'>My Order</h2>
            <div onClick={()=> context.closeCheckoutSideMenu()}>
              <XMarkIcon className='h-6 w-6 text-brown cursor-pointer'></XMarkIcon>
            </div>
        </div>
    </aside>
  )
}

export default CheckOutSideMenu