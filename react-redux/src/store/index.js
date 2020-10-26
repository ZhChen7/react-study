import { createStore } from "redux";

// 倒入我们自己创建的 reducer

import { reducer } from "../reducer";

// 构建 store
const store = createStore(reducer);

export default store;
