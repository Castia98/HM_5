import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: 'contacts',
    initialState: [],
    reducers: {
        addContact: (state, action) => {
            state.push({
                name: action.payload.name,
                email: action.payload.email,
                number: action.payload.number,
            });
        },
    },
});

export const { addContact } = todoSlice.actions;
export default todoSlice.reducer;