import * as React from "react";
import {releaseData} from "../data.ts";

export const useFetch = () => {
  const [data, setData] = React.useState([]);
  const [error, setError] = React.useState("");
  const [loading, setLoading] = React.useState(true);

  const fetchData = async () => {
    try {
      const {releases} = await releaseData()
      setData(releases);
    } catch (error) {
      setError(error);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  return {data, error, loading, refetch: fetchData};
};

export const ReleaseList = () => {
  const {data, error, loading, refetch} = useFetch();

  return data.map((item, index) => <div key={index}>{item.artist}</div>)
};