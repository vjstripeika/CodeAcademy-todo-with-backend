import { useEffect, useState } from "react";
import { getList } from "../services/getList";

export const useList = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    getList().then((data) => {
      setList(data.documents);
    });
  }, []);

  const reloadData = () => {
    getList().then((data) => {
      setList(data.documents);
    });
  };

  return { list, reloadData };
};
