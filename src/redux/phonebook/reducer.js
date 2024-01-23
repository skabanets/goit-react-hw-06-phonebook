import {
  ADD_CONTACT,
  CHANGE_FILTER,
  DELETE_CONTACT,
  RESET_FILTER,
} from './actionsTypes';

const initialState = {
  contacts: [],
  filter: '',
};

export const phonebookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      return {
        ...state,
        contacts: [...state.contacts, { ...action.payload }],
      };
    case DELETE_CONTACT: {
      return {
        ...state,
        contacts: [
          ...state.contacts.filter(contact => contact.id !== action.payload),
        ],
      };
    }
    case CHANGE_FILTER: {
      return {
        ...state,
        filter: action.payload,
      };
    }
    case RESET_FILTER: {
      return {
        ...state,
        filter: '',
      };
    }
    default:
      return state;
  }
};
