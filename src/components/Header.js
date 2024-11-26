import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import UserContext from "../utils/userContext";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";



const Header = () => {
  const [btnName, setbtnName] = useState("login");
  const onlineStatus = useOnlineStatus();

  const {loggedInUser} = useContext(UserContext);
  // console.log(loggedInUser)

  //selector / subscribing to the store using a selector
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  return (
    <div className="flex justify-between bg-pink-100 shadow-lg sm:bg-yellow-50 lg:bg-green-50">
      <div className="logo-container">
        <img className="w-28" src={LOGO_URL} alt="logo"></img>
      </div>

      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">onlineStatus: {onlineStatus ? "🟢" : "🔴"}</li>
          <Link to="/">
            <li className="px-4">HOME</li>
          </Link>
          <Link to="/about">
            <li className="px-4">ABOUT US</li>
          </Link>
          <Link to="/contact">
            <li className="px-4">CONTACT US</li>
          </Link>   
          <Link to="/Grocery">
            <li className="px-4">Grocery</li>
          </Link >
          <Link to="/cart">
          <li className="list font-bold text-xl">CART-({cartItems.length} items)</li>
          </Link>
          <button
            className="px-4"
            onClick={() => {
              btnName === "login" ? setbtnName("logout") : setbtnName("login");
            }}
          >
            {" "}
            {btnName}{" "}
          </button>
 
          <li className="px-4 font-bold"> {loggedInUser} </li> 
        </ul>
      </div>
    </div>
  );
};

//follow any one way for export this file
module.exports = Header;
// export default Header;
//named export
// module cannot have default export twice thats why we use named exports
//just write export infront of your variable

// to import it we {Header} from path;
