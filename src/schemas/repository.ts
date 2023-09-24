type IRepository = {
    name: string;
    repoLink: string;
    languages?: string[];
    dateCreated: string;
    dateUpdated: string;
    topics?: string[];
    description?: string;
}

export default IRepository;