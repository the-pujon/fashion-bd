import React from "react";
import { FaOpencart } from "react-icons/fa";
import Link from 'next/link'
import Image from 'next/image';
import {MdProductionQuantityLimits} from "react-icons/md";

const CartDropDownContent = ({ cartItems }) => {
  return (
    <div className="p-5 w-[18rem] sm:w-[22rem] max-h-[30rem] overflow-auto  bg-gradient-to-t from-primary/10 to-transparent">
      {/* cart header */}
      <div className="flex w-full items-center justify-between border-b border-secondary border-dashed">
        <div className="flex items-center gap-2 p-1">
          <FaOpencart className="text-3xl" />:{" "}
          <span> {cartItems.products.length}</span>
        </div>
        <div className="text-base">Total: {cartItems.totalPrice}</div>
      </div>
      {/* cart item list */}
      <>
        <div className="flex flex-col gap-2">
          {cartItems.products.map((product, i) => (
            <div
              key={i}
              className="flex items-center gap-2 justify-between p-2"
            >
              <div className="w-fit rounded-md">
                <Image
                  src={product?.image}
                  alt="product image"
                  width={100}
                  height={100}
                  className="w-16 h-10 rounded-md"
                />
              </div>
              <div className="flex flex-col flex-1">
                <span className="text-sm sm:text-base whitespace-nowrap text-primary" >{product.name.length > 20 ? `${product.name}...` : product.name}</span>
                <span className="text-xs whitespace-nowrap"> {product.category.length > 15 ? `${product.category}...` : product.category}</span>
                <span className="text-xs whitespace-nowrap"> {product.brand.length > 15 ? `${product.brand}...` : product.brand}</span>
              </div>
              <div className="flex flex-col w-fit items-end">
                <span className="text-sm sm:text-base whitespace-nowrap flex items-center"><MdProductionQuantityLimits />: {product.quantity}</span>
                <span className="text-sm sm:text-base whitespace-nowrap">$: {product.price}</span>
              </div>
            </div>
          ))}
        </div>
      </>
      <Link href={`cart`} >
        <button className="text-nowrap border rounded-none py-1 lg:px-3 lg:py-2 xl:px-5 xl:py-3 bg-transparent w-full border-primary hover:bg-primary hover:text-secondary transition-all duration-300 active:scale-95" >View Cart</button>
      </Link>
    </div>
  );
};

export default CartDropDownContent;
