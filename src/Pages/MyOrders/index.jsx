import { useContext } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../Components/Layout'
import { ShoopingCartContext } from '../../Context'
import OrdersCard from '../../Components/OrdersCard'

function MyOrders() {
  const context = useContext(ShoopingCartContext);

  return (
    <Layout>

      My Orders

      {
        context.order.map((order, index) => (
          <Link key={index} to={`/my-orders/${index}`}>
            <OrdersCard
              // date={order.date}
              // products={order.products}
              totalPrice={order.totalPrice}
              totalProducts={order.totalProducts}
            />
          </Link>
        ))
      }
    </Layout>
  );
}

export default MyOrders;
