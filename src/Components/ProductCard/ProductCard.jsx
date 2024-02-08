import React from "react";
import Image from "next/image";
import {MdStar} from "react-icons/md";
import {useAppDispatch} from "@/libs/hooks";
import {addItemToCart} from "@/libs/features/cart/CartSlice";
import Link  from 'next/link';

const ProductCard = ({ product }) => {
  const {
    id,
    image,
    price,
    rating,
    collections,
    brand,
    name
  } = product;

  const dispatch = useAppDispatch();

  const handleAddCart = (product) => {

      const cart = {
        _id: product.id,
        name: product.name,
        image: product.image,
        quantity: 1,
        price: product.price,
        total:  product.price,
        brand: product.brand,
        collection: product.collections.join(", "),
        category: product.category,
      };
      dispatch(addItemToCart( cart));
  };

  return (
    <div className="shadow-md" >
      <Link href={`/products/${id}`}>
        <Image src={image} alt="Product Image" height={600} width={500} />
      </Link>
      <div className="p-2" >
        <div className="grid grid-cols-2 items-center justify-between">
          <div className="flex flex-col gap-1" >
            <p className="text-sm" >{collections.join(", ")}</p>
            <div className="text-2xl text-nowrap text-primary"  >{name.length < 19 ? name : `${name.slice(0,19)}...` }</div>
            <div className="text-base xl:text-xl" >{brand}</div>
          </div>
          <div className=" w-full text-end flex flex-col gap-2">
            <p className="flex items-center text-end w-full justify-end gap-1" ><MdStar className='text-primary'/> {rating}</p>
            <p className="lg:text-xl xl:text-2xl" >$ {price}</p>
          </div>
        </div>
        <div className="flex items-center justify-between gap-3 mt-2">
          <button onClick={()=>handleAddCart(product)} className="text-nowrap border rounded-none py-1 lg:px-3 lg:py-2 xl:px-5 xl:py-3 bg-transparent w-full border-primary hover:bg-primary hover:text-secondary transition-all duration-300 active:scale-95">
            Add to cart
          </button>
          <button className="text-nowrap border rounded-none py-1 lg:px-3 lg:py-2 xl:px-5 xl:py-3 bg-transparent w-full border-primary hover:bg-primary hover:text-secondary transition-all duration-300 active:scale-95">
            Add to favorite
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
