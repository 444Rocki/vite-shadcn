import { useState } from "react";

import { Link } from "react-router-dom";

import {

  Card,

  CardContent,

  CardDescription,

  CardHeader,

  CardTitle,

} from "@/components/ui/card";

import { Input } from "@/components/ui/input";

import { Button } from "@/components/ui/button";

import { Label } from "@/components/ui/label";

export default function Signup() {

  const [showPassword, setShowPassword] = useState(false);

  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (

    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-950 px-4 py-10 text-white">

      <div className="pointer-events-none absolute -left-32 -top-32 h-80 w-80 rounded-full bg-indigo-600/20 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-32 -right-32 h-80 w-80 rounded-full bg-purple-600/20 blur-3xl" />

      <section className="relative z-10 w-full max-w-md">

        <div className="mb-8 text-center">

          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 text-2xl font-bold shadow-lg shadow-indigo-500/20">

            A

          </div>

          <h1 className="text-3xl font-bold tracking-tight">

            Create your account

          </h1>

          <p className="mt-2 text-sm text-slate-400">

            Join us by filling in your details below.

          </p>

        </div>

        <Card className="border border-white/10 bg-slate-900/80 text-white shadow-2xl shadow-black/30 backdrop-blur-xl">

          <CardHeader className="space-y-1 pb-4">

            <CardTitle className="text-xl">Sign up</CardTitle>

            <CardDescription className="text-slate-400">

              It only takes a few minutes to get started.

            </CardDescription>

          </CardHeader>

          <CardContent>

            <form className="space-y-4">

              <div className="space-y-2">

                <Label htmlFor="signup-name">Full name</Label>

                <Input

                  id="signup-name"

                  type="text"

                  placeholder="Your full name"

                  autoComplete="name"

                  required

                  className="h-11 border-white/10 bg-slate-950/70 text-white placeholder:text-slate-500 focus-visible:ring-indigo-500"

                />

              </div>

              <div className="space-y-2">

                <Label htmlFor="signup-email">Email address</Label>

                <Input

                  id="signup-email"

                  type="email"

                  placeholder="you@example.com"

                  autoComplete="email"

                  required

                  className="h-11 border-white/10 bg-slate-950/70 text-white placeholder:text-slate-500 focus-visible:ring-indigo-500"

                />

              </div>

              <div className="space-y-2">

                <Label htmlFor="signup-password">Password</Label>

                <div className="relative">

                  <Input

                    id="signup-password"

                    type={showPassword ? "text" : "password"}

                    placeholder="Create a password"

                    autoComplete="new-password"

                    required

                    className="h-11 border-white/10 bg-slate-950/70 pr-16 text-white placeholder:text-slate-500 focus-visible:ring-indigo-500"

                  />

                  <button

                    type="button"

                    onClick={() => setShowPassword(!showPassword)}

                    aria-label={showPassword ? "Hide password" : "Show password"}

                    className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-medium text-indigo-300 hover:text-indigo-200"

                  >

                    {showPassword ? "Hide" : "Show"}

                  </button>

                </div>

              </div>

              <div className="space-y-2">

                <Label htmlFor="confirm-password">Confirm password</Label>

                <div className="relative">

                  <Input

                    id="confirm-password"

                    type={showConfirmPassword ? "text" : "password"}

                    placeholder="Enter your password again"

                    autoComplete="new-password"

                    required

                    className="h-11 border-white/10 bg-slate-950/70 pr-16 text-white placeholder:text-slate-500 focus-visible:ring-indigo-500"

                  />

                  <button

                    type="button"

                    onClick={() =>

                      setShowConfirmPassword(!showConfirmPassword)

                    }

                    aria-label={

                      showConfirmPassword

                        ? "Hide confirm password"

                        : "Show confirm password"

                    }

                    className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-medium text-indigo-300 hover:text-indigo-200"

                  >

                    {showConfirmPassword ? "Hide" : "Show"}

                  </button>

                </div>

              </div>

              <Button

                type="submit"

                className="h-11 w-full bg-gradient-to-r from-indigo-500 to-purple-600 font-semibold text-white hover:from-indigo-400 hover:to-purple-500"

              >

                Create account

              </Button>

            </form>

            <p className="mt-6 text-center text-sm text-slate-400">

              Already have an account?{" "}

              <Link

                to="/login"

                className="font-semibold text-indigo-300 hover:text-indigo-200"

              >

                Log in

              </Link>

            </p>

          </CardContent>

        </Card>

        <p className="mt-6 text-center text-xs text-slate-500">

          Start your journey with us

        </p>

      </section>

    </main>

  );

}