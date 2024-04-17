export interface IBurger {
  setIsBurgerActive: (isBurgerActive: boolean) => void;
  isBurgerActive: boolean;
}

export interface ICard {
  image: string;
  title: string;
  text: string;
}
