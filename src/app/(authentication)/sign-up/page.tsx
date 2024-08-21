"use client"
import React from 'react'
import { useForm } from "react-hook-form";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import Image from "next/image";


function SignUp() {
  const [visible, setVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const toggleVisibility = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    setVisible(!visible);
  };

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const password = watch("password");

//   const onSubmit = async (data) => {
//     setIsLoading(true);
//     // Replace with your signup logic
//     try {
//       // await signupUser(data);
//       toast.success("Account created successfully");
//       setTimeout(() => {
//         router.push("/auth/confirm", { state: data.email });
//       }, 3000);
//     } catch (error) {
//       toast.error("Error Creating account. Check your credentials");
//     }
//     setIsLoading(false);
//   };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="mb-8 shadow-2xl">
        <Link href="/">
          <Image className="w-[50px] h-[50px] rounded-full" src={"/images/akuko_logo.png"} alt="brandLogo" width={128} height={128}/>
        </Link>
      </div>
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Create Account</h1>
        <form>
          <div className="mb-4">
            <input
              type="text"
              id="firstname"
              placeholder="Enter your first name..."
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              {...register("firstName", { required: true, minLength: 3 })}
            />
            {errors.firstName && (
              <span className="text-red-500 text-sm">Should be at least 3 characters</span>
            )}
          </div>
          <div className="mb-4">
            <input
              type="text"
              id="lastName"
              placeholder="Enter your last name..."
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              {...register("lastName", { required: true, minLength: 3 })}
            />
            {errors.lastName && (
              <span className="text-red-500 text-sm">Should be at least 3 characters</span>
            )}
          </div>

          <div className="mb-4">
            <input
              type="email"
              placeholder="Enter your email address..."
              id="email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              {...register("email", { required: true })}
            />
            {errors.email && <span className="text-red-500 text-sm">email is required</span>}
          </div>

          <div className="relative mb-8">
            <input
              type={visible ? "text" : "password"}
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
              id="password"
              placeholder="Password"
              {...register("password", { required: true, minLength: 8 })}
            />
            <span className="absolute right-3 top-3 cursor-pointer" onClick={toggleVisibility}>
              {visible ? <FaEye /> : <FaEyeSlash />}
            </span>
          </div>

          {errors.password && (
            <span className="text-red-500 text-sm">
              password should be at least 8 characters long
            </span>
          )}
          <button type="submit" className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition duratio-300 mb-4">
            {isLoading ? <AiOutlineLoading3Quarters className="animate-spin mx-auto" /> : "Create Account"}
          </button>

          <div className="flex items-center space-x-2 mb-4">
            <input
              type="checkbox"
              id="terms"
              {...register("TandC", { required: true })}
            />
            <span className="text-sm">
              “I agree to Akuko&apos;s{" "}
              <Link href="/terms" className="text-blue-500">Terms & Conditions</Link>
            </span>
            {errors.terms && (
              <span className="text-sm">
                Accept the terms and Conditions to complete registration
              </span>
            )}
          </div>
        </form>
      </div>

      <p className="-translate-y-[70px] text-black lg:-translate-y-[50px] mt-4 mb-4">
        <span className="text-sm">Already have an account?</span>{" "}
        <Link href="/auth/login" className=" text-blue-500">
          Sign in
        </Link>
      </p>
      <ToastContainer />
    </div>
  );
}

export default SignUp;



