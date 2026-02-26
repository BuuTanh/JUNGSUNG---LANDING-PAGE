import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Soup, UtensilsCrossed, Flame, MoveRight } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const Recipe = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState('soup');

  const recipes = [
    { id: 'soup', icon: <Soup />, label: t.recipe.soup, productImg: '/images/product-4.png', dishImg: '/images/dish-soup.jpg', desc: t.recipe.r1 },
    { id: 'stir', icon: <UtensilsCrossed />, label: t.recipe.stir, productImg: '/images/product-1.png', dishImg: '/images/dish-stir.jpg', desc: t.recipe.r2 },
    { id: 'grill', icon: <Flame />, label: t.recipe.grill, productImg: '/images/product-3.png', dishImg: '/images/dish-grill.jpg', desc: t.recipe.r3 }
  ];

  const activeRecipe = recipes.find(r => r.id === activeTab);

  return (
    <section id="recipe" className="py-24 bg-brand-beige/50">
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-3xl md:text-4xl font-serif text-center mb-16 text-brand-brown">{t.recipe.title}</h2>
        
        <div className="flex justify-center gap-4 mb-16 overflow-x-auto no-scrollbar">
          {recipes.map((tab) => (
            <button key={tab.id} onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-8 py-4 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all ${activeTab === tab.id ? 'bg-brand-brown text-white shadow-xl scale-105' : 'bg-white text-gray-400 hover:text-brand-brown'}`}
            >
              {tab.icon} {tab.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div key={activeTab} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="bg-white rounded-[50px] p-8 md:p-12 shadow-sm border border-brand-gold/10">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
              <div className="flex-1 text-center lg:text-left">
                <span className="text-brand-orange font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block opacity-60">{t.recipe.tag}</span>
                <h3 className="text-2xl md:text-3xl font-serif mb-10 text-brand-brown leading-relaxed">{activeRecipe.desc}</h3>
                <div className="inline-flex items-center gap-4 p-3 bg-brand-beige/30 rounded-2xl">
                  <div className="w-12 h-12 bg-white rounded-xl p-1 shadow-sm">
                    <img src={activeRecipe.productImg} className="w-full h-full object-contain" alt="Small" />
                  </div>
                  <p className="text-[10px] text-gray-400 uppercase tracking-widest leading-tight text-left">{t.recipe.detail}</p>
                </div>
              </div>

              <div className="flex-1 flex items-center justify-center gap-6 md:gap-10">
                <div className="relative w-36 h-36 md:w-52 md:h-52 rounded-full border-[10px] border-white shadow-2xl overflow-hidden shrink-0">
                  <img src={activeRecipe.productImg} className="absolute inset-0 w-full h-full object-cover scale-[1.5]" alt="Zoomed" />
                </div>
                <MoveRight className="text-brand-gold opacity-30" />
                <div className="relative w-52 h-64 md:w-80 md:h-[400px] bg-gray-100 rounded-[60px] overflow-hidden border-[10px] border-white shadow-2xl shrink-0 rotate-2">
                  <img src={activeRecipe.dishImg} className="absolute inset-0 w-full h-full object-cover" alt="Dish" />
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Recipe;