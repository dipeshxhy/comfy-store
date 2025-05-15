import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
const themes = {
  dracula: "dracula",
  winter: "winter",
};
const getUserFromLocalStorage = () => {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : null;
};
const getThemeFromLocalStorage = () => {
  const theme = localStorage.getItem("theme") || "dracula";
  document.documentElement.setAttribute("data-theme", theme);
  return theme;
};
const initialState = {
  user: getUserFromLocalStorage(),
  theme: getThemeFromLocalStorage(),
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      const { dracula, winter } = themes;
      const newTheme = state.theme === dracula ? winter : dracula;
      state.theme = newTheme;
      localStorage.setItem("theme", newTheme);
      document.documentElement.setAttribute("data-theme", newTheme);
    },
    loginUser: (state, action) => {
      const user = { ...action.payload.user, token: action.payload.jwt };
      state.user = user;
      localStorage.setItem("user", JSON.stringify(user));
    },
    logoutUser: (state) => {
      state.user = null;
      localStorage.removeItem("user");
      toast.success("Logged out successfully");
    },
  },
});

export const { toggleTheme, loginUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;
