import Layout from "@/components/Layout";
import { Reveal } from "@/components/Reveal";
import { ShieldCheck, Shield, QrCode, Copy } from "lucide-react";

const DonatePage = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative bg-background overflow-hidden pt-12 lg:pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-20">
            <Reveal variant="fade-left" className="w-full lg:w-1/2">
              <span className="inline-block py-1 px-3 bg-primary text-primary-foreground text-xs font-bold tracking-widest uppercase mb-6 rounded-sm">Official Donation Portal</span>
              <h1 className="text-5xl lg:text-7xl tracking-tighter font-display font-bold text-primary leading-none italic">
                <span className="block text-primary font-medium">Scan to</span>
                <span className="block text-accent not-italic font-black mt-2">Empower Lives</span>
              </h1>
              <div className="mt-8 border-l-4 border-accent pl-6 py-2">
                <p className="text-lg lg:text-xl text-muted-foreground font-light italic leading-relaxed">
                  "Your contribution directly funds skill development and healthcare initiatives in the Brij region. 100% transparency assured."
                </p>
              </div>
              <div className="mt-12 space-y-6">
                <h3 className="text-sm font-bold tracking-widest uppercase text-muted-foreground">Your Impact Today</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { amount: "₹1,000", desc: "Provides School Uniforms" },
                    { amount: "₹2,500", desc: "Medical Kit for a Family" },
                    { amount: "₹5,000", desc: "Skill Training for One Woman" },
                    { amount: "₹10,000", desc: "Water Filtration Unit" },
                  ].map((item, i) => (
                    <Reveal key={item.amount} variant="fade-up" delay={i * 80}>
                      <div className="p-6 bg-card shadow-sm border border-border rounded-lg group hover:border-accent transition-colors">
                        <div className="text-2xl font-bold text-primary mb-1">{item.amount}</div>
                        <p className="text-sm text-muted-foreground font-serif italic">{item.desc}</p>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
              <div className="mt-12 flex items-center gap-6">
                <div className="flex items-center gap-3 bg-card px-4 py-2 rounded-full border border-border shadow-sm">
                  <ShieldCheck className="text-green-600" size={18} />
                  <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">80G Certificate</span>
                </div>
                <div className="flex items-center gap-3 bg-card px-4 py-2 rounded-full border border-border shadow-sm">
                  <Shield className="text-blue-600" size={18} />
                  <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">12A Registered</span>
                </div>
              </div>
            </Reveal>
            <Reveal variant="fade-right" delay={200} className="w-full lg:w-1/2 flex flex-col items-center">
              <div className="bg-card p-8 rounded-2xl shadow-2xl border border-border max-w-sm w-full relative">
                <div className="absolute -top-4 -right-4 bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide shadow-lg">Scan & Pay</div>
                <div className="aspect-square bg-muted border-2 border-border rounded-xl flex items-center justify-center mb-6 relative overflow-hidden">
                   <img src="/images/donate/upi-qr.jpg" alt="Khajani Welfare Society UPI QR Code" className="w-full h-full object-contain p-2" />
                 </div>
                <div className="text-center space-y-2">
                  <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">UPI ID</p>
                  <div className="flex items-center justify-center gap-2 bg-muted p-2 rounded border border-border cursor-pointer hover:bg-muted/70 transition-colors">
                    <code className="text-sm font-mono font-bold text-primary">q353936413@ybl</code>
                    <Copy className="text-muted-foreground" size={14} />
                  </div>
                  <p className="text-xs text-muted-foreground mt-4 italic">Accepts GPay, PhonePe, Paytm, BHIM</p>
                </div>
              </div>
              <div className="mt-8 text-center max-w-sm">
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Donations are exempt from tax under section 80G of the Income Tax Act. Please share your transaction details at <a className="text-accent underline" href="#">finance@khajani.org</a> for the receipt.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Bank Details */}
      <section className="py-16 lg:py-24 bg-card border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal variant="fade-up">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-display font-bold text-primary italic">Bank Transfer Details</h2>
              <p className="mt-4 text-muted-foreground text-sm font-serif italic">For direct NEFT/RTGS transfers</p>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { label: "Account Name", value: "Khajani Welfare Society", mono: false },
              { label: "Bank", value: "Yes Bank, Dampier Nagar, Mathura", mono: false },
              { label: "Account Number", value: "007294600000533", mono: true },
              { label: "IFSC Code", value: "YESB0000072", mono: true },
            ].map((item, i) => (
              <Reveal key={item.label} variant="fade-up" delay={i * 100}>
                <div className="p-8 border border-border text-center rounded-xl bg-muted">
                  <h3 className="text-xs font-bold tracking-widest uppercase text-muted-foreground mb-2">{item.label}</h3>
                  <p className={`text-lg font-bold text-primary ${item.mono ? "font-mono" : "font-display"}`}>{item.value}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Transparency */}
      <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
        <Reveal variant="fade-up" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-primary-foreground leading-tight mb-8">
            Transparency is our <span className="text-secondary italic">Core Value</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { num: "92%", label: "Program Spending", sub: "Directly reaches beneficiaries" },
              { num: "100%", label: "Tax Exempt", sub: "For Indian Citizens (80G)" },
              { num: "15+", label: "Years of Service", sub: "Consistent community impact" },
            ].map((s, i) => (
              <Reveal key={s.label} variant="fade-up" delay={i * 100}>
                <div className="p-6">
                  <div className="text-4xl font-bold text-secondary mb-2 font-display">{s.num}</div>
                  <p className="text-sm font-bold uppercase tracking-widest opacity-80">{s.label}</p>
                  <p className="text-xs opacity-60 mt-2">{s.sub}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </section>
    </Layout>
  );
};

export default DonatePage;
