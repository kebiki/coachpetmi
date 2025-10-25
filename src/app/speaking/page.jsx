import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function SpeakingSection({ children, ...props }) {
  return (
    <Section {...props}>
      <div className="space-y-16">{children}</div>
    </Section>
  )
}

function Appearance({ title, description, event, cta, href }) {
  return (
    <Card as="article">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Eyebrow decorate>{event}</Card.Eyebrow>
      <Card.Description>{description}</Card.Description>
      <Card.Cta>{cta}</Card.Cta>
    </Card>
  )
}

export const metadata = {
  title: 'Conférences',
  description:
    'Mes interventions et conférences sur Power BI, la Business Intelligence et la certification PL 300.',
}

export default function Speaking() {
  return (
    <SimpleLayout
      title="Conférences et Interventions sur Power BI"
      intro="Je partage ma passion pour Power BI et la Business Intelligence à travers des conférences, des webinaires et des formations. Découvrez mes interventions récentes et les sujets que je couvre pour aider les professionnels à maîtriser Power BI et réussir leur certification PL 300."
    >
      <div className="space-y-20">
        <SpeakingSection title="Conférences">
          <Appearance
            href="#"
            title="Maîtriser Power BI: De la collecte des données aux dashboards impactants"
            description="Une exploration approfondie des meilleures pratiques pour construire des solutions Power BI d&apos;entreprise. Comment collecter, transformer et visualiser vos données pour créer des insights décisifs."
            event="DataDay 2024"
            cta="Regarder la vidéo"
          />
          <Appearance
            href="#"
            title="Réussir la certification PL 300: Les pièges à éviter"
            description="Guide complet pour réussir votre examen de certification Microsoft Power BI PL 300. Découvrez les sujets les plus testés, les erreurs courantes et les stratégies d'étude efficaces."
            event="Tech Conference France 2024"
            cta="Regarder la vidéo"
          />
        </SpeakingSection>
        <SpeakingSection title="Webinaires et Formations">
          <Appearance
            href="#"
            title="DAX pour les débutants: Expressions puissantes simplement expliquées"
            description="Apprenez les fondamentaux du langage DAX pour créer des mesures et colonnes calculées qui transformeront vos analyses Power BI. Exercices pratiques inclus."
            event="Webinaire Coaching Power BI, Octobre 2024"
            cta="Accéder à la formation"
          />
          <Appearance
            href="#"
            title="Power Query: L&apos;art de préparer vos données"
            description="Découvrez comment Power Query peut transformer vos sources de données complexes en données propres et prêtes à être analysées. De la connection à la transformation."
            event="Webinaire Coaching Power BI, Septembre 2024"
            cta="Accéder à la formation"
          />
          <Appearance
            href="#"
            title="Gestion des Risques et Business Intelligence: Comment les données sauvent des vies"
            description="L&apos;intersection entre analyse de données, gestion des risques et prévention industrielle. Comment utiliser Power BI pour identifier et prévenir les risques en temps réel."
            event="Forum Prévention et Assurances, Juillet 2024"
            cta="Accéder à la formation"
          />
        </SpeakingSection>
      </div>
    </SimpleLayout>
  )
}
