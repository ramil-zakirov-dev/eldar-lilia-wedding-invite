import { Card } from '@/components/ui/card';
import { Heart } from 'lucide-react';

const LoveStory = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-16">
          <Heart className="mx-auto text-primary mb-6" size={48} />
          <h2 className="text-4xl md:text-5xl font-script text-primary mb-6">
            Безнең хикәя
          </h2>
          <p className="text-lg text-muted-foreground font-elegant">
            Һәр мәхәббәтнең үз кабатланмас тарихы бар
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="p-8 bg-card/80 backdrop-blur-sm border-primary/20 shadow-soft text-left">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💕</span>
              </div>
              <h3 className="text-xl font-elegant text-primary">Очрашу</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Язмыш безне иң көтелмәгән мизгелдә бергә китерде. Бу очрашу 
              безнең тормышыбызны мәңгегә үзгәртте. Беренче карашыннан ук 
              без бер-беребезне тапканыбызны аңладык.
            </p>
          </Card>

          <Card className="p-8 bg-card/80 backdrop-blur-sm border-primary/20 shadow-soft text-left">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💍</span>
              </div>
              <h3 className="text-xl font-elegant text-primary">Тәкъдим</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Мәхәббәт һәм аңлашу белән тулы матур еллардан соң, 
              Эльдар тәкъдим ясады. Бу безнең икебез дә озак көткән 
              мизгел иде.
            </p>
          </Card>
        </div>

        <Card className="p-8 md:p-12 bg-gradient-romantic border-primary/20 shadow-romantic">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-script text-primary mb-6">
              Кадерле дуслар һәм гаилә!
            </h3>
            <p className="text-lg text-foreground leading-relaxed mb-6">
              Без сезне тормышыбызның иң мөһим көннәрендә безнең белән бергә булырга чакырабыз. 
              Сезнең булуыгыз безнең бәйрәмне тагын да махсус һәм онытылмас итәчәк.
            </p>
            <p className="text-muted-foreground">
              Без безнең иң кадерле кешеләребез арасында мәхәббәтебезне бәйрәм итү 
              мизгелен көтә алмыйбыз.
            </p>
            <div className="mt-8 text-right">
              <p className="text-lg font-script text-primary">
                Мәхәббәт белән,<br />
                Эльдар һәм Лилия ❤️
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default LoveStory;