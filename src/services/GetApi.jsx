import { useState } from "react";
import { useEffect } from "react";

const GetApi = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abort = new AbortController();

    setTimeout(() => {
      fetch(url, { signal: abort.signal })
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setData(data);
          setIsPending(false);
          setError(null);
        })
        .catch((err) => {
          if (err.name === "AbortError") {
            console.log("fetch aborted", err.message);
          } else {
            setIsPending(false);
            setError(err.message);
          }
        });
    }, 1000);
    return () => abort.abort();
  }, [url]);

  return {
    data,
    isPending,
    error,
  };
};

export default GetApi;