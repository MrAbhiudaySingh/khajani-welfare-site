import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About Us" },
    { to: "/projects", label: "Projects" },
    { to: "/campaigns", label: "Campaigns" },
    { to: "/collaborations", label: "Collaborations" },
    { to: "/media", label: "Media" },
    { to: "/volunteer", label: "Join Us" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-md shadow-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <Link to="/" className="flex-shrink-0 flex items-center gap-3 group cursor-pointer">
            <img src={logo} alt="Khajani Welfare Society" className="h-16 object-contain group-hover:scale-105 transition-transform" />
          </Link>

          <nav className="hidden lg:flex space-x-6 items-center h-full">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-xs font-bold uppercase tracking-widest transition-colors ${
                  (link.to === "/" ? location.pathname === "/" : location.pathname.startsWith(link.to))
                    ? "text-accent border-b-2 border-accent pb-1"
                    : "text-foreground hover:text-accent"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Link
              to="/donate"
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 rounded-full font-bold shadow-lg transition transform hover:-translate-y-0.5 text-sm tracking-wide"
            >
              Donate Now
            </Link>
            <button
              className="lg:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="text-foreground" size={24} /> : <Menu className="text-foreground" size={24} />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden pb-6 border-t border-border">
            <div className="flex flex-col space-y-4 pt-4">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-sm font-bold uppercase tracking-widest transition-colors px-2 py-1 ${
                    (link.to === "/" ? location.pathname === "/" : location.pathname.startsWith(link.to))
                      ? "text-accent" : "text-foreground hover:text-accent"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
