import { createContext, useContext } from "react";
import SettingsStore from "./settingsStore";
import ZondStore from "./zondStore";
import { configure } from "mobx";

// Configure MobX
configure({
  enforceActions: "never",
  useProxies: "always"
});

class Store {
  settingsStore;
  zondStore;

  constructor() {
    this.settingsStore = new SettingsStore();
    this.zondStore = new ZondStore();
  }
}

export type StoreType = InstanceType<typeof Store>;
export const store = new Store();
const StoreContext = createContext<StoreType>(store);
export const useStore = () => useContext(StoreContext);
export const StoreProvider = StoreContext.Provider;
