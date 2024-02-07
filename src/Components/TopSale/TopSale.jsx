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

                getProducts.sort((a, b) => b.sold - a.sold)
                setTopSaleProducts(getProducts.slice(0,8))
            }
            catch(err){
                console.log('error : ', err)
            }
        }

        fetchData()
    },[])


  return (
    <div className='bg-primary/10' >
        <MaxWidthWrapper>
            <h1 className='text-3xl lg:text-7xl text-center py-5' >Check Our Top <span className='text-primary' >Sales</span></h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2' >
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