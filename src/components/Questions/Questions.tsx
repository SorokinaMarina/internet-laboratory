import "./Questions.scss";
import QuestionElement from "../QuestionElement/QuestionElement";
import { questions } from "@/utils/constants";
import { IQuestions } from "@/utils/interface";
import { arrNav } from "@/utils/constants";

export default function Questions() {
  return (
    <section id={arrNav[2].split(' ')[0]} className="questions">
      <h3 className="questions__title">Вопросы и ответы</h3>
      <div className="questions__container">
        {questions.map((item: IQuestions) => (
          <QuestionElement key={item.title} {...item} />
        ))}
      </div>
    </section>
  );
}
