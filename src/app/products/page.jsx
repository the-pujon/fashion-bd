"use client";

import FilterSidebar from "@/Components/FilterSidebar/FilterSidebar";
import MaxWidthWrapper from "@/Components/MaxWidthWrapper/MaxWidthWrapper";
import ProductCard from "@/Components/ProductCard/ProductCard";
import useAPI from "@/Hooks/UseAPI";
import React, { useEffect, useState } from "react";
import { MdMenu } from "react-icons/md";

const Products = () => {
  const [products, setProducts] = useState([]);

  const { get } = useAPI();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const getProducts = await get("/Data/Products.json");

        setProducts(getProducts);
      } catch (err) {
        console.log("error : ", err);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen">
      <MaxWidthWrapper>
        <div className="flex">
          <div className="w-32 lg:w-56 hidden lg:block ">
            <FilterSidebar />
          </div>
          <div className="flex-1 p-4">
            <div>
              <div className="flex items-center py-2 gap-2">
                {/* filter */}
                <div className="w-10 block lg:hidden">
                  <div className="dropdown">
                    <div tabIndex={0} role="button" className="-mb-5">
                      <MdMenu className='text-2xl' />
                    </div>
                    <ul
                      tabIndex={0}
                      className="dropdown-content z-[1] mt-5 menu p-2 shadow rounded-box w-52 bg-white"
                    >
                      <FilterSidebar />
                    </ul>
                  </div>
                </div>

                {/* search and sort */}
                <form
                  className="w-full"
                  // onSubmit={handleSubmit}
                >
                  <input
                    type="search"
                    name="toySearch"
                    id="toySearch"
                    className="bg-transparent py-2 px-4 text-black placeholder:text-black border-b border-black w-full focus:outline-none"
                    placeholder="Search"
                    //onChange={handleChange}
                  />
                </form>

                {/* sort */}
                <div className="!w-20">
                  <select
                    className="px-4 !w-24 overflow-auto py-2 border text-black border-black bg-transparent rounded-none focus:outline-none appearance-none"
                    //  value="{sortOption}"
                    //onChange={handleSort}
                    style={{ width: "1rem" }}
                  >
                    <option value="" className="text-primary !w-20">
                      Sort By
                    </option>

                    <option
                      value="price-lowest"
                      className="text-primary !w-20 appearance-none"
                    >
                      &#8595;&#8595;
                    </option>
                    <option
                      value="price-highest"
                      className="text-primary !w-20"
                    >
                      &#8593;&#8593;
                    </option>
                  </select>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-2">
              {products.map((product) => (
                <div key={product.id}>
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Products;
