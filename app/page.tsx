import styles from "./index.module.css"
import { Hero } from "@/components/hero";

export default function Page() {
  return (
    <main className={styles.main}>
      <Hero />
      <h1>Portfolio</h1>
    </main>
  )
}
