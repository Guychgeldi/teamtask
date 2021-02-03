import { LOAD_TASKS_SUCCESS, CREATE_TASK_SUCCESS, CHANGE_PAGE, SORT_FIELD, EDIT_TASK_SUCCESS, START_LOADING, STOP_LOADING, CREATE_TASK_FAIL } from "../actions/tasks";
import { REMOVE_FORM_ERRORS } from "../actions/auth";

const initialState = {
    tasks: [],
    total_task_count:"0",
    sort_field: "id",
    sort_direction: "asc",
    page:0,
    errors: {username:"", email:"", text:""},
    loading:false,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_TASKS_SUCCESS:
            return {
                ...state,
                tasks: action.payload.tasks, 
                total_task_count:action.payload.total_task_count 
            };
        case REMOVE_FORM_ERRORS:
            return{
                ...state,
                errors: {username:"", email:"", text:""},
            }
        case CREATE_TASK_SUCCESS:
            if(state.tasks.length < 3){
                return{
                    ...state,
                    tasks: state.tasks.concat(action.payload),
                    total_task_count:`${+state.total_task_count + 1}`
                }
            }else{
                return{
                    ...state,
                    total_task_count:`${+state.total_task_count + 1}`
                }
            }
        case CHANGE_PAGE:
            return{
                ...state,
                page:action.payload
            }
        case SORT_FIELD:
            if(state.sort_field === action.payload){
                return{
                    ...state,
                    sort_direction: state.sort_direction === "asc" ? "desc" : "asc",
                }
            }else{
                return{
                    ...state,
                    sort_direction: "asc",
                    sort_field:action.payload,
                }
            }
        case EDIT_TASK_SUCCESS:
            return {
                ...state,
                tasks:state.tasks.map(item => {
                    if(item.id === action.payload.id){
                        return Object.assign({}, item, action.payload);
                    }
                    return item;
                })
            }
        case START_LOADING:
            return {
                ...state,
                loading:true
            }
        case STOP_LOADING:
            return {
                ...state,
                loading:false
            }
        case CREATE_TASK_FAIL:
            return{
                ...state,
                errors:action.payload
            }
        default:
            return state;
    }
}

export default reducer;