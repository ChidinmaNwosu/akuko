"use client"
import { useState } from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import Image from "next/image";

function SignIn() {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
    const router = useRouter();

  const successMsg = (message:any) => {
    toast(message);
  };

  const errorMsg = (message:any) => {
    toast.error(message);
  };

//   const onSubmit = async (data: any, error: { preventDefault: () => void; }) => {
//     error.preventDefault();
//     setIsLoading(true);

//     await dispatch(loginUser(data)).then((result) => {
//       if (result?.meta?.requestStatus === "fulfilled") {
//         successMsg(`Login Successful`);
//         navigate("/user/dashboard");
//       } else if (
//         result?.error?.message === "Request failed with status code 400"
//       ) {
//         errorMsg(`User not found`);
//       } else if (result?.error) {
//         errorMsg(`Error logging in. try again!!!!`);
//       }
//     });
//     setIsLoading(false);
//   };

  const [visible, setVisible] = useState(false);
  const toggleVisibility = (error: { preventDefault: () => void; }) => {
    error.preventDefault();
    setVisible(!visible);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="mb-8 ">
        <Link href="/">
          <Image className="w-[50p] h-[50p] rounded-full" src={"/images/akuko_logo.png"} alt="brandLogo" width={128} height={128}/>
        </Link>
      </div>
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Welcome Back!</h1>
        <form className="space-y-6">
          <div>
            <input
              type="email"
              id="email"
              placeholder="Enter your email address"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="text-red-500 text-sm">Enter valid email address</span>
            )}
          </div>
          <div className="relative">
            <input
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              type={visible ? "text" : "password"}
              placeholder="Password"
              {...register("password", { required: true })}
            />
            <span className="absolute right-3 top-3 cursor-pointer" onClick={toggleVisibility}>
            {visible ? <FaEye /> : <FaEyeSlash />}
            </span>
          </div>
          {errors.password && (
            <span className="text-red-500 text-sm">Password is required</span>
          )}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            {isLoading ? <AiOutlineLoading3Quarters className="animate-spin mx-auto" /> : "Sign in"}
          </button>
          <div className="flex justify-between items-center mt-4">
            <Link href="/auth/forgot-password" className="text-blue-500">Forgot password?</Link>
          </div>
        </form>
      </div>
      <p className="mt-4 text-black">
        <span className="-translate-y-[70px] text-black lg:-translate-y-[50px] text-sm">Don&apos;t have an account?</span>{" "}
        <Link href="/auth/signup" className="text-blue-500">Create account</Link>
      </p>
      <ToastContainer />
    </div>
  );
}

export default SignIn;