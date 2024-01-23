import {
  ADD_CONTACT,
  CHANGE_FILTER,
  DELETE_CONTACT,
  RESET_FILTER,
} from './actionsTypes';

export const addContact = contact => ({
  type: ADD_CONTACT,
  payload: contact,
});

export const deleteContact = id => ({
  type: DELETE_CONTACT,
  payload: id,
});

export const changeFilter = filterValue => ({
  type: CHANGE_FILTER,
  payload: filterValue,
});

export const resetFilter = () => ({
  type: RESET_FILTER,
});
