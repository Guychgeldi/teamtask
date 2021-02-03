import { Toaster } from 'react-hot-toast';
import { useSelector, useDispatch } from 'react-redux';
import Loader from "react-loader-spinner";
import ModalContainer from './components/ModalContainer';
import TaskCreateFormContainer from './components/TaskFormContainer';
import LoginFormContainer from './components/LoginFormContainer';
import Button from './components/Button';
import {logout} from './application/actions/auth'
import {getIsLogged} from './application/selectors/auth';
import {getLoading} from './application/selectors/tasks';
import TasksContainer from './components/TasksContainer';
import PaginationContainer from './components/PaginationContainer';


const App = () => {
    const isLogged = useSelector(getIsLogged);
    const loading = useSelector(getLoading)
    const dispatch = useDispatch();
    return (
        <div className="relative w-full h-screen">
            {loading && 
                <div className="z-50 absolute top-0 left-0 w-full h-full flex justify-center items-center bg-transparent ">
                    <Loader type="Bars" color="rgba(16, 185, 129, 1)" height={80} width={80} />
                </div>
            }
            <div className=" flex flex-col w-full 2xl:max-w-6xl mx-auto px-2">
                <div className="flex flex-row justify-between items-center mb-2 mt-8">
                    <div></div>
                    <div className="text-3xl font-semibold">Task List</div>
                    {isLogged ? 
                        <div className="w-20">
                            <Button name="Logout"  type="button" handleClick={() => dispatch(logout())}/>
                        </div>
                        :
                        <ModalContainer modalTitle="Login" buttonName="Login">
                            <LoginFormContainer/>
                        </ModalContainer>
                    }
                    
                </div>
                <div className="flex flex-col w-full mx-auto">
                    <ModalContainer modalTitle="Create Task" buttonName="Create">
                        <TaskCreateFormContainer whichForm="Create" defaultValues={{username:"", email:"", text:""}}/>
                    </ModalContainer>
                    <TasksContainer/>
                </div>
                <PaginationContainer/>
            </div>
            <Toaster/>
        </div>
    );
}

export default App;