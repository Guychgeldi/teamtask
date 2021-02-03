import {loadTasksSuccess, createTaskSuccess, createTaskFail, editTaskSuccess, editTaskFail, startLoading, stopLoading} from "../actions/tasks";
import api from '../../api';
import toast from 'react-hot-toast';

export const getTasks = ({sort_field, sort_direction, page}) => async dispatch => {
    dispatch(startLoading());
    try {
        const response = await api.getTasks({sort_field, sort_direction, page});
        if(response.data.status !== "error"){
            dispatch(loadTasksSuccess(response.data.message));
            dispatch(stopLoading());
        }else{
            dispatch(stopLoading());
            toast.error('Unknown Error');
        }
    } catch (error) {
        dispatch(stopLoading());
        toast.error('Unknown Error');
    }
};

export const createTask = ({values, setClose}) => async dispatch =>{
    dispatch(startLoading());
    let form = new FormData();
    form.append("username", values.username);
    form.append("email", values.email);
    form.append("text", values.text);
    try {
        const response = await api.post({values:form, type:"create"});
        if(response.data.status !== "error"){
            dispatch(createTaskSuccess(response.data.message));
            toast.success('Successfully created!');
            setClose();
            dispatch(stopLoading());
        }else{
            if(response.data.message){
                dispatch(stopLoading());
                toast.error('Please Fill In Correct Form!');
                dispatch(createTaskFail(response.data.message));
            }else{
                dispatch(stopLoading());
                toast.error('Unknown Error');
                dispatch(createTaskFail({error:"Unknown Error"}));
            }
        }
    } catch (error) {
        dispatch(stopLoading());
        toast.error('Unknown Error');
        dispatch(createTaskFail({error:"Unknown Error"}));
    }
}

export const editTask = ({id, text, status, token, setClose}) => async dispatch =>{
    dispatch(startLoading());
    let form = new FormData();
    form.append("text", text);
    form.append("status", status);
    form.append("token", token);
    try {
        const response = await api.post({values:form, type:`edit/${id}`});
        if(response.data.status !== "error"){
            dispatch(editTaskSuccess({id, text, status}));
            toast.success('Successfully Edited!');
            setClose();
            dispatch(stopLoading());
        }else{
            if(response.data.message){
                dispatch(stopLoading());
                dispatch(editTaskFail(response.data.message));
                toast.error('Please Fill In Correct Form!');
            }else{
                dispatch(stopLoading());
                toast.error('Unknown Error');
                dispatch(editTaskFail({error:"Unknown Error"}));
            }
        }
    } catch (error) {
        dispatch(stopLoading());
        dispatch(editTaskFail({error:"Unknown Error"}));
        toast.error('Unknown Error');
    }
}