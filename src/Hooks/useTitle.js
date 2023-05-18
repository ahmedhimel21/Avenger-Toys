import { useEffect } from "react";
const useTitle = (title) =>{
  useEffect(() =>{
    document.title = `${title}-Avenger Toys`
  },[title])
};

export default useTitle;