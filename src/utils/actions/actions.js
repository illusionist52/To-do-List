
export const ADD_TASK = 'ADD_TASK';
export const COMPLETE_TASK = 'COMPLETE_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const EDIT_TASK = 'EDIT_TASK'; 

export function addTaskAction(text) {
  return {
    type: ADD_TASK,
    payload: text,
  };
}


export function completeTaskAction(id) {
  return {
    type: COMPLETE_TASK,
    payload: id,
  };
}

export function deleteTaskAction(id) {
  return {
    type: DELETE_TASK,
    payload: id,
  };
}

export function editTaskAction(id, newText) {
  return {
    type: EDIT_TASK,
    payload: { id, newText },
  };
}
