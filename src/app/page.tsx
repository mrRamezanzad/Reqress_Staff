'use client'

import Nav from '@/components/nav/Nav';
import Sort from '@/components/sort/Sort';
import Pagination from '@/components/pagination/Pagination';
import Main, { User } from '@/components/main/Main';
import NewUserButton from '@/components/newUserButton/NewUserButton';
import SignupModal from '@/components/signup-modal/SignupModal';
import UserDetailModal from '@/components/user-detail-modal/UserDetailModal';
import { useState } from 'react';
import UserUpdateModal from '@/components/user-update-modal/UserUpdateModal';
import { currentPageUsers, getNumberOfPages, getSortedUsers } from './utils';
import { SortByEnum } from './AppContext';

export default function Home() {
    const [users, setUsers] = useState([
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
    const [selectedUser, setSelectedUser] = useState<User | null>(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [sortBy, setSortBy] = useState<SortByEnum>(SortByEnum.ID);
    const [usersToShow, setUsersToShow] = useState<Array<User>>(preparePage({
        users,
        currentPage,
        setCurrentPage,
        sortBy: SortByEnum.ID

    }));
    const [pages, setPages] = useState(0);

    const preparePage = ({ users, currentPage, setCurrentPage, sortBy }: any): Array<User> => {
        let usersToShow = users;

        usersToShow = currentPageUsers(users, currentPage, setCurrentPage);
        usersToShow = getSortedUsers(sortBy, usersToShow);
        setPages(getNumberOfPages(users));

        return usersToShow;
    };

    const onUserSelectHandler = (user: User) => {
        setSelectedUser(user);
    }

    const onUserDeleteHandler = (id: number) => {
        const updatedUsers = users.filter(user => user.id !== id)
        updateUsers(updatedUsers);
    }


    function updateUsers(users: Array<User>) {
        setUsers(users);
        updateUsersToShow(users);
    }

    function updateUsersToShow(users: Array<User>) {
        const usersToShow = preparePage({ users, currentPage, setCurrentPage, sortBy });
        setUsersToShow(usersToShow);
    };

    const onUserUpdateHandler = (updatedUser: User) => {
        const updatedUsers = users.map<User>((user) => {
            const shouldUpdate = user.id === updatedUser.id;

            if (shouldUpdate) {
                return updatedUser;
            }

            return user;
        });

        updateUsers(updatedUsers);
    }


    const onCurrentPageChange = (page: number) => {
        setCurrentPage(page);
    }

    return (<>
        {/* <Nav onSearch={onSearchHandler} /> */}
        {/* <Sort /> */}
        <Main users={usersToShow} onUserSelect={onUserSelectHandler} />
        {/* <NewUserButton /> */}
        {/* <SignupModal onUserSignup={onUserSignupHandler} /> */}
        <UserDetailModal user={selectedUser} onUserDelete={onUserDeleteHandler} />
        <UserUpdateModal user={selectedUser} onUserUpdate={onUserUpdateHandler} />
        <Pagination pages={pages} currentPage={currentPage} onCurrentPageChange={onCurrentPageChange} />
    </>);
}
