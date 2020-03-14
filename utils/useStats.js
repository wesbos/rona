import { useState, useEffect } from 'react';

export default function useStats(url) {
  const [stats, setStats] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      
      const data = await fetch(url)
        .then(res => res.json())
        .catch(err => {
          setError(err);
        });
      
      if (data.error) {
        setStats();
        setError(data.error);
      } else {
        setStats(data);
        setError();
      }
      setLoading(false);
    }
    fetchData();
  }, [url]);
  return {
    stats,
    loading,
    error,
  };
}
