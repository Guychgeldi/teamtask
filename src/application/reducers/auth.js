import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT, REMOVE_FORM_ERRORS } from "../actions/auth";

const initialState = {
    token: "",
    isLogged:false,
    errors:{username:"", password:"", error:""}
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                token: action.payload,
                isLogged:true,
                errors:{username:"", password:"", error:""}
            };
        case LOGIN_FAIL:
            return {
                ...state,
                token: "",
                isLogged:false,
                errors:Object.assign({}, state.errors, action.payload)
            }
        case LOGOUT:
            return{
                ...state,
                token: "",
                isLogged:false,
                errors:{username:"", password:"", error:""}
            }
        case REMOVE_FORM_ERRORS:
            return{
                ...state,
                errors:{username:"", password:"", error:""}
            }
        default:
            return state;
    }
}

export default reducer;