import "./Checkbox.scss";
import { ICheckbox } from "@/utils/interface";

export default function Checkbox({ checked, handleChecked }: ICheckbox) {
  return (
    <div className="checkbox">
      <label className="checkbox__label" htmlFor="checkbox">
        <input
          name="checkbox"
          type="checkbox"
          id="checkbox"
          className="checkbox__input"
          onChange={handleChecked}
          checked={checked}
        />
        <span className="checkbox__text">Согласен, отказываюсь</span>
      </label>
    </div>
  );
}
