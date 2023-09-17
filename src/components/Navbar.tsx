import Link from "next/link";
import styles from '@st/navbar.module.scss';

export default function Navbar() {
    return (
        <div className={styles.navbar}>
            <div>
                <Link href={'/'}>josefer-alvarez</Link>
            </div>
            <div className={styles.navbar__tabs}>
                <div>
                    <Link href={'/about'}>about-me</Link>
                </div>
                <div>
                    <Link href={'/projects'}>projects</Link>
                </div>
            </div>
            <div>
                <Link href={'/contact'}>.contact-me</Link>
            </div>
        </div>
    )
}
