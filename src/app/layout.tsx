import type { Metadata } from "next"

import "./globals.css"

export const metadata: Metadata = {
  title: "Boilerplate",
  description: "Boilerplate Created in January of 2025",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="kr">
      <body className={`antialiased`}>{children}</body>
    </html>
  )
}
