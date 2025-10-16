import styles from "./styles.module.css";

type ContainerProps = {
  children: React.ReactNode; // tudo o que o react aceita como children
};

export function Container({ children }: ContainerProps) {
  return (
    <div className={styles.container}>
      <div className={styles.content}>{children}</div>
    </div>
  );
}
