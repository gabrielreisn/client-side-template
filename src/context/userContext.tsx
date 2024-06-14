import * as React from "react";

type User = {
  login: string;
  password: string;
};

const defaultValue = {
  login: "",
  password: "",
};

const UserContext = React.createContext<User>(defaultValue);

type Props = {
  children: React.ReactNode;
};

export function UserContextProvider(props: Props) {
  const { children } = props;

  const [currentUser, setCurrentUser] = React.useState<User>(defaultValue);

  const value = React.useMemo<User>(
    () => ({ ...currentUser, setCurrentUser }),
    [currentUser],
  );

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export function useUserContext() {
  return React.useContext(UserContext);
}
