import "./HowWorks.scss";
import Card from "../Card/Card";
import { cards } from "@/utils/constants";
import { ICard } from "@/utils/interface";
import WorkBlock from "../WorkBlock/WorkBlock";

export default function HowWorks() {
  return (
    <section className="work">
      <h2 className="work__title">Как это работает</h2>
      <div className="work__cards">
        {cards.map((item: ICard) => (
          <Card key={item.title} {...item} />
        ))}
      </div>
      <WorkBlock />
    </section>
  );
}
