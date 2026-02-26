import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const SocialProof = () => {
  const { t } = useLanguage();

  const testimonials = [
    { name: t.social.n1, role: t.social.r1, content: t.social.c1, img: "/images/avatar-1.jpg" },
    { name: t.social.n2, role: t.social.r2, content: t.social.c2, img: "/images/avatar-2.jpg" },
    { name: t.social.n3, role: t.social.r3, content: t.social.c3, img: "/images/avatar-3.jpg" }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-serif mb-16 text-brand-brown">{t.social.title}</h2>
        
        <div className="grid md:grid-cols-3 gap-8 text-left">
          {testimonials.map((item, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.2 }} viewport={{ once: true }} className="bg-brand-beige p-8 rounded-[40px] relative group hover:bg-brand-brown hover:text-white transition-all duration-500 shadow-sm">
              <Quote className="absolute top-6 right-8 text-brand-gold opacity-20 w-10 h-10" />
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => <Star key={i} size={12} className="fill-brand-gold text-brand-gold" />)}
              </div>
              <p className="text-sm italic leading-[1.8] mb-8 min-h-[80px]">"{item.content}"</p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-200 border-2 border-white shadow-sm">
                  <img src={item.img} className="w-full h-full object-cover" alt={item.name} />
                </div>
                <div>
                  <p className="font-bold text-xs uppercase tracking-wider">{item.name}</p>
                  <p className="text-[9px] text-brand-gold uppercase tracking-[0.2em] font-bold">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;