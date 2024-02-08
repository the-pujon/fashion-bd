import React from 'react'
import {MdKeyboardBackspace} from 'react-icons/md'
import Link  from 'next/link';
import OrderDetails from '@/Components/OrderDetails/OrderDetails';

const Order = ({params}) => {
  return (
    <div>
     <OrderDetails orderId={params.orderId}/>
    </div>
  )
}

export default Order