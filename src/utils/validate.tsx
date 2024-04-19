import { IValidData, IErrorText, Ivalidate } from "./interface";

export function validate({
  name,
  value,
  setIsValidData,
  setErrorText,
}: Ivalidate): void {
  // Проверяем имя на валидность
  if (name === "inputName") {
    if (value.length < 2 || value.length > 25) {
      setIsValidData((prevValues: IValidData) => ({
        ...prevValues,
        name: false,
      }));
      setErrorText((prevValues: IErrorText) => ({
        ...prevValues,
        name: "Имя должно включать в себя от 2 до 25 символов",
      }));
    } else {
      setIsValidData((prevValues: IValidData) => ({
        ...prevValues,
        name: true,
      }));
      setErrorText((prevValues: IErrorText) => ({
        ...prevValues,
        name: "",
      }));
    }
  }

  // Проверяем телефон на валидность
  if (name === "inputPhone") {
    if (value.length !== 11) {
      setIsValidData((prevValues) => ({ ...prevValues, phone: false }));
      setErrorText((prevValues) => ({
        ...prevValues,
        phone: "Номер телефона должен начинаться с 8 и состоять из 11 цифр",
      }));
    } else {
      setIsValidData((prevValues) => ({ ...prevValues, phone: true }));
      setErrorText((prevValues) => ({
        ...prevValues,
        phone: "",
      }));
    }
  }
}
