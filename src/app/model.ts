
export interface Perspective {
    id: number;
    name: string;
}

export interface Objective {
    id: number;
    code: string;
    name: string;
    description: string;
    perspective: Perspective;
}

export interface Comment {
    id: number;
    date: string;
    author: string;
    comment: string;
}

export interface DB {
    perspectives: Perspective[];
    objectives: Objective[];
    comments: Comment[];
}