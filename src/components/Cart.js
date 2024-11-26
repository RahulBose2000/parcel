
import { useDispatch, useSelector } from "react-redux";
import { clearCart,removeItem } from "../utils/cartSlice";
import ItemList from "./ItemList";
const Cart = () =>{

    const cartItems = useSelector((store)=>store.cart.items)
    const dispatch = useDispatch();
    const handleClearCart = () =>{
        dispatch(clearCart())

    }
    return (
        <div className="text-center m-4 p-4 ">

        <h1 className="font-bold">Cart</h1>


        <div className='w-6/12 m-auto'>
            <ItemList items={cartItems}  isCart={true} />
            {cartItems.length ===0 && <h1>Cart is empty add Items to cart</h1>}
        </div>
        <button className="p-2 m-2 bg-black text-white rounded-lg" onClick={handleClearCart}>clear cart</button>

        </div>
    )

}
export default Cart;