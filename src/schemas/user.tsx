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

    setName?: (newName: string) => void;
    setPosition?: (newPosition: string) => void;
    setLocation?: (newLocation: string) => void;
    setSocialMedia?: (newSocialMedia: ISocialMedia[]) => void;
    setCompany?: (newCompany: string) => void;
    setPublicReposNumber?: (newPublicReposNumber: number) => void;
    setEmail?: (newEmail: string) => void;
    setOrgs?: (newOrgs: IOrgs[]) => void;
    setImage?: (newImage: string) => void;
    setPublicRepos?: (newPublicRepos: IRepository[]) => void;

    setUser?: (newUser: IUser) => void;
    setNewUser?: () => void;
};

export default IUser;