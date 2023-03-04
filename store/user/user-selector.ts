export const selectAllTodos = (state: any) => state.todos;

// export const selectActiveTodos = (state: any) => state.todos.filter((todo: any) => todo.completed === false);

// export const selectVisibleTodos = (state: any, filter: any) => {
//   switch (filter) {
//     case "all": {
//       return state.todos;
//     }
//     case "active": {
//       return state.todos.filter((todo: any) => !todo.completed);
//     }
//     case "completed": {
//       return state.todos.filter((todo: any) => todo.completed);
//     }
//     default: {
//       return state.todos;
//     }
//   }
// };
