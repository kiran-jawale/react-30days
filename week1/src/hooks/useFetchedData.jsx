import React,{ useState, useEffect} from "react";
import axios from 'axios'

export default function useFetchedData(url) {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        async function useFetch() {
          try {
            setError(false);
            const response = await fetch(url , {
                method: 'GET',
                headers: {
                    'Content-Type':'application/json'
                }
            });
            const json = await response.json(); // parse data as json
            const data = await json.data.data; //getting array of onjects
            console.log(data);
            setData(data);
          } catch (err) {
            setError(true);
            console.log(err);
          } finally {
            setLoading(false);
          }
        }
        useFetch();
      }, [url]);

    return [data, loading, error];

}