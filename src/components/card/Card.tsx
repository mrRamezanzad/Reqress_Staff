import Image from 'next/image';

export interface CardProps {
  id: string;
  email: string;
  image: string;
}

export default function Card({ id, email, image }: CardProps) {
  return (
    <div className="col-md-4 mb-3 ">
      <div className="card shadow">
        <Image src={image} className="card-img-top rounded-circle" alt="..." width={200} height={200} />
        <div className="card-body">
          <p className="card-text fw-bold">id: <span id="id">{id}</span></p>
          <p className="card-text">email: <span id="email">{email}</span></p>
          <a user-id="1" data-bs-toggle="modal" data-bs-target="#more-info-modal" className="btn btn-dark main--cards--card--card-body--more-info">more info</a>
        </div>
      </div>
    </div>
  )
}