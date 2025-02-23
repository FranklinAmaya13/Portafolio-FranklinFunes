export interface SocialProps {
    name: string;
    url: string;
    icon: string;
}

export interface ParagraphProps {
    info: string;
}

interface  Skill{
    name: string;
    level: number;
}

export interface Skills {
    [category: string]:Skill[];
}

export interface ProjectCard {    
    title: string;
    resume: string;
    href: string;
    image?: string;
}