
import { useState, useEffect } from 'react';

const useFetch = () => {
    const [data, setData] = useState([]);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            fetch("http://localhost:8000/books")
                .then(res => {
                    if (!res.ok) {
                        throw Error('Error fetching books data');
                    }
                    return res.json();
                })
                .then(data => {
                    setData(data);
                    setIsPending(false);
                    setError(null);
                })
                .catch(err => {
                    setIsPending(false);
                    setError(err.message);
                });
        }, 1000);
    }, ["http://localhost:8000/books"]);

    return { data, isPending, error };
}

export default useFetch;