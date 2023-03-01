import { useEffect, useState } from "react";
import { getList } from "../services/getList";

export const useList = () => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleLoad = async () => {
    setLoading(true);
    const data = await getList();
    setLoading(false);
    setList(data.documents);
  };

  useEffect(() => {
    handleLoad();
  }, []);

  return { list, reloadData: handleLoad, loading };
};
