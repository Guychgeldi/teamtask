export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGOUT = 'LOGOUT';
export const LOGIN_FAIL = 'LOGIN_FAIL';
export const REMOVE_FORM_ERRORS = 'REMOVE_FORM_ERRORS';

export const loginSuccess = token => ({
    type: LOGIN_SUCCESS,
    payload: token,
});

export const logout = () => ({
    type: LOGOUT
});

export const loginFail = message => ({
    type: LOGIN_FAIL,
    payload: message,
});

export const removeFormErrors = () =>({
    type: REMOVE_FORM_ERRORS
});