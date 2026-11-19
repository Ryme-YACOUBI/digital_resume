import AccordionGallery from './AccordionGallery';

const items = [
  {
    title: 'Formation',
    description: "Cycle préparatoire à l'EMSI : mathématiques, physique, algorithmique.",
    tags: ['EMSI', 'Maths', 'Algo'],
    color: '#7b1e3a'
  },
  {
    title: 'Compétences',
    description: 'HTML, CSS, JavaScript, Python, Django REST Framework, LaTeX.',
    tags: ['HTML', 'CSS', 'JS', 'Python'],
    color: '#1e3a7b'
  },
  {
    title: 'Projets',
    description: 'Portfolio web, interface front-end reliée à une API Django, rapport en LaTeX.',
    tags: ['Front-end', 'Django', 'LaTeX'],
    color: '#1e7b5a'
  },
  {
    title: 'Expérience',
    description: "Stage d'initiation et rédaction du rapport associé.",
    tags: ['Stage', 'Rapport'],
    color: '#7b5a1e'
  },
  {
    title: 'Contact',
    description: 'Un projet, une opportunité ? Écrivez-moi via le formulaire.',
    tags: ['Formulaire', 'Email'],
    link: '#contact',
    color: '#4a1e7b'
  }
];

export default function App() {
  return (
    <section id="resume">
      <AccordionGallery
        items={items}
        defaultIndex={2}
        expandRatio={0.52}
        trigger="hover"
      />
    </section>
  );
}