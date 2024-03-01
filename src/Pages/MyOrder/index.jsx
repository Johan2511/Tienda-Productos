import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeftIcon } from '@heroicons/react/24/solid';
import { ShoopingCartContext } from '../../Context'
import OrderCard from '../../Components/OrderCard'
import Layout from '../../Components/Layout'

function MyOrder() {
  const context = useContext(ShoopingCartContext)
  console.log(context.order);
  const currentPath =  window.location.pathname
  let index = currentPath.substring(currentPath.lastIndexOf('/') + 1)
  //console.log(index) //mirar el numero de id de la orden
  if (index === 'last') index = context.order?.length -1

  return (
    <Layout>
      <div className='flex items-center justify-center relative w-80 mb-6'>
        <Link to='/my-orders' className='absolute left-0'>
          <ChevronLeftIcon className='h-6 w-6 text-brown cursor-pointer' />
        </Link>
        <h1>My Order</h1>
      </div>
      <div className='flex flex-col w-80 gap-2 border border-black rounded-lg py-3'>
      {
            context.order?.[index]?.products.map(product => {
              return (
              <OrderCard 
              key={product.id}
              id={product.id}
              title={product.title} 
              imgUrl={product.image} 
              price={product.price}
              />
              )
            })
          }
        </div>
    </Layout>
  )
}

export default MyOrder