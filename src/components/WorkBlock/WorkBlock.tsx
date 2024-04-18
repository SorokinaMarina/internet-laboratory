import "./WorkBlock.scss";
import Image from "next/image";
import blockImage from "../../image/blockImage.svg";
import { arrNav } from "@/utils/constants";

export default function WorkBlock() {
  return (
    <div id={arrNav[1].split(" ")[0]} className="block">
      <div className="block__container">
        <h4 className="block__title">Круто, ты дошел до третьего блока</h4>
        <p className="block__text">
          63% опрошенных пользовались кредитами из-за того, что не могли покрыть
          непредвиденные расходы свыше 15 000 ₽. <br />
          <br /> Доступ к заработанным деньгам помогает отказаться от кредитов и
          экономить деньги на процентах и штрафах.
        </p>
      </div>
      <Image
        className="block__image"
        src={blockImage}
        alt="картинка третьего блока"
      />
    </div>
  );
}
