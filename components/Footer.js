import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <img src="/logo-salamander.jpeg" alt="Salamander.vc Logo" className={styles.logo} />
      </footer>
    </>
  )
}
