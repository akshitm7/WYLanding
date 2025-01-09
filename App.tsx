import React, { useState, useEffect } from 'react';
import { 
  Compass, 
  Info, 
  LogIn, 
  Instagram, 
  Twitter, 
  Facebook, 
  Youtube,
  Search,
  Users,
  MessageCircle
} from 'lucide-react';

function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const renderContent = () => {
    switch(activeTab) {
      case 'home':
        return (
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold">Connect. Share. Experience.</h2>
              <p className="text-xl">Join millions creating their digital legacy</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
                <Users className="w-12 h-12 mb-4 text-purple-400" />
                <h3 className="text-xl font-semibold mb-2">Global Community</h3>
                <p>Connect with millions of users worldwide sharing their moments</p>
              </div>
              <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
                <MessageCircle className="w-12 h-12 mb-4 text-purple-400" />
                <h3 className="text-xl font-semibold mb-2">Real Conversations</h3>
                <p>Engage in meaningful discussions with like-minded individuals</p>
              </div>
              <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
                <Search className="w-12 h-12 mb-4 text-purple-400" />
                <h3 className="text-xl font-semibold mb-2">Discover More</h3>
                <p>Explore trending content tailored to your interests</p>
              </div>
            </div>
          </div>
        );
      case 'explore':
        return (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="bg-white/10 rounded-xl overflow-hidden backdrop-blur-sm">
                <img 
                  src={`https://source.unsplash.com/random/400x300?wine&sig=${item}`}
                  alt="Explore content"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">Trending Story #{item}</h3>
                  <p className="text-sm opacity-80">Discover amazing stories from our community</p>
                </div>
              </div>
            ))}
          </div>
        );
      case 'about':
        return (
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl font-bold mb-6">About WineYard</h2>
            <p className="text-lg">WineYard is revolutionizing social media by creating a space where authenticity meets creativity. Unlike traditional platforms, we prioritize meaningful connections and genuine content sharing.</p>
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
                <p>To create a social platform that encourages authentic connections and meaningful sharing</p>
              </div>
              <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
                <p>Becoming the world's most trusted and engaging social media platform</p>
              </div>
            </div>
          </div>
        );
      case 'login':
        return (
          <div className="max-w-md mx-auto bg-white/10 p-8 rounded-xl backdrop-blur-sm">
            <h2 className="text-2xl font-bold mb-6 text-center">Welcome Back</h2>
            <form className="space-y-4">
              <div>
                <label className="block mb-2">Email</label>
                <input type="email" className="w-full p-2 rounded bg-white/20 backdrop-blur-sm" />
              </div>
              <div>
                <label className="block mb-2">Password</label>
                <input type="password" className="w-full p-2 rounded bg-white/20 backdrop-blur-sm" />
              </div>
              <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg transition-colors">
                Sign In
              </button>
              <p className="text-center mt-4">
                New to WineYard? <a href="#" className="text-purple-400 hover:text-purple-300">Sign up now</a>
              </p>
            </form>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-purple-900 text-white">
      <nav className="border-b border-white/10 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <img 
                src="/logo.png" 
                alt="WineYard Logo" 
                className="h-8 w-8 object-contain"
              />
              <span className="ml-2 text-xl font-bold">WineYard</span>
            </div>
            <div className="flex space-x-8">
              <button 
                onClick={() => setActiveTab('home')}
                className={`flex items-center space-x-1 ${activeTab === 'home' ? 'text-purple-400' : 'hover:text-purple-400'}`}
              >
                <span>Home</span>
              </button>
              <button 
                onClick={() => setActiveTab('explore')}
                className={`flex items-center space-x-1 ${activeTab === 'explore' ? 'text-purple-400' : 'hover:text-purple-400'}`}
              >
                <Compass className="h-4 w-4" />
                <span>Explore</span>
              </button>
              <button 
                onClick={() => setActiveTab('about')}
                className={`flex items-center space-x-1 ${activeTab === 'about' ? 'text-purple-400' : 'hover:text-purple-400'}`}
              >
                <Info className="h-4 w-4" />
                <span>About</span>
              </button>
              <button 
                onClick={() => setActiveTab('login')}
                className={`flex items-center space-x-1 ${activeTab === 'login' ? 'text-purple-400' : 'hover:text-purple-400'}`}
              >
                <LogIn className="h-4 w-4" />
                <span>Login</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className={`transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
            Welcome to the Social Revolution
          </h1>
          {renderContent()}
        </div>
      </main>

      <footer className="border-t border-white/10 py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-gray-400 hover:text-purple-400">
              <Instagram className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-purple-400">
              <Twitter className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-purple-400">
              <Facebook className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-purple-400">
              <Youtube className="h-6 w-6" />
            </a>
          </div>
          <p className="text-center text-gray-400 mt-4">© 2024 WineYard. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
