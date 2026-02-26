import { motion } from 'framer-motion';
import { useLanguage } from '../LanguageContext';

const Awards = () => {
  const { t } = useLanguage();
  const certificates = ["HACCP", "ISO 22000", "GLUTEN-FREE", "K-FOOD", "NON-GMO", "HALAL"];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-serif mb-8 text-brand-brown leading-tight">{t.awards.title}</h2>
            <p className="text-gray-500 mb-10 leading-relaxed text-sm md:text-base italic">
              {t.awards.desc}
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-3">
              {certificates.map((cert) => (
                <span key={cert} className="px-4 py-2 bg-brand-beige text-brand-gold text-[9px] font-bold rounded-xl border border-brand-gold/10 uppercase tracking-widest">
                  {cert}
                </span>
              ))}
            </div>
          </div>
          
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="bg-brand-beige p-8 rounded-[50px] border border-brand-brown/5 relative shadow-inner">
            <img src="/src/assets/images/cert-grid.png" className="w-full h-auto" alt="Certificates" />
            <div className="absolute -top-6 -right-4 w-28 h-28 bg-brand-brown rounded-full flex items-center justify-center text-white text-center p-5 shadow-2xl border-4 border-white rotate-12 transition-transform hover:rotate-0 duration-500">
               <p className="text-[9px] font-bold uppercase leading-tight italic text-brand-gold">{t.awards.badge}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Awards;