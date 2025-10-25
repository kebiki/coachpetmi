import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export const metadata = {
  title: 'Ressources',
  description: 'Les outils, technologies et ressources que j&apos;utilise pour Power BI et mes analyses.',
}

export default function Uses() {
  return (
    <SimpleLayout
      title="Outils et Ressources pour Power BI"
      intro="On me demande souvent quels outils j&apos;utilise pour créer des solutions Power BI performantes, rester productive et bien analyser les données. Voici une liste de tous mes outils et ressources préférés pour la Business Intelligence."
    >
      <div className="space-y-20">
        <ToolsSection title="Stack Power BI">
          <Tool title="Microsoft Power BI Desktop">
            Le cœur de mon travail. C&apos;est l&apos;outil indispensable pour créer des dashboards puissants, explorer les données et développer des solutions BI complètes avant de les publier en ligne.
          </Tool>
          <Tool title="Power BI Service (Cloud)">
            Pour partager les rapports avec les stakeholders, gérer les permissions et mettre en place l&apos;automatisation avec les alertes et les abonnements de rapport.
          </Tool>
          <Tool title="Power Query (M Language)">
            L&apos;outil de transformation de données de Power BI. Je l&apos;utilise pour nettoyer, transformer et préparer les données avant l&apos;analyse. C&apos;est une vraie révolution pour ETL.
          </Tool>
          <Tool title="DAX (Data Analysis Expressions)">
            Le langage pour créer des mesures et colonnes calculées sophistiquées. Essentiel pour tout calcul d&apos;analyse métier avancée en Power BI.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Outils de Développement et Base de Données">
          <Tool title="SQL Server Management Studio">
            Pour accéder directement aux bases de données SQL Server, écrire des requêtes complexes et optimiser les performances avant l&apos;import dans Power BI.
          </Tool>
          <Tool title="Visual Studio Code">
            L&apos;éditeur lightweight que j&apos;utilise pour écrire des scripts DAX, des requêtes SQL et gérer mes fichiers de configuration.
          </Tool>
          <Tool title="Git & GitHub">
            Pour le versioning de mes projets Power BI, documenter les changements et collaborer avec d&apos;autres développeurs BI.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Outils de Collaboration et Productivité">
          <Tool title="Excel">
            Le complément parfait à Power BI pour les analyses rapides, les tests et la préparation des données avant import.
          </Tool>
          <Tool title="Microsoft Teams">
            Pour la collaboration en temps réel avec les équipes, partager des rapports Power BI et discuter des améliorations.
          </Tool>
          <Tool title="Notion">
            Pour documenter mes processus, créer des guides d&apos;utilisation Power BI et organiser mes notes de formation.
          </Tool>
          <Tool title="Calendly">
            Pour faciliter la planification des sessions de coaching et des formations sans aller-retour d&apos;emails.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Ressources d&apos;Apprentissage">
          <Tool title="Microsoft Learn (Apprentissage Power BI officiel)">
            Les ressources officielles de Microsoft pour rester à jour avec les dernières features et meilleures pratiques Power BI.
          </Tool>
          <Tool title="Communauté Power BI French User Group">
            Une communauté excellente de professionnels Power BI en France pour partager les connaissances et rester connecté.
          </Tool>
        </ToolsSection>
      </div>
    </SimpleLayout>
  )
}
