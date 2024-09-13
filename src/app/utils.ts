import { User } from '@/components/main/Main';


export function currentPageUsers (users: Array<User>, currentPage: number, setCurrentPage: Function): Array<User> {
  const currentUsers = users.slice((currentPage - 1) * 6, currentPage * 6);

  const noUsersInCurrentPage = currentUsers.length === 0;
  if (noUsersInCurrentPage) {
      const previousPage = currentPage - 1;
      const hasPreviousPage = previousPage > 0;
      if (hasPreviousPage) {
          setCurrentPage(previousPage);
          return currentPageUsers(users, previousPage, setCurrentPage);
      }
  }

  return currentUsers;
};

export function getNumberOfPages(users: Array<User>): number {
  let pages = Math.ceil(users.length / 6)

  return pages;
}

export type SortEnum = 'id' | 'first_name' | 'last_name' | 'email';

export function getSortedUsers (sortBy: SortEnum, users: Array<User>): Array<User> {
  const usersToSort = [...users]
  return usersToSort.sort((a, b) => {
      if (sortBy == "id") {
          return a.id - b.id;
      }

      const valueA = a[sortBy].toLowerCase()
      const valueB = b[sortBy].toLowerCase()

      return valueA < valueB ? -1 : 1
  })
};

// async function getUsers(): Promise<Array<User>> {
//     const res = await fetch('https://reqres.in/api/users?page=1')

//     if (res.ok) {
//         const fetchedUsers = await res.json()
//         return fetchedUsers.data
//     }

//     return []
// }
