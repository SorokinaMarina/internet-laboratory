"use client";
import { useState } from "react";
import "./QuestionElement.scss";
import { IQuestions } from "@/utils/interface";

export default function QuestionElement({ title, text }: IQuestions) {
  const [textVisible, setTextVisible] = useState(false);
  return (
    <div className="question">
      <button
        className="question__button"
        onClick={() => {
          setTextVisible(!textVisible);
        }}
      >
        <h5
          className={`question__title ${textVisible && "question__title_color"}`}
        >
          {title}
        </h5>
        <div
          className={`question__background-img ${textVisible && "question__background-img_cross"}`}
        ></div>
      </button>
      {textVisible && <p className="question__text">{text}</p>}
    </div>
  );
}
