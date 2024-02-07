'use client'

import useAPI from '@/Hooks/UseAPI'
import React, {useEffect, useState} from 'react'
import MaxWidthWrapper from '../MaxWidthWrapper/MaxWidthWrapper'
import ProductCard from '../ProductCard/ProductCard'

const TopSale = () => {

    const [topSaleProducts, setTopSaleProducts] = useState([])

    const {get} = useAPI()

    useEffect(()=>{
        const fetchData = async()=>{
            try{
                const getProducts = await get("/Data/Products.json")
                console.log(getProducts)

                getProducts.sort((a, b) => b.sold - a.sold)
                console.log(getProducts.slice(0,6))
                setTopSaleProducts(getProducts.slice(0,8))
            }
            catch(err){
                console.log('error : ', err)
            }
        }

        fetchData()
    },[])


  return (
    <div>
        <MaxWidthWrapper>
            <h1 className='text-7xl text-center py-5' >Check Our Top <span className='text-primary' >Sales</span></h1>
            <div className='grid grid-cols-4 gap-3' >
                {
                    topSaleProducts.map((product)=>(
                        <div key={product.id} >
                            <ProductCard product={product}/>
                        </div>
                    ))
                }
            </div>
        </MaxWidthWrapper>
    </div>
  )
}

export default TopSale