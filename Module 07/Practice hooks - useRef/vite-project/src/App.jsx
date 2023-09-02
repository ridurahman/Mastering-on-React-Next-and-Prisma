import { useRef } from "react";

function App() {
  let myHeadLine = useRef();
  let myHeadLine2 = useRef();

  let imgRef = useRef();

  let firstName,
    lastName = useRef();

  let colorHeadLine = useRef();

  let number = useRef(0);

  let APIData = useRef(null);
  let myPtag = useRef();

  const handleClick = () => {
    myHeadLine.current.innerText = "Changed!";
    myHeadLine2.innerText = "Changed2!";
    imgRef.current.src = "https://placehold.co/600x400?text=Hello+World";
    imgRef.current.setAttribute("height", "200px");
    imgRef.current.setAttribute("width", "300px");

    let fName = firstName.value;
    let lName = lastName.value;
    alert(fName + " " + lName);

    colorHeadLine.current.classList.remove("text-success");
    colorHeadLine.current.classList.add("text-danger");

    //Persisted Mutable Values
    number.current++;
    console.log(number.current);
  };

  const fetchData = async () => {
    const response = await fetch("https://dummyjson.com/products");
    //Caching: Storing fetched data into a variable
    APIData.current = await response.json();
  };

  const showData = () => {
    myPtag.current.innerText = JSON.stringify(APIData.current);
  };

  return (
    <>
      <p>useRef for text</p>
      <h1 ref={myHeadLine}></h1>
      <h2 ref={(h2) => (myHeadLine2 = h2)}></h2>
      <p>useRef for attribute</p>
      <img ref={imgRef} src="https://placehold.co/600x400"></img> <br />
      <br />
      <p>useRef for Input</p>
      <input ref={(a) => (firstName = a)} placeholder="FirstName" />
      <input ref={(a) => (lastName = a)} placeholder="LastName" /> <br />
      <br />
      <p>useRef for changing CSS class</p>
      <h2 ref={colorHeadLine} className="text-success">
        Changing CSS class using useRef
      </h2>
      <button onClick={handleClick}>Click</button>
      <br />
      <br />
      <p>Caching Expensive Computation</p>
      <p ref={myPtag}></p>
      <button onClick={fetchData}>Call API</button>
      <button onClick={showData}>Show Data</button>
    </>
  );
}

export default App;
