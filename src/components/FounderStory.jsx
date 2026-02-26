import { motion } from 'framer-motion';
import { useLanguage } from '../LanguageContext';

const FounderStory = () => {
  const { t } = useLanguage();

  return (
    <section id="founder" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:col-span-7 relative">
            <div className="aspect-[3/2] bg-brand-beige rounded-[60px] overflow-hidden shadow-2xl border-8 border-white">
              <img src="/images/founder.jpg" className="w-full h-full object-cover" alt="Founder" />
            </div>

            <div className="absolute -bottom-8 right-8 bg-brand-brown p-6 md:p-8 rounded-[40px] text-white shadow-2xl flex gap-6 md:gap-10 border-4 border-white">
              <div className="text-center">
                <p className="text-xl md:text-2xl font-serif text-brand-gold">100%</p>
                <p className="text-[9px] uppercase tracking-widest opacity-60">Natural</p>
              </div>
              <div className="w-[1px] h-10 bg-white/10"></div>
              <div className="text-center">
                <p className="text-xl md:text-2xl font-serif text-brand-gold">0%</p>
                <p className="text-[9px] uppercase tracking-widest opacity-60">Additives</p>
              </div>
              <div className="w-[1px] h-10 bg-white/10"></div>
              <div className="text-center">
                <p className="text-xl md:text-2xl font-serif uppercase text-brand-gold">HACCP</p>
                <p className="text-[9px] uppercase tracking-widest opacity-60">Safety</p>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="lg:col-span-5">
            <span className="text-brand-orange font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block">{t.founder.tag}</span>
            {/* Tinh chỉnh size chữ tiêu đề xuống 4xl để tiếng Việt nhìn gọn hơn */}
            <h2 className="text-3xl md:text-4xl font-serif mb-8 leading-[1.3] text-brand-brown">
              {t.founder.title1} <br /> <span className="italic text-brand-gold font-light text-5xl md:text-6xl">{t.founder.title2}</span>
            </h2>
            
            <div className="relative mb-8">
              <p className="text-gray-600 italic border-l-4 border-brand-orange pl-6 py-2 leading-relaxed text-base">
                "{t.founder.quote}"
              </p>
            </div>

            <p className="text-gray-500 mb-10 leading-relaxed text-sm">
              {t.founder.desc}
            </p>
            
            <div className="pt-6 border-t border-brand-brown/5">
              <p className="font-serif text-2xl text-brand-brown">In-kyung Kim</p>
              <p className="text-[10px] uppercase tracking-[0.3em] text-brand-gold font-bold">Founder & CEO</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FounderStory;