import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const WeddingTimer = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const weddingDate = new Date("2025-08-17T13:00:00");

    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = weddingDate.getTime() - now.getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <Card className="p-6 text-center bg-card/50 backdrop-blur-sm border-primary/20 shadow-soft">
      <div className="text-4xl md:text-5xl font-bold text-primary font-elegant mb-2">
        {value.toString().padStart(2, "0")}
      </div>
      <div className="text-sm uppercase tracking-wide text-muted-foreground font-medium">
        {label}
      </div>
    </Card>
  );

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl text-primary mb-4">
          Безнең махсус көнебезгә кадәр
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          <TimeUnit value={timeLeft.days} label="Көн" />
          <TimeUnit value={timeLeft.hours} label="Сәгать" />
          <TimeUnit value={timeLeft.minutes} label="Минут" />
          <TimeUnit value={timeLeft.seconds} label="Секунд" />
        </div>
      </div>
    </section>
  );
};

export default WeddingTimer;
