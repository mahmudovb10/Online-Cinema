import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIspending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const req = await fetch(url);
        if (!req.ok) {
          throw new Error("Something Went Wrong :(");
        }
        const result = await req.json();
        setData(result);
      } catch (err) {
        setError(err);
      } finally {
        setIspending(false);
      }
    };
    fetchData();
  }, [url]);
  return { data, isPending, error };
};
