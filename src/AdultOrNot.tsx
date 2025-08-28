import type { FC, ChangeEvent, MouseEvent } from "react";

type AdultOrNotProps = {
  setIsAdult: (value: boolean) => void;
}

const AdultOrNot:FC<AdultOrNotProps> = ({setIsAdult}) => {

  const yesHandler = () => {
    setIsAdult(true);
  }

  const noHandler = (event: MouseEvent<HTMLButtonElement>) => {
    setIsAdult(false);
    console.log(event.target);
  }

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
  }
  return (
    <div>
      "Do you have 18 or older?"
      <button onClick={yesHandler}>Yes</button>
      <button onClick={noHandler}>No</button>

      <input type="text" onChange={onChangeHandler} />
    </div>
  )
}

export default AdultOrNot;