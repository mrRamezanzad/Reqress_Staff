export default function Sort() {
  return (
    <select name="select" id="select-box" className=" align-self-start rounded bg-dark text-white mb-2">
      <option value="">Sort</option>
      <option value="">Latest</option>
      <option value="id">Id</option>
      <option value="first_name">First Name</option>
      <option value="last_name">Last Name</option>
      <option value="email">Email</option>
    </select>
  )
}