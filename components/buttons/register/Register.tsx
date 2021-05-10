import styles from "./Register.module.css";

// export type RegisterProps = {
//     caterogy: string;
// }

function Register() {
  return (
    <div className={styles.container}>
      <div className={styles.register}>HTML</div>
      <div className={styles.register}>CSS</div>
      <div className={styles.register}>Grid</div>
      <div className={styles.register}>Flex</div>
      <div className={styles.register}>:pseudo</div>
      <div className={styles.register}>Javascript</div>
    </div>
  );
}
export default Register;
