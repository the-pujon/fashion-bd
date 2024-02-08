'use client'

import MaxWidthWrapper from "@/Components/MaxWidthWrapper/MaxWidthWrapper";
import ProductDetails from "@/Components/ProductDetails/ProductDetails";

const Details = ({params}) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-primary/10" >
     <MaxWidthWrapper>
     <ProductDetails productId={params.productId} />
     </MaxWidthWrapper>
    </div>
  )
}

export default Details;
