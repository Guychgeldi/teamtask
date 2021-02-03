import CloseIcon from './icons/CloseIcon';
import {func, element, string} from 'prop-types';

const Modal = ({title, children, setClose}) =>(
    <div className="absolute top-0 left-0 z-30 bg-transparent w-full h-full flex justify-center items-start py-20">
        <div className="flex flex-col justify-start items-start bg-white max-w-xl w-full shadow-lg py-2 mx-2">
            <div className="flex w-full justify-between items-center bg-white shadow-2xl border-b border-gray-100 px-2 select-none">
                <div className="text-xl font-medium text-gray-700">
                    {title}
                </div>
                <CloseIcon className="text-2xl cursor-pointer text-black" onClick={setClose}/>
            </div>
            <div className="w-full h-full px-2">
                {children}
            </div>
        </div>
    </div>
);

Modal.propTypes = {
    setClose:func.isRequired,
    children:element.isRequired,
    title:string.isRequired
}

export default Modal;