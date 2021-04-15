import { useCallback, useEffect } from "react";

const DetectNetwork = () => {
  const handleBackOnline = useCallback(() => {
    console.log("you back online");
    // Add some stuff here when connection is back online;
  }, []);

  const handleOffline = useCallback(() => {
    console.log("You are offline");
    // Add some stuff here when lost connection.
  }, []);

  useEffect(() => {
    window.addEventListener("offline", handleOffline);
    window.addEventListener("online", handleBackOnline);
    return () => {
      window.addEventListener("offline", handleOffline);
      window.addEventListener("online", handleBackOnline);
    };
  }, [handleBackOnline, handleOffline]);
};

export default DetectNetwork;
