import React from 'react'
import "../../App.css"
function Pagination({goToNextPage , goToPrevPage}) {
  return (
    <form className='paginate' onSubmit={(e) => e.preventDefault()}>
        {goToPrevPage && <button onClick={goToPrevPage}  className='btn'>Prev Page</button>}
        {goToNextPage &&  <button onClick={goToNextPage} className='btn'>Next Page</button>}
    </form>
  )
}

export default Pagination