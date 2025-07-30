import Footer from '@/components/layout/Footer';
import ModernHero from '@/components/sections/ModernHero';
import FeaturedProjects from '@/components/sections/FeaturedProjects';
import TeamShowcase from '@/components/sections/TeamShowcase';
import TechStack from '@/components/sections/TechStack';

export default function Home() {
  return (
    <div className="min-h-screen">
      <main>
        <ModernHero />
        <FeaturedProjects />
        <TeamShowcase />
        <TechStack />
      </main>
      <Footer />
    </div>
  );
}