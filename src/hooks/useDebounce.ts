import { useEffect, useState } from "react";

const useDebounce = (value: string, time = 250) => {
  const [debounceValue, setDebounceValue] = useState(value);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebounceValue(value);
    }, time);
    return () => {
      clearTimeout(timeout);
    };
  }, [value, time]);

  return debounceValue;
};

export default useDebounce;
