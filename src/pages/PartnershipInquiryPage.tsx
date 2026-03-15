import Layout from "@/components/Layout";
import { Reveal } from "@/components/Reveal";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const PartnershipInquiryPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Partnership Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nOrganization: ${formData.organization}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:khajaniwelfaresociety@gmail.com?subject=${subject}&body=${body}`;
    toast({ title: "Opening your email client", description: "Please send the pre-filled email to complete your inquiry." });
  };

  return (
    <Layout>
      <section className="py-24 lg:py-32 bg-primary text-primary-foreground min-h-[80vh]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <Reveal variant="fade-right">
              <span className="text-accent font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Join the Network</span>
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight">
                Partner With Khajani Welfare Society
              </h1>
              <p className="text-primary-foreground/70 text-lg leading-relaxed mb-6">
                We welcome collaborations with institutions, corporates, foundations, and individuals who wish to contribute towards empowering girls and preserving the cultural strength of Brij.
              </p>
              <p className="text-accent font-display italic text-xl">
                Together, we can create meaningful change.
              </p>
            </Reveal>

            <Reveal variant="fade-left" delay={150}>
              <form onSubmit={handleSubmit} className="bg-card text-foreground p-8 md:p-10 shadow-2xl space-y-5">
                <h3 className="text-xl font-bold text-primary mb-2">Send a Partnership Inquiry</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1 block">Your Name</label>
                    <Input required placeholder="Jane Doe" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                  </div>
                  <div>
                    <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1 block">Organization</label>
                    <Input placeholder="Your organization" value={formData.organization} onChange={(e) => setFormData({ ...formData, organization: e.target.value })} />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1 block">Email Address</label>
                    <Input required type="email" placeholder="you@example.com" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                  </div>
                  <div>
                    <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1 block">Phone Number</label>
                    <Input required type="tel" placeholder="+91 98765 43210" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
                  </div>
                </div>
                <div>
                  <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1 block">Message</label>
                  <Textarea placeholder="How would you like to collaborate?" rows={4} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} />
                </div>
                <Button type="submit" size="lg" className="w-full gap-2">
                  <Send size={16} /> Send Inquiry
                </Button>
              </form>
            </Reveal>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PartnershipInquiryPage;
