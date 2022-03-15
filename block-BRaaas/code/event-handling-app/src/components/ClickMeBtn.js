function handleClick() {
  alert("Hello React Event");
}

function ClickMeBtn() {
  return (
    <button onClick={handleClick} className="btn">
      Click Me!
    </button>
  );
}

export default ClickMeBtn;
