export interface Proyect {
    name: string;
    description: string;
    image: string;
    link: string;
    tags: Tag[];
    github: string;
    date: string;

}

export interface Tag {
    name: string;
   class?: string;
    icon: {
        logo: any;
    };
}