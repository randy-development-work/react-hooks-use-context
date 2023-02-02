import React, { useState, useContext } from "react";
import Header from "./Header";
import Profile from "./Profile";
// import the provider
import { UserProvider } from "../context/user";
import { ThemeContext } from "../context/theme";

function App() {
  // const [theme, setTheme] = useState("dark");
  //const [user, setUser] = useState(null);
  const { theme } = useContext(ThemeContext);
  return (
    <main className={theme}>
      {/* wrap components that need access to context data in the provider*/}
      <UserProvider>
        <Header />
        <Profile />

      </UserProvider>
    </main>
  );
}

export default App;
