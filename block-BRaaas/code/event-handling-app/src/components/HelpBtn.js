function handleClick() {
  alert("To learn React use https://reactjs.org");
  alert("React and ReactDOM works together");
  alert("Babel helps in writing JSX");
}

function HelpBtn() {
  return (
    <button onClick={handleClick} className="btn">
      How can I help you?
    </button>
  );
}

export default HelpBtn;
