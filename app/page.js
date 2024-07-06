import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <a
        href="http://localhost:3001/pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        open pdf directly
      </a>
      <a href="/api/pdf" target="_blank" rel="noopener noreferrer">
        open pdf from api
      </a>
    </main>
  );
}
