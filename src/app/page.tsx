'use client'

import { getUser } from '@/features/fetchApi';
import IUser from '@/schemas/user';
import useUserStore from '@/store/userStore';

export default function Page() {

    const user = useUserStore();
    user.setNewUser();

    return (
        <div>
            <p>{user.name}</p>
        </div>
    )
}
