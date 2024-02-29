import { XMarkIcon } from '@heroicons/react/24/solid'

const OrderCard = props => {

    const {id, title, imgUrl, price, handleDelete} = props

    return (
        <div className="flex justify-between items-center px-6 mb-3">
            <div className='flex items-center gap-2'>
                <figure className='w-20 h-20 shrink-0'>
                    <img className='w-full h-full rounded-2xl object-contain' src={imgUrl} alt={title} />
                </figure>
                <p className='text-sm font-light text-white'>{title}</p>
            </div>
            <div className='flex items-center gap-2 text-white'>
                <p className='text-lg font-medium'>{price}</p>
                <XMarkIcon onClick={()=> handleDelete(id)} className='h-6 w-6 text-brown cursor-pointer'></XMarkIcon>
            </div>
        </div>
    )
}

export default OrderCard