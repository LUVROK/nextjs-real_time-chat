import { LOGIN_USER } from "./user-const";

export const create_user = (name: string) => ({
  type: LOGIN_USER,
  name,
});
