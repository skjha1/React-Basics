import "./styles.css";

// var username = prompt("what is your username")

// var username = "Shivendra K Jha";
var likecounter = 0;
function likeClickHandler() {
  likecounter = likecounter + 1;
  console.log("clicked", likecounter);
  alert("button is clicked");
}

export default function App() {
  return (
    <div className="App">
      <h1>Inside Outt </h1>
      <button onClick={likeClickHandler}> Like me </button> {likecounter}
    </div>
  );
}
