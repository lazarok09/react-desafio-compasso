import { useState } from "react";
import { UserContext } from "./context";

export const UserContextProvider = ({ children }) => {
  /* será mudado para reducer */
  const [user, setUser] = useState();
  /* o useRef em volta das actions previne um loop infinito por parte do useEffect ao recriar o objeto repetidas vezes */
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
