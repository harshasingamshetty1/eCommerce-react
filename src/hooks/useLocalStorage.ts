import { useEffect, useState } from "react";

// if its difficult to follow the ts version, check the commented js version
//essentially, we are just checking if the key "shopping-cart" already exists
// if so, use the existing value, else return the initialValue, which we are passing as []
export function useLocalStorage<T>(key: string, initialValue: T | (() => T)) {
  const [value, setValue] = useState<T>(() => {
    const jsonValue = localStorage.getItem(key);
    if (jsonValue != null) return JSON.parse(jsonValue);

    if (typeof initialValue === "function") {
      return (initialValue as () => T)();
    } else {
      return initialValue;
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue] as [typeof value, typeof setValue];
}

// import { useEffect, useState } from "react";
// export function useLocalStorage(key, initialValue) {
//   const [value, setValue] = useState(() => {
//     const jsonValue = localStorage.getItem(key);
//     if (jsonValue != null) return JSON.parse(jsonValue);

//     return initialValue;
//   });
//   useEffect(() => {
//     localStorage.setItem(key, JSON.stringify(value));
//   }, [key, value]);

//   return [value, setValue];
// }
