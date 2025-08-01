import { User } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full border-2 border-primary mr-3"></div>
            <h1 className="text-2xl font-bold text-primary">InTune</h1>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-accent-foreground hover:text-primary transition-colors">
              Home
            </a>
            <a href="#" className="text-accent-foreground hover:text-primary transition-colors">
              Features
            </a>
            <a href="#" className="text-accent-foreground hover:text-primary transition-colors">
              How It Works
            </a>
            <a href="#" className="text-accent-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </nav>

          {/* User Icon */}
          <div className="w-10 h-10 rounded-full bg-accent/20 border-2 border-accent/30 flex items-center justify-center hover:bg-accent/30 transition-colors cursor-pointer">
            <User className="w-5 h-5 text-accent-foreground" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;