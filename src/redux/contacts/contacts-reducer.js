import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import * as actions from './contacts-actions';
// import { fetchContacts } from './contacts-operations';

const initialContactsState = [
  // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  // { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const contactsReducer = createReducer(initialContactsState, {
  [actions.fetchContactsSuccess]: (_, { payload }) => payload,
  //вариант с createAsyncThunk
  // [fetchContacts.fulfilled]: (_, { payload }) => payload,

  [actions.addContact]: (state, { payload }) => {
    if (state.find(item => item.name === payload.name)) {
      alert(`${payload.name + ' is already in contacts'}`);
      return state;
    }
    return [...state, payload];
  },

  [actions.deleteContact]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload),
});

const loadingReducer = createReducer(false, {
  [actions.fetchContactsRequest]: () => true,
  [actions.fetchContactsSuccess]: () => false,
  [actions.fetchContactsError]: () => false,
  //вариант с createAsyncThunk
  // [fetchContacts.pending]: () => true,
  // [fetchContacts.fulfilled]: () => false,
  // [fetchContacts.rejected]: () => false,
});

const errorReducer = createReducer(null, {
  [actions.fetchContactsError]: (_, { payload }) => payload,
  //сброс ошибки в дефолтное состояние
  [actions.fetchContactsRequest]: () => null,
  //вариант с createAsyncThunk
  // [fetchContacts.rejected]: (_, { payload }) => payload,
  // //сброс ошибки в дефолтное состояние
  // [fetchContacts.pending]: () => null,
});

const initinalFilterState = '';
const filteredReducer = createReducer(initinalFilterState, {
  [actions.changeFilter]: (_, { payload }) => payload,
});

export const phoneBookReducer = combineReducers({
  contacts: contactsReducer,
  isLoading: loadingReducer,
  error: errorReducer,
  filtered: filteredReducer,
});
