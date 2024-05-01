import { Navbar, Footer } from "@/components";
import {
  Hero,
  Contributors,
  Vision,
  HackathonInfo,
  Events,
} from "@/app/components";

export default function Profile() {
  return (
    <>
      <Navbar />
      <Hero />
      <Vision />
      <HackathonInfo />
      <Events />
      <Contributors />
      <Footer />
    </>
  );
}
