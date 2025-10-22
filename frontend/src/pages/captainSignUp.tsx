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
import { API_URL } from "@/config/config";
import { UseCaptain } from "@/context/captainContext";
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


export function CaptainSignUp() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [vehicleColor, setVehicleColor] = useState("");
  const [vehiclePlate, setVehiclePlate] = useState("");
  const [vehicleCapacity, setVehicleCapacity] = useState("");
  const [vehicleType, setVehicleType] = useState("");
const {setCaptain} = UseCaptain()
const navigate = useNavigate()





  const submistHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${API_URL}/captains/register`,{
        fullname:fullname,
      email: email,
      password: password,
      vehicle:{
        plate:vehiclePlate,
        color: vehicleColor,
        capacity:vehicleCapacity,
        vehicleType:vehicleType
      }
      })
      if (res.status === 200 || res.status === 201) {
        const data = res.data;
        setCaptain(data.captain)
        localStorage.setItem('token', data.token)
        navigate('/captain-home')
      }
       setEmail('')
     setPassword('')
     setFullname('')
     setVehicleCapacity('')
     setVehicleColor('')
     setVehiclePlate('')
     setVehicleType('')
    } catch (error) {
      console.error(error, "captin is not found"); 
    }
  };
  return (
    <Card className="bg-[url(https://imgs.search.brave.com/9rptOWvQoCy4h2WeHt-exAxaVhJtmzI8iBe3M7bemsM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZnJlZWNvZGVjYW1w/Lm9yZy9uZXdzL2Nv/bnRlbnQvaW1hZ2Vz/L3NpemUvdzIwMDAv/MjAyMS8wOS9mcm96/ZW4tYnViYmxlLTE5/NDMyMjRfMTI4MC5q/cGc)] bg-cover w-full h-h-screen">
      <CardHeader className="gap-5">
        <img
          className="h-15 mt-1 rounded-full"
          src="https://imgs.search.brave.com/qIWX7shdMCDsqigIhZKSrkqP9NRZuF0Ui-7QUlSSQQA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXQuY29t/L3cvZnVsbC8yLzgv/Ni8xMjU5MjAwLTE5/MjB4MTA4MC1kZXNr/dG9wLTEwODBwLXVi/ZXItd2FsbHBhcGVy/LXBob3RvLmpwZw"
          alt=""
        />
        <CardTitle className=" text-white">
          Login to your Uber account
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={submistHandler} className="">
          <div className="flex flex-col gap-2">
            <div className="grid gap-2">
              <Label className="text-white " htmlFor="fullname">
                FullName
              </Label>
              <Input
                className="bg-neutral-400"
                id="fullname"
                value={fullname}
                type="fullname"
                placeholder="Enter the fullname"
                onChange={(e) => setFullname(e.target.value)}
                required
              />
            </div>
            <div className="grid gap-1">
              <Label className="text-white " htmlFor="email">
                Email
              </Label>
              <Input
                className="bg-neutral-400"
                id="email"
                type="email"
                value={email}
                placeholder="m@example.com"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="grid gap-1">
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
                id="password"
                value={password}
                placeholder="Enter the Password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <h3 className=" mb-2 text-white font-bold">Vehicle Information</h3>

            <div className="w-1/2 flex gap-4">
              <div className="grid gap-1">
                <Label className="text-white " htmlFor="vehicleColor">
                  Vehicle Color
                </Label>
                <Input
                  className="bg-neutral-400 text-black px-18"
                  id="vehicleColor"
                  value={vehicleColor}
                  placeholder="Vehicle Color"
                  type="text"
                  onChange={(e) => setVehicleColor(e.target.value)}
                  required
                />
              </div>
              <div className="grid gap-1">
                <Label className="text-white " htmlFor="vehiclePlate">
                  Vehicle Plate
                </Label>
                <Input
                  className="bg-neutral-400 px-20"
                  value={vehiclePlate}
                  id="vehiclePlate"
                  placeholder="Vehicle Plate"
                  type="text"
                  onChange={(e) => setVehiclePlate(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="W-1/2 flex gap-4 ">
              <div className="grid gap-1">
                <Label className="text-white " htmlFor="vehicleCapacity">
                  Vehicle Capacity
                </Label>
                <Input
                  className="bg-neutral-400 "
                  value={vehicleCapacity}
                  placeholder="Vehicle Capacity"
                  type="number"
                  onChange={(e) => setVehicleCapacity(e.target.value)}
                  required
                />
              </div>

              <div className="grid gap-1">
                <Label className="text-white " htmlFor="vehicleType">
                  Vehicle Type
                </Label>
                <select
                  value={vehicleType}
                  onChange={(e) => setVehicleType(e.target.value)}
                  className=" border border-black rounded-md bg-neutral-400 py-1.5 "
                >
                  <option value="" disabled>
                    Select Vehicle Type
                  </option>
                  <option value="car">car</option>
                  <option value="auto">auto</option>
                  <option value="bike">bike</option>
                </select>
              </div>
            </div>

            <div>
              <Button type="submit" className="w-full border bg-neutral-400 mt-5">
                Captain Register
              </Button>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-5">
        <div className="text-white text-[16px]">
          {" "}
          <p>
            Already have a account?{" "}
            <Link to={"/captain-login"}>Login here</Link>
          </p>{" "}
        </div>
        <p className="text-white font-bold text-[6px]  leading-tight">
          By proceeding, you consent to get calls, whatsapp or SMS messages,
          including by automated means, from Uber and its affiliats to the
          number provided
        </p>
      </CardFooter>
    </Card>
  );
}
