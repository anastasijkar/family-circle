import { createStore } from "vuex";

import { treeSettings } from "./treeSettings";
import { treeData } from "./treeData";

export default createStore({
  modules: {
    treeSettings,
    treeData,
  },
});
