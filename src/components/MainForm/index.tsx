import { PlayCircleIcon } from "lucide-react";
import { Button } from "../Button";
import { Cycles } from "../Cycles";
import { Input } from "../Input";
import { useState } from "react";

export function MainForm() {
  const [taskName, setTaskName] = useState("");

  function handleNewTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    console.log("DEU CERTO");
    console.log("DEU CERTO", taskName);
  }

  return (
    <form onSubmit={handleNewTask} className="form" action="">
      <div className="formRow">
        <Input
          labelText="Tarefa"
          id="formRow"
          type="text"
          placeholder="Digite algo"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
      </div>

      <div className="formRow">
        <p>Próximo intervalo é de 25min</p>
      </div>

      <div className="formRow">
        <Cycles />
      </div>

      <div className="formRow">
        <Button icon={<PlayCircleIcon />} color="green" />
      </div>
    </form>
  );
}
