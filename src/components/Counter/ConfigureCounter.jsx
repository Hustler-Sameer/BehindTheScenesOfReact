export default function ConfigureCounter({onSet}) {
  const [enteredNumber, setEnteredNumber] = useState(0);

  function handleChange(event) {
    setEnteredNumber(+event.target.value);
  }

  function handleSetClick() {
    // setChosenCount(enteredNumber);
    onSet(enteredNumber); // now we are lifting the entered number to upwards so that we can now pass that to Counter component
    setEnteredNumber(0);
  }
  return (
    <>
      <section id="configure-counter">
        <h2>Set Counter</h2>
        <input type="number" onChange={handleChange} value={enteredNumber} />
        <button onClick={handleSetClick}>Set</button>
      </section>
    </>
  );
}
