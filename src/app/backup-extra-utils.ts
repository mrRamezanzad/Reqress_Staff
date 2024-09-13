









const onUserSignupHandler = (user: User) => {
    updateUsers([...users, user])
}






const onSearchHandler = (search: string) => {
    const normalizedSearch = search.toLowerCase();

    const shouldResetSearchResults = normalizedSearch === '';
    if (shouldResetSearchResults) {
        return updateUsersToShow(users);
    }

    // solution 1
    const foundUsers = users.filter((user) => user.id.toString() == normalizedSearch ||
        user.first_name === normalizedSearch || user.last_name === normalizedSearch ||
        user.email === normalizedSearch || user.avatar === normalizedSearch
    )

    updateUsersToShow(foundUsers)

    // solution 2
    // foundUsers = users.filter((el) => String(el.id).includes(normalizedSearch) || String(el.first_name).includes(normalizedSearch) ||
    //     String(el.last_name).toLowerCase().includes(normalizedSearch) || String(el.email).includes(normalizedSearch) || String(el.avatar).includes(normalizedSearch))

    //solution 3 is regex but i'm tired (00)
    // show the damn users
    // showUsers(foundUsers)

}
