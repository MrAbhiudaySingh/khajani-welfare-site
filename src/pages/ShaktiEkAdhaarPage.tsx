import Layout from "@/components/Layout";
import { Reveal } from "@/components/Reveal";
import { Award, Theater, Users } from "lucide-react";

const ShaktiEkAdhaarPage = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-primary text-primary-foreground px-6 py-20 lg:py-32 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10 bg-cover bg-center mix-blend-overlay"
          style={{ backgroundImage: "url('/images/projects/shakti-ek-adhaar-1.jpg')" }}
        />
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col lg:flex-row items-center gap-16">
          <Reveal variant="fade-right" className="flex-1 flex flex-col gap-8">
            <div className="inline-flex items-center gap-3 text-accent font-bold text-sm tracking-widest uppercase">
              Annual Event
            </div>
            <h1 className="text-5xl lg:text-7xl font-display font-bold leading-[1.1] tracking-tight">
              Celebrating the Strength of Every Woman
            </h1>
            <p className="text-primary-foreground/70 text-lg lg:text-2xl font-medium leading-relaxed max-w-2xl">
              Shakti Ek Adhaar: Our flagship International Women's Day Event honoring feminine strength, resilience, and outstanding societal contributions.
            </p>
          </Reveal>
          <Reveal variant="fade-left" delay={200} className="flex-1 w-full grid grid-cols-2 gap-4 h-[400px] lg:h-[600px]">
            <div
              className="bg-cover bg-center rounded-sm h-full shadow-2xl"
              style={{ backgroundImage: "url('/images/projects/shakti-ek-adhaar-1.jpg')" }}
            />
            <div className="grid grid-rows-2 gap-4 h-full">
              <div
                className="bg-cover bg-center rounded-sm shadow-2xl"
                style={{ backgroundImage: "url('/images/projects/shakti-ek-adhaar-2.jpg')" }}
              />
              <div
                className="bg-cover bg-center rounded-sm shadow-2xl"
                style={{ backgroundImage: "url('/images/projects/shakti-ek-adhaar-3.jpg')" }}
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* About */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        <Reveal variant="fade-up" className="max-w-4xl mx-auto text-center mb-24">
          <h2 className="text-primary text-4xl lg:text-5xl font-display font-bold leading-tight mb-8 tracking-tight">The Celebration</h2>
          <p className="text-muted-foreground text-xl lg:text-2xl leading-relaxed font-medium">
            Shakti Ek Adhaar is our flagship annual event organized on International Women's Day. The vibrant celebration is dedicated to honoring and felicitating outstanding women who have made remarkable contributions to society. Through captivating cultural performances and inspiring stories, we aim to amplify their voices and showcase the true essence of feminine strength and resilience.
          </p>
        </Reveal>

        {/* Honoring Achievers */}
        <Reveal variant="fade-up">
          <section className="bg-accent p-12 lg:p-20 text-accent-foreground mb-24 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent-foreground/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="relative z-10 text-center max-w-3xl mx-auto">
              <Award className="mx-auto mb-6 opacity-80" size={48} />
              <h3 className="text-3xl lg:text-5xl font-display font-bold mb-6 leading-tight">Honoring the Achievers</h3>
              <p className="text-accent-foreground/90 text-xl leading-relaxed mb-10 font-medium">
                Recognizing women who have broken barriers, championed change, and created lasting impact in their communities. Their stories are the foundation of our inspiration.
              </p>
            </div>
          </section>
        </Reveal>

        {/* Event Highlights */}
        <section className="mb-16">
          <Reveal variant="fade-up">
            <div className="flex items-end justify-between mb-12 border-b border-border pb-6">
              <h3 className="text-3xl lg:text-4xl font-display font-bold text-primary tracking-tight">Event Highlights</h3>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: "Award Felicitation",
                desc: "Honoring women who have broken barriers and made lasting impacts in their respective fields.",
                img: "/images/projects/shakti-ek-adhaar-3.jpg",
              },
              {
                icon: Theater,
                title: "Cultural Performances",
                desc: "Vibrant showcases of traditional and contemporary art forms celebrating womanhood.",
                img: "/images/projects/shakti-ek-adhaar-1.jpg",
              },
              {
                icon: Users,
                title: "Community Strength",
                desc: "Building networks of support and amplifying inspiring stories from the grassroots.",
                img: "/images/projects/shakti-ek-adhaar-2.jpg",
              },
            ].map((item, i) => (
              <Reveal key={item.title} variant="fade-up" delay={i * 100}>
                <div className="group">
                  <div className="aspect-[4/3] w-full bg-cover bg-center mb-6 overflow-hidden shadow-lg">
                    <div
                      className="w-full h-full bg-cover bg-center transform group-hover:scale-105 transition-transform duration-700"
                      style={{ backgroundImage: `url('${item.img}')` }}
                    />
                  </div>
                  <div className="flex items-center gap-4 mb-3">
                    <item.icon className="text-accent" size={24} />
                    <h4 className="text-2xl font-display font-bold text-primary">{item.title}</h4>
                  </div>
                  <p className="text-muted-foreground text-lg leading-relaxed">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default ShaktiEkAdhaarPage;
