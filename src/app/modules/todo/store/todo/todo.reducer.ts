import { Todo } from "../../models/todo";
import { TodoActions, todoActionsType } from "./todo.actions";

export const TODO_REDUCER_NODE = 'todo';

export interface TodoState {
  idIncrement: number;
  todoList: Todo[];
}

const initialState: TodoState = {
  idIncrement: 1,
  todoList: []
};

export const todoReducer = (state = initialState, action: TodoActions) => {
  switch (action.type) {
    case todoActionsType.create:
      return {
        ...state,
        idIncrement: state.idIncrement + 1,
        todoList: [
          ...state.todoList,
          {
            id: state.idIncrement,
            name: action.payload.name,
            completed: false
          }
        ]
      };

    case todoActionsType.delete:
      return {
        ...state,
        todoList: state.todoList.filter((todo) => (
          todo.id !== action.payload.id
        ))
      };

    case todoActionsType.toggle:
      return {
        ...state,
        todoList: state.todoList.map((todo) => {
          if (todo.id === action.payload.id) {
            return { ...todo, completed: !todo.completed };
          }

          return todo;
        })
      };

    case todoActionsType.edit:
      return {
        ...state,
        todoList: state.todoList.map((todo) => {
          if (todo.id === action.payload.id) {
            return { ...todo, name: action.payload.name };
          }

          return todo;
        })
      };

    case todoActionsType.load:
      return {
        ...action.payload.state
      };

    default:
      return state;
  }
};
