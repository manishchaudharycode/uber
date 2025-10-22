import {
  createContext,
  useState,
  useContext,
  type ReactNode,
  type Dispatch,
  type SetStateAction,
} from "react";

// Define user shape
export interface Captain {
  fullname: string;
  email: string;
  passsword: string
  vehicle:{
    capaciy:string,
    color:string,
    vehicleType: string,
    plate: string

  }
}

// Define context type
interface CaptainContextType {
  captain: Captain;
  setCaptain: Dispatch<SetStateAction<Captain>>;
}

// Create context
const CaptainDataContext = createContext<CaptainContextType | undefined>(undefined);

// ✅ This is your provider
export function CaptainProvider({ children }: { children: ReactNode }) {
  const [captain, setCaptain] = useState<Captain>({ fullname: "", email: "", passsword: "", vehicle:{capaciy:"", color:"", vehicleType:"", plate:""}});

  return (
    <CaptainDataContext.Provider value={{captain, setCaptain }}>
      {children}
    </CaptainDataContext.Provider>
  );
}

// ✅ This is your hook
export function UseCaptain() {
  const context = useContext(CaptainDataContext);
  if (!context) {
    throw new Error("useCaptain must be used within a CaptainProvider");
  }
  return context;
}

export default CaptainProvider;
