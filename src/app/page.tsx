import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Calendar from '@/components/Calendar';
import Gallery from '@/components/Gallery';
import Team from '@/components/Team';
import Join from '@/components/Join';
import Footer from '@/components/Footer';
import VersionSwitcher from '@/components/VersionSwitcher';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Calendar />
        <Gallery />
        <Team />
        <Join />
      </main>
      <Footer />
      <VersionSwitcher />
    </>
  );
}
