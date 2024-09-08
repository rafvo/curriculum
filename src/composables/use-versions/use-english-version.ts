import type { Curriculum } from "./types"

export function useEnglishVersion() {
  const curriculum: Curriculum = {
    name: 'Rafael Valério de Oliveira Ricardi',
    description: 'Full-Stack developer with over 5 years of experience, focused on JavaScript, TypeScript, Vue.js, React.js, Node.js and Laravel.',
    location: 'São José do Rio Preto - SP, Brazil',
    contact: {
      title: 'Contact',
      email: 'rafaelvalerio1995@hotmail.com',
      whatsapp: {
        cleanNumber: '5517982082974',
        number: '+55 (17) 98208-2974',
      },
      linkedin: {
        title: 'linkedin.com/in/rafvo',
        url: 'https://www.linkedin.com/in/rafvo/',
      },
      github: {
        title: 'github.com/rafvo',
        url: 'https://github.com/rafvo'
      },
    },
    languages: {
      title: 'Languages',
      items: [
        {
          id: 1,
          name: 'Portuguese',
          level: 'Native'
        },
        {
          id: 2,
          name: 'English',
          level: 'Intermediary'
        }
      ],
    },
    curriculumProject: {
      title: 'Curriculum Project',
      url: 'https://www.github.com/rafvo/curriculum',
      name: 'github.com/rafvo/curriculum',
      description: 'This resume was developed with Vue.js, Nuxt, Typescript and TailwindCSS.'
    },
    experiences: {
      title: 'Professional Experiences',
      items: [
        {
          id: 1,
          position: 'Front-end Developer',
          company: 'Join Tecnologia & Design',
          typeOfEmployment: 'Full Time',
          startedIn: 'Oct 2022',
          endedIn: 'the moment',
          duration: null,
          typeOfLocation: 'Remote',
          competences: {
            title: 'Skills',
            items: [
              'Vue.js',
              'Vuex',
              'Vuetify',
              'JavaScript',
              'TypeScript',
              'SASS',
              'Pinia',
              'Highcharts',
              'HTML5',
              'CSS3',
              'Git',
              'API Restful',
              'Jira',
              'Docker',
              'Leaflet',
              'WebSocket',
              'Scrum',
              'Unit Tests with Vitest'
            ]
          }
        },
        {
          id: 2,
          position: 'Full-stack Developer',
          company: 'Seti Tecnologia',
          typeOfEmployment: 'Full Time',
          startedIn: 'Jun 2022',
          endedIn: 'Oct 2022',
          duration: '5 months',
          typeOfLocation: 'Remote',
          competences: {
            title: 'Skills',
            items: [
            'Vue.js',
            'JavaScript',
            'MySQL',
            'HTML5',
            'CSS3',
            'Git',
            'C++',
            'API Restful',
            'Jira',
            'PHP',
            'Scrum',
          ]
        }
        },
        {
          id: 3,
          position: 'Full-stack Developer',
          company: 'Rebuut',
          typeOfEmployment: 'Full Time',
          startedIn: 'Jan 2021',
          endedIn: 'May 2022',
          duration: '1 year and 5 months',
          typeOfLocation: 'Remote',
          competences: {
            title: 'Skills',
              items: [
              'Vue.js',
              'JavaScript',
              'MySQL',
              'HTML5',
              'CSS3',
              'Git',
              'C++',
              'API Restful',
              'Jira',
              'PHP',
              'Scrum',
            ]
          },
        },
        {
          id: 4,
          position: 'Web Developer (Trainee)',
          company: 'Austa Hospital',
          typeOfEmployment: 'Part Time',
          startedIn: 'Jul 2019',
          endedIn: 'Dec 2020',
          duration: '1 ano e 6 meses',
          typeOfLocation: 'In person',
          competences: {
            title: 'Skills',
            items: [
              'PL/SQL',
              'JavaScript',
              'JQuery',
              'Highcharts',
              'HTML5',
              'CSS3',
              'PHP',
              'Bootstrap',
              'Trello'
            ]
          }
        },
      ]
    },
    academicTraining: {
      title: 'Academic Training',
      items: [
        {
          id: 1,
          endedIn: 'Dec 2020',
          status: 'COMPLETED',
          course: 'Systems Analysis and Development',
          level: 'HIGHER',
          institution: 'Fatec Rio Preto',
        },
        {
          id: 2,
          endedIn: 'Dec 2019',
          status: 'COMPLETED',
          course: 'IT Technician',
          level: 'TECHNICAL',
          institution: 'Senac',
        },
        {
          id: 3,
          endedIn: 'Dec 2017',
          status: 'COMPLETED',
          course: 'IT Technician for Internet',
          level: 'TECHNICAL',
          institution: 'Etec Philadelpho Gouvêa Netto',
        }
      ],
    },
    complementaryCourses: {
      title: 'Cursos Complementares',
      items: [
        {
          id: 1,
          endedIn: 'Jun 2024',
          status: 'COMPLETED',
          course: 'React: creating a Design System with TailwindCSS',
          institution: 'Alura',
        },
        {
          id: 2,
          endedIn: 'Jun 2024',
          status: 'COMPLETED',
          course: 'Laravel: transactions, service container and authentication',
          institution: 'Alura',
        },
        {
          id: 3,
          endedIn: 'Jun 2024',
          status: 'COMPLETED',
          course: 'Laravel: emails, asynchronous events, uploads and tests',
          institution: 'Alura',
        },
        {
          id: 4,
          endedIn: 'Jun 2024',
          status: 'COMPLETED',
          course: 'Laravel: building APIs',
          institution: 'Alura',
        },
        {
          id: 5,
          endedIn: 'Oct 2022',
          status: 'COMPLETED',
          course: 'Vuejs 2 - The Complete Guide with Vue Router and Vuex',
          institution: 'Udemy',
        },
        {
          id: 6,
          endedIn: 'May 2021',
          status: 'COMPLETED',
          course: 'Introduction to Laravel',
          institution: 'Udemy',
        },
        {
          id: 7,
          endedIn: 'Nov 2020',
          status: 'COMPLETED',
          course: 'Complete Virtual Store - Android and IOS With Flutter',
          institution: 'Udemy',
        },
        {
          id: 8,
          endedIn: 'Dec 2017',
          status: 'COMPLETED',
          course: 'Mobile Device Programmer',
          institution: 'Senac',
        },
        {
          id: 9,
          endedIn: 'Jun 2017',
          status: 'COMPLETED',
          course: 'HTML5 and CSS3 - Website Creation',
          institution: 'Senac',
        }
      ]
    }
  }

  return {
    curriculum
  }
}
