import styles from "./Button.module.css";

function Button({ onClick, children, titile, disable = false, type }) {
  return (
    <button
      className={styles.button}
      type={type}
      onClick={onClick}
      titile={titile}
      disabled={disable}
    >
      {children}
    </button>
  );
}

export default Button;
