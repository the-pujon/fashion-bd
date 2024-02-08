"use client";

import useAPI from "@/Hooks/UseAPI";
import React, { useEffect, useState } from "react";
import { FaEye, FaTrash } from "react-icons/fa";
import Link from 'next/link';

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [filterOrders, setFilterOrders] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [search, setSearch] = useState("");

  const { get } = useAPI();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const getProducts = await get("/Data/Orders.json");

        setOrders(getProducts);
        setFilterOrders(getProducts);
      } catch (err) {
        console.log("error : ", err);
      }
    };

    fetchData();
    setRefresh(false);
  }, [refresh]);

  //for search
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  //for search
  useEffect(() => {
    let value = search.toLowerCase();

    let searchOrders = orders.filter((data) => {
      const email = data?.userEmail?.toLowerCase();
      const id = data?.userId?.toLowerCase();
      const orderId = data?._id?.toLowerCase();
      return (
        email.startsWith(value) ||
        id.startsWith(value) ||
        orderId.startsWith(value)
      );
    });
    setFilterOrders(searchOrders);
  }, [search]);

  //for search
  const handleSubmit = (e) => {
    e.preventDefault();

    let value = search.toLowerCase();
    let searchOrders = orders.filter((data) => {
      const email = data?.userEmail?.toLowerCase();
      const id = data?.userId?.toLowerCase();
      const orderId = data?._id?.toLowerCase();
      return (
        email.startsWith(value) ||
        id.startsWith(value) ||
        orderId.startsWith(value)
      );
    });
    setFilterOrders(searchOrders);
  };

  //for sorting
  const handleSort = (e) => {
    if (e.target.value === "price-lowest") {
      const s = [...orders].sort((a, b) => a.totalAmount - b.totalAmount);
      setFilterOrders(s);
    }

    if (e.target.value === "price-highest") {
      const s = [...orders].sort((b, a) => a.totalAmount - b.totalAmount);
      setFilterOrders(s);
    }
  };

  return (
    <div className="p-5">
      <div className="wrapper min-h-screen text-black backdrop-blur-md">
        <div className="overflow-x-auto pt-[8rem]">
          <div className="text-4xl font-thin py-5">All Orders</div>
          <div className="flex items-center justify-between mb-4 gap-2">
            <div className="flex items-center space-x-4 text-black cursor-text w-full">
              <input
                type="text"
                placeholder="Search orders..."
                className="border-b border-black w-full px-4 py-2 bg-transparent focus:outline-none placeholder:text-black !cursor-text"
                onChange={handleChange}
                onSubmit={handleSubmit}
              />
            </div>
            <div className="flex gap-4">
              <select
                className="border py-2 px-4 bg-transparent border-black"
                value="{sortOption}"
                onChange={handleSort}
              >
                <option value="" className="bg-primary">
                  Sort By
                </option>

                <option value="price-lowest" className="bg-primary">
                  Price (Lowest to Highest)
                </option>
                <option value="price-highest" className="bg-primary">
                  Price (Highest to Lowest)
                </option>
              </select>
            </div>
          </div>

          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Order Id</th>
                <th>User Id</th>
                <th>User Email</th>
                <th>Total Items</th>
                <th>Total Amount</th>
                <th>Date</th>
                <th>Payment Status</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {filterOrders.map((order) => (
                <tr key={order._id}>
                  <td>{order._id}</td>
                  <td>{order.userId}</td>
                  <td>{order.userEmail}</td>
                  <td>{order.totalItem}</td>
                  <td>${order.totalAmount.toFixed(2)}</td>
                  <td>{new Date(Number(order.date)).toLocaleString()}</td>
                  <td>
                    <div
                      className={` w-fit px-3 py-1 rounded-3xl  ${
                        order.paymentInfo === "unpaid"
                          ? "bg-red-600"
                          : "bg-green-500"
                      }`}
                    >
                      {order.paymentInfo}
                    </div>
                  </td>
                  <td>
                    <div
                      className={` w-fit px-3 py-1 rounded-3xl dropdown dropdown-top ${
                        order.status === "cancel"
                          ? "bg-red-600"
                          : order.status === "complete"
                          ? "bg-green-500"
                          : order.status === "processing"
                          ? "bg-orange-400"
                          : "bg-yellow-400"
                      }`}
                    >
                      <div tabIndex={0} role="button" className="">
                        {order.status}
                      </div>
                      <ul
                        tabIndex={0}
                        className="dropdown-content z-[1] menu p-2 shadow  rounded-box w-fit space-y-2 bg-gradient-to-t from-primary/10 to-transparent bg-white"
                      >
                        <li>
                          <button
                            disabled={order.status === "processing"}
                            className=" w-full flex items-center justify-center px-3 py-1 rounded-3xl bg-orange-400 disabled:bg-gray-100 disabled:text-primary disabled:cursor-not-allowed"
                          >
                            processing
                          </button>
                        </li>
                        <li>
                          <button
                            disabled={order.status === "shipping"}
                            className=" w-full flex items-center justify-center px-3 py-1 rounded-3xl bg-yellow-400 disabled:bg-gray-100 disabled:text-primary disabled:cursor-not-allowed"
                          >
                            shipping
                          </button>
                        </li>
                        <li>
                          <button
                            disabled={order.status === "complete"}
                            className=" w-full flex items-center justify-center px-3 py-1 rounded-3xl bg-green-500 disabled:bg-gray-100 disabled:text-primary disabled:cursor-not-allowed"
                          >
                            complete
                          </button>
                        </li>
                        <li>
                          <button
                            disabled={order.status === "cancel"}
                            className=" w-full flex items-center justify-center px-3 py-1 rounded-3xl bg-red-600 disabled:bg-gray-100 disabled:text-primary disabled:cursor-not-allowed"
                          >
                            cancel
                          </button>
                        </li>
                      </ul>
                      {/*</div>*/}
                    </div>
                  </td>
                  <td>
                    <div className="text-xl text-black/70 gap-4 flex" >
                      <Link href={`/dashboard/orders/${order._id}`} >
                        <FaEye />
                      </Link>
                      <button>
                        <FaTrash />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Orders;
