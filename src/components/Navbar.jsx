import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../LanguageContext';
import { ChevronDown } from 'lucide-react';

const Navbar = () => {
  const { lang, setLang, t } = useLanguage();
  const [isLangOpen, setIsLangOpen] = useState(false);

  // Cấu hình các quốc gia tương ứng với ngôn ngữ
  const languages = [
    { code: 'vi', label: 'Tiếng Việt', flagCode: 'vn' },
    { code: 'en', label: 'English', flagCode: 'us' },
    { code: 'ko', label: '한국어', flagCode: 'kr' }
  ];

  const currentLang = languages.find(l => l.code === lang);

  const menuItems = [
    { name: t.nav.intro, href: "#hero" },
    { name: t.nav.philosophy, href: "#philosophy" },
    { name: t.nav.process, href: "#process" },
    { name: t.nav.products, href: "#products" },
    { name: t.nav.recipe, href: "#recipe" },
  ];

  return (
    <motion.nav initial={{ y: -100 }} animate={{ y: 0 }} className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-brand-brown/5 px-6 py-2 shadow-sm">
      <div className="max-w-[1600px] mx-auto flex justify-between items-center h-14">
        
        {/* Cụm Logo */}
        <div className="flex-1 flex items-center">
          <a href="#hero" className="flex items-center gap-3 group">
            <img src="/images/logo.png" alt="Logo" className="h-8 md:h-10 w-auto object-contain" />
            <div className="flex items-center gap-1.5 leading-none">
              <span className="text-brand-brown font-serif font-bold text-lg md:text-xl tracking-tighter">JUNGSUNG</span>
              <span className="text-brand-gold font-serif font-medium text-lg md:text-xl tracking-tighter">Gitden</span>
            </div>
          </a>
        </div>
        
        {/* Menu chính giữa */}
        <div className="hidden lg:flex flex-initial justify-center gap-10 text-[10px] uppercase tracking-[0.2em] font-bold">
          {menuItems.map((item) => (
            <a key={item.name} href={item.href} className="text-brand-brown/60 hover:text-brand-orange transition-colors relative group py-2">
              {item.name}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1.5px] bg-brand-orange transition-all group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Cụm Nút bên phải */}
        <div className="flex-1 flex justify-end items-center gap-6">
          
          {/* NÚT CHỌN NGÔN NGỮ DẠNG QUỐC KỲ TRÒN */}
          <div className="relative">
            <button 
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="flex items-center gap-2 bg-gray-50/50 border border-gray-100 pl-1.5 pr-2.5 py-1.5 rounded-full hover:bg-white transition-all shadow-sm group"
            >
              {/* Ảnh Quốc kỳ của ngôn ngữ hiện tại */}
              <div className="w-6 h-6 rounded-full overflow-hidden border border-gray-200 shadow-inner shrink-0">
                <img 
                  src={`https://flagcdn.com/w80/${currentLang.flagCode}.png`} 
                  alt={currentLang.code}
                  className="w-full h-full object-cover"
                />
              </div>
              <ChevronDown size={14} className={`text-gray-400 transition-transform duration-300 ${isLangOpen ? 'rotate-180' : ''}`} />
            </button>

            <AnimatePresence>
              {isLangOpen && (
                <motion.div 
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 15 }}
                  className="absolute right-0 mt-3 w-44 bg-white rounded-[24px] shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-gray-100 overflow-hidden py-2"
                >
                  {languages.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => { setLang(l.code); setIsLangOpen(false); }}
                      className={`w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-brand-beige/40 transition-colors ${lang === l.code ? 'bg-brand-beige/20' : ''}`}
                    >
                      <div className="w-6 h-6 rounded-full overflow-hidden border border-gray-100 shadow-sm shrink-0">
                        <img 
                          src={`https://flagcdn.com/w80/${l.flagCode}.png`} 
                          alt={l.label}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <span className={`text-[11px] font-bold uppercase tracking-wider ${lang === l.code ? 'text-brand-orange' : 'text-brand-brown/70'}`}>
                        {l.label}
                      </span>
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <a 
            href="https://www.full-jungsung.com/" 
            target="_blank" 
            className="bg-brand-brown text-white px-7 py-2.5 rounded-full text-[9px] font-bold uppercase tracking-widest hover:bg-brand-orange transition-all shadow-md hover:scale-105 active:scale-95"
          >
            {t.nav.shop}
          </a>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;