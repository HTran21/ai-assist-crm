import { ReactNode } from "react";
import InputPassword from "../inputs/InputPassword";
import Input from "../inputs/Input";
import { FaGoogle } from "react-icons/fa";
import { IoTerminal } from "react-icons/io5";

interface Field {
  label: string;
  icon?: ReactNode;
  placeholder: string;
  type?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  registerProps: any;
}
interface FormProps {
  title: string;
  description?: string;
  fields: Field[];
  submitLabel: string;
  onSubmit: () => void;
}

export default function Form({
  title,
  description,
  fields,
  submitLabel,
  onSubmit,
}: FormProps) {
  return (
    <div>
      <div className="mb-8">
        <h2 className="text-xl font-bold text-slate-900 mb-1">{title}</h2>
        {description && (
          <div className="text-sm text-slate-500">{description}</div>
        )}
      </div>
      <form
        className="space-y-6"
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit();
        }}
      >
        {fields.map((field, idx) =>
          field.type === "password" ? (
            <InputPassword key={idx} {...field.registerProps} />
          ) : (
            <Input
              key={idx}
              label={field.label}
              icon={field.icon}
              placeholder={field.placeholder}
              {...field.registerProps}
            />
          )
        )}

        <button
          type="submit"
          className="bg-blue-500 cta-gradient w-full py-4 px-6 rounded-lg text-white font-bold tracking-tight shadow-lg shadow-blue-200 hover:shadow-xl hover:shadow-blue-300 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
        >
          {submitLabel}
        </button>

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
    </div>
  );
}
