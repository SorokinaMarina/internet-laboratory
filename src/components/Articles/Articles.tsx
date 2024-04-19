import "./Articles.scss";
import { IArticles } from "@/utils/interface";
import { articles } from "@/utils/constants";
import Article from "../Article/Article";

export default function Articles() {
  return (
    <section className="articles">
      <ul className="articles__container">
        {articles.map((item: IArticles) => (
          <Article key={item.title} {...item} />
        ))}
      </ul>
    </section>
  );
}
