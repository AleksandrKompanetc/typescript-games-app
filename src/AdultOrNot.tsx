function AdultOrNot({setIsAdult}) {

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