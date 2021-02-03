import {loginSuccess, loginFail } from "../actions/auth";
import {startLoading, stopLoading} from "../actions/tasks"
import api from '../../api';
import toast from 'react-hot-toast';



export const login = ({values, setClose}) => async dispatch =>{
    dispatch(startLoading());
    let form = new FormData();
    form.append("username", values.username);
    form.append("password", values.password);
    try {
        const response = await api.post({values:form, type:"login"});
        if(response.data.status !== "error"){
            dispatch(loginSuccess(response.data.message.token));
            toast.success('Successfully Logged In!');
            setClose();
            dispatch(stopLoading());
        }else{
            dispatch(loginFail(response.data.message));
            dispatch(stopLoading());
            toast.error('Error in fields');
        }
    } catch (error) {
        dispatch(loginFail({error:"Unknown error"}));
        dispatch(stopLoading());
        toast.error('Unknown error');
    }
}