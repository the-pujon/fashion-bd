"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import MaxWidthWrapper from "../MaxWidthWrapper/MaxWidthWrapper";
import { MdOutlineMenu, MdShoppingCart } from "react-icons/md";
import { useAppSelector } from "@/libs/hooks";
import CartDropDownContent from "../CartDropDownContent/CartDropDownContent";

const Navbar = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const cartItems = useAppSelector((state) => state.cart);
  console.log(cartItems);

  return (
    <div className="shadow-lg z-40 sticky top-0 backdrop-blur-md ">
      <MaxWidthWrapper className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <MdOutlineMenu fontSize={20} />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 backdrop-blur-md"
            >
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Products</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Fashion DB</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Products</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          {isClient && (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle"
              >
                <div className="indicator">
                  <MdShoppingCart fontSize={20} />
                  <p className="badge badge-sm indicator-item">
                    {cartItems.products.length}
                  </p>
                </div>
              </div>
              <div
                tabIndex={0}
                className="mt-3 z-[1] card card-compact dropdown-content shadow  bg-white"
              >
                 <CartDropDownContent cartItems={cartItems} />
              </div>
            </div>
          )}

          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <Image
                  src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                  alt="user picture"
                  width={60}
                  height={60}
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Navbar;
