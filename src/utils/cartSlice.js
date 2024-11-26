import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cart',
    initialState:{
        items:[]
    },
    reducers:   {
        addItem:(state,action)=>{

            state.items.push(action.payload);

        },
        removeItem: (state, action) => {
            console.log('Removing item:', action.payload);
            const index = state.items.findIndex(item => item.card.info.id === action.payload.card.info.id);
            if (index !== -1) {
                state.items.splice(index, 1);
            }
        },
        clearCart:(state)=>{
            state.items.length=0;
        },
    },
})

export const {addItem,removeItem,clearCart} = cartSlice.actions;

export default cartSlice.reducer;
// You're correct, and I apologize for any confusion. In your cartSlice.js, you're exporting the reducer as the default export: