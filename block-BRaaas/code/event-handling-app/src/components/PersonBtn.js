function handleClick(event) {
  switch (event.target.innerText) {
    case "Arya":
      alert("Hello Arya");
      break;
    case "John":
      alert("Hello John");
      break;
    default:
      alert("Hello Bran");
      break;
  }
}

function PersonBtn() {
  return (
    <div className="">
      <button onClick={(event) => handleClick(event)} className="btn">
        Arya
      </button>
      <button onClick={(event) => handleClick(event)} className="btn">
        John
      </button>
      <button onClick={(event) => handleClick(event)} className="btn">
        Bran
      </button>
    </div>
  );
}

export default PersonBtn;
