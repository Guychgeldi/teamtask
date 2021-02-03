export const LOAD_TASKS_SUCCESS = 'LOAD_TASKS_SUCCESS';
export const LOAD_TASKS_FAIL = 'LOAD_TASKS_FAIL';
export const CREATE_TASK_SUCCESS = 'CREATE_TASK_SUCCESS';
export const CREATE_TASK_FAIL = 'CREATE_TASK_FAIL';
export const EDIT_TASK_SUCCESS = 'EDIT_TASK_SUCCESS';
export const EDIT_TASK_FAIL = 'EDIT_TASK_FAIL';
export const CHANGE_PAGE = 'CHANGE_PAGE';
export const SORT_FIELD = 'SORT_FIELD';
export const START_LOADING = 'START_LOADING';
export const STOP_LOADING = 'STOP_LOADING';


export const loadTasksSuccess = tasks => ({
    type: LOAD_TASKS_SUCCESS,
    payload: tasks,
});

// export const loadTasksFail = error => ({
//     type: LOAD_TASKS_FAIL,
//     payload: error,
// });

export const createTaskSuccess = task => ({
    type: CREATE_TASK_SUCCESS,
    payload: task,
});

export const createTaskFail = errors => ({
    type: CREATE_TASK_FAIL,
    payload: errors,
});

export const changePage = page => ({
    type:CHANGE_PAGE,
    payload:page
});

export const sortField = field => ({
    type:SORT_FIELD,
    payload:field
});

export const editTaskSuccess = task => ({
    type: EDIT_TASK_SUCCESS,
    payload: task,
});

export const editTaskFail = error => ({
    type: EDIT_TASK_FAIL,
    payload: error,
});

export const startLoading = () => ({
    type: START_LOADING
});

export const stopLoading = () => ({
    type: STOP_LOADING
});