import { useContext } from "react"
import Layout from "../../Components/Layout"
import Card from "../../Components/Card"
import ProductDetail from "../../Components/ProductDetail"
import { ShoopingCartContext } from '../../Context'

function Home () {

const context = useContext(ShoopingCartContext)

  return (
    <>
      <Layout>
        <div className='flex items-center justify-center relative w-80 mb-4'>
          <h1 className='font-medium text-xl'>
            Exclusive Products 
          </h1>
        </div>
        <input 
          type="text" 
          placeholder="Search a Product"
          className="rounded-lg border border-black w-80 p-2 mb-4 focus:outline-none"
          onChange={(e) => context.setSearchByTitle(e.target.value)} >
          </input>
        <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
        {
          context.items?.map( item  => (
            <Card 
              key={item.id} data={item} />
          )) 
        }
        </div>
        <ProductDetail />
      </Layout>  
    </>
  );
}

export default Home