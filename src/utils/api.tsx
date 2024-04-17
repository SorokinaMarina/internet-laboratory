const url = "http://localhost:3001/";
import { IData } from "./interface";

export async function sendData(user: IData) {
  try {
    const response = await fetch(`${url}user`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    if (!response.ok) {
      throw new Error("Не удалось отправить данные");
    }

    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
    return err;
  }
}
