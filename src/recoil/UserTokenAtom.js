import { atom } from "recoil";

export const UserTokenAtom = atom({
  key: "UserTokenAtom",
  default: localStorage.getItem("user_token"),
});
