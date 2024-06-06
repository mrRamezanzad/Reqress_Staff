'use client'

import Nav from '@/components/nav/Nav';
import Sort from '@/components/sort/Sort';
import Pagination from '@/components/pagination/Pagination';
import Main, { User } from '@/components/main/Main';
import NewUserButton from '@/components/newUserButton/NewUserButton';
import SignupModal from '@/components/signup-modal/SignupModal';
import UserDetailModal from '@/components/user-detail-modal/UserDetailModal';
import { useEffect, useState } from 'react';


function getNumberOfPages(users: Array<User>, currentPage = 1): number {
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
    const [currentPage, setCurrentPage] = useState(1);

    const onCurrentPageChange = (page: number) => {
        setCurrentPage(page);
    }

    useEffect(() => {
        // async () => {
    }, [users])

    const pages = getNumberOfPages(users)

    const onUserSignupHandler = (user: User) => {
        setUsers([...users, user])
    }

    const onUserSelectHandler = (user: User) => {
        setSelectedUser(user);
    }

    const onUserDeleteHandler = (id: number) => {
        setUsers(users.filter(user => user.id !== id));
    }


    return (<>
        <Nav />
        <Sort />
        <Main users={paginateUsers()} onUserSelect={onUserSelectHandler} />
        <NewUserButton />
        <SignupModal onUserSignup={onUserSignupHandler} />
        <UserDetailModal user={selectedUser}
            //  onUserUpdateButtonClick={onUserUpdateButtonClickHandler}
            onUserDelete={onUserDeleteHandler} />
        <Pagination pages={pages} currentPage={currentPage} onCurrentPageChange={onCurrentPageChange} />
    </>);
}
