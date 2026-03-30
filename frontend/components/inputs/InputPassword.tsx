"use client";
import { useState } from "react";
import { FaEye, FaEyeSlash, FaLock } from "react-icons/fa";

interface InputPassowrdProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  registerProps: any;
}

export default function InputPassword({ registerProps }: InputPassowrdProps) {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <>
      <div className="space-y-2">
        <label
          className="text-[0.6875rem] font-bold uppercase tracking-widest text-slate-400 block"
          htmlFor="password"
        >
          Password
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <FaLock className="material-symbols-outlined text-slate-400 text-lg" />
          </div>
          <input
            id="password"
            name="password"
            type={showPassword ? "text" : "password"}
            placeholder="••••••••"
            className="block w-full pl-11 pr-12 py-3 bg-slate-50 border-none rounded-lg focus:ring-2 focus:ring-blue-100 focus:bg-white transition-all text-sm placeholder:text-slate-400"
            {...registerProps}
          />
          <button
            className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-slate-600"
            type="button"
            aria-label="toggle password visibility"
          >
            {showPassword ? (
              <FaEyeSlash
                className="material-symbols-outlined text-lg"
                onClick={() => setShowPassword(false)}
              />
            ) : (
              <FaEye
                className="material-symbols-outlined text-lg"
                onClick={() => setShowPassword(true)}
              />
            )}
          </button>
        </div>
      </div>
    </>
  );
}
