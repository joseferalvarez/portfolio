import { create } from 'zustand';
import IUser from '@sc/user';
import ISocialMedia from '@sc/socialMedia';
import IOrgs from '@sc/orgs';
import IRepository from '@sc/repository';

// Get github user
const getGithubUser = async () => {
    try {
        const res = await fetch("https://api.github.com/users/joseferalvarez");
        return await res.json();
    } catch (error) {
        console.log(error);
        return;
    }
}

const getGithubRepos = async () => {
    try {
        const res = await fetch("https://api.github.com/users/joseferalvarez/repos");
        return await res.json();
    } catch (error) {
        console.log(error);
        return;
    }
}

const useUserStore = create<IUser>()((set) => ({
    name: '',
    position: '',
    location: '',
    socialMedia: [],
    company: '',
    accountName: '',
    accountLink: '',
    publicReposNumber: 0,
    email: '',
    orgs: [],
    image: '',
    publicRepos: [],

    setUser: async () => {
        const user = await getGithubUser();
        if (user) {
            set((state) => ({
                ...state,
                name: user.name,
                position: user.bio,
                location: user.location,
                company: user.company,
                email: user.email,
                accountName: user.login,
                accountLink: user.html_url,
            }));
        }
    },

    setRepos: async () => {
        const repos = await getGithubRepos();

        if (repos) {
            set((state) => ({
                ...state,
                publicRepos: repos.map((repo: any) => ({
                    name: repo.name,
                    repoLink: repo.html_url,
                    dateCreated: repo.created_at,
                    dateUpdated: repo.updated_at
                }))
            }))
        }
    }
}));

export default useUserStore;