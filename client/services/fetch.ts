import {useCallback, useEffect, useState} from 'react';
import {releaseData} from '../../server/data.ts'

export const useFetch = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchData = useCallback(async () => {
    try {
      const {releases} = await releaseData()
      setData(releases);
    } catch (error) {
      setError(error);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, []);

  return {data, error, loading, refetch: fetchData};
};
