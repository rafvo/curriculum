import type { Curriculum } from "./types"

export function usePortugueseVersion() {
  const curriculum: Curriculum = {
    name: 'Rafael Valério de Oliveira Ricardi',
    description: 'Desenvolvedor Full-Stack com mais de 5 anos de experiência, focado em JavaScript, TypeScript, Vue.js, React.js, Node.js e Laravel.',
    location: 'São José do Rio Preto - SP',
    contact: {
      title: 'Contato',
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
      title: 'Idiomas',
      items: [
        {
          id: 1,
          name: 'Português',
          level: 'Nativo'
        },
        {
          id: 2,
          name: 'Inglês',
          level: 'Intermediário'
        }
      ],
    },
    curriculumProject: {
      title: 'Projeto Curriculum',
      url: 'https://www.github.com/rafvo/curriculum',
      name: 'github.com/rafvo/curriculum',
      description: 'Este currículo foi desenvolvido com Vue.js, Nuxt, Typescript e TailwindCSS'
    },
    experiences: {
      title: 'Experiências Profissionais',
      items: [
        {
          id: 1,
          position: 'Front-end Developer',
          company: 'Join Tecnologia & Design',
          typeOfEmployment: 'Tempo Integral',
          startedIn: 'out de 2022',
          endedIn: 'o momento',
          duration: null,
          typeOfLocation: 'Remoto',
          competences: {
            title: 'Competências',
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
              'Testes Unitários com Vitest'
            ]
          }
        },
        {
          id: 2,
          position: 'Full-stack Developer',
          company: 'Seti Tecnologia',
          typeOfEmployment: 'Tempo Integral',
          startedIn: 'jun de 2022',
          endedIn: 'out de 2022',
          duration: '5 meses',
          typeOfLocation: 'Remoto',
          competences: {
            title: 'Competências',
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
          typeOfEmployment: 'Tempo Integral',
          startedIn: 'jan de 2021',
          endedIn: 'mai de 2022',
          duration: '1 ano e 5 meses',
          typeOfLocation: 'Remoto',
          competences: {
            title: 'Competências',
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
          typeOfEmployment: 'Meio Período',
          startedIn: 'jul de 2019',
          endedIn: 'dez de 2020',
          duration: '1 ano e 6 meses',
          typeOfLocation: 'Presencial',
          competences: {
            title: 'Competências',
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
      title: 'Formação Acadêmica',
      items: [
        {
          id: 1,
          endedIn: 'Dez 2020',
          status: 'CONCLUÍDO',
          course: 'Análise e Desenvolvimento de Sistemas',
          level: 'SUPERIOR',
          institution: 'Fatec Rio Preto',
        },
        {
          id: 2,
          endedIn: 'Dez 2019',
          status: 'CONCLUÍDO',
          course: 'Tecnico em Informática',
          level: 'TÉCNICO',
          institution: 'Senac',
        },
        {
          id: 3,
          endedIn: 'Dez 2017',
          status: 'CONCLUÍDO',
          course: 'Tecnico em Informática para Internet',
          level: 'TÉCNICO',
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
          status: 'CONCLUÍDO',
          course: 'React: criando um Design System com TailwindCSS',
          institution: 'Alura',
        },
        {
          id: 2,
          endedIn: 'Jun 2024',
          status: 'CONCLUÍDO',
          course: 'Laravel: transações, service container e autenticação',
          institution: 'Alura',
        },
        {
          id: 3,
          endedIn: 'Jun 2024',
          status: 'CONCLUÍDO',
          course: 'Laravel: e-mails, eventos assíncronos, uploads e testes',
          institution: 'Alura',
        },
        {
          id: 4,
          endedIn: 'Jun 2024',
          status: 'CONCLUÍDO',
          course: 'Laravel: construindo APIs',
          institution: 'Alura',
        },
        {
          id: 5,
          endedIn: 'Out 2022',
          status: 'CONCLUÍDO',
          course: 'Vuejs 2 - O Guia Completo com Vue Router e Vuex',
          institution: 'Udemy',
        },
        {
          id: 6,
          endedIn: 'Mai 2021',
          status: 'CONCLUÍDO',
          course: 'Introdução ao Laravel',
          institution: 'Udemy',
        },
        {
          id: 7,
          endedIn: 'Nov 2020',
          status: 'CONCLUÍDO',
          course: 'Loja Virtual Completa - Android e IOS Com Flutter',
          institution: 'Udemy',
        },
        {
          id: 8,
          endedIn: 'Dez 2017',
          status: 'CONCLUÍDO',
          course: 'Programador de Dispositivos Móveis',
          institution: 'Senac',
        },
        {
          id: 9,
          endedIn: 'Jun 2017',
          status: 'CONCLUÍDO',
          course: 'HTML5 e CSS3 - Criação de Websites',
          institution: 'Senac',
        }
      ]
    }
  }

  return {
    curriculum
  }
}
