import { useContext } from 'react'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { ShoopingCartContext } from '../../Context'
import OrderCard from '../../Components/OrderCard'
import { totalPrice } from '../../Utils'
import './styles.css'

const CheckOutSideMenu = () => {

  const context = useContext(ShoopingCartContext)

  const handleDelete = (id) => {
    const filteredProducts = context.cartProducts.filter(product => product.id != id)
    context.setCartProducts(filteredProducts)
    context.setCount(context.count - 1)
  }

  const handleCheckout = () => {
    const orderToAdd = {
      date:'01.02.2024',
      products: context.cartProducts,
      totalProducts: context.cartProducts.length,
      totalPrice: totalPrice(context.cartProducts)
    }
    context.setOrder([...context.order, orderToAdd])
    context.setCartProducts([]) // Reinicia el carrito a un array vacio
    context.setCount(0) // Reinicia el contador a 0
  }

  return (
    <aside className={`${context.isCheckoutSideMenuOpen ? 'flex': 'hidden'} checkout-side-menu  flex-col fixed top-20 right-0 border border-black rounded-lg bg-black`}>
        <div className='flex justify-between items-center p-6'>
            <h2 className='font-medium text-xl text-white'>My Order</h2>
            <div onClick={()=> context.closeCheckoutSideMenu()}>
              <XMarkIcon className='h-6 w-6 text-brown cursor-pointer text-white'></XMarkIcon>
            </div>
        </div>
        <div className='overflow-y-auto max-h-[760px] flex-1'>
          {
            context.cartProducts.map(product => {
              return (
              <OrderCard 
              key={product.id}
              id={product.id}
              title={product.title} 
              imgUrl={product.image} 
              price={product.price}
              handleDelete={handleDelete} 
              />
              )
            })
          }
        </div>
        <div className='px-6 mb-6'>
          <p className='flex justify-between items-center border-t border-gray-300 pt-2 mb-2'>
            <span className='font.light text-white'>Total:</span>
            <span className='font-medium text-x1 text-white' >${totalPrice(context.cartProducts)}</span>
          </p>
          <button className='w-full bg-slate-500 py-3 text-white rounded-lg' onClick={() => handleCheckout()} >Checkout</button>
        </div>
    </aside>
  )
}

export default CheckOutSideMenu