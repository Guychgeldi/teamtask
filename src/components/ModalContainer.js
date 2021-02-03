import {useState, cloneElement, useEffect} from 'react';
import Modal from './Modal';
import Button from './Button';
import {element, string} from 'prop-types';
import {removeFormErrors} from '../application/actions/auth';
import {useDispatch} from 'react-redux';

function ModalContainer({children, buttonName, modalTitle}){
    const [isOpen, setOpen] = useState(false);
    const dispatch = useDispatch();
    const setClose = () => {
        setOpen(!isOpen);
        dispatch(removeFormErrors());
    };
    useEffect(() => {
        return () => {
            setOpen(false);
        }
    }, []);
    return(
        <>  
            <div className="w-20">
                <Button name={buttonName}  type="button" handleClick={setClose}/>
            </div>
            {isOpen && 
                <Modal title={modalTitle} setClose={setClose}>
                    {cloneElement(children, {setClose})}
                </Modal>
            }
        </>
    )
};

ModalContainer.propTypes = {
    children:element.isRequired,
    buttonName:string.isRequired,
    modalTitle:string.isRequired
}

export default ModalContainer