import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { ProfileCards } from "@/components/profile-cards"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <ProfileCards />
      </main>
      <Footer />
    </div>
  )
}
