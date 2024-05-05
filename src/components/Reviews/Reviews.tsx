import "./Reviews.scss";
import Slider from "../Slider/Slider";

export default function Reviews() {
  return (
    <section className="reviews">
      <div className="reviews__container">
        <h3 className="reviews__title">Отзывы</h3>
        <Slider />
      </div>
    </section>
  );
}
