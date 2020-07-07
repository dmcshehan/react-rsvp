import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

import userReducer from "./user";
import modalReducer from "./modal";
import eventReducer from "./event";
import dropdownReducer from "./dropdown";
import eventInfoReducer from "./eventInfo";
import inviteeReducer from "./invitee";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["dropDown", "modal", "invitee"],
};

const rootReducer = combineReducers({
  user: userReducer,
  modal: modalReducer,
  event: eventReducer,
  dropDown: dropdownReducer,
  eventInfo: eventInfoReducer,
  invitee: inviteeReducer,
});

export default persistReducer(persistConfig, rootReducer);
