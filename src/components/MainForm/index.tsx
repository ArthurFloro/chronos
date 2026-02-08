import { PlayCircleIcon } from "lucide-react";
import { Button } from "../Button";
import { Cycles } from "../Cycles";
import { Input } from "../Input";
import { useRef } from "react";
import type { TaskModel } from "../../models/TaskModel";
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";

export function MainForm() {
  const { setState } = useTaskContext();
  const taskNameInput = useRef<HTMLInputElement>(null);

  function handleNewTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!taskNameInput.current) return; // Verifica se a referência ao input é válida

    const taskName = taskNameInput.current.value.trim(); // Obtém o valor do input e remove espaços em branco

    if (!taskName) {
      alert("Por favor, digite o nome da tarefa."); // Exibe um alerta se o nome da tarefa estiver vazio

      return;
    }

    const newTask: TaskModel = {
      id: Date.now().toString(),
      name: taskName,
      startDate: Date.now(),
      completeDate: null,
      interruptDate: null,
      duration: 1,
      type: "workTime",
    };

    const secondsRemaining = newTask.duration * 60; // Converte a duração da tarefa de minutos para segundos

    setState((prevState) => {
      return {
        ...prevState,
        config: { ...prevState.config },
        activeTask: newTask,
        currentCycle: 1,
        secondsRemaining,
        formattedSecondsRemaining: `${Math.floor(secondsRemaining / 60)}`,
        tasks: [...prevState.tasks, newTask],
      };
    });
  }

  return (
    <form onSubmit={handleNewTask} className="form" action="">
      <div className="formRow">
        <Input
          labelText="Tarefa"
          id="formRow"
          type="text"
          placeholder="Digite algo"
          ref={taskNameInput}
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
