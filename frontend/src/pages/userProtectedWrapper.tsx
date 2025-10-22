import { API_URL } from "@/config/config";
import { UseUser } from "@/context/userContext";
import axios from "axios";
import { useEffect, useState, type ReactNode } from "react";
import { useNavigate } from "react-router-dom";

function UserProtectedWrapper({ children }: { children: ReactNode }) {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const { setUser } = UseUser();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!token) {
      navigate("/login");
      return;
    }

    const fetchUserProfile = async () => {
      try {
        const res = await axios.get(`${API_URL}/users/profile`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (res.status === 200 && res.data?.user) {
          setUser(res.data.user);
        } else {
          throw new Error("Invalid user response");
        }
      } catch (error) {
        console.error("Failed to load user profile:", error);
        localStorage.removeItem("token");
        navigate("/login");
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserProfile();
  }, [token, navigate, setUser]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen text-xl font-semibold">
        Loading...
      </div>
    );
  }

  return <>{children}</>;
}

export default UserProtectedWrapper;
