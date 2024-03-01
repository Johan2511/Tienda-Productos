import { useContext } from 'react'
import { ShoopingCartContext } from '../../Context'
import OrderCard from '../../Components/OrderCard'
import Layout from '../../Components/Layout'

function MyOrder() {
  const context = useContext(ShoopingCartContext)
  console.log(context.order);

  return (
    <Layout>
      MyOrder
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