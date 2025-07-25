import heroImage from "@/assets/wedding-hero-bg.jpg";

const WeddingHero = () => {
  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-hero" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <p className="text-lg md:text-xl text-foreground/80 mb-4 font-elegant tracking-wide">
            Никах-туена чакыру
          </p>

          <h1 className="text-6xl md:text-8xl lg:text-9xl text-primary mb-6 leading-none">
            Эльдар
            <span className="block text-4xl md:text-5xl text-foreground/70 my-2">
              &
            </span>
            Лилия
          </h1>

          <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-romantic border border-primary/20">
            <p className="text-2xl md:text-3xl font-elegant text-primary mb-4">
              17 август 2025
            </p>
            <p className="text-3xl text-muted-foreground font-elegant">13:00</p>
            <p className="text-lg text-muted-foreground mt-4 font-elegant">
              "Туган як" кафесы, Янил авылы
            </p>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-accent/20 rounded-full blur-2xl animate-pulse" />
    </section>
  );
};

export default WeddingHero;
