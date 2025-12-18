export type Language = 'es' | 'en';

export interface Project {
    id: number;
    title: string;
    description: string;
    tags: Tag[];
    image: string;
    link?: string;
    github?: string;
}


export interface Tag {
    name: string
}

export interface SkillData {
    subject: string;
    A: number;
    fullMark: number;
}

export interface ChatMessage {
    role: 'user' | 'model';
    text: string;
    isError?: boolean;
}

export interface Certification {
    id: number;
    name: string;
    issuer: string;
    date: string;
    badgeUrl: string;
    link: string;
}

export enum SectionId {
    HERO = 'hero',
    ABOUT = 'about',
    PROJECTS = 'projects',
    SKILLS = 'skills',
    CERTIFICATIONS = 'certifications',
    CONTACT = 'contact'
}