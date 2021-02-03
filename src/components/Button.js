import {string, func} from 'prop-types';

const Button = ({name, type, handleClick}) => (
    <button
        onClick={handleClick}
        type={type}
        className={
                name === "Login" ? 
            "w-full border border-green-500 bg-green-500 text-white rounded-sm py-1 select-none hover:bg-green-600 focus:outline-none focus:shadow-outline active:bg-green-500"
            :
                name === "Edit" ? 
            "w-full border border-yellow-500 bg-yellow-500 text-white rounded-sm py-1 select-none hover:bg-yellow-600 focus:outline-none focus:shadow-outline active:bg-yellow-500"
            :
            "w-full border border-blue-500 bg-blue-500 text-white rounded-sm py-1 select-none hover:bg-blue-600 focus:outline-none focus:shadow-outline active:bg-blue-500"
        }
    >
    {name}
  </button>
);

Button.propTypes = {
    name:string.isRequired,
    type:string.isRequired,
    setOpen: func
}

export default Button;