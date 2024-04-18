"use client";
import "./QuestionElement.scss";
import { IQuestionsElement } from "@/utils/interface";

export default function QuestionElement({
  title,
  text,
  id,
  handleClick,
  openElement,
}: IQuestionsElement) {
  return (
    <div className="question">
      <button
        className="question__button"
        onClick={() => {
          handleClick(id);
        }}
      >
        <h5
          className={`question__title ${id === openElement && "question__title_color"}`}
        >
          {title}
        </h5>
        <div
          className={`question__background-img ${id === openElement && "question__background-img_cross"}`}
        ></div>
      </button>
      {id === openElement && <p className="question__text">{text}</p>}
    </div>
  );
}
