import { ReactNode } from "react";

interface InputProps {
  label: string;
  icon: ReactNode;
  placeholder: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  registerProps: any;
}

export default function Input({
  label,
  icon,
  placeholder,
  registerProps,
}: InputProps) {
  return (
    <>
      <div className="space-y-2">
        <label
          className="text-[0.6875rem] font-bold uppercase tracking-widest text-slate-400 block"
          htmlFor="username"
        >
          {label}
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 text-lg">
            {icon}
          </div>
          <input
            id="username"
            name="username"
            type="text"
            placeholder={placeholder}
            className="block w-full pl-11 pr-4 py-3 bg-slate-50 border-none rounded-lg focus:ring-2 focus:ring-blue-100 focus:bg-white transition-all text-sm placeholder:text-slate-400"
            {...registerProps}
          />
        </div>
      </div>
    </>
  );
}
