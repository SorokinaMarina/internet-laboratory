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
  id: string;
  title: string;
  text: string;
}

export interface IQuestionsElement extends IQuestions {
  handleClick: (id: string) => void;
  openElement: string | null;
}

export interface IArticles extends IQuestions {}

export interface IValues {
  [key: string]: string;
}

export interface ICheckbox {
  handleChecked: (e: React.ChangeEvent<HTMLInputElement>) => void;
  checked: boolean;
}

export interface IData {
  name: string;
  phone: string;
  id: string;
}

export interface IValidData {
  name: boolean;
  phone: boolean;
  checkbox: boolean;
}

export interface IErrorText {
  name: string;
  phone: string;
}

export interface IFocus {
  inputName: boolean;
  inputPhone: boolean;
}

export interface IInput {
  name: string;
  type: string;
  placeholder: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  values: IValues;
  isValid: boolean;
  errorText: string;
  setIsFocus: React.Dispatch<React.SetStateAction<IFocus>>;
  isFocus: boolean;
}
