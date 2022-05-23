import { useState, useCallback } from "react";

const useHttp= () =>{
  const [dataState, setDataState] = useState([]);

  const fetchHttpHandler = useCallback(async (requestUrl) => {
    const response = await fetch(
      requestUrl
    );
    const data = await response.json();
    setDataState(data);
  }, []);

  return {
    data: dataState,
    requestHttp: fetchHttpHandler,
  }
}

export default useHttp;