import Nav from '@/components/nav/Nav';
import Sort from '@/components/sort/Sort';
import Modal from '@/components/modal/Modal';
import Pagination from '@/components/pagination/Pagination';
import Main, { User } from '@/components/main/Main';
import NewUserButton from '@/components/newUserButton/NewUserButton';
import SignupModal from '@/components/signup-modal/SignupModal';
import UpdateModal from '@/components/update-modal/UpdateModal';
import { useEffect, useState } from 'react';

export default function Home() {
    const [users, setUsers] = useState([
        {
            id: 1,
            "first_name": "ali",
            "last_name": "ahmadi",
            "email": "aliahmadi@gmail.com",
            "avatar": "public/assets/user1.jpg"
        }, {
            id: 2,
            "first_name": "saeed",
            "last_name": "tehran",
            "email": "saeedstone@gmail.com",
            "avatar": "public/assets/user2.jpg"
        }, {
            id: 3,
            "first_name": "saman",
            "last_name": "ashari",
            "email": "sameasghari@gmail.com",
            "avatar": "public/assets/user6.jpg"
        }, {
            id: 4,
            "first_name": "yusef",
            "last_name": "najat",
            "email": "imyusef@gmail.com",
            "avatar": "public/assets/user3.jpg"
        }, {
            id: 5,
            "first_name": "sami",
            "last_name": "beigi",
            "email": "avamusicsamibeigi@gmail.com",
            "avatar": "public/assets/user4.jpg"
        }, {
            id: 6,
            "first_name": "sami",
            "last_name": "beigi",
            "email": "avamusicsamibeigi@gmail.com",
            "avatar": "public/assets/user6.jpg"
        }, {
            id: 7,
            "first_name": "sami",
            "last_name": "beigi",
            "email": "avamusicsamibeigi@gmail.com",
            "avatar": "public/assets/user7.png"
        },
    ])

    const addNewUser = (user: User) => {
        setUsers([...users, user])
    }
    return (<>
        <Nav />
        <Sort />
        <Main users={users} />
        <NewUserButton />
        <SignupModal onSubmit={addNewUser} />
        <UpdateModal />
    </>);
}
