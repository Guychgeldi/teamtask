import {array, bool} from 'prop-types';
import SortingContainer from './SortingContainer';
import ModalContainer from './ModalContainer';
import TaskFormContainer from './TaskFormContainer';

const getStatusElement = (status) => {
    switch (status){
        case 0:
            return <div>задача не выполнена</div>
        case 1:
            return <div>задача не выполнена, отредактирована админом</div>
        case 10:
            return <div>задача выполнена</div>
        case 11:
            return <div>задача отредактирована админом и выполнена</div>
        default:
            return null;
    }
}

const Tasks = ({tasks, isLogged}) =>(
    <div className="w-full h-full">
        <div className="bg-white shadow-md rounded my-1 h-full">
            <table className="text-left w-full border-collapse h-full">
                <thead>
                    <tr className="border border-gray-200  select-none">
                        <SortingContainer fieldName="username" headerName="User Name"/>
                        <SortingContainer fieldName="email" headerName="Email"/>
                        <th className="py-4 px-2 border-r border-gray-200 bg-gray-50 font-bold uppercase text-sm text-grey-dark border-b border-grey-light ">Task Name</th>
                        <SortingContainer fieldName="status" headerName="Status"/>
                        {isLogged && <th className="py-4 px-2 bg-gray-50 font-bold uppercase text-sm text-grey-dark border-b border-grey-light ">Actions</th>}
                    </tr>
                </thead>
                <tbody className="h-full border  border-gray-100">
                    {tasks.length !== 0 ? tasks.map(({id, username, email, text, status}) =>(
                        <tr key={id} className="hover:bg-grey-lighter">
                            <td className="py-4 px-6 border-b border-r border-grey-light ">{username}</td>
                            <td className="py-4 px-6 border-b border-r border-grey-light ">{email}</td>
                            <td className="py-4 px-6 border-b border-r border-grey-light  break-words">{text}</td>
                            <td className="py-4 px-6 border-b border-r border-grey-light ">{getStatusElement(status)}</td>
                            {isLogged && 
                                <td className="py-4 px-6 border-b border-r border-grey-light">
                                    <ModalContainer modalTitle="Edit Task" buttonName="Edit">
                                        <TaskFormContainer whichForm="Edit" defaultValues={{id, username, email, text, status}}/>
                                    </ModalContainer>
                                </td>
                            }
                        </tr>
                    )) : 
                        <tr className="bg-red-100 w-full shadow-lg">
                            <td colSpan="5" className="h-full">
                                <div className="flex justify-center items-center w-full h-full text-lg font-medium py-24">No Any Tasks</div>
                            </td>
                        </tr>
                    }
                </tbody>
            </table>
        </div>
    </div>
);

Tasks.propTypes = {
    tasks: array.isRequired,
    isLogged: bool.isRequired
}

export default Tasks;