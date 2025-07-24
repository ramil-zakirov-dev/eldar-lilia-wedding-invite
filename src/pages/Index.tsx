import WeddingHero from '@/components/WeddingHero';
import WeddingTimer from '@/components/WeddingTimer';
import WeddingLocation from '@/components/WeddingLocation';
import LoveStory from '@/components/LoveStory';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <WeddingHero />
      <WeddingTimer />
      <LoveStory />
      <WeddingLocation />
    </div>
  );
};

export default Index;