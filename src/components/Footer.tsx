import Link from "next/link";
import styles from '@st/footer.module.scss';
import { BsLinkedin, BsInstagram, BsGithub } from 'react-icons/bs';

export default function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.footer__text}>
                <p>puedes encontrarme en: </p>
            </div>
            <div className={styles.footer__tabs}>
                <div>
                    <Link href={'https://www.instagram.com/josefer_alvarez/'} target="_blank">
                        <BsInstagram />
                    </Link>
                </div>
                <div>
                    <Link href={'/projects'}>
                        <BsLinkedin />
                    </Link>
                </div>
            </div>
            <div>
                <Link href={'https://github.com/JoseFerAlvarez'} target="_blank">
                    @joseferalvarez
                    <BsGithub />
                </Link>
            </div>
        </div>
    )
}
