import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { TechShowcase } from "@/components/tech-showcase"
import { Stats } from "@/components/stats"
import { ClientsPartners } from "@/components/clients-partners"
import { About } from "@/components/about"
import { FAQ } from "@/components/faq"
import { Newsletter } from "@/components/newsletter"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Stats />
      <Services />
      <TechShowcase />
      <ClientsPartners />
      <About />
      <FAQ />
      <Newsletter />
      <CTA />
      <Footer />
    </main>
  )
}
