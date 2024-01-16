import Header from "./ui/header"
import Footer from "./ui/footer"
import Testimonials from "./ui/home/testimonial"
import FeatureList from "./ui/home/featureList"
import Screenshots from "./ui/home/screenshots"
import MainSection from "./ui/home/mainSection"

export default function Home() {
  return (
    <>
      <Header />
      <MainSection />
      <Screenshots />
      <FeatureList />
      <Testimonials />
      <Footer />
    </>
  )
}

