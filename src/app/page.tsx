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
        <div>
            <p className={styles.text}>{user.name}</p>
            <p className={styles.text}>{user.position}</p>
            <p className={styles.text}>{user.location}</p>
            <p className={styles.text}>{user.company}</p>
        </div>
    )
}
