import "./Card.scss";
import { ICard } from "@/utils/interface";
import Image from "next/image";

export default function Card({ image, title, text }: ICard) {
  return (
    <div className="card">
      <Image className="card__image" src={image} alt={title} />
      <div className="card__container">
        <h3 className="card__title">{title}</h3>
        <p className="card__text">{text}</p>
      </div>
    </div>
  );
}
