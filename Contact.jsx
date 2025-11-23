import { Mail, Phone, MapPin, Instagram, Linkedin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'neha.ppmb@gmail.com',
      href: 'mailto:neha.ppmb@gmail.com',
      color: 'red',
    },
    {
      icon: Phone,
      label: 'Phone / WhatsApp',
      value: '+91 7029807448',
      href: 'https://wa.me/917029807448',
      color: 'green',
    },
    {
      icon: Instagram,
      label: 'Instagram',
      value: '@neha.ez_10',
      href: 'https://www.instagram.com/neha.ez_10?igsh=cW55ejIwZzV2dDNy',
      color: 'pink',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Dipanjali Dutta',
      href: 'https://www.linkedin.com/in/dipanjali-dutta-b04b40336',
      color: 'blue',
    },
  ];

  const colorClasses = {
    red: 'bg-red-500 hover:bg-red-600',
    green: 'bg-green-500 hover:bg-green-600',
    pink: 'bg-pink-500 hover:bg-pink-600',
    blue: 'bg-blue-600 hover:bg-blue-700',
  };

  return (
    <div data-testid="contact-page" className="page-container bg-gradient-to-br from-gray-50 to-white">
      <div className="section-container">
        <h1 className="section-title text-center" data-testid="contact-title">
          Get In Touch
        </h1>

        <div className="max-w-5xl mx-auto">
          <p className="text-center text-xl text-gray-600 mb-12">
            Feel free to reach out for collaborations, tutoring, or just a friendly chat!
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Contact Information */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
              {contactInfo.map((contact, index) => (
                <a
                  key={index}
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid={`contact-${contact.label.toLowerCase().replace(/\s+/g, '-')}`}
                  className="card flex items-center gap-4 hover:shadow-xl transition-all duration-300 group"
                >
                  <div className={`${colorClasses[contact.color]} text-white p-4 rounded-xl group-hover:scale-110 transition-transform duration-300`}>
                    <contact.icon size={28} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">{contact.label}</p>
                    <p className="text-lg font-semibold text-gray-900">{contact.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Address & Map */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Location</h2>
              <div className="card">
                <div className="flex items-start gap-4 mb-6">
                  <div className="bg-cyan-500 text-white p-3 rounded-xl">
                    <MapPin size={28} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium mb-1">Address</p>
                    <p className="text-lg font-semibold text-gray-900">
                      Destination Apartment<br />
                      Konnagar 712235<br />
                      West Bengal, India
                    </p>
                  </div>
                </div>
                
                {/* Google Map Embed */}
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <iframe
                    title="Location Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58986.17099288889!2d88.31498247910156!3d22.68628500000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89e8b6d1c8f91%3A0x7e8c8e8b6d1c8f91!2sKonnagar%2C%20West%20Bengal%20712235!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media Links Section */}
          <div className="card bg-gradient-to-br from-cyan-50 to-sky-50">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Connect on Social Media</h2>
            <div className="flex justify-center gap-6 flex-wrap">
              {contactInfo.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid={`social-${social.label.toLowerCase().replace(/\s+/g, '-')}`}
                  className={`${colorClasses[social.color]} text-white p-5 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-xl`}
                  aria-label={social.label}
                >
                  <social.icon size={28} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Message CTA */}
          <div className="mt-12 text-center">
            <div className="card bg-gradient-to-r from-cyan-500 to-sky-500 text-white">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Send size={32} />
                <h3 className="text-2xl font-bold">Send Me a Message</h3>
              </div>
              <p className="text-cyan-50 text-lg mb-6">
                Have a question or want to discuss something? Drop me an email or connect via WhatsApp!
              </p>
              <div className="flex justify-center gap-4 flex-wrap">
                <Button
                  data-testid="send-email-btn"
                  onClick={() => window.open('mailto:neha.ppmb@gmail.com', '_blank')}
                  className="bg-white text-cyan-600 hover:bg-cyan-50 px-8 py-6 text-lg rounded-full font-semibold transition-all duration-300"
                >
                  Send Email
                </Button>
                <Button
                  data-testid="send-whatsapp-btn"
                  onClick={() => window.open('https://wa.me/917029807448', '_blank')}
                  className="bg-white text-green-600 hover:bg-green-50 px-8 py-6 text-lg rounded-full font-semibold transition-all duration-300"
                >
                  WhatsApp Me
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;