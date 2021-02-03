import UserIcon from './icons/UserIcon';
import MailIcon from './icons/MailIcon';
import TaskIcon from './icons/TaskIcon';
import Input from './Input';
import Button from './Button';
import {object, func, bool, string} from 'prop-types';
import Switch from 'react-switch';
import StatusIcon from './icons/StatusIcon';

const TaskForm = ({handleSubmit, handleChange, values, errors, isLogged, whichForm, isTextChanged}) => (
    <form onSubmit={handleSubmit} className="w-full h-full flex flex-col justify-center items-end">            
        <Input
            name="username"
            value={values.username}
            type="text"
            title="Only letters (either case), numbers, and the underscore; no more than 15 characters."
            placeholder={"User Name"}
            required={true}
            error={errors.username}
            Icon={UserIcon}
            pattern="[A-Za-z0-9 _]{1,15}"
            handleChange={handleChange}
        />
        <Input 
            name="email"
            value={values.email}
            type="email"
            required={true}
            error={errors.email}
            placeholder="Email" 
            pattern="[^@]+@[^@]+\.[a-zA-Z]{2,6}"
            Icon={MailIcon}
            handleChange={handleChange}
        />
        <Input 
            name="text"
            value={values.text}
            type="text"
            error={errors.text}
            required={true}
            placeholder="Task Name" 
            Icon={TaskIcon}
            handleChange={handleChange}
        />
        {(isLogged && whichForm === 'Edit') &&
            <div className="flex flex-row w-full justify-start items-center my-3 text-gray-500">
                <StatusIcon className="text-3xl mx-3 text-gray-400 "/>
                <label className="text-xl font-medium pr-4">Status</label>
                <Switch 
                    checked={(values.status === 0 || values.status === 1) ? false : true}
                    onChange={(value) => handleChange({name:'status', value: 
                        isTextChanged ? 
                        (value ? (values.status === 10 ? 11 : values.status === 0 ? 1 : 11) : (values.status === 11 ? 1 : values.status === 1 ? 11 : 1)) 
                        : 
                        (value ? (values.status === 1 ? 11 : values.status === 10 ? 0 : 10) : (values.status === 0 ? 10 : values.status === 11 ? 1 : 0)
                    )})}
                    //value ? (isTextChanged ? (values.status === 11 ? 11 : 10) : 10) : (isTextChanged ? (values.status === 1 ? 1 : 0) : 0)})}
                />
            </div>
        }
        <Button name={whichForm}  type="submit" />
    </form>
);

TaskForm.propTypes={
    handleSubmit:func.isRequired,
    handleChange:func.isRequired,
    values:object.isRequired,
    isLogged:bool.isRequired,
    errors:object.isRequired,
    whichForm:string.isRequired,
    isTextChanged:bool.isRequired,
}

export default TaskForm;