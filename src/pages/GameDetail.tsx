import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const games = {
  'food-slicer': {
    title: 'Food Slicer',
    description: 'A fast-paced game about spinning food to cut it into perfect slices. Test your precision and timing as you slice through various foods!',
    image: '/lovable-uploads/9d9020be-e867-4fa5-86b4-21fbb9b1aedc.png',
    features: [
      'Multiple food types to slice',
      'Challenging spin mechanics',
      'Score-based gameplay',
      'Progressive difficulty'
    ]
  },
  'alt-earth': {
    title: 'Alt Earth',
    description: 'A Megaman-inspired platformer set in an alternate Earth. Jump, shoot, and dash your way through challenging levels!',
    image: '/placeholder.svg',
    features: [
      'Classic platformer mechanics',
      'Multiple weapons and abilities',
      'Challenging boss battles',
      'Unique level designs'
    ]
  },
  'eish-potholes': {
    title: 'Eish Potholes',
    description: 'Take on the role of a road maintenance crew as you repair roads and manage traffic flow. Keep the city moving!',
    image: '/placeholder.svg',
    features: [
      'Strategic road repair gameplay',
      'Traffic management mechanics',
      'Multiple road types',
      'Time management challenges'
    ]
  }
};

const GameDetail = () => {
  const { id } = useParams();
  const game = games[id as keyof typeof games];

  if (!game) return <div>Game not found</div>;

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <div className="container px-4 pt-24">
        <Link to="/" className="inline-flex items-center text-primary hover:text-glitch-400 mb-8">
          <ArrowLeft className="mr-2" />
          Back to Games
        </Link>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h1 className="text-4xl font-pixel text-white">{game.title}</h1>
            <p className="text-gray-400 text-lg">{game.description}</p>
            
            <div className="space-y-4">
              <h2 className="text-2xl font-pixel text-primary">Features</h2>
              <ul className="space-y-2">
                {game.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src={game.image} 
              alt={game.title}
              className="rounded-lg shadow-xl w-full hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameDetail;