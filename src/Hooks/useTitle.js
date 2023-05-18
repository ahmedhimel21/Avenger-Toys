import { useEffect } from "react";
const useTitle = (title) =>{
  useEffect(() =>{
    document.title = `${title}-The food Hunter`
  },[title])
};

export default useTitle;