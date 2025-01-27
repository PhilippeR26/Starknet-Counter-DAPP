import { StarknetProvider } from './components/client/Starknet-provider'
import './globals.css'

export const metadata = {
  title: 'Starknet-counter-DAPP',
  description: 'Minimalistic DAPP using Starknet',
  icons: {
    icon: "./favicon.ico",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
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
