"use client";
import Input from "@/components/inputs/Input";
import InputPassword from "@/components/inputs/InputPassword";
import { registerSchema } from "@/schemas/registerSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { FaGoogle, FaUser } from "react-icons/fa";
import { IoTerminal } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import z from "zod";

type RegisteFormData = z.infer<typeof registerSchema>;

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisteFormData>({ resolver: zodResolver(registerSchema) });
  const submitRegister = (data: RegisteFormData) => {
    console.log(data);
  };
  return (
    <>
      <div>
        <div className="mb-8">
          <h2 className="text-xl font-bold text-slate-900 mb-1">
            Create your account
          </h2>
          <p className="text-sm text-slate-500">
            Join the precision intelligence ecosystem
          </p>
        </div>

        <form
          className="space-y-5"
          // onSubmit={(e) => {
          //   e.preventDefault();
          //   handleSubmit(submitRegister);
          // }}
          onSubmit={handleSubmit(submitRegister)}
        >
          <Input
            label="Full Name"
            placeholder="Alex Rivera"
            icon={<FaUser />}
            registerProps={register("fullName")}
          />
          {errors.fullName?.message ?? (
            <p className="text-red-500 text-sm">{errors.fullName?.message}</p>
          )}

          <Input
            label="Email Address"
            placeholder="alex@company.com"
            icon={<MdEmail />}
            registerProps={register("email")}
          />
          {errors.email?.message ?? (
            <p className="text-red-500 text-sm">{errors.email?.message}</p>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <InputPassword registerProps={register("password")} />
              {errors.password?.message ?? (
                <p className="text-red-500 text-sm">
                  {errors.password?.message}
                </p>
              )}
            </div>

            <div>
              <InputPassword registerProps={register("confirmPassword")} />
              {errors.confirmPassword?.message ?? (
                <p className="text-red-500 text-sm">
                  {errors.confirmPassword?.message}
                </p>
              )}
            </div>
          </div>
          <div className="flex items-center">
            <input
              id="terms"
              name="terms"
              type="checkbox"
              className="h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-200 bg-slate-50"
            />
            <label
              className="ml-3 text-xs text-on-surface-variant leading-tight mt-1"
              htmlFor="terms"
            >
              I agree to the{" "}
              <a
                className="text-primary font-medium hover:underline"
                href="#"
                aria-label="Terms of Service"
              >
                Terms of Service
              </a>{" "}
              and{" "}
              <a
                className="text-primary font-medium hover:underline"
                href="#"
                aria-label="Privacy Policy"
              >
                Privacy Policy
              </a>
            </label>
          </div>

          <button
            type="submit"
            className="bg-blue-500 cta-gradient w-full py-4 px-6 rounded-lg text-white font-bold tracking-tight shadow-lg shadow-blue-200 hover:shadow-xl hover:shadow-blue-300 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
          >
            Create Account
          </button>
        </form>

        <div className="relative my-8">
          <div
            aria-hidden="true"
            className="absolute inset-0 flex items-center"
          >
            <div className="w-full border-t border-slate-100" />
          </div>
          <div className="relative flex justify-center text-xs uppercase tracking-widest">
            <span className="bg-white px-4 text-slate-400 font-bold">
              Social Join
            </span>
          </div>
        </div>

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

        <div className="bg-surface-container-low p-6 text-center mt-6 rounded-b-xl">
          <p className="text-sm text-on-surface-variant">
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-primary font-bold hover:underline"
            >
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
