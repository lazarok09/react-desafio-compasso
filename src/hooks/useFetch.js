import { useState } from "react";

export const useFetch = () => {
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async (url, options) => {
    try {
      const response = await fetch(url, {
        method: "GET",
        headers: options,
      });

      const responseJSON = await response.json();

      await setLoading(false);

      return responseJSON;
    } catch (err) {
      setError((error) => err.message);
      setLoading(false);
      return;
    }
  };
  return [fetchData, isLoading, error];
};
