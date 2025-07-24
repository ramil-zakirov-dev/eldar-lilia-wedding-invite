import { Card } from '@/components/ui/card';
import { MapPin, Navigation } from 'lucide-react';

const WeddingLocation = () => {
  return (
    <section className="py-20 px-4 bg-gradient-romantic">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-script text-primary mb-4">
            Узгарыр урын
          </h2>
          <p className="text-lg text-muted-foreground font-elegant">
            Без сезне бу махсус урында күрүгә шат булачакбыз
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Location Details */}
          <Card className="p-8 bg-card/80 backdrop-blur-sm border-primary/20 shadow-romantic">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <MapPin className="text-primary mt-1 flex-shrink-0" size={24} />
                <div>
                  <h3 className="text-2xl font-elegant text-primary mb-2">
                    "Туган як" кафесы
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Безнең туй йолаларына уңайлы һәм атмосфералы урын
                  </p>
                  <p className="text-foreground font-medium">
                    Яңыл, Татарстан Республикасы
                  </p>
                </div>
              </div>

              <div className="pt-6 border-t border-primary/20">
                <div className="flex items-center space-x-2 text-primary mb-4">
                  <Navigation size={20} />
                  <span className="font-medium">Ничек барырга</span>
                </div>
                <p className="text-muted-foreground">
                  Туй урынына ничек барырга турында җентекле мәгълүматны 
                  сез телефон буенча яки шәхси хәбәр белән ала аласыз.
                </p>
              </div>

              <div className="bg-secondary/50 rounded-lg p-4">
                <h4 className="font-elegant text-primary mb-2">Мөһим мәгълүмат:</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Тантана башланганчы 15 минут элегрәк килергә сорыйбыз</li>
                  <li>• Кафе янында автотуру урыны бар</li>
                  <li>• Кирәк булса трансфер белән ярдәм итәчәкбез</li>
                </ul>
              </div>
            </div>
          </Card>

          {/* Map Placeholder */}
          <Card className="h-96 bg-muted/50 border-primary/20 shadow-soft overflow-hidden">
            <div className="w-full h-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="mx-auto text-primary mb-4" size={48} />
                <h3 className="text-xl font-elegant text-primary mb-2">
                  "Туган як" кафесы
                </h3>
                <p className="text-muted-foreground">
                  Яңыл, Татарстан Республикасы
                </p>
                <p className="text-sm text-muted-foreground mt-4">
                  Интерактив карта өстәләчәк
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default WeddingLocation;