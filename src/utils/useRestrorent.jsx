import { useEffect, useState } from "react";

const useRestrorent = (resid) => {
  const [restrorent, setrestrorent] = useState(null);

  useEffect(() => {
    getrestroinfo();
  }, [resid]);

  async function getrestroinfo() {
    const response = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.4549833&lng=77.0387868&restaurantId=${resid}&catalog_qa=undefined&submitAction=ENTER`
    );
    const data = await response.json();
    //console.log(data);
    setrestrorent(data.data?.cards[0]?.card?.card.info);
  }
  return restrorent;
};

export default useRestrorent;
