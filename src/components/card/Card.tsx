import Image from 'next/image';

export interface CardProps {
  id: number;
  email: string;
  image: string;
  onClick: (id: number) => void;
}

export default function Card({ id, email, image, onClick }: CardProps) {
  const onClickHandler = (): void => {
    onClick(id);
  }

  return (
    <div className="col-md-4 mb-3 ">
      <div className="card shadow">
        <Image src={image} className="card-img-top rounded-circle" alt="..." width={200} height={200} data-bs-toggle="modal" data-bs-target="#user-detail-modal" onClick={onClickHandler} />
        <div className="card-body">
          <p className="card-text fw-bold">id: <span>{id}</span></p>
          <p className="card-text">email: <span>{email}</span></p>
          <a user-id="1" data-bs-toggle="modal" data-bs-target="#user-detail-modal" className="btn btn-dark main--cards--card--card-body--more-info" onClick={onClickHandler}>more info</a>
        </div>
      </div>
    </div>
  )
}