import "./BurgerMenu.scss";
import Image from "next/image";
import logo from "../../image/logo-burger.svg";
import { arrNav } from "@/utils/constants";
import Link from "next/link";
import { IBurger } from "@/utils/interface";
import exit from "../../image/close-icon.svg";
import arrow from "../../image/arrow.svg";

export default function BurgerMenu({
  setIsBurgerActive,
  isBurgerActive,
}: IBurger) {
  return (
    <div className={`burger ${isBurgerActive && "burger_opened"}`}>
      <div className="burger__container">
        <div className="burger__header">
          <Image className="burger__logo" src={logo} alt="burger-logo" />
          <button
            className="burger__button"
            type="button"
            onClick={() => {
              setIsBurgerActive(false);
            }}
          >
            <Image className="burger__img" src={exit} alt="exit-button" />
          </button>
        </div>
        <nav className="burger__navigation">
          <ul className="burger__list">
            {arrNav.map((item: string) => (
              <li key={item} className="burger__list-element">
                <Link className="burger__link" href={`#${item.split(" ")[0]}`}>
                  <button
                    className="burger__button"
                    type="button"
                    onClick={() => {
                      setIsBurgerActive(false);
                    }}
                  >
                    {item}

                    <Image
                      className="burger__img"
                      src={arrow}
                      alt="arrow-button"
                    />
                  </button>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
