import { makeAutoObservable } from "mobx";

class ThemeStore {
  theme = "light";

  constructor() {
    makeAutoObservable(this);
  }

  toggleTheme = () => {
    this.theme = this.theme === "dark" ? "light" : "dark";
  };
}

export const themeStore = new ThemeStore();
