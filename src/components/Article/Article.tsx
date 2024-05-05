import "./Article.scss";
import { IArticles } from "@/utils/interface";

export default function Article({ title, text }: IArticles) {
  return (
    <li className="article">
      <h5 className="article__title">{title}</h5>
      <p className="article__text">{text}</p>
    </li>
  );
}