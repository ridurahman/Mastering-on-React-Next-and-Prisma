import Child from "./components/Child";
import TextDisplay from "./components/TextDisplay";
function App() {
  let marks = 80;
  let marks2 = 90;
  let city = ["Dhaka", "Rajshahi", "Rangpur", "Sylhet", "Khulna"];
  let loginStatus = true;

  const itemObj = {
    name: "Rabbil Hasan",
    age: 33,
    city: "Dhaka",
  };

  const btnClick = () => {
    alert("Say Hello!");
  };

  return (
    <>
      <TextDisplay text="Something" />
      <Child
        title="Learn React"
        des="In details with props"
        item={itemObj}
        buttonClick={btnClick}
      />

      {marks > 80 ? <h1>Brilliant Result</h1> : <h1>Average Result</h1>}

      {(() => {
        if (marks2 > 80 && marks2 <= 100) {
          return <h1>Brilliant Result</h1>;
        } else {
          return <h1>Average Result</h1>;
        }
      })()}

      <ul>
        {city.map((item, i) => {
          return <li key={i.toString}>{item}</li>;
        })}
      </ul>
      <h1>Login Status</h1>
      {loginStatus && <button>Logout</button>}
    </>
  );
}

export default App;
