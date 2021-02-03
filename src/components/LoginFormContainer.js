
import {useState} from 'react';
import LoginForm from './LoginForm';
import {useDispatch, useSelector} from 'react-redux';
import {login} from '../application/middleware/auth';
import {func} from 'prop-types';
import {getErrors} from '../application/selectors/auth';


function LoginFormContainer({setClose},){
    const [values, setValues] = useState({username:"", password:""});
    const errors = useSelector(getErrors);
    const dispatch = useDispatch();
    const handleChange = ({name, value}) => {
        setValues(Object.assign({}, values, {[name]:value}))
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(login({values, setClose}));
    };
    return (
        <LoginForm values={values} errors={errors} handleChange={handleChange} handleSubmit={handleSubmit}/>
    );
}

LoginFormContainer.propTypes = {
    setClose:func
}

export default LoginFormContainer;