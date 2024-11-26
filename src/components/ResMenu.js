import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

import useRestaurantMenu from "../utils/useRestaurantMenu";
import ResCategory from "./ResCategory";
import { useState } from "react";

const ResMenu = () => {
  const { resId } = useParams();

  const dummy = 'Dummy data';

  const resInfo = useRestaurantMenu(resId);

  const [showIndex, setshowIndex] = useState(0);

  if (resInfo === null) return <Shimmer />;

  const { itemCards } =
    resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card;
  // console.log(resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards);
  const categories =
    resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
//   console.log(categories);

  return (
    <div className="menu text-center">
      <h1 className="font-bold my-6 text-2xl">
        {resInfo?.cards[2]?.card?.card?.info?.name}
      </h1>
      <p className="font-bold text-lg">
        {resInfo?.cards[2]?.card?.card?.info?.cuisines?.join(", ")}
      </p>
      {/* categories accordians */}

      {categories.map((category, index) => {
        // controlled component
 // console.log(`hi ${index + 1}`); // Use index to increment
  return <ResCategory  key={category?.card?.card?.title} data ={category?.card?.card} showItems={index===showIndex ? true : false} setshowIndex={()=>setshowIndex(index)} dummy={dummy}/>;
})}

    </div>
  );
};
export default ResMenu;
