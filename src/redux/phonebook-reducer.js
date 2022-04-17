import { createSlice } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
const itemsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addItem: (state, action) => {
      return [...state, action.payload];
    },
    deleteItem: (state, action) => {
      return state.filter(contact => contact.id !== action.payload);
    },
  },
});

const filterSlice = createSlice({
  name: 'contacts',
  initialState: '',
  reducers: {
    changeFilter: (state, action) => {
      return action.payload;
    },
  },
});

const contactReducer = combineReducers({
  items: itemsSlice.reducer,
  filter: filterSlice.reducer,
});

export const { addItem, deleteItem } = itemsSlice.actions;
export const { changeFilter } = filterSlice.actions;
export default contactReducer;
