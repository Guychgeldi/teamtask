import SortAscendingIcon from './icons/SortAscendingIcon';
import {string, func} from 'prop-types';


const Sorting = ({fieldName, headerName, sort_direction, sort_field, handleSort}) =>(
    <th className="py-4 px-3 border-r border-gray-200 bg-gray-50 font-bold uppercase text-sm text-grey-dark border-b border-grey-light">
        <div className="flex flex-row w-full justify-around items-center">
            <div>{headerName}</div>
            <SortAscendingIcon 
                onClick={() => handleSort(fieldName)} 
                className={
                (sort_direction === "asc" && sort_field === fieldName) ?
                    "text-2xl cursor-pointer" : 
                (sort_direction !== "asc" && sort_field === fieldName) ?
                    "text-2xl transform rotate-180 cursor-pointer" 
                    : 
                    "text-2xl cursor-pointer"
                }
            />
        </div>
    </th>
);

Sorting.propTypes = {
    fieldName:string.isRequired,
    headerName:string.isRequired,
    handleSort:func.isRequired,
    sort_direction:string.isRequired,
    sort_field:string.isRequired
}

export default Sorting;