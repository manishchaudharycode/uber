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
import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UseUser } from "@/context/userContext";
import { API_URL } from "@/config/config";

export function SignUp() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");   
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { setUser } = UseUser();

  // ✅ Fixed spelling: "submistHandler" → "submitHandler"
  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${API_URL}/users/register`, { 
        fullname,
        email,
        password,
      });

      if (res.status === 201) {
        const data = res.data;
        setUser(data.user);
        localStorage.setItem("token", data.token);
        navigate("/home");
      }

      // Clear fields
      setEmail("");
      setFullname("");
      setPassword("");
    } catch (err) {
      console.error("Signup failed:", err);
      alert("Signup failed. Please try again.");
    }
  };

  return (
    <Card className="bg-[url('https://imgs.search.brave.com/9rptOWvQoCy4h2WeHt-exAxaVhJtmzI8iBe3M7bemsM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cuZnJlZWNvZGVjYW1wLm9yZy9uZXdzL2NvbnRlbnQvaW1hZ2VzL3NpemUvdzIwMDAvMjAyMS8wOS9mcm96ZW4tYnViYmxlLTE5NDMyMjRfMTI4MC5qcGc=')] bg-cover min-h-screen">
      <CardHeader className="gap-6 text-center">
        <img
          className="h-16 mx-auto mt-5 rounded-full"
          src="https://imgs.search.brave.com/qIWX7shdMCDsqigIhZKSrkqP9NRZuF0Ui-7QUlSSQQA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXQuY29t/L3cvZnVsbC8yLzgv/Ni8xMjU5MjAwLTE5/MjB4MTA4MC1kZXNr/dG9wLTEwODBwLXVi/ZXItd2FsbHBhcGVy/LXBob3RvLmpwZw"
          alt="Uber logo"
        />
        <CardTitle className="text-white text-xl">
          Create your Uber account
        </CardTitle>
      </CardHeader>

      <CardContent>
        <form onSubmit={submitHandler} className="space-y-6">
          <div className="grid gap-2">
            <Label className="text-white" htmlFor="fullname">
              Full Name
            </Label>
            <Input
              id="fullname"
              value={fullname}
              placeholder="Enter your full name"
              className="bg-neutral-400"
              onChange={(e) => setFullname(e.target.value)}
              required
            />
          </div>

          <div className="grid gap-2">
            <Label className="text-white" htmlFor="email">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              value={email}
              placeholder="m@example.com"
              className="bg-neutral-400"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="grid gap-2">
            <Label className="text-white" htmlFor="password">
              Password
            </Label>
            <Input
              id="password"
              type="password"
              value={password}
              placeholder="Enter your password"
              className="bg-neutral-400"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <Button type="submit" className="w-full bg-neutral-700 text-white hover:bg-neutral-800">
            Register
          </Button>
        </form>
      </CardContent>

      <CardFooter className="flex flex-col gap-5 text-center">
        <p className="text-white">
          Already have an account?{" "}
          <Link to="/login" className="underline">
            Login here
          </Link>
        </p>
        <p className="text-white text-[10px] leading-tight">
          By proceeding, you consent to receive calls, WhatsApp or SMS messages,
          including by automated means, from Uber and its affiliates to the
          number provided.
        </p>
      </CardFooter>
    </Card>
  );
}
