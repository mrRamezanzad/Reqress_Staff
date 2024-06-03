import Nav from '@/components/nav/Nav';
import Sort from '@/components/sort/Sort';
import Modal from '@/components/modal/Modal';
import Pagination from '@/components/pagination/Pagination';
import Main from '@/components/main/Main';
import NewUserButton from '@/components/newUserButton/NewUserButton';
import UpdateModal from '@/components/update-modal/UpdateModal';
import { useEffect, useState } from 'react';

export default function Home() {
    return (<>
        <Nav />
        <Sort />
        <Main />
        <NewUserButton />
        <UpdateModal />
    </>);
}
