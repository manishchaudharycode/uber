import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UseCaptain } from "@/context/captainContext";
import axios from "axios";
import { API_URL } from "@/config/config";

export function CaptainLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const { setCaptain } = UseCaptain();
  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${API_URL}/captains/login`, {
        email,
        password,
      });
      if (res.status === 200 || res.status === 201) {
        const data = res.data;
        setCaptain(data.capatin);
        localStorage.setItem("token", data.token);
        navigate("/captain-home");
      }
      setEmail("");
      setPassword("");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("Server said:", error.response?.data);
        alert(error.response?.data?.message || "Login failed");
      } else {
        console.error(error);
      }
    }
  };

  return (
    <Card className="bg-[url(https://imgs.search.brave.com/9rptOWvQoCy4h2WeHt-exAxaVhJtmzI8iBe3M7bemsM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZnJlZWNvZGVjYW1w/Lm9yZy9uZXdzL2Nv/bnRlbnQvaW1hZ2Vz/L3NpemUvdzIwMDAv/MjAyMS8wOS9mcm96/ZW4tYnViYmxlLTE5/NDMyMjRfMTI4MC5q/cGc)] bg-cover w-full h-h-screen">
      <CardHeader className="gap-10">
        <img
          className="h-15 mt-5 rounded-full"
          src="https://imgs.search.brave.com/rSuSSYacx1C8jOOc6iUc_xal-ahK3vL90Pl-NKUkJSE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9mcmVl/bG9nb3BuZy5jb20v/aW1hZ2VzL2FsbF9p/bWcvMTY1OTc2MTQy/NXViZXItZHJpdmVy/LWxvZ28tcG5nLnBu/Zw"
          alt=""
        />
        <CardTitle className=" text-white">
          Login to your Uber account
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={submitHandler} className="">
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label className="text-white " htmlFor="email">
                Email
              </Label>
              <Input
                className="bg-neutral-400"
                value={email}
                type="email"
                placeholder="abc@gmail.com"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label
                  className="text-white
                "
                  htmlFor="password"
                >
                  Password
                </Label>
                <a
                  href="#"
                  className="ml-auto inline-block text-sm  text-white underline-offset-4 hover:underline"
                >
                  Forgot your password?
                </a>
              </div>
              <Input
                className="bg-neutral-400"
                placeholder="Enter the Password"
                value={password}
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div>
              <Button type="submit" className="w-full border bg-neutral-400">
                Login
              </Button>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-5">
        <div className="text-white font-bold">
          {" "}
          <p>
            Jion a fleet?{" "}
            <Link to={"/captain-signup"}>Register as a Captain</Link>
          </p>{" "}
        </div>
        <Link
          to={"/login"}
          className="w-full bg-neutral-800 text-white font-bold py-2 mt-40 items-center justify-center flex "
        >
          {" "}
          Sign in as user
        </Link>
      </CardFooter>
    </Card>
  );
}
