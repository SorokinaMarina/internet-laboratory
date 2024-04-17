export interface IBurger {
  setIsBurgerActive: (isBurgerActive: boolean) => void;
  isBurgerActive: boolean;
}

export interface ICard {
  image: string;
  title: string;
  text: string;
}

export interface IQuestions {
  title: string;
  text: string;
}

export interface IArticles extends IQuestions {}

export interface IValues {
  [key: string]: string;
}

export interface IInput {
  name: string;
  type: string;
  placeholder: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  values: IValues;
  isValid: boolean;
  errorText: string;
}

export interface ICheckbox {
  handleChecked: (e: React.ChangeEvent<HTMLInputElement>) => void;
  checked: boolean;
}
