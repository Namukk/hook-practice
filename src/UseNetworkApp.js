import React, { useState, useEffect } from "react";

const useNetwork = (onChange) => {
  const [status, setStatus] = useState(navigator.onLine);
  const handleChange = () => {
    if (typeof onChange === "function") {
      onChange(navigator.onLine);
    }
    setStatus(navigator.onLine);
  };
  useEffect(() => {
    window.addEventListener("online", handleChange);
    window.addEventListener("offline", handleChange);
    return (
      () => window.removeEventListener("online", handleChange),
      window.removeEventListener("offline", handleChange)
    );
    // () => {
    //     window.removeEventListener("online", handleChange);
    //     window.removeEventListener("offline", handleChange);
    //   }; 이렇게 적어도 됨 (return 대신) 단, 맨 윗줄에 /* eslint-disable */ 꼭 적어줘야함.
  }, []);
  return status;
};

export const UseNetworkApp = () => {
  const handleNetworkChange = (online) => {
    console.log(online ? "We just went online" : "We are offline");
  };
  const onLine = useNetwork(handleNetworkChange);
  return (
    <div>
      <h1> {onLine ? "Online" : "Offline"} </h1>
    </div>
  );
};
