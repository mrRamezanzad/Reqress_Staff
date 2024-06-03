import Card from '../card/Card';

export interface User {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  avatar: string;
}

export interface MainProps {
  users: Array<User>
}

export default function Main({ users }: MainProps) {
  return (
    <main className="row">
      {
        users.map(item => {
          return <Card key={item.id} id={item.id.toString()} email={item.email} image={item.avatar} />
        })
      }
    </main>
  )
}