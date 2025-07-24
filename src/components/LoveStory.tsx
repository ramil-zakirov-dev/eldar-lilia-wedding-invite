import { Card } from '@/components/ui/card';
import { Heart } from 'lucide-react';

const LoveStory = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-16">
          <Heart className="mx-auto text-primary mb-6" size={48} />
          <h2 className="text-4xl md:text-5xl font-script text-primary mb-6">
            Наша история
          </h2>
          <p className="text-lg text-muted-foreground font-elegant">
            Каждая любовь имеет свою неповторимую историю
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="p-8 bg-card/80 backdrop-blur-sm border-primary/20 shadow-soft text-left">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💕</span>
              </div>
              <h3 className="text-xl font-elegant text-primary">Встреча</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Судьба свела нас в самый неожиданный момент. Это была встреча, 
              которая изменила наши жизни навсегда. С первого взгляда мы поняли, 
              что нашли друг друга.
            </p>
          </Card>

          <Card className="p-8 bg-card/80 backdrop-blur-sm border-primary/20 shadow-soft text-left">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💍</span>
              </div>
              <h3 className="text-xl font-elegant text-primary">Предложение</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              После прекрасных лет отношений, полных любви и понимания, 
              Эльдар сделал предложение. Это был момент, которого мы оба 
              так долго ждали.
            </p>
          </Card>
        </div>

        <Card className="p-8 md:p-12 bg-gradient-romantic border-primary/20 shadow-romantic">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-script text-primary mb-6">
              Дорогие друзья и семья!
            </h3>
            <p className="text-lg text-foreground leading-relaxed mb-6">
              Мы приглашаем вас разделить с нами один из самых важных дней в нашей жизни. 
              Ваше присутствие сделает наш праздник еще более особенным и незабываемым.
            </p>
            <p className="text-muted-foreground">
              Мы не можем дождаться момента, когда сможем отпраздновать нашу любовь 
              в окружении самых дорогих нам людей.
            </p>
            <div className="mt-8 text-right">
              <p className="text-lg font-script text-primary">
                С любовью,<br />
                Эльдар и Лилия ❤️
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default LoveStory;