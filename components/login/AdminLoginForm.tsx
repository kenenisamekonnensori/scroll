"use client";

import Link from "next/link";
import { useActionState } from "react";
import { ArrowRight, AtSign, Globe, HelpCircle, Lock, Shield } from "lucide-react";
import { loginAdmin, type LoginFormState } from "@/app/login/actions";

const initialState: LoginFormState = {};

export function AdminLoginForm() {
  const [state, formAction, isPending] = useActionState(loginAdmin, initialState);

  return (
    <div className="w-full max-w-[380px]">
      <div className="mx-auto flex size-16 items-center justify-center rounded-[22px] bg-[#eef0ff] text-[#4b53c8] shadow-sm ring-1 ring-white/70">
        <Shield className="size-7" />
      </div>

      <div className="mt-8 text-center">
        <h1 className="text-4xl font-black tracking-tight text-slate-950">
          Welcome Back
        </h1>
        <p className="mt-3 text-base text-slate-500">
          Please enter your credentials to access the controller.
        </p>
      </div>

      <div className="mt-8 rounded-[28px] bg-white p-7 shadow-[0_18px_60px_rgba(148,163,184,0.18)] ring-1 ring-slate-200/80">
        <form action={formAction} className="space-y-5">
          <div>
            <label
              htmlFor="email"
              className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500"
            >
              Email Address
            </label>
            <div className="relative mt-3">
              <AtSign className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-slate-400" />
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="admin@scrollguard.com"
                className="h-12 w-full rounded-2xl border border-slate-200 bg-slate-100 pl-11 pr-4 text-sm text-slate-900 outline-none transition focus:border-[#4b53c8] focus:bg-white focus:ring-4 focus:ring-[#4b53c8]/10"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500"
              >
                Password
              </label>
              <Link
                href="/docs#troubleshooting"
                className="text-xs font-semibold text-[#4b53c8] hover:text-[#383f9c]"
              >
                Forgot?
              </Link>
            </div>
            <div className="relative mt-3">
              <Lock className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-slate-400" />
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                placeholder="Enter your password"
                className="h-12 w-full rounded-2xl border border-slate-200 bg-slate-100 pl-11 pr-4 text-sm text-slate-900 outline-none transition focus:border-[#4b53c8] focus:bg-white focus:ring-4 focus:ring-[#4b53c8]/10"
              />
            </div>
          </div>

          <label className="flex items-center gap-3 text-sm text-slate-500">
            <input
              type="checkbox"
              defaultChecked
              className="size-4 rounded border-slate-300 text-[#4b53c8] focus:ring-[#4b53c8]"
            />
            <span>Keep session active for 24 hours</span>
          </label>

          {state.error ? (
            <p className="rounded-2xl border border-red-100 bg-red-50 px-4 py-3 text-sm text-red-600">
              {state.error}
            </p>
          ) : null}

          <p className="text-xs text-slate-400">
            Use the configured admin credentials to unlock the dashboard.
          </p>

          <button
            type="submit"
            disabled={isPending}
            className="flex h-12 w-full items-center justify-center gap-2 rounded-2xl bg-[#4b53c8] px-5 text-sm font-semibold text-white transition hover:bg-[#383f9c] disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isPending ? "Signing In..." : "Sign In to Dashboard"}
            <ArrowRight className="size-4" />
          </button>
        </form>
      </div>

      <div className="mt-8 text-center">
        <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-slate-400">
          Authorized Personnel Only
        </p>
        <div className="mt-4 flex items-center justify-center gap-5 text-slate-300">
          <Globe className="size-4" />
          <Shield className="size-4" />
          <HelpCircle className="size-4" />
        </div>
      </div>
    </div>
  );
}
