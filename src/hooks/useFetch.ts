import { useState } from "react";
import { useCallback } from "react";

const useFetch = (fn: (data: []) => void) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [hasError, setHasError] = useState<boolean>(false);

  const getData = useCallback(
    async (endpoint: string) => {
      setIsLoading(true);
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}${endpoint}`);
        const resData: [] = await response.json();

        setIsLoading(false);
        setHasError(false);
        fn(resData);
      } catch (err) {
        setIsLoading(false);
        setHasError(true);
        console.log(err);
      }
    },
    [fn]
  );

  return {
    isLoading,
    hasError,
    getData,
  };
};

export default useFetch;
