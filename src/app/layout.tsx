import type { Metadata } from "next";
import { StarknetProvider } from './components/Starknet-provider'
import './globals.css'

export const metadata: Metadata = {
  title: 'Starknet-counter-DAPP',
  description: 'Minimalistic DAPP using Starknet',
  icons: {
    icon: "./favicon.ico",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
          <StarknetProvider>
            {children}
          </StarknetProvider>
      </body>
    </html>
  )
}
