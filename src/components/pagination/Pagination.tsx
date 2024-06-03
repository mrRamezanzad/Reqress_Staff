import { useState } from 'react';
import PaginationButton from './pagination-button/PaginationButton';

export interface PaginationProps {
  pages: number;
  currentPage: number;
  onCurrentPageChange?: (page: number) => void;
}

export default function Pagination({ pages = 1, currentPage = 1, onCurrentPageChange = () => { } }: PaginationProps) {
  const paginations = Array.from({ length: pages }, (_value, index) => index + 1);


  const changePageHandler = (page: number) => {
    const isCurrentPageChanged = page !== currentPage;

    if (isCurrentPageChanged) {

      onCurrentPageChange(page);
    }
  }

  return (
    <div className="row ">
      <nav aria-label="..." className="d-flex justify-content-center">
        <ul id="pagination" className="pagination pagination-sm">
          {
            paginations.map(pagination => {
              const isActive = pagination === currentPage;
              return <PaginationButton key={pagination} id={`${pagination}`} isActive={isActive} onClick={changePageHandler} />
            })
          }
        </ul>
      </nav>
    </div>)
}