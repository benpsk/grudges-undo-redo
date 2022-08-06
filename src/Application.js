import NewGrudge from "./NewGrudge";
import Grudges from "./Grudges";
import "./style.css";
import { useContext } from "react";
import { GrudgeContext } from "./GrudgeContext";

function Application() {
  const { isPast, undo, isFuture, redo } = useContext(GrudgeContext);
  return (
    <div className="app">
      <NewGrudge />
      <section className="undo-redo">
        <button disabled={!isPast} onClick={undo}>
          Undo
        </button>
        <button disabled={!isFuture} onClick={redo}>
          Redo
        </button>
      </section>
      <Grudges />
    </div>
  );
}

export default Application;
