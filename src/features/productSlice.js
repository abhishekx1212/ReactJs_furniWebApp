import { createSlice } from "@reduxjs/toolkit";
import { products } from "../products/data";

const initialState = {
    products: products,
    addToCart: [],
    netTotal: 0
}

export const productSlice = createSlice({
    name: 'productReducer',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            let checkQuantity = state.addToCart.findIndex((val) => {
                return val.title == action.payload.title
            })
            if (checkQuantity == -1) {
                let pushData = { ...action.payload, quantity: 1 };
                state.addToCart.push(pushData)
                console.log(...state.addToCart);
            } else {
                alert("Product already Added in cart")
            }
        },
        quantityManage: (state, action) => {
            let getOneData = state.addToCart.findIndex((val) => {
                return val.id == action.payload.id
            })
            if (action.payload.type == 'increase') {
                if(state.addToCart[getOneData].quantity < state.addToCart[getOneData].availableQuantity){
                    state.addToCart[getOneData].quantity += 1
                }else{
                    alert(state.addToCart[getOneData].title+" Out of Stock")
                }
            } else {
                if (state.addToCart[getOneData].quantity == 1) {
                    state.addToCart.splice(getOneData, 1)
                } else {
                    state.addToCart[getOneData].quantity -= 1
                }
            }
        },
        removeCart: (state, action) => {
            state.addToCart = state.addToCart.filter((val) => {
                return val.id != action.payload
            })
        }
    }
})

export const { addToCart, removeCart, quantityManage } = productSlice.actions;
export default productSlice.reducer