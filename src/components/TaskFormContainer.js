
import {useState} from 'react';
import {func, string, object} from 'prop-types'
import TaskForm from './TaskForm';
import {useDispatch, useSelector} from 'react-redux';
import {createTask, editTask} from '../application/middleware/tasks';
import {getIsLogged, getToken} from '../application/selectors/auth';
import {getErrors} from '../application/selectors/tasks'
 
function TaskFormContainer({setClose, whichForm, defaultValues}){
    const [values, setValues] = useState(() => defaultValues);
    const [isTextChanged, setTextChanged] = useState(false);
    
    const isLogged = useSelector(getIsLogged);
    const token = useSelector(getToken);
    const errors = useSelector(getErrors);
    const dispatch = useDispatch();

    const handleChange = ({name, value}) => {
        if(name === 'text' && defaultValues.text !== value){
            if(values.status === 0 || values.status === 1){
                setValues(Object.assign({}, values, {[name]:value, status:1}))
            }else{
                setValues(Object.assign({}, values, {[name]:value, status:11}))
            }
            setTextChanged(defaultValues.text !== value)
        }else{
            setValues(Object.assign({}, values, {[name]:value}))
        }
        
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(whichForm === 'Create'){
            dispatch(createTask({values, setClose}));
        }else if(whichForm === 'Edit'){
            const {id, text, status} = values;
            dispatch(editTask({id, text, status, token, setClose}));
        }
    };

    return (
        <TaskForm isTextChanged={isTextChanged} errors={errors} values={values} handleChange={handleChange} handleSubmit={handleSubmit} isLogged={isLogged} whichForm={whichForm}/>
    );
}

TaskFormContainer.propTypes = {
    setClose:func,
    whichForm:string,
    defaultValues:object.isRequired
}

export default TaskFormContainer;