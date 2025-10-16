import styles from "./styles.module.css";

type HeadingProps = {
  children: React.ReactNode; // tudo o que o react aceita como children
};

export function Heading({ children }: HeadingProps) {
  return <h1 className={styles.heading}>{children}</h1>;
}
