"use client";

import Input from "@/components/inputs/Input";
import InputPassword from "@/components/inputs/InputPassword";
import { loginSchema } from "@/schemas/loginSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { FaArrowRight, FaGoogle, FaUser } from "react-icons/fa";
import { IoTerminal } from "react-icons/io5";
import z from "zod";

type LoginFormData = z.infer<typeof loginSchema>;

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({ resolver: zodResolver(loginSchema) });

  const submitLogin = (data: LoginFormData) => {
    console.log(data);
  };
  return (
    <>
      <div className="border-black">
        <div className="mb-8">
          <h2 className="text-xl font-bold text-slate-900 mb-1">
            Welcome back
          </h2>
          <p className="text-sm text-slate-500">
            Please enter your details to access your dashboard.
          </p>
        </div>
        <form className="space-y-6" onSubmit={handleSubmit(submitLogin)}>
          {/* Username */}
          <Input
            label="Username"
            icon={<FaUser />}
            placeholder="curator.admin"
            registerProps={register("username")}
          />
          {errors.username?.message ?? (
            <p className="text-red-500 text-sm">{errors.username?.message}</p>
          )}
          {/* Password */}
          <InputPassword registerProps={register("password")} />
          {errors.password?.message ?? (
            <p className="text-red-500 text-sm">{errors.password?.message}</p>
          )}

          {/* Remember */}
          <div className="flex items-center">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              className="h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-200 bg-slate-50"
            />
            <label
              htmlFor="remember-me"
              className="ml-3 block text-sm font-medium text-slate-500 mt-1"
            >
              Remember me for 30 days
            </label>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="bg-blue-500 cta-gradient w-full py-4 px-6 rounded-lg text-white font-bold tracking-tight shadow-lg shadow-blue-200 hover:shadow-xl hover:shadow-blue-300 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
          >
            Login to Dashboard
            <FaArrowRight className="material-symbols-outlined text-lg" />
          </button>

          {/* Divider */}
          <div className="relative my-8">
            <div
              aria-hidden="true"
              className="absolute inset-0 flex items-center"
            >
              <div className="w-full border-t border-slate-100" />
            </div>
            <div className="relative flex justify-center text-xs uppercase tracking-widest">
              <span className="bg-white px-4 text-slate-400 font-bold">
                Or continue with
              </span>
            </div>
          </div>

          {/* SSO */}
          <div className="grid grid-cols-2 gap-4">
            <button className="flex justify-center py-3 px-4 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors text-sm font-semibold text-slate-600">
              <FaGoogle className="material-symbols-outlined mr-2 text-lg" />
              Google
            </button>
            <button className="flex justify-center py-3 px-4 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors text-sm font-semibold text-slate-600">
              <IoTerminal className="material-symbols-outlined mr-2 text-lg" />
              SSO
            </button>
          </div>
        </form>

        <p className="mt-6 text-center text-sm text-slate-500">
          Dont have an account?{" "}
          <Link
            href="/register"
            className="text-blue-600 font-bold hover:underline"
          >
            Register
          </Link>
        </p>
      </div>
    </>
  );
}
