import Link from 'next/link'

export interface PaginationButtonProps {
  id: string;
  isActive?: boolean;
  onClick: Function;
}


export default function PaginationButton({ id, isActive = false, onClick }: PaginationButtonProps) {
  let liClasses = `page-item`;

  if (isActive) {
    liClasses += ' active';
  }

  const onClickHandler = () => {
    onClick(+id);
  }

  return (
    <li className={liClasses} onClick={onClickHandler}>
      <Link id={id} className="page-link" href={`?page=${id}&quot;`}>{id}</Link>
    </li >
  )
}