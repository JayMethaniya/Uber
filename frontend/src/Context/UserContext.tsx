import React from "react";

interface UserData {
  email: string;
  password: string;
  fullName: {
    firstName: string;
    lastName: string;
  };
}

interface UserContextType {
  user: UserData;
  setUser: React.Dispatch<React.SetStateAction<UserData>>;
}

export const UserDataContext = React.createContext<UserContextType | undefined>(undefined);

function UserContext({ children }: { children: React.ReactNode }) {
  const [user, setUser] = React.useState<UserData>({
    email: "",
    password: "",
    fullName: {
      firstName: "",
      lastName: "",
    },
  });

  return (
    <UserDataContext.Provider value={{ user, setUser }}>
      {children}
    </UserDataContext.Provider>
  );
}

export default UserContext;
