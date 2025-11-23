import { Mail, Phone, Instagram, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

export const Home = () => {
  const navigate = useNavigate();

  const socialLinks = [
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:neha.ppmb@gmail.com',
      color: 'bg-red-500 hover:bg-red-600',
    },
    {
      icon: Phone,
      label: 'WhatsApp',
      href: 'https://wa.me/917029807448',
      color: 'bg-green-500 hover:bg-green-600',
    },
    {
      icon: Instagram,
      label: 'Instagram',
      href: 'https://www.instagram.com/neha.ez_10?igsh=cW55ejIwZzV2dDNy',
      color: 'bg-pink-500 hover:bg-pink-600',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/dipanjali-dutta-b04b40336',
      color: 'bg-blue-600 hover:bg-blue-700',
    },
  ];

  return (
    <div data-testid="home-page" className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background with subtle gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 via-sky-50 to-blue-50"></div>
        
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-sky-200/30 rounded-full blur-3xl"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          {/* Profile Image Placeholder */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-full bg-gradient-to-br from-cyan-400 to-sky-500 flex items-center justify-center text-white text-6xl font-bold shadow-2xl">
                DD
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400 to-sky-500 opacity-20 blur-2xl"></div>
            </div>
          </div>

          {/* Name and Title */}
          <h1
            data-testid="hero-name"
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 tracking-tight"
          >
            Dipanjali Dutta
          </h1>
          
          <p
            data-testid="hero-subtitle"
            className="text-xl sm:text-2xl text-gray-600 mb-4 font-medium"
          >
            B.Tech in CSE - Cyber Security
          </p>
          
          <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto">
            Passionate about technology, leadership, and community service. IEEE member, volunteer, and aspiring cybersecurity professional.
          </p>

          {/* Social Media Links */}
          <div className="flex justify-center gap-4 mb-12 flex-wrap">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                data-testid={`social-link-${social.label.toLowerCase()}`}
                className={`${social.color} text-white p-4 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-xl`}
                aria-label={social.label}
              >
                <social.icon size={24} />
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex justify-center gap-4 flex-wrap">
            <Button
              data-testid="view-resume-btn"
              onClick={() => navigate('/resume')}
              className="bg-gradient-to-r from-cyan-500 to-sky-500 hover:from-cyan-600 hover:to-sky-600 text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              View Resume
            </Button>
            <Button
              data-testid="contact-me-btn"
              onClick={() => navigate('/contact')}
              variant="outline"
              className="border-2 border-cyan-500 text-cyan-600 hover:bg-cyan-50 px-8 py-6 text-lg rounded-full transition-all duration-300 hover:scale-105"
            >
              Contact Me
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Highlights */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-cyan-50 to-sky-50 hover:shadow-lg transition-shadow duration-300">
              <div className="text-4xl font-bold text-cyan-600 mb-2">90.2%</div>
              <div className="text-gray-600 font-medium">Class 12 Result</div>
            </div>
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-sky-50 to-blue-50 hover:shadow-lg transition-shadow duration-300">
              <div className="text-4xl font-bold text-sky-600 mb-2">95.6%</div>
              <div className="text-gray-600 font-medium">Class 10 Result</div>
            </div>
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 hover:shadow-lg transition-shadow duration-300">
              <div className="text-4xl font-bold text-blue-600 mb-2">5+</div>
              <div className="text-gray-600 font-medium">Active Memberships</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;