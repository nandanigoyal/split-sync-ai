import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* InTune Section */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold mb-4">InTune</h3>
            <p className="text-primary-foreground/80 mb-6">
              Your vibe is the key to your perfect co-living match. In sync, In vibe, In tune.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-primary-foreground/20 rounded-lg flex items-center justify-center hover:bg-primary-foreground/30 transition-colors cursor-pointer">
                <Github className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 bg-primary-foreground/20 rounded-lg flex items-center justify-center hover:bg-primary-foreground/30 transition-colors cursor-pointer">
                <Linkedin className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 bg-primary-foreground/20 rounded-lg flex items-center justify-center hover:bg-primary-foreground/30 transition-colors cursor-pointer">
                <Mail className="w-5 h-5" />
              </div>
            </div>
          </div>

          {/* Product Section */}
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-3 text-primary-foreground/80">
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">How It Works</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">FAQs</a></li>
            </ul>
          </div>

          {/* Legal Section */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-3 text-primary-foreground/80">
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Cookie Policy</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">GDPR</a></li>
            </ul>
          </div>

          {/* Support Section */}
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-3 text-primary-foreground/80">
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Safety Guidelines</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Community</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-primary-foreground/80 text-sm">
            © 2024 InTune. All rights reserved.
          </p>
          <div className="flex items-center text-primary-foreground/80 text-sm mt-4 md:mt-0">
            <span>Built for SheBuilds Hackathon by Team Naruto</span>
            <Heart className="w-4 h-4 mx-2 text-red-400" />
            <span>💛</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;