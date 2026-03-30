"use client";

import React from "react";
import Link from "next/link";
import { MdInsights } from "react-icons/md";

type Props = {
  title?: string;
  children: React.ReactNode;
};

export default function AuthLayout({ children }: Props) {
  return (
    <>
      <div className="min-h-screen flex flex-col bg-gray-100">
        <main className="grow flex items-center justify-center px-4 py-12">
          <div className="w-full max-w-md">
            {/* Branding Header */}
            <div className="mb-10 text-center md:text-left">
              <div className="flex gap-3">
                <div className="inline-flex items-center justify-center p-3 rounded-xl bg-primary-container text-on-primary-container mb-6 atmospheric-shadow bg-blue-500 text-white text-xl">
                  <MdInsights />
                </div>
                <h1
                  className="text-4xl font-black tracking-tighter mb-2"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  Curator CRM
                </h1>
              </div>
              <p className="text-sm font-medium tracking-tight text-slate-500">
                Precision Intelligence Platform
              </p>
            </div>

            {/* Card */}
            <div className="bg-white rounded-xl atmospheric-shadow p-8 md:p-10">
              {children}
            </div>
          </div>
        </main>

        <footer className="w-full py-8 border-t border-slate-100 bg-white">
          <div className="flex flex-col md:flex-row justify-between items-center px-8 max-w-7xl mx-auto space-y-4 md:space-y-0">
            <div
              className="text-xs tracking-widest uppercase text-slate-400"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              © {new Date().getFullYear()} Curator CRM. All rights reserved.
            </div>
            <div className="flex gap-6">
              <Link
                className="text-xs tracking-widest uppercase text-slate-400 hover:text-blue-500 transition-colors"
                href="#"
              >
                Privacy Policy
              </Link>
              <Link
                className="text-xs tracking-widest uppercase text-slate-400 hover:text-blue-500 transition-colors"
                href="#"
              >
                Terms of Service
              </Link>
              <Link
                className="text-xs tracking-widest uppercase text-slate-400 hover:text-blue-500 transition-colors"
                href="#"
              >
                Security
              </Link>
            </div>
          </div>
        </footer>

        {/* Decorative elements */}
        <div className="fixed top-0 left-0 -translate-x-1/4 -translate-y-1/4 w-96 h-96 bg-blue-50 rounded-full blur-[100px] pointer-events-none" />
        <div className="fixed bottom-0 right-0 translate-x-1/4 translate-y-1/4 w-64 h-64 bg-indigo-50 rounded-full blur-[80px] pointer-events-none" />
      </div>
    </>
  );
}
