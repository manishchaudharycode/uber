import {
  createContext,
  useState,
  useContext,
  type ReactNode,
  type Dispatch,
  type SetStateAction,
} from "react";

// Define user shape
export interface User {
  fullname: string;
  email: string;
  passsword: string
}

// Define context type
interface UserContextType {
  user: User;
  setUser: Dispatch<SetStateAction<User>>;
}

// Create context
const UserDataContext = createContext<UserContextType | undefined>(undefined);

// ✅ This is your provider
export function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User>({ fullname: "", email: "", passsword: ""});

  return (
    <UserDataContext.Provider value={{ user, setUser }}>
      {children}
    </UserDataContext.Provider>
  );
}

// ✅ This is your hook
export function UseUser() {
  const context = useContext(UserDataContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
}

export default UserProvider;
