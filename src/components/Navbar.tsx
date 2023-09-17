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
                    <Link href={'/about'}>sobre-mi</Link>
                </div>
                <div>
                    <Link href={'/projects'}>proyectos</Link>
                </div>
            </div>
            <div>
                <Link href={'/contact'}>.contacto</Link>
            </div>
        </div>
    )
}
