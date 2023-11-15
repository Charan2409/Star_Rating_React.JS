import "./styles.css";
import Star from "./components/Star";

export default function App() {
  return (
    <div className="App">
      <Star limit={5} Rating={1} />
    </div>
  );
}
