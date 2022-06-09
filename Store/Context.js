import React, { createContext, useState, useContext } from 'react';
// import { userouter } from 'react-router-dom';
import { useRouter } from 'next/router';

export const StoreContext = createContext({});

export const StoreContextProvider = ({ children }) => {
  const router = useRouter();

  const [currView, setCurrView] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleNavigationLoading = (path) => {
    setLoading(true);

    setTimeout(() => {
      router.push(path);
    }, 400);
    setTimeout(() => {
      setLoading(false);
    }, 1100);
  };

  return (
    <StoreContext.Provider
      value={{
        currView,
        setCurrView,
        loading,
        setLoading,
        handleNavigationLoading,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

const useStore = () => useContext(StoreContext);

export default useStore;
