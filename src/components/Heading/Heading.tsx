import styles from "./Heading.module.css";

function Heading(props) {
  return <h1 className={styles.heading}>{props.children}</h1>;
}

export { Heading };
