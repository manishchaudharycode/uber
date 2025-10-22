import { Button } from "@/components/ui/button";
import type React from "react";
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
import { Link } from "react-router-dom";
import { UseUser } from "@/context/userContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { API_URL } from "@/config/config";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userData] = useState({});
  const navigate = useNavigate();

  const { setUser } = UseUser();

  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${API_URL}/users/login`,{ email, password}
      );
      if (res.status === 201 || res.status === 200) {
        const data = res.data;
        setUser(data.user);
        localStorage.setItem('token', data.token)
        navigate("/home");
      }
      console.log(userData);
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
          src="https://imgs.search.brave.com/qIWX7shdMCDsqigIhZKSrkqP9NRZuF0Ui-7QUlSSQQA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXQuY29t/L3cvZnVsbC8yLzgv/Ni8xMjU5MjAwLTE5/MjB4MTA4MC1kZXNr/dG9wLTEwODBwLXVi/ZXItd2FsbHBhcGVy/LXBob3RvLmpwZw"
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
            New Here? <Link to={"/signup"}>Create new Account</Link>
          </p>{" "}
        </div>
        <Link
          to={"/captain-login"}
          className="w-full bg-neutral-400 py-2 mt-40 items-center justify-center flex "
        >
          {" "}
          Sign in as Captain
        </Link>
      </CardFooter>
    </Card>
  );
}
