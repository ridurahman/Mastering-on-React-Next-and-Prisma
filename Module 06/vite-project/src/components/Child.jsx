const postFormData = (event) => {
  event.preventDefault();
  //more actions to perform
  alert("Form is Submitted");
};

const Child = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.des}</p>
      <ul>
        <li>Name: {props.item["name"]}</li>
        <li>Age: {props.item.age}</li>
        <li>City: {props.item["city"]}</li>
      </ul>
      <button onClick={props.buttonClick}>Submit</button> <br />
      <br />
      <form onSubmit={postFormData}>
        <input type="text" placeholder="name" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Child;
