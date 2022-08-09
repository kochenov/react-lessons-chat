import Message from "./Message";
import "./message.scss";

function App() {
  const textMessage = "This my message";
  return (
    <div className="App">
      <header className="App-header">
        <Message text={textMessage} />
      </header>
    </div>
  );
}

export default App;