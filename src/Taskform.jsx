import { useState } from "react";

function Taskform() {

const [title, setTitle] = useState(" ")

const handleSubmit = () => {
    console.log(title)
}

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Escribe tu formato"
          onChange={(e) => setTitle(e.target.value)}
        />

        <button>Guardar</button>
      </form>
    </div>
  );
}

export default Taskform;
