import { ChangeEvent } from 'react'

export interface SortProps {
  onChange: Function;
}

export default function Sort({ onChange }: SortProps) {
  const onChangeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    const value = event.currentTarget.value;
    onChange(value);
  }

  return (
    <select name="select" id="select-box" className=" align-self-start rounded bg-dark text-white mb-2" onChange={onChangeHandler}>
      <option value="id">Sort</option>
      <option value="id">Latest</option>
      <option value="id">Id</option>
      <option value="first_name">First Name</option>
      <option value="last_name">Last Name</option>
      <option value="email">Email</option>
    </select>
  )
}