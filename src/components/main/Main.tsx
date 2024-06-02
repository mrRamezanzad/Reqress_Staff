import Image from 'next/image';
import Card from '../card/Card';

export default function Main() {
  const data = [
    { id: '1', email: 'aliahmadi@gmail.com', image: '/assets/user1.jpg' },
    { id: '2', email: 'saeedstone@gmail.com', image: '/assets/user2.jpg' },
    { id: '3', email: 'sameasghari@gmail.com', image: '/assets/user6.jpg' },
    { id: '4', email: 'imyusef@gmail.com', image: '/assets/user3.jpg' },
    { id: '5', email: 'avamusicsamibeigi@gmail.com', image: '/assets/user4.jpg' },
    { id: '6', email: 'avamusicsamibeigi@gmail.com', image: '/assets/user6.jpg' },
  ]
  return (
    <main className="row">
      {data.map(item => {
        return <Card key={item.id} id={item.id} email={item.email} image={item.image} />
      })}
    </main>
  )
}