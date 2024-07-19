import React, { useState, useEffect } from "react";
import axios from 'axios';

export default function useAxiosData(apiEndPoint) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async function useAxios() {
      try {
        const response = await axios.get(apiEndPoint);
        const data = response.data.data.data; // freeapi.app
        console.log(data)
        setData(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    })();
  }, [apiEndPoint]);

  return [data, loading, error];
}