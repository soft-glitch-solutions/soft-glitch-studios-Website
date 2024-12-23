import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Gamepad, ChartBar, Users } from 'lucide-react';

const Services = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-pixel text-primary mb-6">Our Services</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            From custom game development to business gamification solutions, we bring your ideas to life
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Game Development */}
            <div className="bg-black p-8 rounded-lg">
              <div className="flex items-center mb-6">
                <Gamepad className="text-primary w-12 h-12" />
                <h3 className="font-pixel text-2xl text-white ml-4">Game Development</h3>
              </div>
              <p className="text-gray-400 mb-6">
                We create engaging and immersive games across multiple platforms. From concept to launch,
                our team brings your gaming vision to reality with cutting-edge technology and creative excellence.
              </p>
              <ul className="text-gray-400 space-y-2">
                <li>• Mobile Game Development</li>
                <li>• PC Game Development</li>
                <li>• Console Game Development</li>
                <li>• Web-based Games</li>
              </ul>
            </div>

            {/* B2B Gamification */}
            <div className="bg-black p-8 rounded-lg">
              <div className="flex items-center mb-6">
                <Users className="text-primary w-12 h-12" />
                <h3 className="font-pixel text-2xl text-white ml-4">B2B Gamification</h3>
              </div>
              <p className="text-gray-400 mb-6">
                Transform your business processes and training programs with our gamification solutions.
                Increase engagement, motivation, and productivity through game-like experiences.
              </p>
              <ul className="text-gray-400 space-y-2">
                <li>• Employee Training Programs</li>
                <li>• Customer Engagement Solutions</li>
                <li>• Educational Games</li>
                <li>• Corporate Training Simulations</li>
              </ul>
            </div>
          </div>

          {/* Analytics Section */}
          <div className="mt-12 bg-black p-8 rounded-lg">
            <div className="flex items-center mb-6">
              <ChartBar className="text-primary w-12 h-12" />
              <h3 className="font-pixel text-2xl text-white ml-4">Analytics & Optimization</h3>
            </div>
            <p className="text-gray-400">
              We provide detailed analytics and insights for both games and gamification solutions.
              Track user engagement, measure success metrics, and optimize for better results.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-pixel text-primary mb-6">Ready to Level Up Your Business?</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Contact us to discuss how we can help you create amazing games or implement effective gamification solutions.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center px-6 py-3 bg-primary text-secondary-foreground font-pixel rounded-lg hover:bg-glitch-400 transition-colors"
          >
            Get In Touch
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;