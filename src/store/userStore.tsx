import { create } from 'zustand';
import IUser from '@sc/user';
import ISocialMedia from '@sc/socialMedia';
import IOrgs from '@sc/orgs';
import IRepository from '@sc/repository';
import { getUser } from '@/features/fetchApi';

const useUserStore = create<IUser>()((set) => ({
    name: '',
    position: '',
    location: '',
    socialMedia: [],
    company: '',
    publicReposNumber: 0,
    email: '',
    orgs: [],
    image: '',
    publicRepos: [],

    setName: (newName: string) => set((state) => ({ ...state, name: newName })),
    setPosition: (newPosition: string) => set((state) => ({ ...state, position: newPosition })),
    setLocation: (newLocation: string) => set((state) => ({ ...state, location: newLocation })),
    setSocialMedia: (newSocialMedia: ISocialMedia[]) => set((state) => ({ ...state, socialMedia: newSocialMedia })),
    setCompany: (newCompany: string) => set((state) => ({ ...state, company: newCompany })),
    setPublicReposNumber: (newPublicReposNumber: number) => set((state) => ({ ...state, publicReposNumber: newPublicReposNumber })),
    setEmail: (newEmail: string) => set((state) => ({ ...state, email: newEmail })),
    setOrgs: (newOrgs: IOrgs[]) => set((state) => ({ ...state, orgs: newOrgs })),
    setImage: (newImage: string) => set((state) => ({ ...state, image: newImage })),
    setPublicRepos: (newPublicRepos: IRepository[]) => set((state) => ({ ...state, publicRepos: newPublicRepos })),

    setUser: (newUser: IUser) => set((state) => ({
        ...state,
        name: newUser.name,
        position: newUser.position,
        location: newUser.location,
        socialMedia: newUser.socialMedia,
        company: newUser.company,
        publicRepos: newUser.publicRepos
    })),

    setNewUser: async () => {
        const user = await getUser();

        set((state) => ({
            ...state,
            name: user.name,
        }));
    },
}));

export default useUserStore;