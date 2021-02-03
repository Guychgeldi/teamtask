import {string, bool, func} from 'prop-types';

const Input = ({name, type, error, value, title, placeholder, required, pattern, Icon, handleChange}) =>{
    return(
    <div className="relative w-full my-3">
        <input 
            name={name} 
            type={type}
            value={value}
            title={title}
            pattern={pattern} 
            required={required} 
            placeholder={placeholder} 
            onChange={(e) => handleChange({name, value:e.target.value})} 
            className="w-full bg-gray-50 text-xl font-medium py-1 pl-12 pr-4 outline-none shadow-inner" 
        />
        <div className="text-sm text-red-600 font-medium">{error && error}</div>
        <Icon className="text-2xl absolute top-0 left-0 mt-2 ml-3 text-gray-400"/>
    </div>
);}

Input.propTypes = {
    name:string.isRequired,
    type:string.isRequired,
    error:string.isRequired,
    value:string.isRequired,
    title:string,
    placeholder:string.isRequired,
    required:bool.isRequired,
    pattern:string,
    Icon:func,
    handleChange:func.isRequired
}

export default Input;