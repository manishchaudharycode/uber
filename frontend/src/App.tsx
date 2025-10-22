import { Route, Routes } from "react-router-dom";
import { Start } from "./pages/start";
import UserLogin from "./pages/userLogin";
import UserSignUP from "./pages/userSignUP";
import { CaptainLogin } from "./pages/captainLogin";
import { CaptainSignUp } from "./pages/captainSignUp";
import Home from "./pages/home";
import UserProtectedWrapper from "./pages/userProtectedWrapper";
import UserLogout from "./pages/userLogout";
import CaptainHome from "./pages/captainHome";
import CaptainProtectWrapper from "./pages/captainProtectWrapper";
import Rading from "./pages/rading";
import CaptainRide from "./pages/captainRide";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route
          path="/home"
          element={
            <UserProtectedWrapper>
              <Home />
            </UserProtectedWrapper>
          }
        />
        <Route
          path="/user/logout"
          element={
            <UserProtectedWrapper>
              <UserLogout />
            </UserProtectedWrapper>
          }
        />
        <Route path="/captain-home" element={<CaptainHome /> }/>
        <Route path="/login" element={<UserLogin />} />
        <Route path="/captain-ride" element={<CaptainRide />} />
        <Route path="/rading" element={<Rading/>}/>
        <Route path="/signup" element={<UserSignUP />} />
        <Route path="/captain-login" element={<CaptainLogin />} />
        <Route path="/captain-signup" element={<CaptainSignUp />} />
        <Route
          path="/captain-home"
          element={
            <CaptainProtectWrapper>
              <CaptainHome />
            </CaptainProtectWrapper>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
