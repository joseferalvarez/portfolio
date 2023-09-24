import ISocialMedia from "@sc/socialMedia";
import IOrgs from "@sc/orgs";
import IRepository from "@sc/repository";

type IUser = {
    name: string;
    position: string;
    location: string;
    socialMedia: ISocialMedia[];
    company: string;
    publicReposNumber?: number;
    email?: string;
    orgs?: IOrgs[];
    image?: string;
    publicRepos?: IRepository[];

    setUser: () => void;
    setRepos: () => void;
};

export default IUser;