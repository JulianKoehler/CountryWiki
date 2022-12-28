import { useState } from "react";
import { useCallback } from "react";

const useFetch = (fn: (data: []) => void) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getData = useCallback(
    async (endpoint: string) => {
      setIsLoading(true);
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}${endpoint}`);
        const resData: [] = await response.json();

        setIsLoading(false);
        fn(resData);
      } catch (error) {
        console.log(error);
      }
    },
    [fn]
  );

  return {
    isLoading,
    getData,
  };
};

export default useFetch;
