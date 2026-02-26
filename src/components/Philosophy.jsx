import { motion } from 'framer-motion';
import { Leaf, Heart, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const Philosophy = () => {
  const { t } = useLanguage();

  const coreValues = [
    { icon: <Leaf className="w-8 h-8" />, title: t.philosophy.p1_t, desc: t.philosophy.p1_d, color: "bg-green-50 text-green-700" },
    { icon: <Heart className="w-8 h-8" />, title: t.philosophy.p2_t, desc: t.philosophy.p2_d, color: "bg-red-50 text-red-700" },
    { icon: <ShieldCheck className="w-8 h-8" />, title: t.philosophy.p3_t, desc: t.philosophy.p3_d, color: "bg-blue-50 text-blue-700" }
  ];

  return (
    <section id="philosophy" className="py-24 bg-brand-beige/30">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-serif mb-4 text-brand-brown">{t.philosophy.title}</h2>
          <div className="w-20 h-1 bg-brand-gold mx-auto mb-6"></div>
          <p className="text-gray-600 italic text-sm md:text-base leading-relaxed">{t.philosophy.desc}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {coreValues.map((value, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.2 }} viewport={{ once: true }} className="bg-white p-10 rounded-[30px] shadow-sm hover:shadow-xl transition-all border border-brand-gold/10 group text-center">
              <div className={`w-16 h-16 ${value.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                {value.icon}
              </div>
              <h3 className="text-xl md:text-2xl font-serif mb-4 text-brand-brown">{value.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{value.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Philosophy;