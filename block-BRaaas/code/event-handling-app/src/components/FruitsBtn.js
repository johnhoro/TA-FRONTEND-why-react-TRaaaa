let fruits = [
  { id: "apple", value: "🍎 apple" },
  { id: "orange", value: "🍊 orange" },
  { id: "grape", value: "🍇 grape" },
  { id: "pear", value: "🍐 pear" },
];

function handleClick(name) {
  alert(name);
}

function Btn(props) {
  return (
    <button onClick={() => handleClick(props.id)} className="btn">
      {props.value}
    </button>
  );
}

function FruitsBtn() {
  return (
    <div>
      {fruits.map((fruit, i) => (
        <Btn key={i} {...fruit} />
      ))}
    </div>
  );
}

export default FruitsBtn;
