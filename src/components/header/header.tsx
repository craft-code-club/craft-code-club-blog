import Link from "next/link";
import styles from './styles.module.scss'

export default function Header() {
  return <div className={styles.wrapper}>
    <header className={styles.container}>
      <div>
        <img role="image" src="/assets/logo.png" alt="Craft & Code Club - Blog" />
        <span>{ 'Craft & Code Club' }</span>
      </div>
      <div>
        <Link href="/">Home</Link>
        <Link href="/study-group">Study Group</Link>
      </div>
    </header>
  </div>
}