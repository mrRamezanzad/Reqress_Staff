'use client'

import Nav from '@/components/nav/Nav';
import Sort from '@/components/sort/Sort';
import Pagination from '@/components/pagination/Pagination';
import Main, { User } from '@/components/main/Main';
import NewUserButton from '@/components/newUserButton/NewUserButton';
import SignupModal from '@/components/signup-modal/SignupModal';
import UserDetailModal from '@/components/user-detail-modal/UserDetailModal';
import { useEffect, useState } from 'react';
import UserUpdateModal from '@/components/user-update-modal/UserUpdateModal';


function getNumberOfPages(users: Array<User>): number {
    let pages = Math.ceil(users.length / 6)

    return pages;
}

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
    ])
    const [selectedUser, setSelectedUser] = useState<User | null>(null)
    const [usersToShow, setUsersToShow] = useState<Array<User>>(users)
    const [pages, setPages] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        setPageAndUsersToShow(users);
    },
        [users]
    )

    const setPageAndUsersToShow = (users: Array<User>) => {
        setUsersToShow(users)
        setPages(getNumberOfPages(users))
    }

    const onCurrentPageChange = (page: number) => {
        setCurrentPage(page);
    }

    const currentPageUsers = (users: Array<User>): Array<User> => users.slice((currentPage - 1) * 6, currentPage * 6)


    const onUserSignupHandler = (user: User) => {
        setUsers([...users, user])
    }

    const onUserSelectHandler = (user: User) => {
        setSelectedUser(user);
    }

    const onUserDeleteHandler = (id: number) => {
        const updatedUsers = users.filter(user => user.id !== id)
        setUsers(updatedUsers);
    }

    const onUserUpdateHandler = (updatedUser: User) => {
        const updatedUsers = users.map<User>((user) => {
            const shouldUpdate = user.id === updatedUser.id;

            if (shouldUpdate) {
                return updatedUser;
            }

            return user;
        });

        setUsers(updatedUsers);
    }

    const onSearchHandler = (search: string) => {
        const normalizedSearch = search.toLowerCase();

        const shouldResetSearchResults = normalizedSearch === '';
        if (shouldResetSearchResults) {
            return setPageAndUsersToShow(users);
        }

        // solution 1
        const foundUsers = users.filter((user) => user.id.toString() == normalizedSearch ||
            user.first_name === normalizedSearch || user.last_name === normalizedSearch ||
            user.email === normalizedSearch || user.avatar === normalizedSearch
        )

        setPageAndUsersToShow(foundUsers)

        // solution 2
        // foundUsers = users.filter((el) => String(el.id).includes(normalizedSearch) || String(el.first_name).includes(normalizedSearch) ||
        //     String(el.last_name).toLowerCase().includes(normalizedSearch) || String(el.email).includes(normalizedSearch) || String(el.avatar).includes(normalizedSearch))

        //solution 3 is regex but i'm tired (00)
        // show the damn users
        // showUsers(foundUsers)

    }

    return (<>
        <Nav onSearch={onSearchHandler} />
        <Sort />
        <Main users={currentPageUsers(usersToShow)} onUserSelect={onUserSelectHandler} />
        <NewUserButton />
        <SignupModal onUserSignup={onUserSignupHandler} />
        <UserDetailModal user={selectedUser} onUserDelete={onUserDeleteHandler} />
        <UserUpdateModal user={selectedUser} onUserUpdate={onUserUpdateHandler} />
        <Pagination pages={pages} currentPage={currentPage} onCurrentPageChange={onCurrentPageChange} />
    </>);
}
