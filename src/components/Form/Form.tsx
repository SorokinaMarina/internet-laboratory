"use client";
import { useState, useEffect } from "react";
import "./Form.scss";
import Input from "../Input/Input";
import Checkbox from "../Checkbox/Checkbox";
import { sendData } from "@/utils/api";
import { v4 as uuidv4 } from "uuid";
import {
  IData,
  IValidData,
  IValues,
  IErrorText,
  IFocus,
} from "@/utils/interface";
import { arrNav } from "@/utils/constants";
import { validate } from "@/utils/validate";

export default function Form() {
  // Собираем данные с полей
  const [values, setValues] = useState<IValues>({
    inputName: "",
    inputPhone: "",
  });
  // Собираем данные с инпута
  const [checked, setChecked] = useState<boolean>(false);
  // Объект хранит информацию о валидности каждого поля и чекбокса
  const [isValidData, setIsValidData] = useState<IValidData>({
    name: null,
    phone: null,
    checkbox: null,
  });

  // Переменная хранит данные окончательной валидности
  const [isValid, setIsValid] = useState<boolean>(false);
  // переменная хранит тексты ошибок полей
  const [errorText, setErrorText] = useState<IErrorText>({
    name: "",
    phone: "",
  });

  // Переменная отвечает за состояние фокуса на инпутах
  const [isFocus, setIsFocus] = useState<IFocus>({
    inputName: false,
    inputPhone: false,
  });

  useEffect(() => {
    // Проверяем, если хоть одно поле не валидно - блокируем кнопку
    const valid = Object.values(isValidData).every(
      (item: boolean): boolean => item === true,
    );

    setIsValid(valid);
  }, [values, checked, isValidData, isValid]);

  // Функция собирает данные с полей ввода
  function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
    const { name, value } = e.target;

    validate({ name, value, setIsValidData, setErrorText });

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

  // Функция, которая сьрасывает значения переменных
  function clearData(): void {
    setValues({ inputName: "", inputPhone: "" });
    setErrorText({ name: "", phone: "" });
    setChecked(false);
    setIsValid(false);
    setIsFocus({
      inputName: false,
      inputPhone: false,
    });
    setIsValidData({
      name: null,
      phone: null,
      checkbox: null,
    });
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const user: IData = {
      name: values.inputName,
      phone: values.inputPhone,
      id: uuidv4(),
    };

    try {
      const res = await sendData(user);
      if (res) {
        clearData();
      }
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <form className="form" id={arrNav[3]} action="#" onSubmit={handleSubmit}>
      <h2 className="form__title">Отправь форму</h2>
      <fieldset className="form__fieldset">
        <Input
          handleChange={handleChange}
          name="inputName"
          type="text"
          values={values}
          isValid={isValidData.name}
          errorText={errorText.name}
          setIsFocus={setIsFocus}
          isFocus={isFocus.inputName}
          label='Имя'
        />
        <Input
          handleChange={handleChange}
          name="inputPhone"
          type="number"
          values={values}
          isValid={isValidData.phone}
          errorText={errorText.phone}
          setIsFocus={setIsFocus}
          isFocus={isFocus.inputPhone}
          label='Телефон'
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
