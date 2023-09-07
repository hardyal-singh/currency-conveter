import { useEffect, useState } from "react";

function useCurrenyInfo(currecny){
  const [data, setData] = useState({});
  useEffect( () => {
    fetch(
      `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currecny}.json`
    ).then(res=>res.json()).then(res=>setData(res[currecny]))
  }, [currecny]);

  return data ;};

export default useCurrenyInfo;
