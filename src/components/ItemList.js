import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem, removeItem } from "../utils/cartSlice";
const ItemList = ({ items, dummy,  isCart }) => {
  // console.log(dummy);

  const dispatch = useDispatch();
  const handleAddItem = (item)=>{
    //dispatch an action
    dispatch(addItem(item))

  }
  const handleRemoveItem = (item) => {
    dispatch(removeItem(item)); // Assuming item.id is the identifier
  };

  return (
    <div className="items">
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2  border-gray-200 border-b-2 text-left flex justify-between"
        >
          
          <div className="w-9/12">
            <div className="py-2">
              <span className="font-semibold"> {item.card.info.name} </span>
              <span>
                - ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <div>
              <p className="text-xs">{item.card.info.description}</p>
            </div>
          </div>
          <div className="">
            <div className="absolute "> 
            {isCart ? (
                <button
                  className="p-2 bg-red-500 text-white shadow-lg"
                  onClick={() => handleRemoveItem(item)}
                >
                  Delete
                </button>
              ) : (
                <button
                  className="p-2 bg-black text-white shadow-lg"
                  onClick={() => handleAddItem(item)}
                >
                  Add
                </button>
              )}
            </div>
            <img src={CDN_URL + item.card.info.imageId} className="w-28 " />
          </div>
        </div>
      ))}
    </div>
  );
};
export default ItemList;
