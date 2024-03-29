'use client'

import React from "react";

import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

import Link from 'next/link';
import Image from 'next/image';



const Login = () => {
  return (
    <>
      <div className="hero min-h-screen bg-none backdrop-blur-sm bg-primary/10">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <Image src={'/Image/login2.svg'} alt="" width={300} height={300} className="w-full" />

          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-gradient-to-tr from-primary/10 to-transparent bg-transparent ">
            <form  className="card-body bg-transparent">
              <div className="text-3xl text-center  font-semibold text-black ">
                Please Login
              </div>
              <div className="form-control relative my-6">
                <input
                  autoComplete="off"
                  id="email"
                  name="email"
                  type="email"
                  className="peer placeholder-transparent h-10 w-full   bg-transparent text-black focus:outline-none focus:borer-rose-600 border-b-black/50 border-b-2"
                  placeholder="email"
                  required
                />
                <label
                  htmlFor="email"
                  className="absolute left-0 -top-3.5 text-black text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-black peer-focus:text-sm"
                >
                  Email
                </label>
              </div>
              <div className="form-control relative ">
                <input
                  autoComplete="off"
                  id="password"
                  name="password"
                  type="password"
                  className="peer placeholder-transparent h-10 w-full   bg-transparent text-black focus:outline-none focus:borer-rose-600 border-b-black/50 border-b-2"
                  placeholder="Password"
                  required
                />
                <label
                  htmlFor="password"
                  className="absolute left-0 -top-3.5 text-black text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-black peer-focus:text-sm"
                >
                  Password
                </label>
              </div>
              <div className="text-xs text-black">
                Don&apos;t have an account?
                <Link
                  href="/register"
                  className="hover:text-gray-400 hover:underline"
                >
                  Register
                </Link>
              </div>
              {/*{error && (
                <div className="text-xs text-warning">There is an error</div>
              )}*/}
              <div className="form-control mt-6">
                <button type="submit" className="toyButton  ">
                  Login
                </button>
              </div>

              <div className="divider text-black">OR</div>
              <div className="form-control flex flex-row justify-center gap-4 ">
                {/* login with github button */}
                <div
                  className="btn btn-circle border-black text-black "
                //  onClick={handleGithubLogin}
                >
                  <FaGithub className="text-3xl" />
                </div>
                <div
                  //login with google button

                  className="btn btn-circle border-black "
                //  onClick={handleGoogleLogin}
                >
                  <FcGoogle className="text-3xl" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
