interface Contact {
    title: string;
    email: string;
    whatsapp: {
        cleanNumber: string;
        number: string;
    };
    linkedin: {
        title: string;
        url: string;
    };
    github: {
        title: string;
        url: string;
    };
};

interface Language {
    id: number;
    name: string;
    level: string;
};

interface Experience {
    id: number;
    position: string;
    company: string;
    typeOfEmployment: string;
    startedIn: string;
    endedIn: string | null;
    duration: string | null;
    typeOfLocation: string;
    competences: {
        title: string;
        items: string[];
    };
};

interface AcademicTraining {
    id: number;
    endedIn: string;
    status: string;
    course: string;
    level: string;
    institution: string;
};

interface ComplementaryCourse {
    id: number;
    endedIn: string;
    status: string;
    course: string;
    institution: string;
};

interface CurriculumProject {
    title: string;
    url: string;
    name: string;
    description: string;
};

export interface Curriculum {
    name: string;
    description: string;
    location: string
    contact: Contact;
    languages: {
        title: string;
        items: Language[];
    };
    curriculumProject: CurriculumProject;
    experiences: {
        title: string;
        items: Experience[];
    };
    academicTraining: {
        title: string;
        items: AcademicTraining[];
    };
    complementaryCourses: {
        title: string;
        items: ComplementaryCourse[];
    };
};