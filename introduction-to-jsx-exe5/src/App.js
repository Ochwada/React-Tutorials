import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Welcome to Another Practice</h1>
      <h2>React Componet!</h2>

      <div>
        <p> Today is: {new Date().toLocaleString()} </p>
      </div>
    </div>
  );
}
