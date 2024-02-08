"use client";

import {
  removeItemFromCart,
  updateItemInCart,
} from "@/libs/features/cart/CartSlice";
import { useAppDispatch, useAppSelector } from "@/libs/hooks";
import React, { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { MdKeyboardBackspace } from "react-icons/md";
import Link from "next/link";
import Image from "next/image";
import MaxWidthWrapper from "@/Components/MaxWidthWrapper/MaxWidthWrapper";

const Cart = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.cart);

  // Create a state object to track quantity for each product
  const [quantities, setQuantities] = useState({});

  // Update quantities when cartItems change
  useEffect(() => {
    const newQuantities = {};
    cartItems.products.forEach((product) => {
      newQuantities[product._id] = product.quantity || 1; // Set default to 1 if quantity is not present
    });
    setQuantities(newQuantities);
  }, [cartItems]);

  const handleQuantity = (productId, type) => {
    // Make a copy of quantities object
    const newQuantities = { ...quantities };

    if (type === "minus" && newQuantities[productId] > 1) {
      newQuantities[productId] -= 1;
      dispatch(
        updateItemInCart({ _id: productId, quantity: newQuantities[productId] })
      );
    }
    if (type === "plus") {
      newQuantities[productId] = (newQuantities[productId] || 0) + 1;
      dispatch(
        updateItemInCart({ _id: productId, quantity: newQuantities[productId] })
      );
    }

    // Update the state with the new quantities
    setQuantities(newQuantities);
  };

  const handleDelete = (id) => {
    dispatch(removeItemFromCart(id));
  };

  const handleCheckout = async (e) => {
    e.preventDefault();

    const form = e.target;
    const shippingDetails = {
      name: form.name.value,
      email: form.email.value,
      phone: form.phone.value,
      address: form.address.value,
      country: form.country.value,
      city: form.city.value,
      postal: form.postal.value,
    };
  };

  return (
    <div className="bg-primary/10 py-5">
      <MaxWidthWrapper>
        <div className="min-h-screen pt-0 lg:pt-32 text-black">
          <div className="flex gap-5 flex-col lg:flex-row ">
            {/* cart details */}
            {isClient && (
              <div className="lg:basis-3/4 lg:border-r pr-5 border-dotted border-black overflow-auto w-full">
                <div className="text-4xl font-semibold pb-4">Cart</div>
                <div className="flex flex-col gap-2 border-b border-dotted border-black  w-[50rem] lg:w-full overflow-auto">
                  {/* headers */}
                  <div className="grid grid-cols-5 lg:grid-cols-4 border-b border-dotted border-black p-2 w-[50rem]  lg:w-full overflow-auto">
                    <div className="flex col-span-2 lg:col-span-1 items-center justify-start">
                      Products
                    </div>
                    <div className="flex items-center justify-start">
                      Category
                    </div>
                    <div className="flex items-center justify-start">
                      Quantity
                    </div>
                    <div className="flex items-center justify-start">Price</div>
                  </div>

                  {/* products */}
                  <div className="max-h-[30rem] overflow-auto">
                    {cartItems.products.length <= 0 ? (
                      <div className="h-[20rem] flex flex-col items-center justify-center">
                        <p className="text-2xl">
                          You didn&apos;t selected any products yet
                        </p>
                        <Link
                          href={"/shop"}
                          className="toyButton flex items-center gap-2"
                        >
                          <MdKeyboardBackspace className="text-2xl" />
                          Shop now
                        </Link>
                      </div>
                    ) : (
                      cartItems.products.map((product) => (
                        <div
                          className="grid grid-cols-5 lg:grid-cols-4 p-2"
                          key={product._id}
                        >
                          {/* product */}
                          <div className="col-span-2 lg:col-span-1 flex items-center gap-3 lg:gap-5 relative ">
                            <div className="w-20 h-16">
                              <Image
                                src={product.image}
                                alt="product image"
                                width={200}
                                height={200}
                                className="w-20 h-16 rounded-md"
                              />
                            </div>

                            <div className="flex items-center ">
                              <div className="flex flex-col">
                                <span>{product.name}</span>
                                <span className="text-sm">{product.brand}</span>
                              </div>
                            </div>
                            <button
                              onClick={() => handleDelete(product._id)}
                              className="absolute bg-white text-primary p-1 cursor-pointer rounded-full flex items-center justify-center -top-2  shadow-lg -left-2  "
                            >
                              <AiOutlineClose className="text-primary text-sm" />
                            </button>
                          </div>

                          {/* category */}
                          <div className="flex items-center justify-start">
                            <div className="flex flex-col">
                              <span>{product.category}</span>
                            </div>
                          </div>

                          {/* quantity */}
                          <div className="flex items-center justify-start">
                            <div className="flex items-center gap-5">
                              <div
                                className={`flex items-center justify-center gap-2 border border-black border-dotted py-3 px-5 rounded-50 bg-transparent text-black `}
                              >
                                <button
                                  className="text-base"
                                  onClick={(e) => {
                                    e.preventDefault();
                                    handleQuantity(product._id, "minus");
                                  }}
                                >
                                  <AiOutlineMinus />
                                </button>
                                <input
                                  type="number"
                                  readOnly
                                  value={quantities[product._id] || 1}
                                  id={`productQuantity_${product._id}`}
                                  name={`productQuantity_${product._id}`}
                                  className="bg-transparent  text-center text-black font-bold text-sm outline-none w-12"
                                />
                                <button
                                  className="text-base"
                                  onClick={(e) => {
                                    e.preventDefault();
                                    handleQuantity(product._id, "plus");
                                  }}
                                >
                                  <AiOutlinePlus />
                                </button>
                              </div>
                            </div>
                          </div>

                          {/* price */}
                          <div className="flex items-center justify-start">
                            $ {product.total}
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                </div>
                <div className="grid grid-cols-4  w-[50rem] lg:w-full overflow-auto">
                  <div className="col-span-3">
                    Total Quantity: {cartItems.totalItem}
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="border-b border-dotted py-2">
                      Delivery Cost: 50
                    </span>
                    <span>Subtotal: {(cartItems.totalPrice + 50).toFixed(2)}</span>
                  </div>
                </div>
              </div>
            )}

            {/* Shipping Details */}
            <div className="basis-1/4">
              <div className="text-4xl font-semibold pb-0">
                Shipping details
              </div>
              <form onSubmit={handleCheckout}>
                {/* Name */}
                <div className="form-control relative my-6 w-full">
                  <input
                    autoComplete="off"
                    id="name"
                    name="name"
                    type="name"
                    className="peer placeholder-transparent h-10 w-full   bg-transparent text-black focus:outline-none focus:borer-rose-600 border-b-black/50 border-b"
                    placeholder="name"
                    required
                  />
                  <label
                    htmlFor="name"
                    className="absolute left-0 -top-3.5 text-black text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-black peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-black peer-focus:text-sm"
                  >
                    Name
                  </label>
                </div>

                {/* email */}
                <div className="form-control relative my-6">
                  <input
                    autoComplete="off"
                    id="email"
                    name="email"
                    type="email"
                    className="peer placeholder-transparent h-10 w-full   bg-transparent text-black focus:outline-none focus:borer-rose-600 border-b-black/50 border-b"
                    placeholder="email"
                    required
                  />
                  <label
                    htmlFor="email"
                    className="absolute left-0 -top-3.5 text-black text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-black peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-black peer-focus:text-sm"
                  >
                    Email
                  </label>
                </div>

                {/* Phone */}
                <div className="form-control relative my-6">
                  <input
                    autoComplete="off"
                    id="phone"
                    name="phone"
                    type="tel"
                    className="peer placeholder-transparent h-10 w-full   bg-transparent text-black focus:outline-none focus:borer-rose-600 border-b-black/50 border-b"
                    placeholder="phone"
                    required
                  />
                  <label
                    htmlFor="phone"
                    className="absolute left-0 -top-3.5 text-black text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-black peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-black peer-focus:text-sm"
                  >
                    Phone
                  </label>
                </div>

                {/* address */}
                <div className="form-control relative my-6">
                  <input
                    autoComplete="off"
                    id="address"
                    name="address"
                    type="text"
                    className="peer placeholder-transparent h-10 w-full   bg-transparent text-black focus:outline-none focus:borer-rose-600 border-b-black/50 border-b"
                    placeholder="address"
                    required
                  />
                  <label
                    htmlFor="address"
                    className="absolute left-0 -top-3.5 text-black text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-black peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-black peer-focus:text-sm"
                  >
                    Address
                  </label>
                </div>

                {/* country */}
                <div className="form-control relative my-6">
                  <input
                    autoComplete="off"
                    id="country"
                    name="country"
                    type="text"
                    className="peer placeholder-transparent h-10 w-full   bg-transparent text-black focus:outline-none focus:borer-rose-600 border-b-black/50 border-b"
                    placeholder="country"
                    required
                  />
                  <label
                    htmlFor="country"
                    className="absolute left-0 -top-3.5 text-black text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-black peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-black peer-focus:text-sm"
                  >
                    Country
                  </label>
                </div>
                <div className="flex gap-2 w-full">
                  {/* City */}
                  <div className="form-control w-full relative my-6">
                    <input
                      autoComplete="off"
                      id="city"
                      name="city"
                      type="text"
                      className="peer placeholder-transparent h-10 w-full   bg-transparent text-black focus:outline-none focus:borer-rose-600 border-b-black/50 border-b"
                      placeholder="city"
                      required
                    />
                    <label
                      htmlFor="city"
                      className="absolute left-0 -top-3.5 text-black text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-black peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-black peer-focus:text-sm"
                    >
                      City
                    </label>
                  </div>

                  {/* postal code */}
                  <div className="form-control w-full relative my-6">
                    <input
                      autoComplete="off"
                      id="postal"
                      name="postal"
                      type="name"
                      className="peer placeholder-transparent h-10 w-full  bg-transparent text-black focus:outline-none focus:borer-rose-600 border-b-black/50 border-b"
                      placeholder="postal"
                      required
                    />
                    <label
                      htmlFor="postal"
                      className="absolute left-0 -top-3.5 text-black text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-black peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-black peer-focus:text-sm"
                    >
                      Postal Code
                    </label>
                  </div>
                </div>

                <button className="text-nowrap border rounded-none py-1 lg:px-3 lg:py-2 xl:px-5 xl:py-3 bg-transparent w-full border-primary hover:bg-primary hover:text-secondary transition-all duration-300 active:scale-95">
                  Checkout and place order
                </button>
              </form>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Cart;
