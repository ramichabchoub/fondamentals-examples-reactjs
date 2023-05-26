import { createContext, useState, useEffect } from "react";

const NavigationContext = createContext();

const NavigationProvider = ({ children }) => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  // this is for forward and back clicks
  useEffect(() => {
    const handler = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener("popstate", handler);

    // Cleanup
    return () => window.removeEventListener("popstate", handler);
  }, []);

  const navigate = (path) => {
    window.history.pushState({}, "", path);
    setCurrentPath(path);
  };

  return (
    <NavigationContext.Provider value={{ currentPath, navigate }}>
      {children}
    </NavigationContext.Provider>
  );
};

export { NavigationProvider };
export default NavigationContext;
