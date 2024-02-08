import React from "react";
import {
  FaProductHunt,
  FaRegUser,
  FaShoppingBag,
  FaShoppingCart,
} from "react-icons/fa";
import {
  MdOutlineDashboard,
  MdOutlineLogout,
  MdPayment,
} from "react-icons/md";
import Image  from 'next/image';
import Link from 'next/link';

const DashboardSidebar = () => {
  return (
    <div className="flex min-h-screen justify-between flex-col w-56 bg-transparent overflow-hidden border-r border-black/40">
      <div className="flex flex-col  ">
        <div className="flex items-center justify-center flex-col gap-10 mt-5">
          <h1 className="text-5xl font-semibold uppercase text-black ">TTH</h1>

          <div className="flex flex-col items-center pb-5 -mx-2">
            <Image
              className="object-cover w-24 h-24 mx-2 rounded-full"
              //  TODO: Admin picture
              src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
              alt="avatar"
              width={200}
              height={200}
            />
            <h4 className="mx-2 mt-2 font-medium text-black  ">John Doe</h4>
            <p className="mx-2 mt-1 text-sm font-medium text-black ">
              john@example.com
            </p>
          </div>
        </div>
        <ul className="flex flex-col py-4">
          <li>
            <Link
              href="/dashboard"
              className="!outline-none !border-none flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-black"
            >
              <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-black">
                <MdOutlineDashboard />
              </span>
              <span className="text-base text-black font-medium">Dashboard</span>
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/allToys"
              className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-black"
            >
              <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-black">
                <FaProductHunt />
              </span>
              <span className="text-base font-medium">Products</span>
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/orders"
              className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-black"
            >
              <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-black">
                <FaShoppingCart />
              </span>
              <span className="text-base font-medium">Orders</span>
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/customers"
              className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-black"
            >
              <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-black">
                <FaRegUser />
              </span>
              <span className="text-base font-medium">Customers</span>
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/transactions"
              className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-black"
            >
              <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-black">
                <MdPayment />
              </span>
              <span className="text-base font-medium">All Transactions</span>
            </Link>
          </li>
          <li>
            <Link
              href="/shop"
              className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-black"
            >
              <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-black">
                <FaShoppingBag />
              </span>
              <span className="text-base font-medium">Shop</span>
            </Link>
          </li>
        </ul>
      </div>
      <button className="toyButton flex items-center gap-4">
        <MdOutlineLogout className="text-2xl" /> Log out
      </button>
    </div>
  );
};

export default DashboardSidebar;
