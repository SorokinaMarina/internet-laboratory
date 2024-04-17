import "./Input.scss";
import { IInput } from "@/utils/interface";
import Image from "next/image";
import green from "../../image/greenMark.svg";
import red from "../../image/redMark.svg";

export default function Input({
  name,
  type,
  placeholder,
  handleChange,
  values,
  isValid,
  errorText,
}: IInput) {
  return (
    <label className="input" htmlFor={name}>
      <input
        className={`input__field ${!isValid && "input__field_error"}`}
        id={name}
        minLength={2}
        maxLength={25}
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={handleChange}
        value={values[name] || ""}
      />
      <Image
        className="input__mark"
        src={isValid ? green : red}
        alt={isValid ? "Зелёная галочка" : "Красный крестик"}
      />
      <span className="input__text">{errorText}</span>
    </label>
  );
}
