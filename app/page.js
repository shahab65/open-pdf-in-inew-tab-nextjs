import styles from "./page.module.css";

export default function Home() {
  const pdfUrl = "http://localhost:3001/pdf";
  return (
    <main className={styles.main}>
      <a href={pdfUrl} target="_blank" rel="noopener noreferrer">
        open pdf in new tab
      </a>
    </main>
  );
}
