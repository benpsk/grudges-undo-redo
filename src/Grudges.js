import { useContext } from "react";
import Grudge from "./Grudge";
import { GrudgeContext } from "./GrudgeContext";

const Grudges = () => {
  const { grudges } = useContext(GrudgeContext);
  return (
    <section>
      <h2>Grudges ({grudges.length})</h2>
      {grudges.length > 0 ? (
        grudges.map((grudge) => {
          return <Grudge grudge={grudge} key={grudge.id}></Grudge>;
        })
      ) : (
        <h2>No Grudges Found!</h2>
      )}
    </section>
  );
};

export default Grudges;
