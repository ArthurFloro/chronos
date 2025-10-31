import { PlayCircleIcon } from "lucide-react";
import { Button } from "../Button";
import { Cycles } from "../Cycles";
import { Input } from "../Input";
import { HomeProps } from "../../pages/Home";

export function MainForm({ state, setState }: HomeProps) {
  function handleClick() {
    setState((prevState) => {
      return {
        ...prevState,
        config: {
          ...prevState.config,
          workTime: 34,
        },
        formattedSecondsRemaining: "23:34",
      };
    });
  }

  return (
    <form className="form" action="">
      <div>
        <button type="button" onClick={handleClick}>
          Clicar
        </button>
      </div>
      <div className="formRow">
        <Input
          labelText="Tarefa"
          id="formRow"
          type="text"
          placeholder="Digite algo"
        />
      </div>

      <div className="formRow">
        <p>Próximo intervalo é de {state.config.workTime}</p>
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
