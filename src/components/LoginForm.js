import UserIcon from './icons/UserIcon';
import PasswordIcon from './icons/PasswordIcon';
import Input from './Input';
import Button from './Button';
import {object, func} from 'prop-types';


const LoginForm = ({handleSubmit, handleChange, values, errors}) => (
    <form onSubmit={handleSubmit} className="w-full h-full flex flex-col justify-center items-end">            
        <Input
            name="username"
            value={values.username}
            type="text"
            title="Only letters (either case), numbers, and the underscore; no more than 15 characters."
            placeholder={"User Name"}
            required={true}
            Icon={UserIcon}
            error={errors.username}
            pattern="[A-Za-z0-9_]{1,15}"
            handleChange={handleChange}
        />
        <Input 
            name="password"
            value={values.password}
            type="password" 
            required={true}
            placeholder="Password" 
            Icon={PasswordIcon}
            error={errors.password}
            handleChange={handleChange}
        /> 
        <Button name="Login"  type="submit" />
    </form>
);

LoginForm.propTypes={
    handleSubmit:func.isRequired,
    handleChange:func.isRequired,
    values:object.isRequired,
    errors:object.isRequired
}

export default LoginForm;