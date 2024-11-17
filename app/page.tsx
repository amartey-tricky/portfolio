import styles from "./index.module.css"
import { Hero } from "@/components/hero";
import { About } from "@/components/about";

export default function Page() {
  return (
    <main className={styles.main}>
      <Hero />
      <About />
    </main>
  )
}
