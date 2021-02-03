import {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTaskList, getSortField, getSortDirection, getPage} from '../application/selectors/tasks';
import {getIsLogged} from '../application/selectors/auth';
import {getTasks} from '../application/middleware/tasks';
import Tasks from './Tasks';

const TasksContainer = () => {
    const dispatch = useDispatch();
    const tasks = useSelector(getTaskList);
    const sort_field = useSelector(getSortField);
    const sort_direction = useSelector(getSortDirection);
    const isLogged = useSelector(getIsLogged);
    const page = useSelector(getPage);

    useEffect(() =>{
        dispatch(getTasks({sort_field, sort_direction, page}))
    },[dispatch, sort_field, sort_direction, page]);
    
    return <Tasks tasks={tasks} isLogged={isLogged}/>
}

export default TasksContainer;