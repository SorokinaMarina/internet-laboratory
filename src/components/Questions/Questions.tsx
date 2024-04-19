"use client";
import "./Questions.scss";
import { useState } from "react";
import QuestionElement from "../QuestionElement/QuestionElement";
import { questions } from "@/utils/constants";
import { IQuestions } from "@/utils/interface";
import { arrNav } from "@/utils/constants";

export default function Questions() {
  const [openElement, setOpenElement] = useState<null | string>(null);

  function handleClick(id: string): void {
    if (id === openElement) {
      setOpenElement(null);
    } else {
      setOpenElement(id);
    }
  }
  return (
    <section id={arrNav[2].split(" ")[0]} className="questions">
      <h3 className="questions__title">Вопросы и ответы</h3>
      <ul className="questions__container">
        {questions.map((item: IQuestions) => (
          <QuestionElement
            key={item.id}
            {...item}
            handleClick={handleClick}
            openElement={openElement}
          />
        ))}
      </ul>
    </section>
  );
}
