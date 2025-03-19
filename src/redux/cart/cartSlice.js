import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: [],
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {// Adiciona um item ao carrinho
            const item = action.payload; // O item a ser adicionado
            const existingItem = state.cartItems.find((i) => i.id === item.id); // Verifica se o item já está no carrinho

            if (existingItem) { // Se o item já está no carrinho, incrementa a quantidade
                existingItem.quantity += 1;
            } else {
                state.cartItems.push({ ...item, quantity: 1 }); // Se o item não está no carrinho, adiciona o item com quantidade 1
            }

            console.log("Itens no carrinho:", JSON.parse(JSON.stringify(state.cartItems))); // Para evitar problemas de referência no Redux
        },
        removeFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter((i) => i.id !== action.payload); // Remove o item do carrinho pelo ID do item a ser removido (action.payload)
            console.log("Carrinho atualizado:", JSON.parse(JSON.stringify(state.cartItems)));
        },
        clearCart: (state) => {
            state.cartItems = [];
            console.log("Carrinho esvaziado.");
        },
    },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
