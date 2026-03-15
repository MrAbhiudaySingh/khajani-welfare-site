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
          style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA2tPVkze6FJmnjTzSn8342hvK_Ehfdc6tHF9bcB_aZfoz8fO4eFoNmoZArIbbUi011aEPGnG_itb5sLKFwhysPNodf74HInklGvIUa5knOm374zmqHo7TiTg-6nXgETF2L2XJn9PiM61Y_myqUmLOU2PLQoV_XVVf4QtXvuLAl5KJPn2cG7RtWajP0knACtgmugzfFyYiZJM92uyeLvcQqAdmeUlcra4oGyb6KqMnpH9flbFOLOOvLPr9F7M3rLVbirCeluBdYuMo')" }}
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
              style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA2tPVkze6FJmnjTzSn8342hvK_Ehfdc6tHF9bcB_aZfoz8fO4eFoNmoZArIbbUi011aEPGnG_itb5sLKFwhysPNodf74HInklGvIUa5knOm374zmqHo7TiTg-6nXgETF2L2XJn9PiM61Y_myqUmLOU2PLQoV_XVVf4QtXvuLAl5KJPn2cG7RtWajP0knACtgmugzfFyYiZJM92uyeLvcQqAdmeUlcra4oGyb6KqMnpH9flbFOLOOvLPr9F7M3rLVbirCeluBdYuMo')" }}
            />
            <div className="grid grid-rows-2 gap-4 h-full">
              <div
                className="bg-cover bg-center rounded-sm shadow-2xl"
                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBPP3DePLWWhtWrNP3va7rMqjMaJ0rPvK9q8wkVJqmDUm4X6GgDcYrYcw-m1sVPeowH3dSCmSA_eb1ljMSm9lwUmCFeHb3UVpnwSt1mivhSeqeOQDNbS64b8HVBp31kmRQAeUv1X6R1fUpJPPPf49SCGIyxpof-SYWe_O1kxPwnaYWHfb8VkWQnsDS7Sfdgu1Q4_9NHv7hn5aFvq5x0XIEJyUQrec6hsjk_BoULLYexW81kbk0zSre0hmAzC1XTpPQGTwghxYnHQRY')" }}
              />
              <div
                className="bg-cover bg-center rounded-sm shadow-2xl"
                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDJKD70OC_-S0xfrZFXM4PRR2HMtjZU-vkEE9SUDJZbOUC5zQ901z-CMV6_Oowjga23QMheKl87aJ_OgDDFkn2uQGRCFJPfILx9bQyHoEI4PBCpFVEaypq2c8KXeF-mO1-U9Y6kUC6Re-97E4vfA6xd4XE59wVwKw4Fh4ABQyudRCCE10ThchLJMD_im8mGrOdeF1IvOVl-iuw_95mTars7077fikZ6Dy2u5mtpSh178eBdTLpKopWxpotqOFwKumj6eTXb4BDQ91g')" }}
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
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuARxwnWJ9L9gtaRmvJdQosqL7k1pwtN_SNlz6qN6nWSdhC2Vs7Nv4Il2GY2t-bNbJGW9t4L8GOBMpv245l26tfqmcw_xyXSNRwdg4JQX-Bfe1lW2GrGehIcxBLA4mdbT7dBS-XiZgMQXHrYZdBaUE3AUgMGSHWqPHU9HKod1mWQwGiBBnsJqZBTOrM06JVwd1z3Qs3ple9AJ_1JuAki9iudoxxRHRmonXifyElRNethofobHue7NsXi7tAfnR6rpi9nYdjIVz5z8fk",
              },
              {
                icon: Theater,
                title: "Cultural Performances",
                desc: "Vibrant showcases of traditional and contemporary art forms celebrating womanhood.",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDqibpiFlxSluJ5xYAftpnXKNaCsjs2H9eYgYuFw8Z1K39mPKehf2YUavfto2qJwueqt_-2k7-GiM2RlZMICH2E_JxR8qPuVJl_Tznnhpw9Z8fe5FSgKztQm_llgeA2kcV7CuMwZPRNq1Rg0KVTEQ0wk01JG4vucEPJAXoAwkQlz4PjxzgpcAtXO-YTMjyEfXEIW-WYKgDlTjca7XBm8Qk6J6sgR21Tb6E9lHmlm7mUwkCobQtqrQh22r-Inzl9qn_Jw_NeMIBx5Qw",
              },
              {
                icon: Users,
                title: "Community Strength",
                desc: "Building networks of support and amplifying inspiring stories from the grassroots.",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD6ZBSjEOMz9KW7U4dCg2-myznpMWSfvzNR4a-grFa-VhTB2RPDwEAHtP04bkMoQ6OW9TGn7dlgpcjhKE9TGawnNevAHWej7Zl3hPI2CEFxIMKHOVqESsl7j2v_iCXV6nk3tWCmr5vihzI3YSry7qwhGczu09WbRE9l8XccszVBGyQwB51RPvK8qB5WCBszh4Vxu5wxfq-P4GnQQkgJ7TvVa_hEAro5ddkw99d5NMpVGuGwvl0kXKTBLGke2yKTpGXqAGEwW6Sw3mA",
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
