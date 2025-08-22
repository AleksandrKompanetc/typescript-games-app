import type { FC } from "react";

type AdultOrNotProps = {
  setIsAdult: (value: boolean) => void;
}

const AdultOrNot:FC<AdultOrNotProps> = ({setIsAdult}) => {

  const yesHandler = () => {
    setIsAdult(true);
  }

  const noHandler = () => {
    setIsAdult(false);
  }
  return (
    <div>
      "Do you have 18 or older?"
      <button onClick={yesHandler}>Yes</button>
      <button onClick={noHandler}>No</button>
    </div>
  )
}

export default AdultOrNot;