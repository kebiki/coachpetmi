import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'

import '@/styles/tailwind.css'

export const metadata = {
  title: {
    template: '%s - Coach Petmi',
    default:
      'Coach Petmi - Experte Power BI & Coach Certification PL 300',
  },
  description:
    'Coach Petmi est une experte Power BI et coach en certification PL 300. Avec plus de 2 ans d\'expérience et un Master en Gestion des Risques, je vous aide à maîtriser Power BI et à réussir votre certification.',
  alternates: {
    types: {
      'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-zinc-50 dark:bg-black" suppressHydrationWarning>
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}
