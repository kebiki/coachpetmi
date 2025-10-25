import Image from 'next/image'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import logoAnimaginary from '@/images/logos/animaginary.svg'
import logoCosmos from '@/images/logos/cosmos.svg'
import logoHelioStream from '@/images/logos/helio-stream.svg'
import logoOpenShuttle from '@/images/logos/open-shuttle.svg'
import logoPlanetaria from '@/images/logos/planetaria.svg'

const projects = [
  {
    name: 'Tableaux de Bord KPI - Saint-Gobain',
    description:
      'Conception et développement de tableaux de bord Power BI pour le suivi des indicateurs clés de performance (KPI) en prévention des risques industriels. Automatisation des mises à jour mensuelles et rapports dynamiques pour la direction des risques et assurances.',
    link: { href: '#', label: 'Étude de cas' },
    logo: logoPlanetaria,
  },
  {
    name: 'Solution BI Prévention Mondiale',
    description:
      'Mise en place d\'une solution Power BI pour le programme de prévention mondiale chez Saint-Gobain. Collecte, analyse et visualisation de données de risques industriels sur périmètre international avec dashboards interactifs et recommandations stratégiques.',
    link: { href: '#', label: 'Détails du projet' },
    logo: logoAnimaginary,
  },
  {
    name: 'Portail Intranet Prévoyance SharePoint',
    description:
      'Création et gestion d\'un intranet de prévoyance intégrant Power BI pour visualiser les données d\'assurance-maladie et prévoyance collective. Amélioration de l\'adoption des outils BI au sein du groupe La Française d\'Assurance et Prévoyance.',
    link: { href: '#', label: 'Découvrir' },
    logo: logoHelioStream,
  },
  {
    name: 'Guides Pratiques Power BI',
    description:
      'Élaboration de guides d\'utilisation et de documentation Power BI pour faciliter l\'adoption et la compréhension des outils au sein des équipes de prévention et d\'assurance. Formation d\'équipes lors des "working groups" sur l\'utilisation des dashboards BI.',
    link: { href: '#', label: 'Ressources' },
    logo: logoCosmos,
  },
  {
    name: 'Analyse Données Évaluation Risques',
    description:
      'Participation à l\'évaluation des risques industriels avec analyse approfondie des données collectées lors des visites de site. Support analytique pour l\'ingénieur de prévention via des rapports Power BI détaillés et recommendations basées sur la data.',
    link: { href: '#', label: 'Méthodologie' },
    logo: logoOpenShuttle,
  },
]

function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export const metadata = {
  title: 'Projets',
  description: 'Mes réalisations Power BI et solutions BI d\'entreprise.',
}

export default function Projects() {
  return (
    <SimpleLayout
      title="Réalisations & Projets Power BI"
      intro="J'ai travaillé sur plusieurs projets ambitieux où j'ai démontré ma capacité à transformer des données complexes en solutions BI impactantes. Voici les projets les plus significatifs qui illustrent mon expertise en Power BI, analyse de données et gestion des risques industriels."
    >
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project) => (
          <Card as="li" key={project.name}>
            <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md ring-1 shadow-zinc-800/5 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image
                src={project.logo}
                alt=""
                className="h-8 w-8"
                unoptimized
              />
            </div>
            <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
              <Card.Link href={project.link.href}>{project.name}</Card.Link>
            </h2>
            <Card.Description>{project.description}</Card.Description>
            <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
              <LinkIcon className="h-6 w-6 flex-none" />
              <span className="ml-2">{project.link.label}</span>
            </p>
          </Card>
        ))}
      </ul>
    </SimpleLayout>
  )
}
