import { CDN_URL } from "../utils/constants";

const Rescards = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, costForTwo } = resData?.info;
  return (
    <div className="m-4 p-4 w-[250px] h-[450] bg-gray-100 rounded-lg hover:bg-gray-200" >
      <img
        className="rounded-lg w-[218] h-[163]"
        src={CDN_URL + resData.info.cloudinaryImageId}
        alt="res-image"
      ></img>
      <h3 className='font-bold py-4 text-lg'>{name}</h3>
      <h4  >{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};



//Higher Order Component
//input ==> RestaurantCard ==> RestaurantCardPromoted

export const withPromotedLabel = (Rescards) =>{
  return ()=>{
    return(
      <div>
        <label>Promoted</label>
        <Rescards {...props}/>
      </div>
    );
  };
};


export default Rescards;