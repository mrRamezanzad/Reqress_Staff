// AppContext.js
import { createContext, useState, useContext, useReducer } from 'react';
import { SortEnum, getNumberOfPages, getSortedUsers } from './utils';
import { User } from '@/components/main/Main';

export enum SortByEnum {

  ID = 'id',
  FIRST_NAME = 'first_name',
  LAST_NAME = 'last_name',
  EMAIL = 'email'
}

export type AppContextType = {
  users: Array<User> | [],
  setUsers: (users: Array<User> | []) => void,
  sortBy: SortByEnum,
  setSortBy: (sortByt: SortByEnum) => void,
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const useAppContext = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }

  return context;
};

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  // interface SearchState {
  //   query: string
  //   isSearching: boolean
  // }

  // const searchReducer = (state: SearchState, action: { type: string, value: string }) => {
  //   switch (action.type) {
  //     case 'search':
  //       return { query: action.value, isSearching: true }
  //     case 'escape':
  //       return { query: '', isSearching: false }
  //     default:
  //       return state
  //   }
  // }
  const [users, setUsers] = useState<Array<User>>([
    {
      id: 1,
      "first_name": "ali",
      "last_name": "ahmadi",
      "email": "aliahmadi@gmail.com",
      "avatar": "/assets/user1.jpg"
    }, {
      id: 2,
      "first_name": "saeed",
      "last_name": "tehran",
      "email": "saeedstone@gmail.com",
      "avatar": "/assets/user2.jpg"
    }, {
      id: 3,
      "first_name": "saman",
      "last_name": "ashari",
      "email": "sameasghari@gmail.com",
      "avatar": "/assets/user6.jpg"
    }, {
      id: 4,
      "first_name": "yusef",
      "last_name": "najat",
      "email": "imyusef@gmail.com",
      "avatar": "/assets/user3.jpg"
    }, {
      id: 5,
      "first_name": "sami",
      "last_name": "beigi",
      "email": "avamusicsamibeigi@gmail.com",
      "avatar": "/assets/user4.jpg"
    }, {
      id: 6,
      "first_name": "sami",
      "last_name": "beigi",
      "email": "avamusicsamibeigi@gmail.com",
      "avatar": "/assets/user6.jpg"
    }, {
      id: 7,
      "first_name": "sami",
      "last_name": "beigi",
      "email": "avamusicsamibeigi@gmail.com",
      "avatar": "/assets/user7.png"
    },
  ]);

  const [sortBy, setSortBy] = useState<SortByEnum>('id')

  // const [users, setUsers] = useState([
  //         {
  //             id: 1,
  //             first_name: 'a',
  //             last_name: 'h',
  //             email: 'h',
  //             avatar: '/assets/user1.jpg',
  //         }, {
  //             id: 1,
  //             first_name: 'a',
  //             last_name: 'h',
  //             email: 'h',
  //             avatar: '/assets/user1.jpg',
  //         }, {
  //             id: 1,
  //             first_name: 'a',
  //             last_name: 'h',
  //             email: 'h',
  //             avatar: '/assets/user1.jpg',
  //         }, {
  //             id: 1,
  //             first_name: 'a',
  //             last_name: 'h',
  //             email: 'h',
  //             avatar: '/assets/user1.jpg',
  //         }, {
  //             id: 1,
  //             first_name: 'a',
  //             last_name: 'h',
  //             email: 'h',
  //             avatar: '/assets/user1.jpg',
  //         }, {
  //             id: 1,
  //             first_name: 'a',
  //             last_name: 'h',
  //             email: 'h',
  //             avatar: '/assets/user1.jpg',
  //         }, {
  //             id: 1,
  //             first_name: 'a',
  //             last_name: 'h',
  //             email: 'h',
  //             avatar: '/assets/user1.jpg',
  //         }, {
  //             id: 1,
  //             first_name: 'a',
  //             last_name: 'h',
  //             email: 'h',
  //             avatar: '/assets/user1.jpg',
  //         }, {
  //             id: 2,
  //             first_name: 'b',
  //             last_name: 'g',
  //             email: 'g',
  //             avatar: '/assets/user2.jpg',
  //         }, {
  //             id: 3,
  //             first_name: 'c',
  //             last_name: 'f',
  //             email: 'f',
  //             avatar: '/assets/user3.jpg',
  //         }, {
  //             id: 4,
  //             first_name: 'd',
  //             last_name: 'e',
  //             email: 'e',
  //             avatar: '/assets/user4.jpg',
  //         }, {
  //             id: 5,
  //             first_name: 'e',
  //             last_name: 'd',
  //             email: 'd',
  //             avatar: '/assets/user5.jpg',
  //         }, {
  //             id: 6,
  //             first_name: 'f',
  //             last_name: 'c',
  //             email: 'c',
  //             avatar: '/assets/user2.jpg',
  //         }, {
  //             id: 7,
  //             first_name: 'g',
  //             last_name: 'b',
  //             email: 'b',
  //             avatar: '/assets/user3.jpg',
  //         }, {
  //             id: 8,
  //             first_name: 'h',
  //             last_name: 'a',
  //             email: 'a',
  //             avatar: '/assets/user4.jpg',
  //         },
  //     ] as Array<User>)
  // const [pages, setPages] = useState<number>(getNumberOfPages(users));
  // const [currentPage, setCurrentPage] = useState<number>(1);
  // const [search, dispatchSearch] = useReducer(searchReducer, {
  //   query: '',
  //   isSearching: false,
  // }, (args: SearchState): SearchState => {
  //   return {
  //     query: '',
  //     isSearching: false
  //   }
  // })
  // const [sortBy, setSortBy] = useState<SortType>('id');
  const [usersToShow, setUsersToShow] = useState<Array<User>>(users);
  // const [selectedUser, setSelectedUser] = useState<User | null>(null);

  return (
    <AppContext.Provider value={{
      users, setUsers,
      sortBy, setSortBy,
      // pages, setPages,
      // currentPage, setCurrentPage,
      // search, dispatchSearch,
      // usersToShow, setUsersToShow,
      // selectedUser, setSelectedUser
    }}>
      {children}
    </AppContext.Provider>
  );
};