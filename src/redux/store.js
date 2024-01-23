import { createStore } from 'redux';
import { phonebookReducer } from './phonebook/reducer';
import { devToolsEnhancer } from '@redux-devtools/extension';

const enhancer = devToolsEnhancer();

export const store = createStore(phonebookReducer, enhancer);
