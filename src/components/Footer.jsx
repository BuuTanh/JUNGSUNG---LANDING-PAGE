import { useLanguage } from '../LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-brand-beige py-20 border-t border-brand-brown/5">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-16">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-serif font-bold mb-2 text-brand-brown tracking-tight">JUNGSUNG <span className="text-brand-gold">Gitden</span></h2>
            <p className="text-[9px] uppercase tracking-[0.4em] text-gray-400 font-medium">{t.footer.excellence}</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 text-[9px] font-bold uppercase tracking-[0.2em] text-gray-500">
            <span className="hover:text-brand-orange cursor-default transition-colors">Seoul</span>
            <span className="hover:text-brand-orange cursor-default transition-colors">Tokyo</span>
            <span className="hover:text-brand-orange cursor-default transition-colors">New York</span>
            <span className="hover:text-brand-orange cursor-default transition-colors text-brand-orange">Ho Chi Minh</span>
          </div>
        </div>

        <div className="pt-10 border-t border-brand-brown/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[9px] text-gray-400 uppercase tracking-widest font-bold">
          <p>© 2024 Jungsung Gitden. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-brand-brown transition-colors">{t.footer.policy}</a>
            <a href="#" className="hover:text-brand-brown transition-colors">{t.footer.terms}</a>
            <a href="#" className="hover:text-brand-brown transition-colors">{t.footer.partner}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;