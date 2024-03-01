import { ChevronRightIcon  } from '@heroicons/react/24/solid'
import { ShoppingCartIcon  } from '@heroicons/react/24/solid'
import { CurrencyDollarIcon  } from '@heroicons/react/24/solid'
import { CalendarDaysIcon  } from '@heroicons/react/24/solid'

const OrdersCard = props => {

    const {totalPrice, totalProducts} = props

    return (
        <div className="flex flex-col justify-between items-center px-6 mb-3 border border-black rounded-lg p-4 w-80 bg-slate-100">
            <div className='flex justify-between flex-col gap-2 w-full'>
                <p className='flex justify-between'>
                    <span>Fecha:</span>
                    <span className='flex font-medium'>
                        <CalendarDaysIcon className='h-6 w-4 text-brown cursor-pointer mr-2'/>
                        01.02.24
                    </span>
                </p>
                
                <p className='flex justify-between'>
                    <span>Número de productos:</span>
                    <span className='flex font-medium'>
                        <ShoppingCartIcon className='h-6 w-4 text-brown cursor-pointer mr-2'/>
                        {totalProducts}
                    </span>
                </p>
                
                <p className='flex justify-between'>
                    <span>Precio total:</span>
                    <span className='flex font-medium'>
                        <CurrencyDollarIcon className='h-6 w-4 text-brown cursor-pointer mr-2'/>
                        ${totalPrice}
                    </span>
                </p> 
            </div>
            <button className='flex mt-4'> Ver más <ChevronRightIcon className='h-6 w-4 text-brown cursor-pointer'/> </button>
        </div>
    )
}

export default OrdersCard