import Link from 'next/link';

export default function Pagination() {
  return (
    <div className="row ">
      <nav aria-label="..." className="d-flex justify-content-center">
        <ul id="pagination" className="pagination pagination-sm">
          <li className="page-item active">
            <Link id="1" className="page-link" href="?page=1&quot;">1</Link>
          </li>

          <li className="page-item ">
            <Link id="2" className="page-link" href=" ?page=2&quot;">2</Link>
          </li>
        </ul>
      </nav>
    </div>)
}