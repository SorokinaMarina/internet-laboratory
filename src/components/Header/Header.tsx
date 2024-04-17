"use client";
import "./Header.scss";
import Image from "next/image";
import logo from "../../image/logo.svg";
import { useState } from "react";
import burger from "../../image/burger.svg";
import { arrNav } from "@/utils/constants";
import Link from "next/link";
import BurgerMenu from "../BurgerMenu/BurgerMenu";

export default function Header() {
  const [isBurgerActive, setIsBurgerActive] = useState(false);
  return (
    <header className="header">
      <div className="header__container">
        <Image className="header__logo" src={logo} alt="logo" />
        <nav className="header__nav">
          <ul className="header__list">
            {arrNav.map((item: string) => (
              <li key={item} className="header__list-element">
                <Link className="header__link" href="#">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <button
          className="header__burger-button"
          type="button"
          onClick={() => {
            setIsBurgerActive(true);
          }}
        >
          <Image
            className="header__burger-image"
            src={burger}
            alt="burger-menu"
          />
        </button>
      </div>
      <BurgerMenu
        setIsBurgerActive={setIsBurgerActive}
        isBurgerActive={isBurgerActive}
      />
    </header>
  );
}
