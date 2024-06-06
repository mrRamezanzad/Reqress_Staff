import Card from '../card/Card';

export interface User {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  avatar: string;
}

export interface MainProps {
  users: Array<User>;
  onUserSelect: Function;
}

export default function Main({ users, onUserSelect }: MainProps) {

  const onClickHandle = (id: number): void => {
    const selectedUser = users.find(user => user.id === id)
    onUserSelect(selectedUser);
  }

  return (
    <main className="row">
      {
        users.map((item, index) => {
          return <Card key={index} id={item.id} email={item.email} image={item.avatar} onClick={onClickHandle} />
        })
      }
    </main>
  )
}