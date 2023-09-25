'use client'
import IUser from '@/schemas/user';
import useUserStore from '@/store/userStore';
import { useEffect } from 'react';
import styles from '@st/home.module.scss';

export default function Page() {

    const user: IUser = useUserStore();

    useEffect(() => {
        if (!user.name) {
            user.setUser();
        }
        if (!user.publicRepos || user.publicRepos.length <= 0) {
            user.setRepos();
        }
    }, []);

    useEffect(() => {
        console.log(user);
    }, [user]);

    return (
        <div className={styles.home}>
            <div className={styles.home__data}>
                <div className={styles.home__data__title}>
                    <h1>{user.name}</h1>
                    <h2>{`> ${user.position}`}</h2>
                </div>
                <div className={styles.home__data__text}>
                    <h3>{`const githubAccount = ${''}`}</h3>
                </div>
            </div>

            <p className={styles.text}>{user.location}</p>
            <p className={styles.text}>{user.company}</p>
        </div>
    )
}
