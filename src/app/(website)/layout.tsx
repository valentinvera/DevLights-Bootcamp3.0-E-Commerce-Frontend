import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { SharedStateProvider } from "@/context/useSharedState"

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <SharedStateProvider>
      <div className="root">
        <Header />
        {children}
        <Footer />
      </div>
    </SharedStateProvider>
  )
}
