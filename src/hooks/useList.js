import { useEffect, useState } from "react";
import { getList } from "../services/getList";

export const useList = () => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getList().then((data) => {
      setLoading(false);
      setList(data.documents);
    });
  }, []);

  const reloadData = () => {
    setLoading(true);
    getList().then((data) => {
      setLoading(false);
      setList(data.documents);
    });
  };

  return { list, reloadData, loading };
};
