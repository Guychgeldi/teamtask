import ReactPaginate from 'react-paginate';
import {func, number} from "prop-types"

const Pagination = ({pageCount, handlePageClick}) => (
    <ReactPaginate
        previousLabel={'previous'}
        nextLabel={'next'}
        breakLabel={'...'}
        breakClassName={'break-me'}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={'list-none flex flex-row justify-center items-center my-2 py-2 w-full max-w-sm mx-auto'}
        subContainerClassName={'bg-blue-500'}
        activeClassName={'list-none bg-green-500 text-white'}
        pageClassName={'list-none cursor-pointer bg-white mx-1 border border-green-500 rounded-sm'}
        pageLinkClassName={'list-none p-3 focus:outline-none outline-none'}
        previousLinkClassName={'list-none px-2 py-1 mr-4 cursor-pointer focus:outline-none outline-none bg-white bg-green-500 text-white rounded-sm select-none'}
        nextLinkClassName={'list-none px-2 py-1 ml-4 cursor-pointer focus:outline-none outline-none bg-white bg-green-500 text-white rounded-sm select-none'}
    />
);

Pagination.propTypes = {
    pageCount:number.isRequired,
    handlePageClick:func.isRequired
}

export default Pagination;