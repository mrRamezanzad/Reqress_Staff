export default function Pagination() {
  return (
    <div className="row ">
      <nav aria-label="..." className="d-flex justify-content-center">
        <ul id="pagination" className="pagination pagination-sm">
          <li className="page-item active">
            <a id="1" className="page-link" href="?page=1&quot;">1</a>
          </li>

          <li className="page-item ">
            <a id="2" className="page-link" href=" ?page=2&quot;">2</a>
          </li>
        </ul>
      </nav>
    </div>)
}