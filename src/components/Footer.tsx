import { Facebook, Instagram, Twitter, Linkedin, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-secondary py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-pixel text-primary mb-4">Soft Glitch Studio</h3>
            <p className="text-gray-400">Creating immersive gaming experiences with a touch of glitch magic</p>
          </div>
          
          <div>
            <h3 className="font-pixel text-primary mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-primary">Home</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-primary">Services</Link></li>
              <li><a href="#games" className="text-gray-400 hover:text-primary">Games</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-primary">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-pixel text-primary mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary">
                <Twitter size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary">
                <Linkedin size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary">
                <Youtube size={24} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} Soft Glitch Studio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;