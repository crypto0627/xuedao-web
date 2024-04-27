import { Navbar, ReactSwipeableViews, Footer } from "@/components"

import { Contributors } from "./contributor"
import { Hero } from "./hero"
import { Vision } from "./vision"

export default function Profile() {
  return (
    <>
      <Navbar />
      <Hero />
      <Vision />
      <Contributors />
      <ReactSwipeableViews />
      <Footer />
    </>
  )
}
