import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-footer-bg text-primary-foreground border-t border-border/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-16">
          <div className="lg:col-span-2 space-y-8">
            <div className="flex items-center gap-3">
              <img src={logo} alt="Khajani Welfare Society" className="h-12 object-contain" />
            </div>
            <p className="text-sm opacity-70 leading-relaxed max-w-sm font-serif italic">
              A chronicle of change, a legacy of welfare. Documenting our journey towards a sustainable and healthy Braj since 2007.
            </p>
            <div className="pt-4 border-t border-primary-foreground/10 space-y-2">
              <p className="text-xs uppercase tracking-wide opacity-50">
                64/128, Gali Sales Tax, Dampier Nagar,<br />
                Mathura – 281001, Uttar Pradesh
              </p>
              <div className="flex flex-col gap-1 text-xs opacity-70">
                <a href="tel:+918373990809" className="hover:text-accent transition">📞 +91-8373990809</a>
                <a href="tel:+919868518738" className="hover:text-accent transition">📞 +91-9868518738</a>
                <a href="mailto:info@khajaniwelfaresociety.com" className="hover:text-accent transition">✉️ info@khajaniwelfaresociety.com</a>
                <a href="mailto:khajaniwelfaresociety@gmail.com" className="hover:text-accent transition">✉️ khajaniwelfaresociety@gmail.com</a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-[10px] font-bold tracking-[0.2em] uppercase mb-8 text-accent">Explore</h3>
            <ul className="space-y-4">
              <li><Link className="text-sm opacity-70 hover:text-accent transition" to="/about">About Us</Link></li>
              <li><Link className="text-sm opacity-70 hover:text-accent transition" to="/campaigns">Campaigns</Link></li>
              <li><Link className="text-sm opacity-70 hover:text-accent transition" to="/collaborations">Collaborations</Link></li>
              <li><Link className="text-sm opacity-70 hover:text-accent transition" to="/media">Media</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-[10px] font-bold tracking-[0.2em] uppercase mb-8 text-accent">Projects</h3>
            <ul className="space-y-4">
              <li><Link className="text-sm opacity-70 hover:text-accent transition" to="/projects/brij-surabhi">Brij-Surabhi</Link></li>
              <li><Link className="text-sm opacity-70 hover:text-accent transition" to="/projects/brij-hunar">Brij-Hunar</Link></li>
              <li><Link className="text-sm opacity-70 hover:text-accent transition" to="/donate">Donate</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-[10px] font-bold tracking-[0.2em] uppercase mb-8 text-accent">Connect</h3>
            <ul className="space-y-4">
              <li><a className="text-sm opacity-70 hover:text-accent transition" href="https://www.facebook.com/KhajaniWelfareSociety" target="_blank" rel="noopener noreferrer">Facebook</a></li>
              <li><a className="text-sm opacity-70 hover:text-accent transition" href="https://www.instagram.com/khajaniwelfaresociety/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
              <li><a className="text-sm opacity-70 hover:text-accent transition" href="https://x.com/Khajani_society" target="_blank" rel="noopener noreferrer">X (Twitter)</a></li>
              <li><a className="text-sm opacity-70 hover:text-accent transition" href="https://www.linkedin.com/company/khajani-welfare-society/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] opacity-50 font-bold tracking-widest uppercase">
            © 2024 Khajani Welfare Society • Editorial Department
          </p>
          <div className="flex space-x-8">
            <a className="text-[10px] opacity-50 hover:opacity-100 font-bold tracking-widest uppercase transition" href="#">Privacy</a>
            <a className="text-[10px] opacity-50 hover:opacity-100 font-bold tracking-widest uppercase transition" href="#">Accessibility</a>
            <a className="text-[10px] opacity-50 hover:opacity-100 font-bold tracking-widest uppercase transition" href="#">Ethics Code</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
