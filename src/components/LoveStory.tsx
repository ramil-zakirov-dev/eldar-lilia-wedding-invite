import { Card } from "@/components/ui/card";
import { MapPin } from "lucide-react";
import photoImg from "@/assets/photo.jpeg";

const LoveStory = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <Card className="p-8 md:p-12 bg-gradient-romantic border-primary/20 shadow-romantic">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl text-primary mb-6">
              Кадерле дуслар һәм гаилә!
            </h3>
            <p className="text-lg text-foreground leading-relaxed mb-6">
              Сезне 17 нче август көнне 13:00 сәгатьтә башланачак никах
              туебызның кадерле кунагы булырга чакырабыз.
            </p>
            <p className="text-muted-foreground">
              Истәлекле көнебездә безнең белән бергә булуыгызны чын күнелдән
              көтеп калабыз.
            </p>
            <div style={{ paddingTop: 20 }}>
              <img src={photoImg} />
            </div>
            <div className="mt-8 text-right">
              <p className="text-lg text-primary">
                Зур ихтирам белән
                <br />
                Эльдар һәм Лилия ❤️
              </p>
            </div>
          </div>
        </Card>
        <div style={{ paddingTop: 30 }}>
          <iframe
            src="https://yandex.ru/map-widget/v1/?ll=50.586361%2C56.253453&mode=search&oid=196234603626&ol=biz&z=17.04"
            width="100%"
            height="400px"
            allowFullScreen={true}
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default LoveStory;
