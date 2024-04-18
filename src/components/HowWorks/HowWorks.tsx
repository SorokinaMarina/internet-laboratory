import "./HowWorks.scss";
import Card from "../Card/Card";
import { cards } from "@/utils/constants";
import { ICard } from "@/utils/interface";
import WorkBlock from "../WorkBlock/WorkBlock";
import { arrNav } from "@/utils/constants";

export default function HowWorks() {
  return (
    <section id={arrNav[0].split(" ")[0]} className="work">
      <h3 className="work__title">Как это работает</h3>
      <div className="work__cards">
        {cards.map((item: ICard) => (
          <Card key={item.title} {...item} />
        ))}
      </div>
      <WorkBlock />
    </section>
  );
}
