import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeftIcon } from '@heroicons/react/24/solid';
import { ShoopingCartContext } from '../../Context'
import OrderCard from '../../Components/OrderCard'
import Layout from '../../Components/Layout'

function MyOrder() {
  const context = useContext(ShoopingCartContext)
  console.log(context.order);

  return (
    <Layout>
      <div className='flex items-center justify-center relative w-80 mb-6'>
        <Link to='/my-orders' className='absolute left-0'>
          <ChevronLeftIcon className='h-6 w-6 text-brown cursor-pointer' />
        </Link>
        <h1>My Order</h1>
      </div>
      <div className='flex flex-col w-80 gap-2'>
      {
            context.order?.slice(-1)[0].products.map(product => {
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