import Sorting from './Sorting';
import {string} from 'prop-types';
import {useDispatch, useSelector} from 'react-redux';
import {sortField} from '../application/actions/tasks';
import {getSortDirection, getSortField} from '../application/selectors/tasks'

function SortingContainer({fieldName, headerName}){
    const dispatch = useDispatch();
    const sort_direction = useSelector(getSortDirection);
    const sort_field = useSelector(getSortField);
    const handleSort = (value) => {
        dispatch(sortField(value));
    }
    return <Sorting fieldName={fieldName} headerName={headerName} sort_direction={sort_direction} sort_field={sort_field} handleSort={handleSort}/>
};

SortingContainer.propTypes = {
    fieldName:string.isRequired,
    headerName:string.isRequired
}

export default SortingContainer