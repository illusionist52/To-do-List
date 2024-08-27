import { ADD_TASK, COMPLETE_TASK, DELETE_TASK, EDIT_TASK } from "../actions/actions";


const initialState = {
  list: [],
};

export function listReducer(state =initialState, action){
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        list: [
          ...state.list,
          {
            id: Date.now(),
            text: action.payload,
            completed: false,
          },
        ],
      };
    case COMPLETE_TASK:
      return {
        ...state,
        list: state.list.map((item) =>
          item.id === action.payload
            ? { ...item, completed: !item.completed }
            : item
        ),
      };
    case DELETE_TASK:
      return {
        ...state,
        list: state.list.filter((item) => item.id !== action.payload),
      };
      case EDIT_TASK:
        return {
          ...state,
          list: state.list.map((item) =>
            item.id === action.payload.id
              ? { ...item, text: action.payload.newText }
              : item
          ),
        };  
    default:
      return state;
  }
}