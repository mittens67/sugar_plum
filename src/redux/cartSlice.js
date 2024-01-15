import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    products: [],
    productsNumber: 0
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const productInCart = state.products.find(
                (product) => product.id === action.payload.id
            );

            if(productInCart) {
                // Product is already in cart. Update it
                productInCart.message = action.payload.message;
                productInCart.customFlavor = action.payload.customFlavor;
                productInCart.packageSize = action.payload.packageSize;
            } else {
                // Product is not in cart. Add it
                state.products.push({
                    ...action.payload      
                });

                state.productsNumber++;
            }
        },
        removeFromCart: (state, action) => {
            const index = state.products.findIndex((product) => product.id === action.payload);
            state.productsNumber--;
            state.products.splice(index,1);
        },
        incrementInCart: (state, action) => {

        },
        decrementInCart: (state, action) => {

        }
    }
});

export const { addToCart, removeFromCart, incrementInCart, decrementInCart } = cartSlice.actions;
export default cartSlice.reducer;