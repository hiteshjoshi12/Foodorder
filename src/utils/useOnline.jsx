import React, { useEffect, useState } from "react";

const useOnline = () => {
  const [isonline, setisonline] = useState(true);

  useEffect(() => {
    const handelonline = () => {
      setisonline(true);
    };
    const handeloffline = () => {
      setisonline(false);
    };
    window.addEventListener("online", handelonline);
    window.addEventListener("offline", handeloffline);

    return () => {
      window.removeEventListener("online", handelonline);
      window.removeEventListener("offline", handeloffline);
    };
  }, []);

  return isonline;
};

export default useOnline;
