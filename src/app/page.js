import Image from "next/image";
import styles from "./page.module.css";
import Pokemon from "./components/Pokemon";
import About from "./components/About";
export default function Home() {
  return (
    <div className={styles["main"]}>      
      <Pokemon/>
      <About/>
    </div>
  );
}
