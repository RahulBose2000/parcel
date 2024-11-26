import Rescards, { withPromotedLabel } from "./Rescards";
// import resLists from "../utils/mockData";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/userContext";


const Body = () => {
  // const fetchData=async ()=>{
  //   const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
  //   const json = await data.json();
  //   SetlistofRes(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  //   // console.log(json);
  //   // console.log(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
  // }
  //state variable :
  const [listofRes, SetlistofRes] = useState([]);
  const [filteredRes, setfilteredRes] = useState([]);

  const [searchText, setsearchText] = useState("");
  //  console.log('Body rendered',listofRes);

  const RestaurantCardPromoted = withPromotedLabel(Rescards);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    SetlistofRes(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilteredRes(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    // console.log(json);
    // console.log(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
  };

  // let listofRes = [
  //   {
  //     info: {
  //       id: "393840",
  //       name: "Chinese Wok",
  //       cloudinaryImageId: "e0839ff574213e6f35b3899ebf1fc597",
  //       locality: "Chikka Lakshmaiah Layout",
  //       areaName: "Adugodi",
  //       costForTwo: "₹250 for two",
  //       cuisines: ["Chinese", "Asian", "Tibetan", "Desserts"],
  //       avgRating: 3.2,
  //     },
  //   },

  //   // Add more restaurant objects here if needed
  //   {
  //     info: {
  //       id: "393841",
  //       name: "Iyer's Idli",
  //       cloudinaryImageId:
  //         "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/29/cb744abd-3aa1-4221-9c8d-dbca6563573e_898222.jpg",
  //       locality: "Chikka Lakshmaiah Layout",
  //       areaName: "Adugodi",
  //       costForTwo: "₹250 for two",
  //       cuisines: ["South indian"],
  //       avgRating: 4.2,
  //     },
  //   },
  // ];

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return <h1>Looks like you are offline , Check you internet Connection</h1>;
  }

  const {loggedInUser,setusername}=useContext(UserContext);
  //shimmer ui
  if (listofRes.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="filter flex">
        {/* filter btn */}
        <div className="search m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          ></input>
          <button
            className="px-4 py-2 bg-green-100 m-4 rounded-lg"
            onClick={() => {
              const filteredRes = listofRes.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setfilteredRes(filteredRes);
            }}
          >
            Search
          </button>
        </div>

        {/* top rated res.. */}
        <div className="search m-4 p-4 flex items-center">
          <button
            className="px-4 py-2 bg-slate-100 rounded-lg"
            onClick={() => {
              const filterList = listofRes.filter(
                (el) => el.info.avgRating >= 4.6
              );
              SetlistofRes(filterList);
              console.log(listofRes);
            }}
          >
            Top Rated Res
          </button>
         

        </div>
        <div className="m-4 p-4 flex items-center">
        <label>UserName</label>
        <input className="border border-black " value={loggedInUser} onChange={(e)=>{
          setusername(e.target.value)
        }}/>
        </div>
      </div>
      <div className=" flex flex-wrap">
        {/* <Rescards resData={resLists[0]} />
           <Rescards resData={resLists[1]}/>
          <Rescards resData={resLists[2]}/>
          <Rescards resData={resLists[3]}/>
          <Rescards resData={resLists[4]}/>
          <Rescards resData={resLists[5]}/>
          <Rescards resData={resLists[6]}/>
          <Rescards resData={resLists[7]}/>
          <Rescards resData={resLists[8]}/>
          <Rescards resData={resLists[9]}/> */}

        {filteredRes.map((el) => {
          return (
            <Link key={el.info.id} to={"/restaurants/" + el.info.id}>
              {el.info.promoted ? (
                <RestaurantCardPromoted resData={el} />
              ) : (
                <Rescards resData={el} />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

module.exports = Body;
