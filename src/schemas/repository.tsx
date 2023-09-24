type IRepository = {
    name: string;
    repoLink: string;
    languages: string[];
    dateCreated: Date;
    dateUpdated: Date;
    topics: string[];
    description?: string;
}

export default IRepository;