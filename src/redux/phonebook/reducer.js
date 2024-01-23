import { createReducer } from '@reduxjs/toolkit';
import {
  addContact,
  deleteContact,
  changeFilter,
  resetFilter,
} from './actions';

const initialState = {
  contacts: [],
  filter: '',
};

export const phonebookReducer = createReducer(initialState, builder => {
  builder
    .addCase(addContact, (state, { payload }) => {
      state.contacts.push(payload);
    })
    .addCase(deleteContact, (state, { payload }) => {
      const index = state.contacts.findIndex(item => item.id === payload);
      state.contacts.splice(index, 1);
    })
    .addCase(changeFilter, (state, { payload }) => {
      state.filter = payload;
    })
    .addCase(resetFilter, state => {
      state.filter = '';
    });
});
