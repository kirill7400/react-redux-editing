import {combineReducers, legacy_createStore as createStore} from "redux";
import listReducer from "./listReduser";

function storeConfig() {
  return createStore(
    combineReducers({
      repairList: listReducer
    })
  )
}

export default storeConfig