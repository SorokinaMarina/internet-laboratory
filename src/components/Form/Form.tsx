"use client";
import { useState, useEffect } from "react";
import "./Form.scss";
import Input from "../Input/Input";
import Checkbox from "../Checkbox/Checkbox";
import { IValues } from "@/utils/interface";

export default function Form() {
  const [values, setValues] = useState({});
  const [checked, setChecked] = useState(false);

  const [isValidData, setIsValidData] = useState({
    name: false,
    phone: false,
    checkbox: false,
  });

  const [isValid, setIsValid] = useState(false);
  console.log(isValid);

  const [errorText, setErrorText] = useState({
    name: "",
    phone: "",
  });

  useEffect(() => {
    // Проверяем, если хоть одно поле не валидно - блокируем кнопку
    const valid = Object.values(isValidData).every(
      (item: boolean): boolean => item === true,
    );

    setIsValid(valid);
  }, [values, checked, isValidData]);

  // Функция собирает данные с полей ввода
  function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
    const { name, value } = e.target;

    // Проверяем имя на валидность
    if (name === "input-name") {
      if (value.length < 2 || value.length > 25) {
        setIsValidData((prevValues) => ({ ...prevValues, name: false }));
        setErrorText((prevValues) => ({
          ...prevValues,
          name: "Имя должно включать в себя от 2 до 25 символов",
        }));
      } else {
        setIsValidData((prevValues) => ({ ...prevValues, name: true }));
        setErrorText((prevValues) => ({
          ...prevValues,
          name: "",
        }));
      }
    }

    // Проверяем телефон на валидность
    if (name === "input-phone") {
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

    setValues((prevValues) => ({ ...prevValues, [name]: value }));
  }

  // Функция собирает данные с чекбокса
  function handleChecked(e: React.ChangeEvent<HTMLInputElement>): void {
    const { checked } = e.target;

    if (checked) {
      setIsValidData((prevValues) => ({ ...prevValues, checkbox: true }));
    } else {
      setIsValidData((prevValues) => ({ ...prevValues, checkbox: false }));
    }

    setChecked(checked);
  }
  return (
    <form className="form" id="form" action="#">
      <h2 className="form__title">Отправь форму</h2>
      <fieldset className="form__fieldset">
        <Input
          handleChange={handleChange}
          name="input-name"
          type="text"
          placeholder="Имя"
          values={values}
          isValid={isValidData.name}
          errorText={errorText.name}
        />
        <Input
          handleChange={handleChange}
          name="input-phone"
          type="number"
          placeholder="Телефон"
          values={values}
          isValid={isValidData.phone}
          errorText={errorText.phone}
        />
        <Checkbox handleChecked={handleChecked} checked={checked} />
        <button
          className={`form__button ${!isValid && "form__button_inactive"}`}
          type="submit"
          disabled={!isValid}
        >
          Отправить
        </button>
      </fieldset>
    </form>
  );
}
