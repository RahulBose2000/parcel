import { configureStore } from "@reduxjs/toolkit";

// When you import it in your store configuration, you can refer to it by any name you choose. So, when you do:
// The name cartReducer is just a variable name for the default export. It could be named anything, but conventionally, it's named cartReducer for clarity.

import cartReducer from './cartSlice'
const appStore = configureStore({

    //app reducer
    reducer:{
//slice reducer
        cart:cartReducer,
       
    },

});
export default appStore;