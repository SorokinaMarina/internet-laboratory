export interface IBurger {
  setIsBurgerActive: React.Dispatch<React.SetStateAction<boolean>>;
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

export interface IArticles {
  title: string;
  text: string;
}

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
  name: boolean | null;
  phone: boolean | null;
  checkbox: boolean | null;
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
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  values: IValues;
  isValid: boolean | null;
  errorText: string;
  setIsFocus: React.Dispatch<React.SetStateAction<IFocus>>;
  isFocus: boolean;
  label: string;
}

export interface Ivalidate {
  name: string;
  value: string;
  setIsValidData: React.Dispatch<React.SetStateAction<IValidData>>;
  setErrorText: React.Dispatch<React.SetStateAction<IErrorText>>;
}

export interface IReview {
  name: string;
  img: string;
  city: string;
  text: string;
}
