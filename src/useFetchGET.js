import { useState, useEffect } from 'react';

const useFetchGET = (url) => {

    const [data, setData] = useState(null);
    const [erro, setErro] = useState(null);

    useEffect(() => {

        const abortCont = new AbortController();

        fetch(process.env.REACT_APP_SERVER_URL+url, {signal: abortCont.signal})
            .then(res => {
                if(!res.ok){
                    throw Error("Deu errado");
                }
                return res.json();
            })
            .then(data => {
                setData(data);
                setErro(null);
            })
            .catch(err => {
                if(err.name !== 'AbortError')
                setErro(err.message);
            })

            return () => abortCont.abort();

    },[url])

    return {data, erro};
}

export default useFetchGET;