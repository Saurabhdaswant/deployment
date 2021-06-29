import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [RealData, setRealData] = useState(null);
  const [error, setError] = useState(null);
  const [pending, setPending] = useState(true);

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw Error("you database dosent have data madar fakir");
        }
        return res.json();
      })
      .then((data) => {
        setRealData(data);
        setPending(false);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        setPending(false);
      });
  }, [url]);

  return { RealData, pending, error };
};

export default useFetch;
