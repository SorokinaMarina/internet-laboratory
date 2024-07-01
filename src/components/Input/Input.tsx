"use client";
import "./Input.scss";
import { IInput } from "@/utils/interface";
import Image from "next/image";
import green from "../../image/greenMark.svg";
import red from "../../image/redMark.svg";
import { IFocus } from "@/utils/interface";

export default function Input({
  name,
  type,
  handleChange,
  values,
  isValid,
  errorText,
  setIsFocus,
  isFocus,
  label,
}: IInput) {
  return (
    <div
      className={`input ${!isValid && errorText.length !== 0 && isValid !== null && "input_error"}`}
    >
      <label
        className={`input__label ${isFocus && "input__label_small"}`}
        htmlFor={name}
      >
        {label}
      </label>
      <input
        className="input__field"
        id={name}
        minLength={2}
        maxLength={25}
        name={name}
        type={type}
        onChange={handleChange}
        value={values[name] || ""}
        onFocus={() => {
          setIsFocus((prevValues: IFocus) => ({ ...prevValues, [name]: true }));
        }}
        onBlur={() => {
          if (values[name].length === 0) {
            setIsFocus((prevValues: IFocus) => ({
              ...prevValues,
              [name]: false,
            }));
          }
        }}
      />
      {isFocus && isValid !== null && (
        <Image
          className="input__mark"
          src={isValid ? green : red}
          alt={isValid ? "Зелёная галочка" : "Красный крестик"}
        />
      )}
      <span className="input__text">{errorText}</span>
    </div>
  );
}
