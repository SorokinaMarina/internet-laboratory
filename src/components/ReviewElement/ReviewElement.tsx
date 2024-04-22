import "./ReviewElement.scss";
import Image from "next/image";
import { IReview } from "@/utils/interface";

export default function ReviewElement({ name, img, city, text }: IReview) {
  return (
    <div className="review">
      <div className="review__container">
        <div className="review__user">
          <Image className="review__img" src={img} alt={name} />
          <div className="review__user-info">
            <h6 className="review__name">{name}</h6>
            <p className="review__city">{city}</p>
          </div>
        </div>
        <p className="review__text">{text}</p>
      </div>
    </div>
  );
}
