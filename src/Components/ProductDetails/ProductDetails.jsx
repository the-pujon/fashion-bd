"use client";

import React, { useEffect, useState } from "react";
import useAPI from "@/Hooks/UseAPI";
import { FaStar } from "react-icons/fa";
import Image from "next/image";
import {useAppDispatch} from "@/libs/hooks";
import {addItemToCart} from "@/libs/features/cart/CartSlice";

const ProductDetails = ({ productId }) => {
  const [product, setProducts] = useState([]);

  const { get } = useAPI();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const getProducts = await get("/Data/Products.json");
        console.log("getProducts,", getProducts);

        const p = getProducts.find((product) => product.id === productId);
        console.log(p);

        setProducts(p);
      } catch (err) {
        console.log("error : ", err);
      }
    };

    fetchData();
  }, []);


  const dispatch = useAppDispatch();

  const handleAddCart = () => {

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
    <div>
      <div className="flex gap-2 items-center">
        <div className="flex-1">
          <Image
            src={product?.image}
            alt="product pic"
            width={600}
            height={800}
          />
        </div>
        <div className="flex-1 flex flex-col gap-2">
          <p className="text-gray-400 text-xs lg:text-base">{product?.collections?.join(", ")}</p>
          <h1 className="text-3xl lg:text-5xl font-bold text-primary">{product?.name}</h1>
          <p className="flex items-center gap-2 text-black text-base lg:text-xl text-nowrap">
            <FaStar /> 4.6 (100 reviews)
          </p>
          <p className="text-sm lg:text-base" >{product?.sold}+ sold</p>

          <p className="text-xl lg:text-3xl">$ {product?.price}</p>

          <p className="text-sm lg:text-xl">Category: {product?.category}</p>
          <p className="text-sm lg:text-xl">Brand: {product?.brand}</p>
          <p className="text-sm lg:text-xl">Sizes: {product?.size?.join(", ")}</p>

          <button className="text-nowrap text-xs lg:text-xl border rounded-none px-2 py-1 lg:px-3 lg:py-2 xl:px-5 xl:py-3 bg-transparent w-fit border-primary hover:bg-primary hover:text-secondary transition-all duration-300 active:scale-95">
            Add to Favorite
          </button>
          <button onClick={handleAddCart} className="text-nowrap text-xs lg:text-xl border rounded-none py-1 lg:px-3 lg:py-2 xl:px-5 xl:py-3 bg-transparent w-fit border-primary hover:bg-primary hover:text-secondary transition-all duration-300 active:scale-95">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
