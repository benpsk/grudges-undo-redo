import { memo, useContext, useState } from "react";
import { GrudgeContext } from "./GrudgeContext";

const NewGrudge = memo(() => {
  const [person, setPerson] = useState("");
  const [reason, setReason] = useState("");

  const { addGrudge } = useContext(GrudgeContext);

  const handleChange = (event) => {
    event.preventDefault();

    if (person && reason) {
      addGrudge({ person, reason });
      setPerson("");
      setReason("");
    }
    return;
  };

  return (
    <form className="addGrudge" onSubmit={handleChange}>
      <input
        type="text"
        placeholder="Person"
        value={person}
        onChange={(event) => setPerson(event.target.value)}
      />
      <input
        type="text"
        placeholder="Reason"
        value={reason}
        onChange={(event) => setReason(event.target.value)}
      />
      <input type="submit" className="submit" value="Submit" />
    </form>
  );
});

export default NewGrudge;
