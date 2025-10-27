import styles from "./styles.module.css";

type ButtonProps = {
  icon: React.ReactNode;
  color: "green" | "red";
} & React.ComponentProps<"button">;

//...rest é normalmente nomeado como props (restante das propriedades)
export function Button({ color = "green", icon, ...rest }: ButtonProps) {
  return (
    <>
      <button className={`${styles.button} ${styles[color]}`} {...rest}>
        {icon}
      </button>
    </>
  );
}
