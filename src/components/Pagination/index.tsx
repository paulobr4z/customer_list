import { useEffect, useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { PaginationContainer } from './styles';

interface IPagination {
  pageNumber?: number;
  handleChangePage: (n: number) => void;
}

export function Pagination({
  pageNumber = 1,
  handleChangePage
}: IPagination) {
  let initialPages: Array<number> = [];
  const [pages, setPages] = useState<number[]>(initialPages);

  for (let index = 0; index < 3; index++) {
    initialPages.push(index + 1);    
  }

  function onChangePage(page: number) {
    if (page < 1) {
      handleChangePage(1) 
    } else {
      handleChangePage(page)
      if (page > 2) {
        setPages([page - 1, page, page + 1])
        handleChangePage(page);
      }
    }
    if (page === 2) {
      handleChangePage(page)
      setPages([page - 1, page, page + 1])      
    }
  }
  return (
    <PaginationContainer>
      <span onClick={() => onChangePage(pageNumber - 1)}>
        <FiChevronLeft />
      </span>
      {
        pages.map((page)  => (
          <span 
            className={page === pageNumber ? 'selected' : ''}
            onClick={() => onChangePage(page)}
          >
            {page}
          </span>
        ))
      }  
      <span onClick={() => onChangePage(pageNumber + 1)}>
        <FiChevronRight />
      </span>    
    </PaginationContainer>
  );
}