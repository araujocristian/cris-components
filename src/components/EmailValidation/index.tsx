import styles from "./styles.module.scss";

function EmailValidation() {
  return (
    <form action="#">
      <div className={styles["input-box"]}>
        <input
          className={styles["input-box--input"]}
          type="text"
          placeholder="Enter your email"
        />
        <input
          className={styles["input-box--button"]}
          type="submit"
          value="Check"
        />
      </div>
    </form>
  );
}

export default EmailValidation;
