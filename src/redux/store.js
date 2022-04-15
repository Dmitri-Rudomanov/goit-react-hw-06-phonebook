import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import contactReducer from './phonebook-reducer';
import { persistStore, persistReducer, PERSIST } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [PERSIST],
    },
  }),
];
const persistConfig = {
  key: 'contacts',
  storage,
  blacklist: ['filter'],
};
const ContactsPersistedReducer = persistReducer(persistConfig, contactReducer);

const store = configureStore({
  reducer: {
    contacts: ContactsPersistedReducer,
  },
  middleware,
});
const persistor = persistStore(store);

export default { store, persistor };
