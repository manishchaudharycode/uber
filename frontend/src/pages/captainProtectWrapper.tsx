import { API_URL } from "@/config/config";
import { UseCaptain } from "@/context/captainContext";
import axios from "axios";
import { useEffect, useState, type ReactNode } from "react";
import { useNavigate } from "react-router-dom";

function CaptainProtectWrapper({ children }: { children: ReactNode }) {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const { setCaptain } = UseCaptain();
  const [isLoading, setIsLoading] = useState(true); 

  useEffect(() => {
    if (!token) {
      navigate("/captain-login");
      return;
    }

    const fetchCaptainProfile = async () => {
      try {
        const res = await axios.get(`${API_URL}/captains/profile`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (res.status === 200) {
          setCaptain(res.data.captain);
        } else {
          navigate("/captain-login");
        }
      } catch (error) {
        console.error("Failed to load captain profile:", error);
        localStorage.removeItem('token')
        navigate("/captain-login");
      } finally {
        setIsLoading(false);
      }
    };

    fetchCaptainProfile();
  }, [token, navigate, setCaptain]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen text-xl font-semibold">
        Loading...
      </div>
    );
  }

  return <>{children}</>;
}

export default CaptainProtectWrapper;
