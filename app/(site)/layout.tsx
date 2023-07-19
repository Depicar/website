import { getPages } from '@/sanity/sanity-utils'
import '../globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'My website',
  description: 'Generated by next-sanity',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const pages = await getPages();
  
  return (
    <html lang="en">
      <body className="max-w-3xl mx-auto py-20">

        <header className="flex items-center justify-between">
          <Link href="/"
            className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600
            bg-clip-text text-transparent text-lg font-bold">Charlie
          </Link>
          <div className="flex items-center gap-5 text-sm text-gray-600">
            {pages.map((page) => (
              <Link key={page._id} href={`/${page.slug}`} className="hover:underline">
                {page.title}
              </Link>
            ))}
          </div>
        </header>
        <main className="py-20">{children}</main>
        
        
      </body>
    </html>
  )
}
