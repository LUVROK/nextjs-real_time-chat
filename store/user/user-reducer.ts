import { v4 as uuid } from "uuid";
import { LOGIN_USER } from "./user-const";

export const User: any = (state = [], action: any) => {
  switch (action.type) {
    case LOGIN_USER: {
      console.log("action");
      console.log(action);
      // return action.name;
      return [
        ...state,
        {
          id: uuid(),
          date: Date.now(),
          title: action.name,
          completed: false,
        },
      ];
    }
    default: {
      return state;
    }
  }
};
