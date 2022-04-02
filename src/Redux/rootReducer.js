import { combineReducers, createStore } from "redux";
import { BaiTapDatVeReducer } from "./BaiTapDatVeReducer";
import { BaiTapOanTuTiReducer } from "./BaiTapOanTuTiReducer";
const rootReducer = combineReducers({
  BaiTapDatVeReducer: BaiTapDatVeReducer,
  BaiTapOanTuTiReducer: BaiTapOanTuTiReducer,
});
export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
