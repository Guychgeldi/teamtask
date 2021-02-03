import Pagination from './Pagination';
import {useDispatch, useSelector} from 'react-redux';
import {getTotalTaskCount} from '../application/selectors/tasks';
import {changePage} from '../application/actions/tasks';

function PaginationContainer(){
  const dispatch = useDispatch()
  const total_task_count = useSelector(getTotalTaskCount);

  const handlePageClick = (data) => {
      let page = data.selected;
      dispatch(changePage(page + 1));
    };
  return <Pagination pageCount={Math.ceil(total_task_count/3)} handlePageClick={handlePageClick}/>
}

export default PaginationContainer;