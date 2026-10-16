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
import { useLoginUser } from "@/services/api/mutations";
import { toast } from "@/components/ui/toast";
import { setCookie } from "@/services/storage";

export default function Login() {

  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLogin = () => {
    useLoginUser(username, password)
      .then((response) => {
        const { data } = response;
        const firstName = data.firstName;
        setCookie("userData", JSON.stringify(data));
        toast.add({
          title: "Login successful",
          description: `You have successfully logged in as ${firstName}`,
          type: "success",
        });
      })
      .catch((error) => {
        console.error(error);
        toast.add({
          title: "Login failed",
          description: "Please check your credentials and try again",
          type: "error",
        });
      });
  };

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

            Welcome back

          </h1>

          <p className="mt-2 text-sm text-slate-400">

            Log in to continue to your account.

          </p>

        </div>

        <Card className="border border-white/10 bg-slate-900/80 text-white shadow-2xl shadow-black/30 backdrop-blur-xl">

          <CardHeader className="space-y-1 pb-4">

            <CardTitle className="text-xl">Log in</CardTitle>

            <CardDescription className="text-slate-400">

              Enter your username and password below.

            </CardDescription>

          </CardHeader>

          <CardContent>

            <form className="space-y-5">

              <div className="space-y-2">

                <Label htmlFor="username">Username</Label>

                <Input

                  id="username"
                  type="text"
                  placeholder="Enter your username"
                  autoComplete="username"
                  required
                  onChange={(e) => setUsername(e.target.value)}
                  className="h-11 border-white/10 bg-slate-950/70 text-white placeholder:text-slate-500 focus-visible:ring-indigo-500"

                />

              </div>

              <div className="space-y-2">

                <div className="flex items-center justify-between">

                  <Label htmlFor="login-password">Password</Label>

                </div>

                <div className="relative">

                  <Input

                    id="login-password"

                    type={showPassword ? "text" : "password"}

                    placeholder="Enter your password"

                    autoComplete="current-password"

                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}

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

              <Button

                type="submit"
                onClick= {handleLogin}

                className="h-11 w-full bg-gradient-to-r from-indigo-500 to-purple-600 font-semibold text-white hover:from-indigo-400 hover:to-purple-500"

              >

                Log in

              </Button>

            </form>

            <p className="mt-6 text-center text-sm text-slate-400">

              Don't have an account?{" "}

              <Link

                to="/signup"

                className="font-semibold text-indigo-300 hover:text-indigo-200"

              >

                Sign up

              </Link>

            </p>

          </CardContent>

        </Card>

        <p className="mt-6 text-center text-xs text-slate-500">

          Secure access to your account

        </p>

      </section>

    </main>

  );

}