import React, { useContext } from "react";
import { GrudgeContext } from "./GrudgeContext";

const Grudge = React.memo(({ grudge }) => {
  const { toggleForgiveness } = useContext(GrudgeContext);

  const forgive = () => {
    toggleForgiveness(grudge.id);
  };

  return (
    <article className="grudge">
      <h4>{grudge.person}</h4>
      <p>{grudge.reason}</p>

      <div className="forgiven">
        <label>
          <input type="checkbox" checked={grudge.forgiven} onChange={forgive} />
          Forgiven
        </label>
      </div>
    </article>
  );
});

export default Grudge;
