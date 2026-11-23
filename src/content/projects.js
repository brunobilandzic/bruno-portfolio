import { person } from './site';

export const projects = [
  {
    slug: 'fvtracker',
    title: 'FVTracker',
    github: `${person.github}/fvtracker`,
    demo: 'https://fvtracker-demo.vercel.app/',
    technologies: ['JavaScript', 'Next.js', 'React', 'MongoDB', 'Mongoose'],
    screenshots: [{
      src: '/projects/fvtracker-demo.webp',
      width: 1440,
      height: 830,
      alt: {
        en: 'FVTracker demo homepage displaying the cultivation, production, warehouse and finance manager roles.',
        hr: 'Naslovnica demonstracijske verzije FVTrackera s ulogama menadžera uzgoja, proizvodnje, skladišta i financija.',
      },
    }],
    en: {
      category: 'Master’s thesis · OSS Kopilica Split',
      intro: 'An application for managing business processes in fruit and vegetable production.',
      context: 'FVTracker was developed as my master’s thesis at OSS Kopilica Split.',
      problem: 'Fruit and vegetable producers need to manage work across several stages, from cultivation and production to warehouse operations.',
      features: ['Cultivation and production workflows', 'Warehouse operations and procurement', 'Employment and sales'],
      implementation: 'FVTracker uses Next.js and React for the web application and Mongoose to work with MongoDB. The public demo uses a dedicated read-only database seeded with synthetic data.',
    },
    hr: {
      category: 'Diplomski rad · OSS Kopilica Split',
      intro: 'Aplikacija za upravljanje poslovnim procesima u proizvodnji voća i povrća.',
      context: 'FVTracker je nastao kao moj diplomski rad na OSS-u Kopilica u Splitu.',
      problem: 'Proizvođači voća i povrća trebaju upravljati poslovima u više faza, od uzgoja i proizvodnje do skladišnog poslovanja.',
      features: ['Procesi uzgoja i proizvodnje', 'Skladišno poslovanje i nabava', 'Zapošljavanje i prodaja'],
      implementation: 'Web aplikacija koristi Next.js i React, a s bazom MongoDB radi putem biblioteke Mongoose. Javni demo koristi zasebnu bazu sa sintetičkim podacima i pristupom samo za čitanje.',
    },
  },
  {
    slug: 'spomenarapp',
    title: 'SpomenarApp',
    github: `${person.github}/spomenarapp`,
    technologies: ['JavaScript', 'React', 'Express', 'MongoDB', 'Mongoose'],
    screenshots: [],
    en: {
      category: 'Undergraduate thesis · FESB',
      intro: 'A web application for creating, answering and managing collections of questions.',
      context: 'SpomenarApp was developed as my final undergraduate thesis at FESB, University of Split.',
      problem: 'The project gives users a place to organize questions into collections and answer collections shared by other users.',
      features: ['Create and manage question collections', 'Browse collections created by other users', 'Answer questions within a collection'],
      implementation: 'The repository has a separate React frontend and Express backend. The backend connects to MongoDB through Mongoose, and the development script starts both parts together.',
    },
    hr: {
      category: 'Završni rad · FESB',
      intro: 'Web aplikacija za izradu i upravljanje zbirkama pitanja te odgovaranje na pitanja.',
      context: 'SpomenarApp je nastao kao moj završni rad na FESB-u Sveučilišta u Splitu.',
      problem: 'Projekt korisnicima omogućuje organiziranje pitanja u zbirke i odgovaranje na pitanja iz zbirki drugih korisnika.',
      features: ['Izrada zbirki pitanja i upravljanje njima', 'Pregled zbirki drugih korisnika', 'Odgovaranje na pitanja iz zbirki'],
      implementation: 'Repozitorij sadrži odvojeno React sučelje i Express pozadinski dio. Pozadinski se dio povezuje s bazom MongoDB putem biblioteke Mongoose, a razvojna skripta pokreće oba dijela zajedno.',
    },
  },
  {
    slug: 'vegme',
    title: 'Vegme',
    github: `${person.github}/vegme`,
    technologies: ['JavaScript', 'React', 'Node.js', 'MongoDB'],
    screenshots: [],
    en: {
      category: 'Web application',
      intro: 'A web application where cooks list meals and users subscribe on a weekly basis.',
      features: ['Browse meals and manage weekly orders', 'Create and manage meal listings as a cook', 'Manage users and roles as an administrator'],
      implementation: 'Vegme has a React frontend and a separate Node.js backend that uses MongoDB.',
    },
    hr: {
      category: 'Web aplikacija',
      intro: 'Web aplikacija u kojoj kuhari objavljuju ponudu jela, a korisnici se pretplaćuju na tjednoj razini.',
      features: ['Pregled ponude jela i upravljanje tjednim narudžbama', 'Objava i uređivanje ponude jela u ulozi kuhara', 'Upravljanje korisnicima i ulogama u ulozi administratora'],
      implementation: 'Vegme ima korisničko sučelje u Reactu i odvojeni pozadinski dio na Node.js-u koji koristi MongoDB.',
    },
  },
];
