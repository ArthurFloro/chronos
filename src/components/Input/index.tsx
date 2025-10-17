import styles from "./styles.module.css";

type InputProps = {
  id: string;
  labelText?: string;
} & React.ComponentProps<"input">; // recebendo todas as propriedades do input

// ...rest -> todas as outras propriedades que não foram desestruturadas
export function Input({ labelText, type, id, ...rest }: InputProps) {
  return (
    <>
      {labelText && <label htmlFor={id}>{labelText}</label>}
      <input className={styles.input} id={id} type={type} {...rest} />
    </>
  );
}
